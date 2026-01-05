"use client";

import { Shield, Layout, Settings, Globe, Moon, Sun, GraduationCap, Code2, Briefcase, Cpu, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [lang, setLang] = useState("EN");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // مصفوفات البيانات
  const projects = [
    {
      id: "01",
      title: lang === "EN" ? "E-Commerce Platform" : "E-Commerce Plattform",
      desc: lang === "EN" ? "Full-stack e-commerce solution with React and Django." : "Full-Stack-E-Commerce-Lösung mit React und Django.",
      tags: ["React", "Django", "PostgreSQL"]
    },
    {
      id: "02",
      title: lang === "EN" ? "Task Management" : "Aufgabenmanagement",
      desc: lang === "EN" ? "Real-time collaborative application." : "Echtzeit-Kollaborationsanwendung.",
      tags: ["Next.js", "WebSockets", "Redis"]
    }
  ];

  const skills = [
    { name: "Python / Django", level: "90%" },
    { name: "JavaScript / TypeScript", level: "85%" },
    { name: "React / Next.js", level: "85%" },
    { name: "Cybersecurity", level: "80%" },
    { name: "SQL & Databases", level: "85%" },
    { name: "Enterprise IT Support", level: "95%" }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-500">
      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
        <div className="font-bold text-2xl tracking-tighter italic">NOAH<span className="text-blue-600">.</span></div>
        <div className="flex gap-4 items-center">
          <button 
            onClick={() => setLang(lang === "EN" ? "DE" : "EN")} 
            className="flex items-center gap-2 text-sm font-bold border border-slate-200 dark:border-slate-800 px-4 py-2 rounded-full hover:bg-slate-50 dark:hover:bg-slate-900 transition-all"
          >
            <Globe size={16} /> {lang === "EN" ? "English" : "Deutsch"}
          </button>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl hover:scale-110 transition-all text-blue-600 dark:text-yellow-400"
          >
             {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-bold mb-8 animate-pulse">
            {lang === "EN" ? "• Available for new opportunities" : "• Verfügbar für neue Möglichkeiten"}
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
            Noah <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
              Al-Samawi
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed">
            {lang === "EN" 
              ? "Full-Stack Developer & IT Specialist based in Frankfurt. 6+ years of experience in enterprise tech." 
              : "Full-Stack-Entwickler & IT-Spezialist in Frankfurt. 6+ Jahre Erfahrung in Enterprise-Technologie."}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1">
              {lang === "EN" ? "View Portfolio" : "Portfolio ansehen"}
            </button>
            <button className="bg-slate-900 dark:bg-white text-white dark:text-black px-8 py-4 rounded-2xl font-bold hover:opacity-90 transition-all hover:-translate-y-1">
              {lang === "EN" ? "Contact Me" : "Kontakt aufnehmen"}
            </button>
          </div>
        </div>
        <div className="hidden md:block relative">
           <div className="w-full h-[400px] bg-gradient-to-br from-blue-600/20 to-indigo-500/20 rounded-[3rem] border border-blue-500/20 backdrop-blur-3xl flex items-center justify-center">
              <Cpu size={120} className="text-blue-600 opacity-20 animate-spin-slow" />
           </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square bg-slate-200 dark:bg-slate-800 rounded-[3rem] overflow-hidden flex items-center justify-center border-4 border-white dark:border-slate-800 shadow-2xl">
                 <span className="text-9xl">👤</span>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-[2rem] shadow-2xl transform hover:rotate-3 transition-transform">
                <p className="text-4xl font-black italic">6+</p>
                <p className="text-sm font-bold opacity-90 uppercase tracking-widest">{lang === "EN" ? "Years Exp" : "Jahre Erf"}</p>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-black tracking-tight">{lang === "EN" ? "About Me" : "Über mich"}</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {lang === "EN" 
                  ? "Software Developer and IT Systems Engineer based in Frankfurt, Germany. I specialize in building secure, scalable applications and managing enterprise-level infrastructure." 
                  : "Softwareentwickler und IT-Systemingenieur mit Sitz in Frankfurt, Deutschland. Ich bin spezialisiert auf den Aufbau sicherer, skalierbarer Anwendungen."}
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-xl"><GraduationCap size={24}/></div>
                  <div>
                    <p className="font-bold text-sm">{lang === "EN" ? "B.Sc. Computer Science" : "B.Sc. Informatik"}</p>
                    <p className="text-xs text-slate-500">Sanaa University</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 rounded-xl"><Briefcase size={24}/></div>
                  <div>
                    <p className="font-bold text-sm">Full-Stack Diploma (2024)</p>
                    <p className="text-xs text-slate-500">Code Institute, Dublin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">{lang === "EN" ? "Core Services" : "Kernleistungen"}</h2>
          <p className="text-slate-500">{lang === "EN" ? "Expertise built over years of field experience" : "Über Jahre gewachsene Expertise"}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard icon={<Layout size={28} />} title="Web Dev" desc="Next.js & React Expert" color="text-blue-500" />
          <ServiceCard icon={<Shield size={28} />} title="Security" desc="Secure Code & Networks" color="text-emerald-500" />
          <ServiceCard icon={<Settings size={28} />} title="IT Support" desc="Enterprise Infrastructure" color="text-orange-500" />
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto py-24 px-6 border-t border-slate-100 dark:border-slate-800">
        <h2 className="text-4xl font-black mb-12 text-center">{lang === "EN" ? "Technical Stack" : "Technischer Stack"}</h2>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="font-bold">{skill.name}</span>
                <span className="text-blue-600 font-bold">{skill.level}</span>
              </div>
              <div className="h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full transition-all duration-1000" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-slate-100 dark:border-slate-900 text-slate-400 text-sm">
        <p>© 2026 Noah Al-Samawi. {lang === "EN" ? "All rights reserved." : "Alle Rechte vorbehalten."}</p>
      </footer>
    </main>
  );
}

function ServiceCard({ icon, title, desc, color }: { icon: React.ReactNode; title: string; desc: string; color: string; }) {
  return (
    <div className="group p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:border-blue-500/50 transition-all bg-slate-50/50 dark:bg-slate-900/40 backdrop-blur-sm hover:shadow-2xl">
      <div className={`mb-6 p-4 bg-white dark:bg-slate-800 inline-block rounded-2xl shadow-sm group-hover:scale-110 transition-transform ${color}`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{desc}</p>
    </div>
  );
}