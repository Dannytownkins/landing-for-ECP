/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useEffect, useState } from 'react';

/**
 * Live analysis readout. Simulates a surveillance terminal:
 *  - LATENCY oscillates 12-18ms at irregular intervals
 *  - Occasionally a glitch frame fires (brief orange flash + scrambled threat value)
 * Respects prefers-reduced-motion (freezes on opening values).
 */
export function LiveReadout() {
  const [latency, setLatency] = useState(14);
  const [glitching, setGlitching] = useState(false);
  const [threatScramble, setThreatScramble] = useState<string | null>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let latencyTimer: number;
    const tickLatency = () => {
      setLatency(12 + Math.floor(Math.random() * 7));
      latencyTimer = window.setTimeout(tickLatency, 600 + Math.random() * 700);
    };
    latencyTimer = window.setTimeout(tickLatency, 900);

    let glitchTimer: number;
    const scheduleGlitch = () => {
      glitchTimer = window.setTimeout(() => {
        setGlitching(true);
        const scrambleChars = '█▓▒░#@$%&*';
        setThreatScramble(
          Array.from({ length: 8 }, () =>
            scrambleChars[Math.floor(Math.random() * scrambleChars.length)]
          ).join('')
        );
        window.setTimeout(() => {
          setGlitching(false);
          setThreatScramble(null);
          scheduleGlitch();
        }, 140);
      }, 4000 + Math.random() * 3500);
    };
    scheduleGlitch();

    return () => {
      window.clearTimeout(latencyTimer);
      window.clearTimeout(glitchTimer);
    };
  }, []);

  return (
    <div
      className={[
        'absolute -top-4 -right-4 sm:-top-6 sm:-right-6 lg:-top-8 lg:-right-8',
        'w-32 sm:w-40 lg:w-48 monitor-panel p-2 sm:p-3 lg:p-4',
        'text-[7px] sm:text-[8px] lg:text-[9px] font-mono leading-tight',
        'bg-matte-black border-safety-orange/40 shadow-lg',
        'group-hover:-translate-y-1 sm:group-hover:-translate-y-2',
        'group-hover:translate-x-1 sm:group-hover:translate-x-2',
        'transition-transform duration-500 z-30 readout-animate',
        glitching ? 'readout-glitch' : '',
      ].join(' ')}
      style={{ animationDelay: '1.25s' }}
    >
      <span className="text-safety-orange">/ / ANALYSIS_LIVE</span>
      <br />
      LATENCY:{' '}
      <span className="tabular-nums inline-block min-w-[2.5em]">{latency}MS</span>
      <br />
      THREAT_LEVEL:{' '}
      <span className={`text-safety-orange ${glitching ? 'animate-none' : ''}`}>
        {threatScramble ?? 'CRITICAL'}
      </span>
      <br />
      REVENUE_LEAK:{' '}
      <span className="text-safety-orange animate-pulse">DETECTED</span>
    </div>
  );
}
