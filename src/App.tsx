/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState } from 'react';
import awdmodsHero from './assets/awdmods-hero.webp';
import awdmodsMobileSection1 from './assets/awdmods-mobile-section1.webp';
import { useReveal } from './hooks/useReveal';
import { LiveReadout } from './components/LiveReadout';

type CalloutId = '01' | '02' | '03';

type CalloutColor = 'orange' | 'phosphor' | 'brass';

const AUDIT_CALLOUTS: Record<CalloutId, {
  eyebrow: string;
  label: string;
  color: CalloutColor;
  headline: string;
  body: string;
  cluster: string;
  cite: string;
}> = {
  '01': {
    eyebrow: 'Ethics Flag',
    label: 'Shipping qualifier vague',
    color: 'orange',
    headline: 'Free-shipping claim fails pricing transparency',
    body: '“FREE SHIPPING on most orders $75+” uses a soft qualifier without disclosing which orders don’t qualify. Under FTC § 5, material pricing conditions must be clear and conspicuous. “Most” is a standing enforcement flag — identical language has triggered FTC action and NAD complaints.',
    cluster: 'Pricing & Compliance',
    cite: 'FTC § 5 · NAD 2023',
  },
  '02': {
    eyebrow: 'Conversion',
    label: 'Grid mixes category + model',
    color: 'phosphor',
    headline: 'Tile grid collapses two hierarchies into one row',
    body: 'The category tiles mix vehicle models (“Ford Focus RS / ST”) with product categories (“Performance”) at the same visual level. Users have to pattern-match to decide which cells are vehicles and which are departments — Baymard flags this as a measurable task-abandonment predictor on mobile browse.',
    cluster: 'Browse & Navigation',
    cite: 'Baymard · PLP 2024',
  },
  '03': {
    eyebrow: 'Accessibility',
    label: 'CTA contrast below AA',
    color: 'brass',
    headline: 'SHOP buttons fail WCAG 2.1 AA contrast',
    body: 'The orange CTAs on the dark tile backgrounds measure below the 4.5:1 contrast ratio required for normal-weight button text under WCAG 2.1 AA. Accessibility failures on purchase CTAs are also a California civil-rights exposure under Unruh Act case law — not just a design problem.',
    cluster: 'Accessibility',
    cite: 'WCAG 2.1 AA · Unruh Act',
  },
};

// Per-color token map so callouts render consistently without string concat
// gymnastics on Tailwind class names.
const CALLOUT_COLOR_CLASSES: Record<CalloutColor, {
  borderL: string;
  border: string;
  text: string;
  textDim: string;
  bg: string;
  shadowRgb: string;
}> = {
  orange: {
    borderL: 'border-l-safety-orange',
    border:  'border-safety-orange/60',
    text:    'text-safety-orange',
    textDim: 'text-safety-orange/60',
    bg:      'bg-safety-orange',
    shadowRgb: '255,69,0',
  },
  brass: {
    borderL: 'border-l-brass',
    border:  'border-brass/60',
    text:    'text-brass',
    textDim: 'text-brass/60',
    bg:      'bg-brass',
    shadowRgb: '212,175,55',
  },
  phosphor: {
    borderL: 'border-l-intel-green',
    border:  'border-intel-green/60',
    text:    'text-intel-green',
    textDim: 'text-intel-green/60',
    bg:      'bg-intel-green',
    // sRGB of --color-intel-green (oklch 0.78 0.17 145). Tailwind arbitrary
    // shadow values can't reference CSS vars inline, so this literal rgb is
    // the one place the token has to be mirrored by hand — keep in sync.
    shadowRgb: '115,214,96',
  },
};

function CalloutCard({
  id,
  arrowSide,
  active,
  onEnter,
  onLeave,
  delay = 0,
}: {
  id: CalloutId;
  arrowSide: 'left' | 'right' | 'none';
  active: boolean;
  onEnter: () => void;
  onLeave: () => void;
  delay?: number;
}) {
  const data = AUDIT_CALLOUTS[id];
  const tokens = CALLOUT_COLOR_CLASSES[data.color];
  const arrowColor = active ? tokens.text : `${tokens.text}/70`;

  const card = (
    <div
      className={`flex-1 border-l-4 bg-matte-black/95 border border-monitor-border p-2 transition-all duration-200 cursor-default ${tokens.borderL} ${
        active
          ? `shadow-[4px_4px_0px_rgba(${tokens.shadowRgb},0.55)] ${tokens.border} translate-x-[-1px] translate-y-[-1px]`
          : `shadow-[3px_3px_0px_rgba(${tokens.shadowRgb},0.25)]`
      }`}
    >
      <div className="flex items-center gap-1.5 mb-0.5">
        <span className={`text-[8px] font-black tracking-[0.15em] ${tokens.textDim}`}>{id}</span>
        <span className={`block text-[8px] opacity-80 font-bold uppercase tracking-widest leading-none ${tokens.text}`}>
          {data.eyebrow}
        </span>
      </div>
      <span className="text-[10px] font-black uppercase text-cream tracking-tighter leading-tight block">
        {data.label}
      </span>
    </div>
  );

  const rightArrow = (
    <svg className={`w-7 h-5 flex-shrink-0 transition-colors duration-200 ${arrowColor}`} viewBox="0 0 100 50" fill="none" preserveAspectRatio="none">
      <path d="M0,25 L80,25" stroke="currentColor" strokeWidth="1.4" strokeDasharray="4 3" />
      <path d="M72,17 L92,25 L72,33" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const leftArrow = (
    <svg className={`w-7 h-5 flex-shrink-0 transition-colors duration-200 ${arrowColor}`} viewBox="0 0 100 50" fill="none" preserveAspectRatio="none">
      <path d="M20,25 L100,25" stroke="currentColor" strokeWidth="1.4" strokeDasharray="4 3" />
      <path d="M28,17 L8,25 L28,33" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <div
      role="button"
      aria-pressed={active}
      aria-label={`Finding ${id} — ${data.eyebrow}: ${data.label}`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      onClick={() => (active ? onLeave() : onEnter())}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          active ? onLeave() : onEnter();
        }
      }}
      tabIndex={0}
      className={`callout-enter flex items-center gap-1.5 cursor-pointer group/callout ${active ? 'is-active' : ''}`}
    >
      {arrowSide === 'left' && leftArrow}
      {card}
      {arrowSide === 'right' && rightArrow}
    </div>
  );
}

function FindingBody({ activeId }: { activeId: CalloutId | null }) {
  const isActive = activeId !== null;
  const content = isActive ? AUDIT_CALLOUTS[activeId] : null;
  const eyebrow = isActive ? `FINDING / ${activeId}` : 'FINDING / SUMMARY';
  const headline = isActive
    ? content!.headline
    : 'Three findings across three law domains on a single mobile page';
  const cluster = isActive ? content!.cluster : 'Pricing · Browse · Accessibility';
  const cite = isActive ? content!.cite : 'FTC · Baymard · WCAG 2.1';

  return (
    <div className="relative border-t border-monitor-border/60 pt-4 lg:pt-5 min-h-[260px]">
      <div className="text-[9px] font-black uppercase tracking-chip text-cream/40 mb-2 transition-colors duration-200">
        {eyebrow}
      </div>
      <div key={activeId ?? 'default'} className="finding-swap">
        <h3 className="font-brutalist text-xl sm:text-2xl md:text-[1.6rem] xl:text-[1.8rem] mb-4 uppercase leading-[1.05]">
          {headline}
        </h3>
        {isActive ? (
          <p className="text-[0.95rem] md:text-base font-medium leading-relaxed text-cream/85 mb-5">
            {content!.body}
          </p>
        ) : (
          <p className="text-[0.95rem] md:text-base font-medium leading-relaxed italic text-cream/90 mb-5">
            One mobile browse page. Three findings flagged across three different law domains — <span className="text-safety-orange">pricing transparency</span>, <span className="text-intel-green">conversion research</span>, and <span className="text-brass">accessibility compliance</span>. Hover a marker to see what each one flags and the statute behind it.
          </p>
        )}
        <div className="monitor-panel p-3 inline-flex items-center gap-5 border-brass/30">
          <div>
            <div className="text-[9px] font-black text-brass mb-1 uppercase tracking-widest">Cluster</div>
            <div className="text-sm font-bold">{cluster}</div>
          </div>
          <div className="w-px h-8 bg-monitor-border" />
          <div className="text-[10px] font-mono text-cream/40 tracking-wider">
            Cited:<br />{cite}
          </div>
        </div>
      </div>
    </div>
  );
}

// --- ETHICS GATE DATA ---------------------------------------------------------
const GATE_FRAMEWORKS: ReadonlyArray<{ name: string; domain: string; patterns: number }> = [
  { name: 'FTC §5',  domain: 'Deceptive Acts',       patterns: 47 },
  { name: 'CPRA',    domain: 'California Privacy',   patterns: 22 },
  { name: 'ROSCA',   domain: 'Negative Option',      patterns: 14 },
  { name: 'GDPR',    domain: 'EU Data Protection',   patterns: 31 },
  { name: 'WCAG 2.1',domain: 'Accessibility AA',     patterns: 68 },
];

type GateVerdict = 'reject' | 'approve';
const GATE_LOG: ReadonlyArray<{
  pattern: string;
  law: string;
  detail: string;
  verdict: GateVerdict;
}> = [
  { pattern: 'Countdown urgency timer',          law: 'FTC § 5',             detail: 'deceptive scarcity claim',        verdict: 'reject' },
  { pattern: '"Only 2 left" stock urgency',      law: 'FTC § 5',             detail: 'unverified inventory claim',      verdict: 'reject' },
  { pattern: 'Pre-checked add-on at checkout',   law: 'FTC Click-to-Cancel', detail: 'lacks affirmative consent',       verdict: 'reject' },
  { pattern: 'Hidden subscription opt-out',      law: 'ROSCA § 8403',        detail: 'negative option rule',            verdict: 'reject' },
  { pattern: 'Undisclosed CA data sharing',      law: 'CPRA § 1798.135',     detail: 'opt-out link required',           verdict: 'reject' },
  { pattern: 'One-click unsubscribe flow',       law: 'ROSCA',               detail: 'cancel path disclosed',           verdict: 'approve' },
  { pattern: 'CTA contrast 7.2:1 luminance',     law: 'WCAG 2.1 AA',         detail: 'accessible color ratio',          verdict: 'approve' },
  { pattern: 'Price disclosed above the fold',   law: 'FTC',                 detail: 'pricing transparency',            verdict: 'approve' },
];

function GateRow({ pattern, law, detail, verdict, delay = 0 }: {
  pattern: string; law: string; detail: string; verdict: GateVerdict; delay?: number;
}) {
  const isReject = verdict === 'reject';
  return (
    <div
      className="gate-row grid grid-cols-[1fr_110px] sm:grid-cols-[1.6fr_1fr_130px] gap-x-3 sm:gap-x-6 items-center py-2.5 sm:py-3 border-b border-monitor-border/40 last:border-b-0"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Pattern */}
      <div className="text-[11px] sm:text-[13px] text-cream font-medium leading-tight">
        {pattern}
      </div>
      {/* Law + detail — hidden on xs so row stays scannable */}
      <div className="hidden sm:block">
        <div className="text-[10px] font-black uppercase text-brass tracking-tight leading-tight">{law}</div>
        <div className="text-[9px] font-mono text-cream/40 tracking-wider mt-0.5">{detail}</div>
      </div>
      {/* Verdict stamp — rotated slightly so it reads as a pressed rubber
          stamp, not a React badge. Offset shadow mimics ink bleeding onto
          the page; stamp tilts further on row hover. */}
      <div className={`verdict-stamp justify-self-end inline-flex items-center px-2.5 py-1 border-2 text-[10px] font-black uppercase tracking-[0.24em] ${
        isReject
          ? 'text-safety-orange border-safety-orange/70 bg-safety-orange/[0.04] verdict-stamp-reject'
          : 'text-intel-green border-intel-green/70 bg-intel-green/[0.04] verdict-stamp-approve'
      }`}>
        {isReject ? 'Reject' : 'Approve'}
      </div>
    </div>
  );
}

function EthicsGateSection({
  activeCallout,
  setActiveCallout,
}: {
  activeCallout: CalloutId | null;
  setActiveCallout: (id: CalloutId | null) => void;
}) {
  const rejectCount = GATE_LOG.filter(r => r.verdict === 'reject').length;
  const approveCount = GATE_LOG.filter(r => r.verdict === 'approve').length;
  const firstApproveIdx = GATE_LOG.findIndex(r => r.verdict === 'approve');

  return (
    <section id="ethics-gate" className="relative py-20 sm:py-24 px-6 sm:px-8 bg-command-gray border-t border-monitor-border overflow-hidden scroll-mt-16">
      {/* Brass ledger grid wash */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, #d4af37 0px, #d4af37 1px, transparent 1px, transparent 32px), repeating-linear-gradient(90deg, #d4af37 0px, #d4af37 1px, transparent 1px, transparent 32px)' }} />
      {/* Giant faint "ETHICS" watermark */}
      <div aria-hidden="true" className="absolute -bottom-8 right-0 pointer-events-none opacity-[0.03] select-none font-brutalist text-[10rem] md:text-[18rem] leading-none text-brass tracking-tighter">
        ETHICS
      </div>

      <div className="max-w-[92rem] mx-auto relative z-10">
        {/* ===================================================================
            Two-column layout:
              LEFT  — callouts + phone specimen (a single vertical exhibit).
                      Phone is tilted on a perspective transform so the page
                      has a repeating "tilted monitor" motif that rhymes with
                      the hero specimen above.
              RIGHT — section header, subhead, frameworks strip, gate ledger.
                      Constrained width so copy doesn't sprawl and the phone
                      stays the dominant anchor.
            Stacks vertically below lg (phone on top, content below).
            =================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-[auto_minmax(0,1fr)] gap-12 lg:gap-10 xl:gap-14 items-start">

          {/* ============ LEFT COLUMN — specimen ============ */}
          <div data-reveal="up" className="flex gap-3 md:gap-4 items-stretch mx-auto lg:mx-0">

            {/* Callouts column — stretches to phone height, distributes top/mid/bottom */}
            <div className="hidden md:flex flex-col justify-between gap-3 w-[160px] lg:w-[170px] xl:w-[185px] py-2">
              <CalloutCard
                id="01"
                arrowSide="right"
                active={activeCallout === '01'}
                onEnter={() => setActiveCallout('01')}
                onLeave={() => setActiveCallout(null)}
              />
              <CalloutCard
                id="02"
                arrowSide="right"
                active={activeCallout === '02'}
                onEnter={() => setActiveCallout('02')}
                onLeave={() => setActiveCallout(null)}
                delay={120}
              />
              <CalloutCard
                id="03"
                arrowSide="right"
                active={activeCallout === '03'}
                onEnter={() => setActiveCallout('03')}
                onLeave={() => setActiveCallout(null)}
                delay={240}
              />
            </div>

            {/* PHONE — anchors the column, tilted like the hero (motif repetition).
                Wrapper handles the tilt transform; inner bezel keeps its own
                hover treatment. */}
            <div className="skew-specimen subject-frame group relative w-[240px] sm:w-[270px] md:w-[280px] lg:w-[310px] xl:w-[340px] flex-shrink-0">
              <div className="relative border-2 border-monitor-border rounded-[22px] p-[6px] bg-matte-black shadow-[12px_14px_0px_rgba(10,10,10,0.85)] group-hover:shadow-[16px_18px_0px_rgba(212,175,55,0.25)] group-hover:border-brass/40 transition-all duration-500">
                <div className="relative rounded-[16px] overflow-hidden">
                  <img
                    alt="Subject mobile viewport — awdmods.com category browse"
                    className="w-full block grayscale-[0.5] brightness-90 contrast-110 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-500"
                    src={awdmodsMobileSection1}
                    loading="lazy"
                    decoding="async"
                  />
                  <div aria-hidden="true" className="absolute inset-0 pointer-events-none mix-blend-multiply">
                    <div className="redaction-stripe redaction-stripe-1 absolute top-[18%] left-[10%] w-[60%] h-[3px] bg-safety-orange/55" />
                    <div className="redaction-stripe redaction-stripe-2 absolute top-[46%] left-[6%] w-[82%] h-[3px] bg-safety-orange/55" />
                  </div>
                  <div aria-hidden="true" className="scanline absolute inset-0 opacity-40 pointer-events-none" />

                  {/* Evidence markers — all on the left edge of the phone so
                      the callout arrows coming from the left land cleanly. */}
                  <div aria-hidden="true" className={`evidence-marker absolute top-[14%] left-[6%] z-10 w-5 h-5 rounded-full bg-safety-orange text-white text-[9px] font-black flex items-center justify-center border border-white/30 ${activeCallout === '01' ? 'is-active' : ''}`}>01</div>
                  <div aria-hidden="true" className={`evidence-marker evidence-marker-phosphor absolute top-[48%] left-[6%] z-10 w-5 h-5 rounded-full bg-intel-green text-matte-black text-[9px] font-black flex items-center justify-center border border-white/30 ${activeCallout === '02' ? 'is-active' : ''}`}>02</div>
                  <div aria-hidden="true" className={`evidence-marker evidence-marker-brass absolute top-[84%] left-[6%] z-10 w-5 h-5 rounded-full bg-brass text-matte-black text-[9px] font-black flex items-center justify-center border border-white/30 ${activeCallout === '03' ? 'is-active' : ''}`}>03</div>
                </div>
              </div>

              <div className="absolute -top-3 left-3 bg-matte-black border border-monitor-border px-2 py-0.5 font-mono text-[8px] text-cream/40 tracking-widest">
                VIEWPORT_390x844
              </div>

              {/* MOBILE-ONLY stacked callouts, directly below the phone.
                  Renders only below md where the side callout column is hidden. */}
              <div className="flex md:hidden flex-col gap-2.5 mt-6">
                <CalloutCard id="01" arrowSide="none" active={activeCallout === '01'} onEnter={() => setActiveCallout('01')} onLeave={() => setActiveCallout(null)} />
                <CalloutCard id="02" arrowSide="none" active={activeCallout === '02'} onEnter={() => setActiveCallout('02')} onLeave={() => setActiveCallout(null)} />
                <CalloutCard id="03" arrowSide="none" active={activeCallout === '03'} onEnter={() => setActiveCallout('03')} onLeave={() => setActiveCallout(null)} />
              </div>
            </div>
          </div>

          {/* ============ RIGHT COLUMN — header, frameworks, ledger ============
              max-w capped so the copy reads at a comfortable measure instead of
              stretching edge-to-edge and swallowing the phone. */}
          <div className="flex flex-col gap-8 lg:gap-10 min-w-0 lg:max-w-[52rem] xl:max-w-[56rem]">

            {/* Section header */}
            <div data-reveal="up">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-4 h-4 bg-brass animate-pulse shrink-0"></span>
                <h2 className="font-brutalist text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tighter leading-[0.95]">The Ethics Gate</h2>
                <div className="flex-1 h-px bg-monitor-border relative hidden sm:block">
                  <div className="absolute right-0 top-[-15px] text-[10px] font-mono text-cream/30">GATE_001_OPERATIONAL</div>
                </div>
              </div>
              <p className="text-brass font-bold text-lg mb-5">Every recommendation passes through compliance law before it ships.</p>
              <p className="text-cream/60 leading-relaxed font-medium max-w-[65ch]">
                We flag what you already run. We refuse to recommend anything we wouldn’t defend in court. Every pattern is checked against active enforcement — not theory. Below is a real intake window.
              </p>
            </div>

            {/* Frameworks strip — reframed as a PATTERN INDEX with a single total
                as the loudest thing in the section. The chrome recedes, the
                counts dominate, and the sum "182" becomes the opening statement:
                this isn't abstract ethics, it's 182 trackable, precedent-backed
                violations being checked on every audit. */}
            <div data-reveal="up" style={{ transitionDelay: '80ms' }} className="relative">
              {/* Eyebrow with the grand total sitting next to the label */}
              <div className="flex items-end justify-between gap-4 mb-3 pb-3 border-b border-monitor-border">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-safety-orange" />
                  <div className="text-[9px] font-black text-safety-orange tracking-chip uppercase">Pattern Index · Active Enforcement</div>
                </div>
                <div className="flex items-baseline gap-2 font-mono text-[9px] text-cream/40 tracking-meta uppercase">
                  <span>5 frameworks</span>
                  <span className="text-cream/20">/</span>
                  <span className="text-brass">{GATE_FRAMEWORKS.reduce((s, f) => s + f.patterns, 0)} tracked</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border border-monitor-border bg-matte-black/40">
                {GATE_FRAMEWORKS.map((f, i) => (
                  <div
                    key={f.name}
                    className="px-4 pt-4 pb-5 sm:px-5 sm:pt-5 sm:pb-6 border-r border-b lg:border-b-0 border-monitor-border last:border-r-0 relative group flex flex-col"
                  >
                    {/* Giant count — the hero of the card. 5-6x the size of the
                        framework name so it reads as a case-file statistic, not
                        decoration. */}
                    <div className="font-brutalist text-[4rem] sm:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] text-cream leading-[0.82] tracking-tighter mb-2 group-hover:text-safety-orange transition-colors duration-300">
                      {f.patterns}
                    </div>
                    <div className="h-px bg-monitor-border mb-2.5" />
                    <div className="font-brutalist text-sm sm:text-base uppercase tracking-tighter leading-none mb-1">{f.name}</div>
                    <div className="text-[9px] text-cream/45 uppercase tracking-[0.18em] leading-tight mb-auto pb-3">{f.domain}</div>
                    <div className="flex items-center gap-1.5 text-[8px] font-mono text-brass/40 tracking-[0.22em] uppercase">
                      <span className="w-1 h-1 bg-brass/60 group-hover:bg-safety-orange transition-colors" />
                      Code_{String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gate Log ledger — now framed as an OFFICIAL FILING. The opener
                leads with the headline count (3 REJECTED / 3 APPROVED) in
                large brutalist numerals so the verdict distribution is the
                first thing you see, not a footnote. */}
            <div data-reveal="up" style={{ transitionDelay: '160ms' }}>

              {/* Filing header block */}
              <div className="relative mb-5 border-t-2 border-b-2 border-monitor-border bg-matte-black/40">
                {/* Tiny filing eyebrow pinned at the top-left corner */}
                <div className="absolute -top-[9px] left-5 bg-command-gray px-2 text-[8px] font-black text-safety-orange tracking-file uppercase">
                  Official Filing
                </div>
                <div className="absolute -top-[9px] right-5 bg-command-gray px-2 text-[8px] font-mono text-cream/40 tracking-[0.22em] uppercase">
                  Ruling_001 / Intake_24h
                </div>

                <div className="flex flex-col sm:flex-row sm:items-stretch divide-y sm:divide-y-0 sm:divide-x divide-monitor-border">
                  {/* REJECTED — loudest of the three */}
                  <div className="flex-1 px-5 py-5 sm:py-6 flex items-center gap-5">
                    <div className="font-brutalist text-[4.5rem] sm:text-[5rem] lg:text-[6rem] text-safety-orange leading-[0.82] tracking-tighter">
                      {rejectCount}
                    </div>
                    <div className="flex flex-col">
                      <div className="text-[9px] font-black text-safety-orange tracking-chip uppercase mb-1">Rejected</div>
                      <div className="text-[10px] text-cream/55 leading-snug max-w-[14ch]">Patterns refused at the gate.</div>
                    </div>
                  </div>
                  {/* APPROVED */}
                  <div className="flex-1 px-5 py-5 sm:py-6 flex items-center gap-5">
                    <div className="font-brutalist text-[4.5rem] sm:text-[5rem] lg:text-[6rem] text-intel-green leading-[0.82] tracking-tighter">
                      {approveCount}
                    </div>
                    <div className="flex flex-col">
                      <div className="text-[9px] font-black text-intel-green tracking-chip uppercase mb-1">Approved</div>
                      <div className="text-[10px] text-cream/55 leading-snug max-w-[14ch]">Cleared for recommendation.</div>
                    </div>
                  </div>
                  {/* Window meta */}
                  <div className="px-5 py-4 sm:py-6 flex flex-col justify-center bg-matte-black/60 min-w-[14rem]">
                    <div className="text-[8px] font-black text-brass/60 tracking-file uppercase mb-1.5">Intake Window</div>
                    <div className="font-brutalist text-lg sm:text-xl text-cream leading-none tracking-tighter mb-1">2026.04.21</div>
                    <div className="text-[9px] font-mono text-cream/40 tracking-meta">14:32 → 14:32 UTC</div>
                  </div>
                </div>
              </div>

              {/* Table header */}
              <div className="grid grid-cols-[1fr_110px] sm:grid-cols-[1.6fr_1fr_130px] gap-x-3 sm:gap-x-6 pb-2 border-b border-monitor-border text-[9px] font-mono uppercase tracking-meta text-cream/30">
                <div>Pattern Under Review</div>
                <div className="hidden sm:block">Law Cited</div>
                <div className="text-right">Verdict</div>
              </div>

              {/* Rejected entries */}
              {GATE_LOG.slice(0, firstApproveIdx).map((row, i) => (
                <GateRow key={row.pattern} {...row} delay={i * 80} />
              ))}

              {/* Divider */}
              <div className="my-2 flex items-center gap-3 text-[9px] font-mono uppercase tracking-meta text-cream/25">
                <div className="flex-1 h-px bg-monitor-border/60" />
                <span>Approved Below</span>
                <div className="flex-1 h-px bg-monitor-border/60" />
              </div>

              {/* Approved entries */}
              {GATE_LOG.slice(firstApproveIdx).map((row, i) => (
                <GateRow key={row.pattern} {...row} delay={(firstApproveIdx + i) * 80} />
              ))}

              {/* Signature block — counts have moved to the filing header,
                  so the footer becomes the closing stamp of the ruling. */}
              <div className="mt-5 pt-5 border-t-2 border-monitor-border flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="font-brutalist text-safety-orange text-xs tracking-file uppercase">Filed</div>
                  <div className="text-[10px] font-mono text-cream/50 tracking-[0.18em] uppercase">2026.04.21 · 14:32 UTC</div>
                  <div className="hidden lg:block flex-1 h-px bg-monitor-border/60 max-w-[4rem]" />
                  <div className="text-[9px] font-mono text-cream/30 tracking-meta uppercase">Officer: ECP.Systems</div>
                </div>
                <div className="text-[11px] text-cream/70 italic leading-snug max-w-[40ch] lg:text-right">
                  “We refuse to recommend anything we wouldn’t defend in court.”
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  useReveal();
  const [activeCallout, setActiveCallout] = useState<CalloutId | null>(null);
  return (
    <div className="antialiased text-cream font-sans bg-matte-black min-h-screen">
      <div className="grain"></div>
      <div className="scanline boot-scanline fixed inset-0 z-[100]"></div>
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-monitor-border bg-matte-black/95">
        <div className="flex justify-between items-center px-5 sm:px-8 h-14">
          <div className="font-brutalist text-lg sm:text-xl tracking-tighter flex items-center gap-2">
            <span className="w-2 h-2 bg-safety-orange animate-pulse"></span>
            ECP<span className="text-brass">.</span>SYSTEMS
          </div>
          <div className="hidden md:flex gap-12 text-[9px] font-black tracking-file text-cream/40">
            <a className="nav-link hover:text-safety-orange transition-colors" href="#pipeline">PIPELINE</a>
            <a className="nav-link hover:text-safety-orange transition-colors" href="#ethics-gate">ETHICS_GATE</a>
            <a className="nav-link hover:text-safety-orange transition-colors" href="#pricing">TIERS</a>
          </div>
          {/* Mobile gets a taller hit area (min-h-11 = 44px) with the same
              visual weight; desktop keeps the tight bureau-chip styling. */}
          <a href="#pricing" className="cta-armed inline-flex items-center border border-safety-orange/40 md:border-safety-orange/30 px-3.5 sm:px-3 min-h-[44px] md:min-h-0 md:py-1.5 text-[10px] sm:text-[9px] font-black text-safety-orange hover:bg-safety-orange hover:text-white transition-all cursor-pointer tracking-meta">
            COMMISSION_AUDIT
          </a>
        </div>
      </nav>
      
      <main>
        <section className="relative min-h-screen pt-24 sm:pt-32 pb-20 sm:pb-24 px-6 sm:px-8 flex items-center justify-center">
          <div className="w-full max-w-[110rem] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-center justify-between xl:px-8">
            <div className="lg:w-[48%] flex flex-col justify-center z-20 relative w-full">
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <span className="boot-badge px-2 py-0.5 bg-white text-black text-[9px] font-black tracking-widest">ENFORCEMENT MODE</span>
                <span className="boot-id text-[10px] font-bold text-cream/30 tracking-widest uppercase">ID: 4492-SURVEIL-STATION</span>
              </div>
              <h1 className="font-brutalist text-massive mb-6 sm:mb-8 uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <span className="hero-line hero-line-1">FACTS</span><br/>
                <span className="hero-line hero-line-2">OVER</span><br/>
                <span className="hero-line hero-line-3 text-safety-orange" style={{WebkitTextStrokeColor: '#FF4500'}}>BIAS.</span>
              </h1>
              <div className="max-w-xl relative z-20">
                <p className="boot-subhead text-2xl font-light text-cream/80 leading-tight mb-8 drop-shadow-md">
                  One audit. Every insight. <span className="font-bold text-cream">Research-backed.</span>
                </p>
                <p className="boot-body text-base sm:text-sm font-medium text-cream/60 leading-relaxed mb-8">
                  800+ classified findings across 80+ reference files from Baymard Institute, Nielsen Norman Group, peer-reviewed journals, and FTC enforcement actions. Every recommendation cites its source. Every citation rated by evidence tier.
                </p>
                <div className="boot-panel flex gap-4">
                  <div className="flex-[1.5] monitor-panel p-4 border-l-4 border-l-brass">
                    <div className="text-[9px] text-brass font-black mb-1">STANDING_ORDER</div>
                    <div className="text-sm font-semibold">Not vibes. Not best practices. Actual studies, actual evidence tiers, actual legal compliance.</div>
                  </div>
                </div>
              </div>
            </div>
          
            <div className="lg:w-[52%] relative flex items-center justify-center mt-12 lg:mt-0 z-10 w-full px-4 sm:px-8 lg:px-0 overflow-visible">
            <div className="relative skew-hero group cursor-pointer w-full max-w-[52rem] overflow-visible">

              {/* Main screenshot — real subject under examination */}
              <div className="monitor-panel p-2 shadow-[10px_10px_0px_rgba(10,10,10,0.8)] sm:shadow-[20px_20px_0px_rgba(10,10,10,0.8)] group-hover:shadow-[15px_15px_0px_rgba(255,69,0,0.15)] sm:group-hover:shadow-[25px_25px_0px_rgba(255,69,0,0.15)] group-hover:border-safety-orange/40 border-2 sm:border-4 border-monitor-border transition-all duration-500 rounded-sm relative">
                <img
                  alt="Subject interface under examination — awdmods.com"
                  className="w-full block grayscale-[0.6] brightness-90 contrast-110 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-500"
                  src={awdmodsHero}
                  fetchPriority="high"
                  decoding="async"
                />
                {/* Red redaction overlay swipes — light touch */}
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none mix-blend-multiply">
                  <div className="redaction-stripe redaction-stripe-1 absolute top-[12%] left-[8%] w-[30%] h-[3px] bg-safety-orange/50"/>
                  <div className="redaction-stripe redaction-stripe-2 absolute top-[68%] left-[12%] w-[22%] h-[3px] bg-safety-orange/50"/>
                </div>
              </div>

              {/* Callouts — OUTSIDE the panel, examiner's notes in the margin.
                  Only shown from lg (1024px) up, because the negative offsets
                  (-left-[22%], etc.) rely on the hero being in the side-by-side
                  column layout. Below lg, the hero stacks full-width and those
                  offsets would push the callouts off-screen. Mobile/tablet get
                  the stacked callouts rendered below the hero image instead. */}
              {/* Top-left — HEADLINES & BUTTONS */}
              <div className="hidden lg:flex absolute top-[6%] -left-[22%] z-20 items-start gap-2 opacity-95 group-hover:-translate-y-1 transition-transform duration-500 callout-animate-left" style={{ animationDelay: '0.35s' }}>
                <div className="border-l-4 border-safety-orange bg-matte-black/95 border border-monitor-border p-2 shadow-[3px_3px_0px_rgba(255,69,0,0.25)] whitespace-nowrap">
                  <span className="block text-[8px] opacity-80 text-safety-orange font-bold uppercase tracking-widest leading-none mb-0.5">HEADLINES &amp; BUTTONS</span>
                  <span className="text-[10px] font-black uppercase text-cream tracking-tighter leading-tight block">Hero lacks visible promise</span>
                </div>
                <svg className="w-16 md:w-24 h-10 md:h-14 text-safety-orange/80 -ml-1" viewBox="0 0 100 50" fill="none" preserveAspectRatio="none">
                  <path d="M0,25 L90,25" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
                  <circle cx="90" cy="25" r="2.5" fill="currentColor" />
                </svg>
              </div>

              {/* Mid-right — PRICE & OFFERS */}
              <div className="hidden lg:flex absolute top-[38%] -right-[22%] z-20 flex-row-reverse items-start gap-2 opacity-95 group-hover:translate-x-1 transition-transform duration-500 callout-animate-right" style={{ animationDelay: '0.65s' }}>
                <div className="border-l-4 border-brass bg-matte-black/95 border border-monitor-border p-2 shadow-[3px_3px_0px_rgba(212,175,55,0.25)] whitespace-nowrap">
                  <span className="block text-[8px] opacity-80 text-brass font-bold uppercase tracking-widest leading-none mb-0.5">PRICE &amp; OFFERS</span>
                  <span className="text-[10px] font-black uppercase text-cream tracking-tighter leading-tight block">Delivery context missing</span>
                </div>
                <svg className="w-16 md:w-24 h-10 md:h-14 text-brass/80 -mr-1 transform -scale-x-100" viewBox="0 0 100 50" fill="none" preserveAspectRatio="none">
                  <path d="M0,25 L90,25" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
                  <circle cx="90" cy="25" r="2.5" fill="currentColor" />
                </svg>
              </div>

              {/* Bottom-left — CHECKOUT EXPERIENCE */}
              <div className="hidden lg:flex absolute bottom-[8%] -left-[20%] z-20 items-start gap-2 opacity-95 group-hover:translate-y-1 transition-transform duration-500 callout-animate-bottom" style={{ animationDelay: '0.95s' }}>
                <div className="border-l-4 border-cream/60 bg-matte-black/95 border border-monitor-border p-2 shadow-[3px_3px_0px_rgba(255,255,255,0.15)] whitespace-nowrap">
                  <span className="block text-[8px] opacity-80 text-cream/60 font-bold uppercase tracking-widest leading-none mb-0.5">CHECKOUT EXPERIENCE</span>
                  <span className="text-[10px] font-black uppercase text-cream tracking-tighter leading-tight block">Fitment flow consumes decisions</span>
                </div>
                <svg className="w-16 md:w-24 h-10 md:h-14 text-cream/50 -ml-1" viewBox="0 0 100 50" fill="none" preserveAspectRatio="none">
                  <path d="M0,25 L90,25" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
                  <circle cx="90" cy="25" r="2.5" fill="currentColor" />
                </svg>
              </div>

              {/* Live analysis readout — top-right corner */}
              <LiveReadout />
            </div>
          </div>

          {/* Mobile + tablet callouts — stacked BELOW the hero image. Shown on
              everything below lg (1024px), which is where the side-by-side hero
              layout kicks in and the absolutely-positioned callouts become
              viable. Between sm and lg, the absolute callouts would clip, so
              this stacked version is the responsible fallback. */}
          <div className="lg:hidden w-full flex flex-col gap-2 mt-6 px-2">
            <div className="border-l-4 border-safety-orange bg-matte-black/95 border border-monitor-border p-2 flex items-baseline gap-3 flex-wrap callout-animate-bottom" style={{ animationDelay: '0.35s' }}>
              <span className="text-[8px] opacity-80 text-safety-orange font-bold uppercase tracking-widest whitespace-nowrap">HEADLINES &amp; BUTTONS</span>
              <span className="text-[10px] font-black uppercase text-cream tracking-tighter leading-tight">Hero lacks visible promise</span>
            </div>
            <div className="border-l-4 border-brass bg-matte-black/95 border border-monitor-border p-2 flex items-baseline gap-3 flex-wrap callout-animate-bottom" style={{ animationDelay: '0.55s' }}>
              <span className="text-[8px] opacity-80 text-brass font-bold uppercase tracking-widest whitespace-nowrap">PRICE &amp; OFFERS</span>
              <span className="text-[10px] font-black uppercase text-cream tracking-tighter leading-tight">Delivery context missing</span>
            </div>
            <div className="border-l-4 border-cream/60 bg-matte-black/95 border border-monitor-border p-2 flex items-baseline gap-3 flex-wrap callout-animate-bottom" style={{ animationDelay: '0.75s' }}>
              <span className="text-[8px] opacity-80 text-cream/60 font-bold uppercase tracking-widest whitespace-nowrap">CHECKOUT EXPERIENCE</span>
              <span className="text-[10px] font-black uppercase text-cream tracking-tighter leading-tight">Fitment flow consumes decisions</span>
            </div>
          </div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full border-t border-monitor-border bg-command-gray/90 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 flex flex-col md:flex-row md:flex-wrap md:justify-between md:items-center gap-3 md:gap-4">
            <div className="text-[9px] font-black text-brass uppercase tracking-meta whitespace-nowrap">Frameworks of Authority:</div>
            <div className="flex flex-wrap gap-3 sm:gap-6 lg:gap-8 opacity-50 hover:opacity-100 transition-opacity">
              <span className="font-brutalist text-[10px] sm:text-xs">BAYMARD</span>
              <span className="font-brutalist text-[10px] sm:text-xs">NIELSEN NORMAN</span>
              <span className="font-brutalist text-[10px] sm:text-xs">CXL</span>
              <span className="font-brutalist text-[10px] sm:text-xs">FTC_FEDERAL</span>
              <span className="font-brutalist text-[10px] sm:text-xs">GDPR_REG</span>
              <span className="font-brutalist text-[10px] sm:text-xs">WCAG_2.1</span>
            </div>
          </div>
        </section>

        {/* Plain-English Explainer — for people who don't live in CRO */}
        <section className="relative py-20 sm:py-24 px-6 sm:px-8 border-t border-monitor-border bg-matte-black overflow-hidden">
          {/* Subtle form-line texture — bureau clipboard feel */}
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent 0, transparent 42px, #F9F9F7 42px, #F9F9F7 43px)' }} />
          {/* Giant faint "ECP" watermark top-right */}
          <div aria-hidden="true" className="absolute -top-10 -right-6 md:right-0 pointer-events-none opacity-[0.04] select-none font-brutalist text-[14rem] md:text-[22rem] leading-none text-cream tracking-tighter">
            ECP
          </div>
          <div className="max-w-6xl mx-auto relative">
            <div data-reveal="up" className="mb-10 sm:mb-14 flex items-center gap-4">
              <span className="w-3 h-3 bg-brass"></span>
              <div className="text-[10px] font-black text-brass tracking-widest uppercase">Plain English</div>
              <div className="flex-1 h-px bg-monitor-border"></div>
            </div>
            <h2 data-reveal="up" className="font-brutalist text-3xl sm:text-5xl md:text-6xl uppercase leading-[0.95] mb-10 sm:mb-14 max-w-4xl tracking-tight">
              For people who don’t<br/>work in <span className="text-safety-orange">conversion</span> all day.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
              <div data-reveal="up" style={{ transitionDelay: '0ms' }} className="monitor-panel p-6 sm:p-8 border border-monitor-border">
                <div className="text-[10px] font-mono text-safety-orange mb-3 tracking-widest uppercase">01 · The Problem</div>
                <h3 className="font-brutalist text-xl mb-4 uppercase leading-tight text-cream">You’re paying for traffic that leaves without buying.</h3>
                <p className="text-base sm:text-sm text-cream/60 leading-relaxed font-medium">
                  Most people who land on an e-commerce store don’t buy. That’s normal. But the GAP between your visitor count and your sales count has specific causes — confusing layouts, hidden prices, broken trust cues, wrong button colors, fifty other small things. Each one is fixable. Most store owners never learn which ones matter on THEIR site.
                </p>
              </div>
              <div data-reveal="up" style={{ transitionDelay: '120ms' }} className="monitor-panel p-6 sm:p-8 border border-monitor-border">
                <div className="text-[10px] font-mono text-brass mb-3 tracking-widest uppercase">02 · The Audit</div>
                <h3 className="font-brutalist text-xl mb-4 uppercase leading-tight text-cream">We diagnose your store against 800+ research findings.</h3>
                <p className="text-base sm:text-sm text-cream/60 leading-relaxed font-medium">
                  Give us a URL — no logins, no integrations. We capture your pages on desktop and mobile, run them through an evidence-cited analysis engine, and flag every place research says visitors get stuck or distracted. Every finding ties back to a specific study or regulation. Not opinions — citations.
                </p>
              </div>
              <div data-reveal="up" style={{ transitionDelay: '240ms' }} className="monitor-panel p-6 sm:p-8 border border-monitor-border">
                <div className="text-[10px] font-mono text-cream/50 mb-3 tracking-widest uppercase">03 · The Report</div>
                <h3 className="font-brutalist text-xl mb-4 uppercase leading-tight text-cream">You get a document. You decide what to do.</h3>
                <p className="text-base sm:text-sm text-cream/60 leading-relaxed font-medium">
                  72 hours later, you receive an interactive report with every finding, its severity, its cited source, and its priority ranking. We don’t lock you into implementation. We don’t upsell you. You own the report. Hand it to your developer, your agency, or just read it yourself. The point is clarity, not dependency.
                </p>
              </div>
            </div>
            <div className="mt-10 sm:mt-14 flex flex-col items-center gap-6">
              <p data-reveal="up" className="text-sm sm:text-base text-cream/50 italic max-w-2xl mx-auto text-center">
                If you’ve ever been told “your bounce rate is high, try A/B testing” — this is the part that comes before A/B testing. Here’s what to actually test, and here’s the research that says why.
              </p>
              <div data-reveal="up" style={{ transitionDelay: '120ms' }} className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 mt-2">
                <a href="#pricing" className="cta-armed bg-safety-orange text-white text-[11px] sm:text-xs font-black uppercase tracking-[0.18em] px-7 sm:px-9 py-4 hover:brightness-110 transition-all shadow-[0_0_30px_rgba(255,69,0,0.35)] cursor-pointer inline-block">
                  Commission an Audit →
                </a>
                <a href="/report-mockup.html" target="_blank" className="inline-flex items-center min-h-[44px] sm:min-h-0 py-2.5 sm:py-1 text-[10px] sm:text-xs font-bold uppercase tracking-meta text-cream/60 hover:text-brass border-b border-cream/20 hover:border-brass transition-colors">
                  See a Sample Report
                </a>
              </div>
              <div className="flex items-center gap-3 text-[10px] font-mono text-cream/30 tracking-widest uppercase mt-2">
                <span className="w-3 h-3 bg-brass animate-pulse"></span>
                72-Hour Turnaround · No Retainer · Full Refund If We Miss The Bar
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION — THE ETHICS GATE
            Phone specimen on the left (one callout = explicit ethics
            violation) + compliance ledger on the right.
            ======================================================== */}
        <EthicsGateSection
          activeCallout={activeCallout}
          setActiveCallout={setActiveCallout}
        />

        <section id="pipeline" className="py-20 sm:py-24 px-6 sm:px-8 border-t border-monitor-border relative bg-matte-black overflow-hidden scroll-mt-16">
          {/* Pipeline flow diagram — faint connector lines between phases */}
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 28px, #FF4500 28px, #FF4500 29px)' }} />
          {/* Giant faint "PIPELINE" word backdrop */}
          <div aria-hidden="true" className="absolute bottom-0 -right-10 md:right-0 pointer-events-none opacity-[0.03] select-none font-brutalist text-[10rem] md:text-[18rem] leading-none text-safety-orange tracking-tighter">
            PIPELINE
          </div>
          <div className="max-w-[100rem] mx-auto relative z-10">
            <div data-reveal="up" className="flex items-center gap-4 mb-6">
              <span className="w-3 h-3 sm:w-4 sm:h-4 bg-safety-orange animate-pulse shrink-0"></span>
              <h2 className="font-brutalist text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tighter leading-[0.95]">Pipeline</h2>
              <div className="flex-1 h-px bg-monitor-border relative hidden sm:block">
                <div className="absolute right-0 top-[-15px] text-[10px] font-mono text-cream/30">METH_001_ACTIVE</div>
              </div>
            </div>

            {/* Connector line that draws across as section enters viewport */}
            <div data-reveal="fade" className="relative h-px mb-10 hidden lg:block">
              <div className="pipeline-connector h-px bg-safety-orange/30" data-reveal="fade" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
              <div data-reveal="up" style={{ transitionDelay: '0ms' }} className="monitor-panel p-6 sm:p-8 lg:p-10 border-t-2 border-t-safety-orange hover:bg-monitor-border/30 transition-colors">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-[10px] text-safety-orange font-black px-2 py-1 bg-safety-orange/10 border border-safety-orange/20">PHASE_01</div>
                  <div className="text-[10px] font-mono text-cream/20">AUTO_EXEC</div>
                </div>
                <h3 className="text-2xl font-bold uppercase mb-5 text-cream">Acquire</h3>
                <p className="text-sm text-cream/50 leading-relaxed font-mono">Full screenshot capture at real viewports. Rendered DOM extraction (post-hydration for SPAs). Element coordinate mapping. Dual-device parallel acquisition — desktop and mobile in a single pass.</p>
              </div>

              <div data-reveal="up" style={{ transitionDelay: '150ms' }} className="monitor-panel p-6 sm:p-8 lg:p-10 border-t-2 border-t-brass hover:bg-monitor-border/30 transition-colors">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-[10px] text-brass font-black px-2 py-1 bg-brass/10 border border-brass/20">PHASE_02</div>
                  <div className="text-[10px] font-mono text-cream/20">AWAIT_SIG</div>
                </div>
                <h3 className="text-2xl font-bold uppercase mb-5 text-cream">Audit</h3>
                <p className="text-sm text-cream/50 leading-relaxed font-mono">Multi-agent analysis across 10 conversion-psychology clusters — Headlines, Trust, Price, Checkout, Performance, Media, Browse, SEO, Retention, Audience Fit. Findings scored against 800+ classified research entries.</p>
              </div>

              <div data-reveal="up" style={{ transitionDelay: '300ms' }} className="monitor-panel p-6 sm:p-8 lg:p-10 border-t-2 border-t-cream/50 hover:bg-monitor-border/30 transition-colors">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-[10px] text-cream/60 font-black px-2 py-1 bg-white/5 border border-white/10">PHASE_03</div>
                  <div className="text-[10px] font-mono text-cream/20">MANUAL_REV</div>
                </div>
                <h3 className="text-2xl font-bold uppercase mb-5 text-cream">Ethics Gate</h3>
                <p className="text-sm text-cream/50 leading-relaxed font-mono">Every phase checked against actual compliance law — FTC enforcement actions, CPRA, ROSCA, GDPR, WCAG 2.1. Flags dark patterns you’re already running. Refuses to recommend anything we wouldn’t defend in court. PASS or FAIL.</p>
              </div>

              <div data-reveal="up" style={{ transitionDelay: '450ms' }} className="monitor-panel p-6 sm:p-8 lg:p-10 border-t-2 border-t-safety-orange hover:bg-monitor-border/30 transition-colors bg-safety-orange/5">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-[10px] text-safety-orange font-black px-2 py-1 bg-safety-orange/20 border border-safety-orange/40">PHASE_04</div>
                  <div className="text-[10px] font-mono text-safety-orange/80 animate-pulse">DEPLOY_RDY</div>
                </div>
                <h3 className="text-2xl font-bold uppercase mb-5 text-cream">Priority Path</h3>
                <p className="text-sm text-cream/50 leading-relaxed font-mono">Findings compressed into a Priority Path — a short list of action stories, each one a group of related findings with a clear fix-first ranking. You fix stories, not symptoms. Exportable as a markdown brief, implementation-ready.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-16 sm:py-20 px-6 sm:px-8 relative overflow-hidden scroll-mt-16">
          {/* Blueprint grid — architectural/commission feel */}
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, #D4AF37 0px, #D4AF37 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #D4AF37 0px, #D4AF37 1px, transparent 1px, transparent 60px)' }} />
          {/* Giant faint "LEVELS" word */}
          <div aria-hidden="true" className="absolute -bottom-8 -left-4 md:left-0 pointer-events-none opacity-[0.03] select-none font-brutalist text-[8rem] md:text-[13rem] leading-none text-brass tracking-tighter">
            LEVELS
          </div>
          <div data-reveal="up" className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-12 border-b border-monitor-border pb-5 sm:pb-6 gap-5 relative">
            <div>
              <div className="text-brass font-black text-[10px] tracking-[0.4em] mb-3 uppercase">Operational Tiers</div>
              <h2 className="font-brutalist text-3xl sm:text-4xl md:text-5xl uppercase leading-none">Levels of<br/>Depth</h2>
            </div>
            <div className="text-right text-[10px] font-mono text-cream/30 mt-6 md:mt-0 uppercase">
              Protocol: Fixed Rate Commission<br/>
              Waitlist: Active<br/>
              Region: Global Shopify
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-1 max-w-6xl mx-auto">
            <div data-reveal="up" style={{ transitionDelay: '0ms' }} className="monitor-panel p-5 sm:p-6 lg:p-7 flex flex-col group hover:border-brass/30 transition-all cursor-pointer border border-monitor-border">
              <div className="text-[10px] font-black text-cream/30 mb-5 uppercase tracking-widest">Commission_01</div>
              <h3 className="font-brutalist text-3xl mb-1 uppercase group-hover:text-brass transition-colors">Focus</h3>
              <div className="text-2xl font-bold mb-7 text-cream/60">$397</div>
              <div className="flex-grow space-y-2 mb-8">
                <p className="text-[11px] font-bold uppercase tracking-widest py-2 border-b border-monitor-border flex justify-between gap-2">
                  <span>Scope</span> <span className="text-cream/30">1 Page</span>
                </p>
                <p className="text-[11px] font-bold uppercase tracking-widest py-2 border-b border-monitor-border flex justify-between gap-2">
                  <span>Device</span> <span className="text-cream/30">Mobile OR Desktop</span>
                </p>
                <p className="text-[11px] font-bold uppercase tracking-widest py-2 border-b border-monitor-border flex justify-between gap-2">
                  <span>Clusters</span> <span className="text-cream/30">All 10</span>
                </p>
                <p className="text-[11px] font-bold uppercase tracking-widest py-2 border-b border-monitor-border flex justify-between gap-2">
                  <span>Priority Path</span> <span className="text-cream/30">Included</span>
                </p>
              </div>
              <button className="cta-armed w-full py-4 sm:py-3 min-h-[44px] border border-cream/20 text-[10px] font-black uppercase hover:bg-cream hover:text-matte-black transition-all cursor-pointer tracking-[0.18em]">Commission Focus</button>
            </div>

            <div data-reveal="up" style={{ transitionDelay: '150ms' }} className="tier-pulse-on-reveal radar-sweep-host monitor-panel p-5 sm:p-7 lg:p-8 flex flex-col bg-matte-black border-2 border-safety-orange z-10 lg:-mt-3 lg:-mb-3 shadow-[0_0_40px_rgba(255,69,0,0.15)] relative">
              <div className="absolute top-0 right-0 bg-safety-orange text-white text-[9px] font-black px-3 py-1 uppercase">Recommended</div>
              <div className="text-[10px] font-black text-safety-orange mb-5 uppercase tracking-widest">Commission_02</div>
              <h3 className="font-brutalist text-4xl mb-1 uppercase">The Funnel</h3>
              <div className="font-brutalist text-[4.5rem] sm:text-[5.5rem] lg:text-[6.25rem] leading-[0.82] tracking-tighter mb-8 text-cream">$<span className="text-safety-orange">797</span></div>
              <div className="flex-grow space-y-3 mb-10">
                <p className="text-[11px] font-bold uppercase tracking-widest py-2 border-b border-monitor-border flex justify-between gap-2">
                  <span>Scope</span> <span className="text-safety-orange">LP + PDP + Checkout</span>
                </p>
                <p className="text-[11px] font-bold uppercase tracking-widest py-2 border-b border-monitor-border flex justify-between gap-2">
                  <span>Device</span> <span className="text-safety-orange">Mobile + Desktop</span>
                </p>
                <p className="text-[11px] font-bold uppercase tracking-widest py-2 border-b border-monitor-border flex justify-between gap-2">
                  <span>Cross-Page Path</span> <span className="text-safety-orange">Included</span>
                </p>
                <p className="text-[11px] font-bold uppercase tracking-widest py-2 border-b border-monitor-border flex justify-between gap-2">
                  <span>Citations</span> <span className="text-safety-orange">Gold Tier</span>
                </p>
              </div>
              <button className="cta-armed w-full py-4 bg-safety-orange text-white text-[11px] font-black uppercase hover:brightness-125 transition-all shadow-[0_0_25px_rgba(255,69,0,0.4)] cursor-pointer">
                SECURE PRIORITY SLOT
              </button>
            </div>

            <div data-reveal="up" style={{ transitionDelay: '300ms' }} className="monitor-panel p-5 sm:p-6 lg:p-7 flex flex-col group hover:border-brass/30 transition-all cursor-pointer border border-monitor-border">
              <div className="text-[10px] font-black text-cream/30 mb-5 uppercase tracking-widest">Commission_03</div>
              <h3 className="font-brutalist text-3xl mb-1 uppercase group-hover:text-brass transition-colors">Full Spectrum</h3>
              <div className="text-2xl font-bold mb-7 text-cream/60">$1,497</div>
              <div className="flex-grow space-y-2 mb-8">
                <p className="text-[11px] font-bold uppercase tracking-widest py-2 border-b border-monitor-border flex justify-between gap-2">
                  <span>Scope</span> <span className="text-cream/30">Site-wide</span>
                </p>
                <p className="text-[11px] font-bold uppercase tracking-widest py-2 border-b border-monitor-border flex justify-between gap-2">
                  <span>Device</span> <span className="text-cream/30">Mobile + Desktop</span>
                </p>
                <p className="text-[11px] font-bold uppercase tracking-widest py-2 border-b border-monitor-border flex justify-between gap-2">
                  <span>Delta Report</span> <span className="text-cream/30">Per-Device</span>
                </p>
                <p className="text-[11px] font-bold uppercase tracking-widest py-2 border-b border-monitor-border flex justify-between gap-2">
                  <span>Async Q&amp;A</span> <span className="text-cream/30">14 Days</span>
                </p>
              </div>
              <button className="cta-armed w-full py-4 sm:py-3 min-h-[44px] border border-cream/20 text-[10px] font-black uppercase hover:bg-cream hover:text-matte-black transition-all cursor-pointer tracking-[0.18em]">Commission Full Spectrum</button>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-monitor-border bg-command-gray">
        {/* Main strip — brand · links · version */}
        <div className="px-6 sm:px-8 py-4 sm:py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-8">
          <div className="flex items-center gap-3 font-brutalist text-lg tracking-tighter">
            <span className="w-2 h-2 bg-safety-orange animate-pulse"></span>
            ECP<span className="text-safety-orange">.</span>SYSTEMS
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-1 text-[9px] font-black uppercase tracking-chip text-cream/50">
            <a className="nav-link hover:text-safety-orange transition-colors py-2 -my-2" href="#">Privacy_Policy</a>
            <a className="nav-link hover:text-safety-orange transition-colors py-2 -my-2" href="#">Terms_of_Audit</a>
            <a className="nav-link hover:text-safety-orange transition-colors py-2 -my-2" href="#">Ethical_Manifesto</a>
          </div>
          <div className="text-[8px] font-mono text-cream/25 tracking-tighter whitespace-nowrap">
            VER_v1.1.0 // SYSTEM_STABLE
          </div>
        </div>
        {/* Thin status strip — tagline + frameworks on one line */}
        <div className="border-t border-monitor-border/60 px-6 sm:px-8 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-6 text-[9px] font-bold text-cream/30 uppercase tracking-meta">
          <span>One audit. Every insight. Research-backed.</span>
          <span className="text-cream/25">Built on Baymard · Nielsen Norman · CXL · FTC enforcement</span>
        </div>
      </footer>
    </div>
  );
}
