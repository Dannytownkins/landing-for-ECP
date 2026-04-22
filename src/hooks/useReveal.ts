/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useEffect } from 'react';

/**
 * Adds `.is-visible` to any element with a `[data-reveal]` attribute
 * once it enters the viewport. Uses a single shared IntersectionObserver.
 * Respects prefers-reduced-motion by revealing everything immediately.
 *
 * Hardened against late-arriving nodes — any `[data-reveal]` element that
 * mounts AFTER the hook ran (e.g. code-split sections, Vite HMR swaps,
 * lazy-rendered children) is picked up by a MutationObserver and handed
 * to the IntersectionObserver. Without this, HMR could leave elements
 * stuck at `opacity: 0` because the original querySelectorAll only saw
 * the DOM at mount time.
 */
export function useReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const revealAll = (root: ParentNode = document) => {
      root.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
        el.classList.add('is-visible');
      });
    };

    if (prefersReduced) {
      revealAll();
      // Still watch for late additions so reduced-motion users see them too.
      const mo = new MutationObserver((mutations) => {
        for (const m of mutations) {
          m.addedNodes.forEach((node) => {
            if (node instanceof HTMLElement) {
              if (node.hasAttribute?.('data-reveal')) node.classList.add('is-visible');
              revealAll(node);
            }
          });
        }
      });
      mo.observe(document.body, { childList: true, subtree: true });
      return () => mo.disconnect();
    }

    const observed = new WeakSet<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    );

    const observeAll = (root: ParentNode = document) => {
      root.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
        if (observed.has(el) || el.classList.contains('is-visible')) return;
        observed.add(el);
        io.observe(el);
      });
    };

    observeAll();

    // Catch anything React mounts after the first paint — new sections,
    // conditionally-rendered panels, or HMR replacements.
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.hasAttribute?.('data-reveal') && !observed.has(node)) {
            observed.add(node);
            io.observe(node);
          }
          observeAll(node);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
