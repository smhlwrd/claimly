import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const pageTransition = {
  initial: { opacity: 0, y: 42, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -26, filter: "blur(8px)", transition: { duration: 0.55 } }
};

const logos = ["Insurix", "NovaCover", "AegisAI", "SureFlow", "Helio Insurance", "NorthBridge", "Orbit Claims", "Vantis"];

export default function ClaimlyWebsite() {
  const [page, setPage] = useState("home");
  const [dark, setDark] = useState(false);
  const [file, setFile] = useState(null);
  const [modal, setModal] = useState(false);

  const theme = dark ? "bg-[#050505] text-white" : "bg-[#fafafa] text-gray-950";
  const card = dark ? "bg-white/5 border-white/10" : "bg-white/80 border-black/10";
  const muted = dark ? "text-white/65" : "text-gray-600";
  const panel = dark ? "bg-black/40" : "bg-gray-50";

  const go = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const Glow = () => (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className={`absolute -top-36 left-1/2 h-[460px] w-[460px] -translate-x-1/2 rounded-full blur-[130px] ${dark ? "bg-purple-500/20" : "bg-indigo-300/35"}`} />
      <div className={`absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full blur-[130px] ${dark ? "bg-blue-500/20" : "bg-cyan-200/45"}`} />
    </div>
  );

  const Navbar = () => {
    const shareOnWhatsApp = () => {
      const text = encodeURIComponent("Check out Claimly — an AI-powered insurance claims automation platform: " + window.location.href);
      window.open(`https://wa.me/?text=${text}`, "_blank");
    };

    return (
      <nav className={`sticky top-0 z-30 flex justify-between items-center px-8 py-5 border-b backdrop-blur-xl ${dark ? "border-white/10 bg-black/60" : "border-black/10 bg-white/70"}`}>
        <h1 className="text-xl font-semibold cursor-pointer tracking-tight" onClick={() => go("home")}>Claimly</h1>
        <div className="hidden md:flex items-center gap-6 text-sm opacity-85">
          <button onClick={() => go("how")}>How it works</button>
          <button onClick={() => go("features")}>Features</button>
          <button onClick={() => go("case")}>Case study</button>
          <button onClick={() => go("pricing")}>Pricing</button>
          <button onClick={() => go("contact")}>Enterprise</button>
          <button onClick={() => setDark(!dark)}>{dark ? "Light" : "Dark"}</button>
          <button onClick={shareOnWhatsApp} className={`rounded-full border px-4 py-2 ${dark ? "border-white/10 hover:bg-white/10" : "border-black/10 hover:bg-black/5"}`}>Share via WhatsApp</button>
          <Button onClick={() => setModal(true)} className="rounded-full">Request demo</Button>
        </div>
      </nav>
    );
  };

  const Wrapper = ({ children }) => (
    <motion.div key={page} variants={pageTransition} initial="initial" animate="animate" exit="exit" className="min-h-screen overflow-y-auto scroll-smooth relative">
      <Glow />
      {children}
    </motion.div>
  );

  const FloatingLogos = () => (
    <div className={`relative mt-14 overflow-hidden rounded-full border py-4 ${dark ? "border-white/10 bg-white/5" : "border-black/10 bg-white/80"}`}>
      <motion.div className="flex whitespace-nowrap gap-12 px-8" animate={{ x: [0, -760] }} transition={{ repeat: Infinity, duration: 22, ease: "linear" }}>
        {[...logos, ...logos, ...logos].map((l, i) => <span key={i} className="text-sm font-medium opacity-55">{l}</span>)}
      </motion.div>
    </div>
  );

  const Metrics = () => (
    <div className="grid md:grid-cols-4 gap-5 max-w-5xl mx-auto mt-12 text-center px-8">
      {[{ v: "-68%", l: "Processing time" }, { v: "+42%", l: "NPS improvement" }, { v: "€2.1M", l: "Annual cost savings" }, { v: "94%", l: "Auto-triage accuracy" }].map((m, i) => (
        <motion.div key={i} whileHover={{ y: -6 }} className={`border rounded-2xl p-6 shadow-sm ${card}`}>
          <p className="text-3xl font-semibold">{m.v}</p>
          <p className={`text-sm mt-2 ${muted}`}>{m.l}</p>
        </motion.div>
      ))}
    </div>
  );

  const AnimatedChart = () => (
    <div className="mt-6 flex items-end gap-3 h-32">
      {[55, 78, 45, 92, 70, 112, 96].map((h, i) => (
        <motion.div key={i} initial={{ height: 18 }} animate={{ height: h }} transition={{ duration: 1.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }} className={`w-full rounded-t-xl ${dark ? "bg-white/25" : "bg-gray-900/20"}`} />
      ))}
    </div>
  );

  const DashboardMock = () => (
    <motion.div whileHover={{ scale: 1.015, y: -4 }} transition={{ duration: 0.5 }} className={`border rounded-3xl p-7 shadow-2xl ${card}`}>
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm opacity-60">Claims Command Center</p>
        <span className="text-xs rounded-full px-3 py-1 bg-green-500/15 text-green-500">Live</span>
      </div>
      <div className="grid grid-cols-3 gap-3 text-sm mb-6">
        <div className={`${panel} rounded-2xl p-4`}><p className="opacity-60">Today</p><p className="text-2xl">1,284</p></div>
        <div className={`${panel} rounded-2xl p-4`}><p className="opacity-60">Flagged</p><p className="text-2xl">31</p></div>
        <div className={`${panel} rounded-2xl p-4`}><p className="opacity-60">Avg.</p><p className="text-2xl">2.8m</p></div>
      </div>
      <AnimatedChart />
      <div className="space-y-3 text-sm mt-7">
        <div className="flex justify-between"><span>Claim #1823 · Rear bumper</span><span className="text-green-500">Approved</span></div>
        <div className="flex justify-between"><span>Claim #1824 · Lost luggage</span><span className="text-yellow-500">Review</span></div>
        <div className="flex justify-between"><span>Claim #1825 · Phone damage</span><span className="text-red-500">Flagged</span></div>
      </div>
    </motion.div>
  );

  const DemoModal = () => (
    <AnimatePresence>
      {modal && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-6">
          <motion.div initial={{ scale: 0.94, y: 24 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.94, y: 24 }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }} className={`w-full max-w-lg rounded-3xl border p-8 shadow-2xl ${dark ? "bg-[#0b0b0b] border-white/10" : "bg-white border-black/10"}`}>
            <div className="flex justify-between items-start mb-6"><div><h3 className="text-2xl font-semibold">Request a demo</h3><p className={`mt-2 ${muted}`}>See how Claimly fits your claim operations.</p></div><button onClick={() => setModal(false)} className="opacity-50">✕</button></div>
            <div className="space-y-3">
              <input placeholder="Work email" className={`w-full rounded-xl border px-4 py-3 bg-transparent ${dark ? "border-white/10" : "border-black/10"}`} />
              <input placeholder="Company name" className={`w-full rounded-xl border px-4 py-3 bg-transparent ${dark ? "border-white/10" : "border-black/10"}`} />
              <select className={`w-full rounded-xl border px-4 py-3 bg-transparent ${dark ? "border-white/10" : "border-black/10"}`}><option>Monthly claims volume</option><option>0–5,000</option><option>5,000–50,000</option><option>50,000+</option></select>
              <Button className="w-full rounded-xl py-6" onClick={() => setModal(false)}>Book enterprise demo</Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  const Home = () => (
    <Wrapper>
      <section className="px-8 pt-28 pb-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className={`inline-flex rounded-full border px-4 py-2 text-xs mb-6 ${dark ? "border-white/10 bg-white/5" : "border-black/10 bg-white"}`}>Enterprise AI for claims automation</motion.div>
          <h2 className="text-6xl font-semibold leading-tight mb-6">AI infrastructure for <span className="text-gray-400">modern insurance</span></h2>
          <p className={`text-lg mb-6 ${muted}`}>Claimly helps insurers automate claim intake, damage assessment, fraud triage, and decision support from one premium platform.</p>
          <p className={`mb-8 ${muted}`}>Insurance claims are often slow, manual, and expensive. Claimly gives insurers a faster, more consistent, and more customer-friendly operating model.</p>
          <div className="flex gap-4"><Button onClick={() => go("demo")} className="rounded-full px-7">Try demo</Button><Button variant="outline" onClick={() => setModal(true)} className="rounded-full px-7">Request enterprise demo</Button></div>
          <FloatingLogos />
        </div>
        <DashboardMock />
      </section>
      <Metrics />
      <section className="px-8 py-24 max-w-5xl mx-auto text-center"><h3 className="text-3xl mb-5">Built to make claims feel instant</h3><p className={`max-w-2xl mx-auto ${muted}`}>Claimly reduces repetitive manual reviews, creates structured claim summaries, and supports human claim handlers with explainable AI recommendations.</p></section>
    </Wrapper>
  );

  const Demo = () => (
    <Wrapper>
      <div className="px-8 py-28 text-center max-w-4xl mx-auto">
        <h3 className="text-4xl font-semibold mb-5">Interactive claim simulation</h3>
        <p className={`${muted} mb-10`}>Upload a mock claim image to simulate automated damage classification, payout estimation, and fraud triage.</p>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} className="mb-8" />
        {file && <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className={`mx-auto max-w-xl border rounded-3xl p-8 ${card}`}><h4 className="text-xl mb-4">AI Claim Report</h4><div className="grid grid-cols-2 gap-4 text-left text-sm"><div className={`${panel} rounded-2xl p-4`}>Detected damage<br/><strong>Structural impact</strong></div><div className={`${panel} rounded-2xl p-4`}>Cost estimate<br/><strong>€900–€1,300</strong></div><div className={`${panel} rounded-2xl p-4`}>Fraud risk<br/><strong className="text-green-500">Low · 12%</strong></div><div className={`${panel} rounded-2xl p-4`}>Recommendation<br/><strong>Fast-track review</strong></div></div></motion.div>}
      </div>
    </Wrapper>
  );

  const How = () => (
    <Wrapper>
      <div className="py-28 px-8 text-center max-w-6xl mx-auto">
        <h3 className="text-4xl font-semibold mb-6">How it works</h3><p className={`${muted} max-w-2xl mx-auto mb-14`}>Claimly combines computer vision, document intelligence, and predictive analytics to automate the claims lifecycle.</p>
        <div className="grid md:grid-cols-4 gap-6">{[{t:"1. Intake",d:"Customers upload images, receipts, and incident descriptions."},{t:"2. AI extraction",d:"Documents and photos are transformed into structured claim data."},{t:"3. Risk scoring",d:"Models flag anomalies, duplicate claims, and inconsistent details."},{t:"4. Decision support",d:"Handlers receive payout ranges and approval recommendations."}].map((s,i)=><motion.div key={i} whileHover={{y:-8}} className={`border rounded-3xl p-7 text-left ${card}`}><h4 className="text-xl mb-3">{s.t}</h4><p className={`text-sm ${muted}`}>{s.d}</p></motion.div>)}</div>
      </div>
    </Wrapper>
  );

  const Features = () => (
    <Wrapper>
      <div className="py-28 px-8 text-center max-w-6xl mx-auto">
        <h3 className="text-4xl font-semibold mb-6">Platform capabilities</h3><p className={`${muted} max-w-2xl mx-auto mb-14`}>Designed for insurers that need automation without losing control, compliance, or explainability.</p>
        <div className="grid md:grid-cols-3 gap-8">{[{title:"Computer vision",desc:"Detects visible damage in vehicle, device, property, and travel-related claims."},{title:"Fraud intelligence",desc:"Uses anomaly detection to identify suspicious patterns and repeated submissions."},{title:"Document AI",desc:"Reads receipts, invoices, policy documents, and customer descriptions automatically."},{title:"Explainable output",desc:"Every recommendation includes confidence scores and reasoning summaries."},{title:"Human-in-the-loop",desc:"AI supports handlers instead of replacing sensitive final decisions."},{title:"API-first integration",desc:"Connects with insurer portals, CRM systems, and claims management software."}].map((f,i)=><motion.div key={i} whileHover={{scale:1.025,y:-5}} className={`border rounded-3xl p-8 text-left ${card}`}><h4 className="text-xl mb-3">{f.title}</h4><p className={`text-sm ${muted}`}>{f.desc}</p></motion.div>)}</div>
      </div>
    </Wrapper>
  );

  const CaseStudy = () => (
    <Wrapper>
      <div className="py-28 px-8 max-w-6xl mx-auto">
        <div className="text-center mb-14"><h3 className="text-4xl font-semibold mb-5">Case study: NovaCover</h3><p className={`${muted} max-w-2xl mx-auto`}>A digital travel insurer used Claimly to automate lost luggage and delay claims during peak summer demand.</p></div>
        <div className="grid md:grid-cols-2 gap-8"><div className={`border rounded-3xl p-8 ${card}`}><h4 className="text-2xl mb-4">Before Claimly</h4><ul className={`space-y-3 ${muted}`}><li>Average claim handling time: 3.4 days</li><li>Manual document review for every submission</li><li>High support volume during travel disruptions</li><li>Inconsistent payout estimates between handlers</li></ul></div><div className={`border rounded-3xl p-8 ${card}`}><h4 className="text-2xl mb-4">After Claimly</h4><ul className={`space-y-3 ${muted}`}><li>Average claim handling time: 22 minutes</li><li>72% of simple claims auto-triaged</li><li>31% fewer customer support tickets</li><li>More consistent decisions through structured scoring</li></ul></div></div>
        <Metrics />
      </div>
    </Wrapper>
  );

  const Pricing = () => (
    <Wrapper>
      <div className="py-28 px-8 text-center max-w-6xl mx-auto"><h3 className="text-4xl font-semibold mb-5">Pricing</h3><p className={`${muted} mb-14`}>Flexible pricing built around claim volume and integration depth.</p><div className="grid md:grid-cols-3 gap-8">{[{title:"Starter",price:"€1 / claim",desc:"For pilots and small insurers",items:["Claim intake automation","Basic AI summaries","Email support"]},{title:"Growth",price:"€3 / claim",desc:"For scaling claim operations",items:["Fraud scoring","API integrations","Analytics dashboard"]},{title:"Enterprise",price:"Custom",desc:"For large insurers",items:["Dedicated infrastructure","Custom SLA","Compliance workflows"]}].map((p,i)=><motion.div key={i} whileHover={{y:-8}} className={`border rounded-3xl p-8 text-left ${card}`}><h4 className="text-2xl mb-2">{p.title}</h4><p className="text-3xl mb-3">{p.price}</p><p className={`${muted} mb-6`}>{p.desc}</p><ul className={`space-y-2 text-sm mb-7 ${muted}`}>{p.items.map((it,j)=><li key={j}>✓ {it}</li>)}</ul><Button onClick={() => setModal(true)} className="w-full rounded-full">Start using it</Button></motion.div>)}</div></div>
    </Wrapper>
  );

  const Contact = () => (
    <Wrapper>
      <div className="py-28 px-8 text-center max-w-3xl mx-auto"><h3 className="text-4xl font-semibold mb-6">Start using Claimly</h3><p className={`${muted} mb-8`}>For enterprise insurers, Claimly provides custom onboarding, security review support, data processing agreements, and system integrations.</p><div className={`border rounded-3xl p-8 mb-8 text-left ${card}`}><p className="font-medium mb-3">Enterprise rollout includes:</p><ul className={`space-y-2 text-sm ${muted}`}><li>1. Data mapping and claims workflow audit</li><li>2. Sandbox integration with your current claims platform</li><li>3. Pilot on one claim category, such as travel or device insurance</li><li>4. Gradual expansion to higher-volume claim lines</li></ul></div><Button onClick={() => setModal(true)} className="rounded-full px-8">Contact sales</Button></div>
    </Wrapper>
  );

  return (
    <div className={`${theme} min-h-screen transition-colors`}>
      <Navbar />
      <AnimatePresence mode="wait">
        {page === "home" && <Home />}
        {page === "demo" && <Demo />}
        {page === "how" && <How />}
        {page === "features" && <Features />}
        {page === "case" && <CaseStudy />}
        {page === "pricing" && <Pricing />}
        {page === "contact" && <Contact />}
      </AnimatePresence>
      <DemoModal />
      <footer className="py-10 text-center opacity-40 text-sm">© {new Date().getFullYear()} Claimly — AI Infrastructure for Insurance</footer>
    </div>
  );
}
