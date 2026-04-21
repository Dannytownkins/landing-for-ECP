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
                  We dismantle digital interfaces to expose the underlying <span className="font-bold text-cream">psychological friction</span> inhibiting your revenue.
                </p>
                <div className="flex gap-4">
                  <div className="flex-[1.5] monitor-panel p-4 border-l-4 border-l-brass">
                    <div className="text-[9px] text-brass font-black mb-1">COMMAND_QUERY</div>
                    <div className="text-sm font-semibold">Initiate full funnel diagnostic across 247 compliance vectors.</div>
                  </div>
                </div>
              </div>
            </div>
          
            <div className="lg:w-[55%] relative flex items-center justify-center mt-12 lg:mt-0 z-10 w-full">
            <div className="relative skew-hero group cursor-pointer w-full max-w-2xl">

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

                {/* Callouts pinned ON-SCREEN over the image */}
                {/* Top-left — UI_VIOLATION */}
                <div className="absolute top-[6%] left-[2%] sm:left-[-4%] lg:left-[-10%] z-20 flex items-start gap-1 opacity-95 group-hover:-translate-y-1 transition-transform duration-500">
                  <div className="border-l-4 border-safety-orange bg-matte-black/95 border border-monitor-border p-1.5 sm:p-2 shadow-[3px_3px_0px_rgba(255,69,0,0.25)] max-w-[130px] sm:max-w-none">
                    <span className="block text-[7px] sm:text-[8px] opacity-80 text-safety-orange font-bold uppercase tracking-widest leading-none mb-0.5">UI_VIOLATION</span>
                    <span className="text-[8px] sm:text-[10px] font-black uppercase text-cream tracking-tighter leading-tight block">Guest checkout hidden</span>
                  </div>
                </div>

                {/* Mid-right — PSYCH_ANCHOR */}
                <div className="absolute top-[38%] right-[2%] sm:right-[-4%] lg:right-[-10%] z-20 flex items-start gap-1 opacity-95 group-hover:translate-x-1 transition-transform duration-500 delay-75">
                  <div className="border-l-4 border-brass bg-matte-black/95 border border-monitor-border p-1.5 sm:p-2 shadow-[3px_3px_0px_rgba(212,175,55,0.25)] max-w-[130px] sm:max-w-none">
                    <span className="block text-[7px] sm:text-[8px] opacity-80 text-brass font-bold uppercase tracking-widest leading-none mb-0.5">PSYCH_ANCHOR</span>
                    <span className="text-[8px] sm:text-[10px] font-black uppercase text-cream tracking-tighter leading-tight block">Price contrast lacking</span>
                  </div>
                </div>

                {/* Bottom-left — FRICTION_PT */}
                <div className="absolute bottom-[8%] left-[2%] sm:left-[-4%] lg:left-[-8%] z-20 flex items-start gap-1 opacity-95 group-hover:translate-y-1 transition-transform duration-500 delay-150">
                  <div className="border-l-4 border-cream/60 bg-matte-black/95 border border-monitor-border p-1.5 sm:p-2 shadow-[3px_3px_0px_rgba(255,255,255,0.15)] max-w-[130px] sm:max-w-none">
                    <span className="block text-[7px] sm:text-[8px] opacity-80 text-cream/60 font-bold uppercase tracking-widest leading-none mb-0.5">FRICTION_PT</span>
                    <span className="text-[8px] sm:text-[10px] font-black uppercase text-cream tracking-tighter leading-tight block">Forced registration</span>
                  </div>
                </div>
              </div>

              {/* Live analysis readout — top-right corner */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 lg:-top-8 lg:-right-8 w-32 sm:w-40 lg:w-48 monitor-panel p-2 sm:p-3 lg:p-4 text-[7px] sm:text-[8px] lg:text-[9px] font-mono leading-tight bg-matte-black border-safety-orange/40 shadow-lg group-hover:-translate-y-1 sm:group-hover:-translate-y-2 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-500">
                <span className="text-safety-orange">/ / ANALYSIS_LIVE</span><br/>
                LATENCY: 14MS<br/>
                THREAT_LEVEL: <span className="text-safety-orange">CRITICAL</span><br/>
                REVENUE_LEAK: <span className="text-safety-orange animate-pulse">DETECTED</span>
              </div>
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

        <section className="relative py-20 sm:py-24 px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 bg-command-gray overflow-hidden">
          {/* Procedural grid wash — replaces stock phone image */}
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-[0.06]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, #d4af37 0px, #d4af37 1px, transparent 1px, transparent 32px), repeating-linear-gradient(90deg, #d4af37 0px, #d4af37 1px, transparent 1px, transparent 32px)' }} />

          <div className="lg:col-span-4 flex flex-col justify-center relative z-10">
            <h2 className="font-brutalist text-7xl mb-6 leading-none">THE<br/>ETHICS<br/>GATE</h2>
            <p className="text-lg font-bold text-brass mb-4">Command Directive: 001</p>
            <p className="text-cream/60 leading-relaxed font-medium">
              We operate as a clinical research bureau. Our loyalty is to the data, not the client's ego. If your store uses predatory patterns, we will flag them for immediate termination.
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
                    <h3 className="font-brutalist text-4xl mb-6 uppercase">Friction Detected</h3>
                    <p className="text-xl font-medium leading-relaxed italic text-cream/90">
                      "The checkout path requires three clicks to reach the payment gateway after item addition. Industry benchmarks suggest a <span className="text-safety-orange">22% drop-off</span> per unnecessary interaction."
                    </p>
                  </div>
                  <div className="monitor-panel p-4 min-w-[200px] border-brass/30">
                    <div className="text-[9px] font-black text-brass mb-2 uppercase">CITED SOURCE</div>
                    <div className="text-sm font-bold">Baymard Institute</div>
                    <div className="text-[10px] font-mono text-cream/40">Ref: Checkout-Psych-2024</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-monitor-border pt-8">
                  <div>
                    <div className="text-safety-orange text-[9px] font-black uppercase mb-1">Impact</div>
                    <div className="text-lg font-bold uppercase tracking-tighter">Severe</div>
                  </div>
                  <div>
                    <div className="text-safety-orange text-[9px] font-black uppercase mb-1">Confidence</div>
                    <div className="text-lg font-bold uppercase tracking-tighter">98% Verified</div>
                  </div>
                  <div>
                    <div className="text-safety-orange text-[9px] font-black uppercase mb-1">Effort</div>
                    <div className="text-lg font-bold uppercase tracking-tighter">Low Complex</div>
                  </div>
                  <div>
                    <div className="text-safety-orange text-[9px] font-black uppercase mb-1">Status</div>
                    <div className="text-lg font-bold uppercase tracking-tighter">Actionable</div>
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
                <h3 className="text-xl font-bold uppercase mb-4 text-cream">Reconnaissance</h3>
                <p className="text-xs text-cream/50 leading-relaxed font-mono">Automated crawling of all user flows. Event tracking extraction and DOM snapshotting across 14 device profiles to gather baseline data.</p>
              </div>

              <div className="monitor-panel p-8 border-t-2 border-t-brass hover:bg-monitor-border/30 transition-colors">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-[10px] text-brass font-black px-2 py-1 bg-brass/10 border border-brass/20">PHASE_02</div>
                  <div className="text-[10px] font-mono text-cream/20">AWAIT_SIG</div>
                </div>
                <h3 className="text-xl font-bold uppercase mb-4 text-cream">Pattern Extrac.</h3>
                <p className="text-xs text-cream/50 leading-relaxed font-mono">Heuristic analysis of the captured UI against 247 known psychological traps, dark patterns, and cognitive friction vectors.</p>
              </div>
              
              <div className="monitor-panel p-8 border-t-2 border-t-cream/50 hover:bg-monitor-border/30 transition-colors">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-[10px] text-cream/60 font-black px-2 py-1 bg-white/5 border border-white/10">PHASE_03</div>
                  <div className="text-[10px] font-mono text-cream/20">MANUAL_REV</div>
                </div>
                <h3 className="text-xl font-bold uppercase mb-4 text-cream">Impact Quantify</h3>
                <p className="text-xs text-cream/50 leading-relaxed font-mono">Assigning revenue-loss probability metrics to each friction point using global anonymized checkout and registration benchmarks.</p>
              </div>
              
              <div className="monitor-panel p-8 border-t-2 border-t-safety-orange hover:bg-monitor-border/30 transition-colors bg-safety-orange/5">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-[10px] text-safety-orange font-black px-2 py-1 bg-safety-orange/20 border border-safety-orange/40">PHASE_04</div>
                  <div className="text-[10px] font-mono text-safety-orange/80 animate-pulse">DEPLOY_RDY</div>
                </div>
                <h3 className="text-xl font-bold uppercase mb-4 text-cream">Protocol Issue</h3>
                <p className="text-xs text-cream/50 leading-relaxed font-mono">Generation of the final, executable action plan. Ranked by lowest technical effort to highest immediate revenue retention.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32 px-6 sm:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 border-b border-monitor-border pb-6 sm:pb-8 gap-6">
            <div>
              <div className="text-brass font-black text-[10px] tracking-[0.4em] mb-4 uppercase">Operational Tiers</div>
              <h2 className="font-brutalist text-6xl uppercase leading-none">Levels of<br/>Depth</h2>
            </div>
            <div className="text-right text-[10px] font-mono text-cream/30 mt-8 md:mt-0 uppercase">
              Protocol: Fixed Rate Commission<br/>
              Waitlist: Active<br/>
              Region: Global Shopify
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
            <div className="monitor-panel p-10 flex flex-col group hover:border-brass/30 transition-all cursor-pointer">
              <div className="text-[10px] font-black text-cream/30 mb-8 uppercase tracking-widest">Commission_01</div>
              <h3 className="font-brutalist text-4xl mb-1 uppercase group-hover:text-brass transition-colors">Focus</h3>
              <div className="text-3xl font-bold mb-10 text-cream/60">$397</div>
              <div className="flex-grow space-y-4 mb-12">
                <p className="text-xs font-bold uppercase tracking-widest py-3 border-b border-monitor-border flex justify-between">
                  <span>Funnel Path</span> <span className="text-cream/30">Primary</span>
                </p>
                <p className="text-xs font-bold uppercase tracking-widest py-3 border-b border-monitor-border flex justify-between">
                  <span>UX Violations</span> <span className="text-cream/30">Top 10</span>
                </p>
              </div>
              <button className="w-full py-4 border border-cream/20 text-[10px] font-black uppercase hover:bg-cream hover:text-matte-black transition-all cursor-pointer">Select Protocol</button>
            </div>
            
            <div className="monitor-panel p-12 flex flex-col bg-matte-black border-2 border-safety-orange z-10 lg:-mt-4 lg:-mb-4 shadow-[0_0_50px_rgba(255,69,0,0.15)] relative">
              <div className="absolute top-0 right-0 bg-safety-orange text-white text-[9px] font-black px-4 py-1 uppercase">Recommended</div>
              <div className="text-[10px] font-black text-safety-orange mb-8 uppercase tracking-widest">Commission_02</div>
              <h3 className="font-brutalist text-5xl mb-1 uppercase">The Funnel</h3>
              <div className="text-5xl font-bold mb-12">$797</div>
              <div className="flex-grow space-y-6 mb-16">
                <p className="text-xs font-bold uppercase tracking-widest py-3 border-b border-monitor-border flex justify-between">
                  <span>Full Journey Map</span> <span className="text-safety-orange">Verified</span>
                </p>
                <p className="text-xs font-bold uppercase tracking-widest py-3 border-b border-monitor-border flex justify-between">
                  <span>Research Citations</span> <span className="text-safety-orange">Verified</span>
                </p>
                <p className="text-xs font-bold uppercase tracking-widest py-3 border-b border-monitor-border flex justify-between">
                  <span>Priority Implementation</span> <span className="text-safety-orange">Verified</span>
                </p>
              </div>
              <button className="w-full py-6 bg-safety-orange text-white text-[11px] font-black uppercase hover:brightness-125 transition-all shadow-[0_0_30px_rgba(255,69,0,0.4)] cursor-pointer">
                SECURE PRIORITY SLOT
              </button>
            </div>
            
            <div className="monitor-panel p-10 flex flex-col group hover:border-brass/30 transition-all cursor-pointer">
              <div className="text-[10px] font-black text-cream/30 mb-8 uppercase tracking-widest">Commission_03</div>
              <h3 className="font-brutalist text-4xl mb-1 uppercase group-hover:text-brass transition-colors">Full Spectrum</h3>
              <div className="text-3xl font-bold mb-10 text-cream/60">$1,497</div>
              <div className="flex-grow space-y-4 mb-12">
                <p className="text-xs font-bold uppercase tracking-widest py-3 border-b border-monitor-border flex justify-between">
                  <span>Site-Wide Audit</span> <span className="text-cream/30">Total</span>
                </p>
                <p className="text-xs font-bold uppercase tracking-widest py-3 border-b border-monitor-border flex justify-between">
                  <span>Benchmarking</span> <span className="text-cream/30">Vs Top 3</span>
                </p>
                <p className="text-xs font-bold uppercase tracking-widest py-3 border-b border-monitor-border flex justify-between">
                  <span>Strategic Advisory</span> <span className="text-cream/30">60 Min</span>
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
              Independent Research Bureau No. 88-X.<br/>
              All data processing is conducted within secure local environments.<br/>
              Proprietary psychological methodology applied.
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-12">
            <div className="flex gap-10 text-[9px] font-black uppercase tracking-[0.3em] text-cream/50">
              <a className="hover:text-safety-orange" href="#">Privacy_Policy</a>
              <a className="hover:text-safety-orange" href="#">Terms_of_Audit</a>
              <a className="hover:text-safety-orange" href="#">Ethical_Manifesto</a>
            </div>
            <div className="text-[8px] font-mono text-cream/20 tracking-tighter">
              VER_2024.09.12 // BUREAU OF PSYCHOLOGICAL RIGOR // SYSTEM_STABLE
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
