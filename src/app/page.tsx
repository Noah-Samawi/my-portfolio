"use client";

import { Shield, Layout, Settings, Globe, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [lang, setLang] = useState("EN");
  const [darkMode, setDarkMode] = useState(false);

  // تفعيل الـ Dark Mode في نظام Next.js/Tailwind
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-500">
      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <div className="font-bold text-2xl tracking-tighter">NOAH<span className="text-blue-600">.</span></div>
        <div className="flex gap-4 items-center">
          <button 
            onClick={() => setLang(lang === "EN" ? "DE" : "EN")} 
            className="flex items-center gap-2 text-sm font-bold border border-slate-200 dark:border-slate-800 px-4 py-2 rounded-full hover:bg-slate-50 dark:hover:bg-slate-900 transition-all"
          >
            <Globe size={16} /> {lang === "EN" ? "English" : "Deutsch"}
          </button>
          
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl cursor-pointer hover:scale-110 transition-all text-blue-600 dark:text-yellow-400"
          >
             {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto py-24 px-6 text-center md:text-left">
        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-bold mb-8 animate-pulse">
          {lang === "EN" ? "• Available for new opportunities" : "• Verfügbar für neue Möglichkeiten"}
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
          Noah <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
            Al-Samawi
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed">
          {lang === "EN" 
            ? "Full-Stack Developer & IT Specialist. Building secure digital foundations with modern technology." 
            : "Full-Stack-Entwickler & IT-Spezialist. Aufbau sicherer digitaler Fundamente mit moderner Technologie."}
        </p>
        
        <div className="flex flex-col md:flex-row gap-5">
          <button className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-700 shadow-xl shadow-blue-500/30 transition-all hover:-translate-y-1">
            {lang === "EN" ? "View Portfolio" : "Portfolio ansehen"}
          </button>
          <button className="bg-slate-900 dark:bg-white text-white dark:text-black px-10 py-4 rounded-2xl font-bold hover:opacity-90 transition-all shadow-xl hover:-translate-y-1">
            {lang === "EN" ? "Contact Me" : "Kontakt aufnehmen"}
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-3 gap-8">
        <ServiceCard 
          icon={<Layout size={28} />} 
          title={lang === "EN" ? "Web Development" : "Webentwicklung"}
          desc={lang === "EN" ? "Modern applications using Next.js & React." : "Moderne Anwendungen mit Next.js & React."}
          color="text-blue-500"
        />
        <ServiceCard 
          icon={<Shield size={28} />} 
          title={lang === "EN" ? "Cybersecurity" : "Cybersicherheit"}
          desc={lang === "EN" ? "Focusing on secure code and network safety." : "Fokus auf sicheren Code und Netzwerksicherheit."}
          color="text-emerald-500"
        />
        <ServiceCard 
          icon={<Settings size={28} />} 
          title={lang === "EN" ? "IT Support" : "IT-Unterstützung"}
          desc={lang === "EN" ? "Professional tech solutions for home & office." : "Professionelle Tech-Lösungen für Büro & Zuhause."}
          color="text-orange-500"
        />
      </section>
    </main>
  );
}

// استبدل الجزء السفلي من الملف بهذا
function ServiceCard({ icon, title, desc, color }: { 
  icon: React.ReactNode; 
  title: string; 
  desc: string; 
  color: string; 
}) {
  return (
    <div className="group p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:border-blue-500/50 transition-all bg-slate-50/50 dark:bg-slate-900/40 backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/5">
      <div className={`mb-6 p-4 bg-white dark:bg-slate-800 inline-block rounded-2xl shadow-sm group-hover:scale-110 transition-transform ${color}`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}