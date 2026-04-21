/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import awdmodsHero from './assets/awdmods-hero.png';

export default function App() {
  return (
    <div className="antialiased text-cream font-sans bg-matte-black min-h-screen">
      <div className="grain"></div>
      <div className="scanline fixed inset-0 z-[100]"></div>
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-monitor-border bg-matte-black/95">
        <div className="flex justify-between items-center px-8 h-14">
          <div className="font-brutalist text-xl tracking-tighter flex items-center gap-2">
            <span className="w-2 h-2 bg-safety-orange animate-pulse"></span>
            ECP<span className="text-brass">.</span>SYSTEMS
          </div>
          <div className="hidden md:flex gap-12 text-[9px] font-black tracking-[0.3em] text-cream/40">
            <a className="hover:text-safety-orange transition-colors" href="#">SURVEILLANCE</a>
            <a className="hover:text-safety-orange transition-colors" href="#">INTEL_LOGS</a>
            <a className="hover:text-safety-orange transition-colors" href="#">ACTIVE_ORDERS</a>
          </div>
          <div className="text-[9px] font-black border border-safety-orange/30 px-3 py-1.5 text-safety-orange hover:bg-safety-orange hover:text-white transition-all cursor-pointer tracking-[0.2em]">
            COMMISSION_AUDIT
          </div>
        </div>
      </nav>
      
      <main>
        <section className="relative min-h-screen pt-24 sm:pt-32 pb-20 sm:pb-24 px-6 sm:px-8 flex items-center justify-center">
          <div className="w-full max-w-[95rem] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-24 items-center justify-between xl:px-16">
            <div className="lg:w-[45%] flex flex-col justify-center z-20 relative w-full">
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <span className="px-2 py-0.5 bg-white text-black text-[9px] font-black tracking-widest">ENFORCEMENT MODE</span>
                <span className="text-[10px] font-bold text-cream/30 tracking-widest uppercase">ID: 4492-SURVEIL-STATION</span>
              </div>
              <h1 className="font-brutalist text-massive mb-6 sm:mb-8 uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                FACTS<br/>OVER<br/><span className="text-safety-orange" style={{WebkitTextStrokeColor: '#FF4500'}}>BIAS.</span>
              </h1>
              <div className="max-w-md relative z-20">
                <p className="text-2xl font-light text-cream/80 leading-tight mb-8 drop-shadow-md">
                  One audit. Every insight. <span className="font-bold text-cream">Research-backed.</span>
                </p>
                <p className="text-sm font-medium text-cream/60 leading-relaxed mb-8">
                  800+ classified findings across 80+ reference files from Baymard Institute, Nielsen Norman Group, peer-reviewed journals, and FTC enforcement actions. Every recommendation cites its source. Every citation rated by evidence tier.
                </p>
                <div className="flex gap-4">
                  <div className="flex-[1.5] monitor-panel p-4 border-l-4 border-l-brass">
                    <div className="text-[9px] text-brass font-black mb-1">COMMAND_QUERY</div>
                    <div className="text-sm font-semibold">Not vibes. Not best practices. Actual studies, actual evidence tiers, actual legal compliance.</div>
                  </div>
                </div>
              </div>
            </div>
          
            <div className="lg:w-[55%] relative flex items-center justify-center mt-12 lg:mt-0 z-10 w-full px-4 sm:px-8 lg:px-0 overflow-visible">
            <div className="relative skew-hero group cursor-pointer w-full max-w-2xl overflow-visible">

              {/* Main screenshot — real subject under examination */}
              <div className="monitor-panel p-2 shadow-[10px_10px_0px_rgba(10,10,10,0.8)] sm:shadow-[20px_20px_0px_rgba(10,10,10,0.8)] group-hover:shadow-[15px_15px_0px_rgba(255,69,0,0.15)] sm:group-hover:shadow-[25px_25px_0px_rgba(255,69,0,0.15)] group-hover:border-safety-orange/40 border-2 sm:border-4 border-monitor-border transition-all duration-500 rounded-sm relative">
                <img
                  alt="Subject interface under examination — awdmods.com"
                  className="w-full block grayscale-[0.6] brightness-90 contrast-110 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-500"
                  src={awdmodsHero}
                />
                {/* Red redaction overlay swipes — light touch */}
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none mix-blend-multiply">
                  <div className="absolute top-[12%] left-[8%] w-[30%] h-[3px] bg-safety-orange/50"/>
                  <div className="absolute top-[68%] left-[12%] w-[22%] h-[3px] bg-safety-orange/50"/>
                </div>
              </div>

              {/* Callouts — OUTSIDE the panel, examiner's notes in the margin.
                  Hidden on narrow mobile; shown from sm (640px) up. Below hero image on mobile instead. */}
              {/* Top-left — HEADLINES & BUTTONS */}
              <div className="hidden sm:flex absolute top-[6%] -left-[12%] md:-left-[16%] lg:-left-[22%] z-20 items-start gap-2 opacity-95 group-hover:-translate-y-1 transition-transform duration-500">
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
              <div className="hidden sm:flex absolute top-[38%] -right-[12%] md:-right-[16%] lg:-right-[22%] z-20 flex-row-reverse items-start gap-2 opacity-95 group-hover:translate-x-1 transition-transform duration-500 delay-75">
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
              <div className="hidden sm:flex absolute bottom-[8%] -left-[12%] md:-left-[16%] lg:-left-[20%] z-20 items-start gap-2 opacity-95 group-hover:translate-y-1 transition-transform duration-500 delay-150">
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
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 lg:-top-8 lg:-right-8 w-32 sm:w-40 lg:w-48 monitor-panel p-2 sm:p-3 lg:p-4 text-[7px] sm:text-[8px] lg:text-[9px] font-mono leading-tight bg-matte-black border-safety-orange/40 shadow-lg group-hover:-translate-y-1 sm:group-hover:-translate-y-2 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-500 z-30">
                <span className="text-safety-orange">/ / ANALYSIS_LIVE</span><br/>
                LATENCY: 14MS<br/>
                THREAT_LEVEL: <span className="text-safety-orange">CRITICAL</span><br/>
                REVENUE_LEAK: <span className="text-safety-orange animate-pulse">DETECTED</span>
              </div>
            </div>
          </div>

          {/* Mobile callouts — stacked BELOW hero image so they're not overlapping and not hidden */}
          <div className="sm:hidden w-full flex flex-col gap-2 mt-6 px-2">
            <div className="border-l-4 border-safety-orange bg-matte-black/95 border border-monitor-border p-2 flex items-baseline gap-3 flex-wrap">
              <span className="text-[8px] opacity-80 text-safety-orange font-bold uppercase tracking-widest whitespace-nowrap">HEADLINES &amp; BUTTONS</span>
              <span className="text-[10px] font-black uppercase text-cream tracking-tighter leading-tight">Hero lacks visible promise</span>
            </div>
            <div className="border-l-4 border-brass bg-matte-black/95 border border-monitor-border p-2 flex items-baseline gap-3 flex-wrap">
              <span className="text-[8px] opacity-80 text-brass font-bold uppercase tracking-widest whitespace-nowrap">PRICE &amp; OFFERS</span>
              <span className="text-[10px] font-black uppercase text-cream tracking-tighter leading-tight">Delivery context missing</span>
            </div>
            <div className="border-l-4 border-cream/60 bg-matte-black/95 border border-monitor-border p-2 flex items-baseline gap-3 flex-wrap">
              <span className="text-[8px] opacity-80 text-cream/60 font-bold uppercase tracking-widest whitespace-nowrap">CHECKOUT EXPERIENCE</span>
              <span className="text-[10px] font-black uppercase text-cream tracking-tighter leading-tight">Fitment flow consumes decisions</span>
            </div>
          </div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full border-t border-monitor-border bg-command-gray/90 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 flex flex-col md:flex-row md:flex-wrap md:justify-between md:items-center gap-3 md:gap-4">
            <div className="text-[9px] font-black text-brass uppercase tracking-[0.2em] whitespace-nowrap">Frameworks of Authority:</div>
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
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 sm:mb-14 flex items-center gap-4">
              <span className="w-3 h-3 bg-brass"></span>
              <div className="text-[10px] font-black text-brass tracking-widest uppercase">Plain English</div>
              <div className="flex-1 h-px bg-monitor-border"></div>
            </div>
            <h2 className="font-brutalist text-3xl sm:text-5xl md:text-6xl uppercase leading-[0.95] mb-10 sm:mb-14 max-w-4xl tracking-tight">
              For people who don't<br/>work in <span className="text-safety-orange">conversion</span> all day.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
              <div className="monitor-panel p-6 sm:p-8 border border-monitor-border">
                <div className="text-[10px] font-mono text-safety-orange mb-3 tracking-widest uppercase">01 · The Problem</div>
                <h3 className="font-brutalist text-xl mb-4 uppercase leading-tight text-cream">You're paying for traffic that leaves without buying.</h3>
                <p className="text-sm text-cream/60 leading-relaxed font-medium">
                  Most people who land on an e-commerce store don't buy. That's normal. But the GAP between your visitor count and your sales count has specific causes — confusing layouts, hidden prices, broken trust cues, wrong button colors, fifty other small things. Each one is fixable. Most store owners never learn which ones matter on THEIR site.
                </p>
              </div>
              <div className="monitor-panel p-6 sm:p-8 border border-monitor-border">
                <div className="text-[10px] font-mono text-brass mb-3 tracking-widest uppercase">02 · The Audit</div>
                <h3 className="font-brutalist text-xl mb-4 uppercase leading-tight text-cream">We diagnose your store against 800+ research findings.</h3>
                <p className="text-sm text-cream/60 leading-relaxed font-medium">
                  Give us a URL — no logins, no integrations. We capture your pages on desktop and mobile, run them through an evidence-cited analysis engine, and flag every place research says visitors get stuck or distracted. Every finding ties back to a specific study or regulation. Not opinions — citations.
                </p>
              </div>
              <div className="monitor-panel p-6 sm:p-8 border border-monitor-border">
                <div className="text-[10px] font-mono text-cream/50 mb-3 tracking-widest uppercase">03 · The Report</div>
                <h3 className="font-brutalist text-xl mb-4 uppercase leading-tight text-cream">You get a document. You decide what to do.</h3>
                <p className="text-sm text-cream/60 leading-relaxed font-medium">
                  72 hours later, you receive an interactive report with every finding, its severity, its cited source, and its priority ranking. We don't lock you into implementation. We don't upsell you. You own the report. Hand it to your developer, your agency, or just read it yourself. The point is clarity, not dependency.
                </p>
              </div>
            </div>
            <div className="mt-10 sm:mt-14 flex flex-col items-center gap-6">
              <p className="text-sm sm:text-base text-cream/50 italic max-w-2xl mx-auto text-center">
                If you've ever been told "your bounce rate is high, try A/B testing" — this is the part that comes before A/B testing. Here's what to actually test, and here's the research that says why.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 mt-2">
                <a href="#pricing" className="bg-safety-orange text-white text-[11px] sm:text-xs font-black uppercase tracking-[0.18em] px-7 sm:px-9 py-4 hover:brightness-110 transition-all shadow-[0_0_30px_rgba(255,69,0,0.35)] cursor-pointer inline-block">
                  Commission an Audit →
                </a>
                <a href="/report-mockup.html" target="_blank" className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-cream/60 hover:text-brass border-b border-cream/20 hover:border-brass pb-1 transition-colors">
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

        <section className="relative py-20 sm:py-24 px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 bg-command-gray overflow-hidden">
          {/* Procedural grid wash — replaces stock phone image */}
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-[0.06]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, #d4af37 0px, #d4af37 1px, transparent 1px, transparent 32px), repeating-linear-gradient(90deg, #d4af37 0px, #d4af37 1px, transparent 1px, transparent 32px)' }} />

          <div className="lg:col-span-4 flex flex-col justify-center relative z-10">
            <h2 className="font-brutalist text-5xl sm:text-6xl md:text-7xl mb-6 leading-none">THE<br/>ETHICS<br/>GATE</h2>
            <p className="text-lg font-bold text-brass mb-4">Every audit, every phase.</p>
            <p className="text-cream/60 leading-relaxed font-medium">
              Every phase is checked against an ethics gate built from actual compliance law — FTC enforcement actions, CPRA, ROSCA, GDPR, WCAG 2.1. Every audit ships with a PASS or FAIL verdict on the patterns regulators are now fining. We flag what you already run. We refuse to recommend anything we wouldn't defend in court.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="monitor-panel p-1 border-2 border-monitor-border shadow-2xl">
              <div className="bg-matte-black p-8 md:p-12 relative">
                <div className="absolute top-4 right-6 font-mono text-[9px] text-cream/20">LOG_SERIAL: X-992-ALPHA</div>
                <div className="flex items-center gap-2 mb-8">
                  <span className="w-3 h-3 bg-brass"></span>
                  <div className="text-[10px] font-black text-brass tracking-widest uppercase">AUDIT INSIGHT EXAMPLE</div>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
                  <div className="max-w-xl">
                    <h3 className="font-brutalist text-3xl sm:text-4xl mb-6 uppercase">Mobile hero lacks a visible promise before the fitment flow</h3>
                    <p className="text-xl font-medium leading-relaxed italic text-cream/90">
                      "Visitors land on the PLP and immediately hit a year/make/model stack with no positioning above it. The fitment gate consumes the <span className="text-safety-orange">first 4 seconds</span> of attention — before the brand has established what it actually does, or why a visitor should keep scrolling."
                    </p>
                  </div>
                  <div className="monitor-panel p-4 min-w-[200px] border-brass/30">
                    <div className="text-[9px] font-black text-brass mb-2 uppercase">CLUSTER</div>
                    <div className="text-sm font-bold">Headlines &amp; Buttons</div>
                    <div className="text-[10px] font-mono text-cream/40 mt-2">Cited: Baymard · NN/g</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-monitor-border pt-8">
                  <div>
                    <div className="text-safety-orange text-[9px] font-black uppercase mb-1">Severity</div>
                    <div className="text-lg font-bold uppercase tracking-tighter">HIGH</div>
                  </div>
                  <div>
                    <div className="text-safety-orange text-[9px] font-black uppercase mb-1">Evidence Tier</div>
                    <div className="text-lg font-bold uppercase tracking-tighter">Gold</div>
                  </div>
                  <div>
                    <div className="text-safety-orange text-[9px] font-black uppercase mb-1">Device</div>
                    <div className="text-lg font-bold uppercase tracking-tighter">Mobile</div>
                  </div>
                  <div>
                    <div className="text-safety-orange text-[9px] font-black uppercase mb-1">Ethics</div>
                    <div className="text-lg font-bold uppercase tracking-tighter text-brass">PASS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24 px-6 sm:px-8 border-t border-monitor-border relative bg-matte-black overflow-hidden">
          {/* Diagonal pipeline stripes — replaces stock cyber image */}
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 28px, #FF4500 28px, #FF4500 29px)' }} />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-16">
              <span className="hidden md:block w-4 h-4 bg-safety-orange animate-pulse"></span>
              <h2 className="font-brutalist text-5xl lg:text-6xl uppercase tracking-tighter">Pipeline</h2>
              <div className="flex-1 h-px bg-monitor-border md:ml-4 relative mt-4 md:mt-0">
                <div className="absolute right-0 top-[-15px] text-[10px] font-mono text-cream/30">METH_001_ACTIVE</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="monitor-panel p-8 border-t-2 border-t-safety-orange hover:bg-monitor-border/30 transition-colors">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-[10px] text-safety-orange font-black px-2 py-1 bg-safety-orange/10 border border-safety-orange/20">PHASE_01</div>
                  <div className="text-[10px] font-mono text-cream/20">AUTO_EXEC</div>
                </div>
                <h3 className="text-xl font-bold uppercase mb-4 text-cream">Acquire</h3>
                <p className="text-xs text-cream/50 leading-relaxed font-mono">Full screenshot capture at real viewports. Rendered DOM extraction (post-hydration for SPAs). Element coordinate mapping. Dual-device parallel acquisition — desktop and mobile in a single pass.</p>
              </div>

              <div className="monitor-panel p-8 border-t-2 border-t-brass hover:bg-monitor-border/30 transition-colors">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-[10px] text-brass font-black px-2 py-1 bg-brass/10 border border-brass/20">PHASE_02</div>
                  <div className="text-[10px] font-mono text-cream/20">AWAIT_SIG</div>
                </div>
                <h3 className="text-xl font-bold uppercase mb-4 text-cream">Audit</h3>
                <p className="text-xs text-cream/50 leading-relaxed font-mono">Multi-agent analysis across 10 conversion-psychology clusters — Headlines, Trust, Price, Checkout, Performance, Media, Browse, SEO, Retention, Audience Fit. Findings scored against 800+ classified research entries.</p>
              </div>
              
              <div className="monitor-panel p-8 border-t-2 border-t-cream/50 hover:bg-monitor-border/30 transition-colors">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-[10px] text-cream/60 font-black px-2 py-1 bg-white/5 border border-white/10">PHASE_03</div>
                  <div className="text-[10px] font-mono text-cream/20">MANUAL_REV</div>
                </div>
                <h3 className="text-xl font-bold uppercase mb-4 text-cream">Ethics Gate</h3>
                <p className="text-xs text-cream/50 leading-relaxed font-mono">Every phase checked against actual compliance law — FTC enforcement actions, CPRA, ROSCA, GDPR, WCAG 2.1. Flags dark patterns you're already running. Refuses to recommend anything we wouldn't defend in court. PASS or FAIL.</p>
              </div>
              
              <div className="monitor-panel p-8 border-t-2 border-t-safety-orange hover:bg-monitor-border/30 transition-colors bg-safety-orange/5">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-[10px] text-safety-orange font-black px-2 py-1 bg-safety-orange/20 border border-safety-orange/40">PHASE_04</div>
                  <div className="text-[10px] font-mono text-safety-orange/80 animate-pulse">DEPLOY_RDY</div>
                </div>
                <h3 className="text-xl font-bold uppercase mb-4 text-cream">Priority Path</h3>
                <p className="text-xs text-cream/50 leading-relaxed font-mono">Findings compressed into a Priority Path — a short list of action stories, each one a group of related findings with a clear fix-first ranking. You fix stories, not symptoms. Exportable as a markdown brief, implementation-ready.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32 px-6 sm:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 border-b border-monitor-border pb-6 sm:pb-8 gap-6">
            <div>
              <div className="text-brass font-black text-[10px] tracking-[0.4em] mb-4 uppercase">Operational Tiers</div>
              <h2 className="font-brutalist text-4xl sm:text-5xl md:text-6xl uppercase leading-none">Levels of<br/>Depth</h2>
            </div>
            <div className="text-right text-[10px] font-mono text-cream/30 mt-8 md:mt-0 uppercase">
              Protocol: Fixed Rate Commission<br/>
              Waitlist: Active<br/>
              Region: Global Shopify
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-1">
            <div className="monitor-panel p-6 sm:p-8 lg:p-10 flex flex-col group hover:border-brass/30 transition-all cursor-pointer border border-monitor-border">
              <div className="text-[10px] font-black text-cream/30 mb-8 uppercase tracking-widest">Commission_01</div>
              <h3 className="font-brutalist text-4xl mb-1 uppercase group-hover:text-brass transition-colors">Focus</h3>
              <div className="text-3xl font-bold mb-10 text-cream/60">$397</div>
              <div className="flex-grow space-y-4 mb-12">
                <p className="text-xs font-bold uppercase tracking-widest py-3 border-b border-monitor-border flex justify-between gap-2">
                  <span>Scope</span> <span className="text-cream/30">1 Page</span>
                </p>
                <p className="text-xs font-bold uppercase tracking-widest py-3 border-b border-monitor-border flex justify-between gap-2">
                  <span>Device</span> <span className="text-cream/30">Mobile OR Desktop</span>
                </p>
                <p className="text-xs font-bold uppercase tracking-widest py-3 border-b border-monitor-border flex justify-between gap-2">
                  <span>Clusters</span> <span className="text-cream/30">All 10</span>
                </p>
                <p className="text-xs font-bold uppercase tracking-widest py-3 border-b border-monitor-border flex justify-between gap-2">
                  <span>Priority Path</span> <span className="text-cream/30">Included</span>
                </p>
              </div>
              <button className="w-full py-4 border border-cream/20 text-[10px] font-black uppercase hover:bg-cream hover:text-matte-black transition-all cursor-pointer">Select Protocol</button>
            </div>
            
            <div className="monitor-panel p-7 sm:p-9 lg:p-12 flex flex-col bg-matte-black border-2 border-safety-orange z-10 lg:-mt-4 lg:-mb-4 shadow-[0_0_50px_rgba(255,69,0,0.15)] relative">
              <div className="absolute top-0 right-0 bg-safety-orange text-white text-[9px] font-black px-4 py-1 uppercase">Recommended</div>
              <div className="text-[10px] font-black text-safety-orange mb-8 uppercase tracking-widest">Commission_02</div>
              <h3 className="font-brutalist text-5xl mb-1 uppercase">The Funnel</h3>
              <div className="text-5xl font-bold mb-12">$797</div>
              <div className="flex-grow space-y-6 mb-16">
                <p className="text-xs font-bold uppercase tracking-widest py-3 border-b border-monitor-border flex justify-between gap-2">
                  <span>Scope</span> <span className="text-safety-orange">LP + PDP + Checkout</span>
                </p>
                <p className="text-xs font-bold uppercase tracking-widest py-3 border-b border-monitor-border flex justify-between gap-2">
                  <span>Device</span> <span className="text-safety-orange">Mobile + Desktop</span>
                </p>
                <p className="text-xs font-bold uppercase tracking-widest py-3 border-b border-monitor-border flex justify-between gap-2">
                  <span>Cross-Page Path</span> <span className="text-safety-orange">Included</span>
                </p>
                <p className="text-xs font-bold uppercase tracking-widest py-3 border-b border-monitor-border flex justify-between gap-2">
                  <span>Citations</span> <span className="text-safety-orange">Gold Tier</span>
                </p>
              </div>
              <button className="w-full py-6 bg-safety-orange text-white text-[11px] font-black uppercase hover:brightness-125 transition-all shadow-[0_0_30px_rgba(255,69,0,0.4)] cursor-pointer">
                SECURE PRIORITY SLOT
              </button>
            </div>
            
            <div className="monitor-panel p-6 sm:p-8 lg:p-10 flex flex-col group hover:border-brass/30 transition-all cursor-pointer border border-monitor-border">
              <div className="text-[10px] font-black text-cream/30 mb-8 uppercase tracking-widest">Commission_03</div>
              <h3 className="font-brutalist text-4xl mb-1 uppercase group-hover:text-brass transition-colors">Full Spectrum</h3>
              <div className="text-3xl font-bold mb-10 text-cream/60">$1,497</div>
              <div className="flex-grow space-y-4 mb-12">
                <p className="text-xs font-bold uppercase tracking-widest py-3 border-b border-monitor-border flex justify-between gap-2">
                  <span>Scope</span> <span className="text-cream/30">Site-wide</span>
                </p>
                <p className="text-xs font-bold uppercase tracking-widest py-3 border-b border-monitor-border flex justify-between gap-2">
                  <span>Device</span> <span className="text-cream/30">Mobile + Desktop</span>
                </p>
                <p className="text-xs font-bold uppercase tracking-widest py-3 border-b border-monitor-border flex justify-between gap-2">
                  <span>Delta Report</span> <span className="text-cream/30">Per-Device</span>
                </p>
                <p className="text-xs font-bold uppercase tracking-widest py-3 border-b border-monitor-border flex justify-between gap-2">
                  <span>Async Q&amp;A</span> <span className="text-cream/30">14 Days</span>
                </p>
              </div>
              <button className="w-full py-4 border border-cream/20 text-[10px] font-black uppercase hover:bg-cream hover:text-matte-black transition-all cursor-pointer">Select Protocol</button>
            </div>
          </div>
        </section>

      </main>

      <footer className="py-16 sm:py-20 px-6 sm:px-8 border-t border-monitor-border bg-command-gray">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 sm:gap-12">
          <div className="max-w-sm">
            <div className="font-brutalist text-3xl mb-6 tracking-tighter">ECP<span className="text-safety-orange">.</span>SYSTEMS</div>
            <p className="text-[10px] font-bold text-cream/30 uppercase leading-loose tracking-widest">
              One audit. Every insight. Research-backed.<br/>
              800+ classified findings · 80+ reference files.<br/>
              Built on Baymard · Nielsen Norman · CXL · FTC enforcement.
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-12">
            <div className="flex gap-10 text-[9px] font-black uppercase tracking-[0.3em] text-cream/50">
              <a className="hover:text-safety-orange" href="#">Privacy_Policy</a>
              <a className="hover:text-safety-orange" href="#">Terms_of_Audit</a>
              <a className="hover:text-safety-orange" href="#">Ethical_Manifesto</a>
            </div>
            <div className="text-[8px] font-mono text-cream/20 tracking-tighter">
              VER_v1.1.0 // E-COMMERCE PSYCHOLOGY AUDIT // SYSTEM_STABLE
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
