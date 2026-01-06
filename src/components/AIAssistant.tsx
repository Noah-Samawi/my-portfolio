"use client";
import { MessageSquare, X, Send, Briefcase, Shield, Mail } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm Noah's digital guide. How can I help you explore his work today?" }
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // دالة التعامل مع الخيارات السريعة
  const handleQuickReply = (option: string) => {
    const userMsg = { role: "user", content: option };
    let botContent = "";

    if (option.includes("Projects")) {
      botContent = "Noah has developed several high-end applications, including E-commerce platforms and Task Systems. You can scroll down to the 'Technical Stack' section to see the live links! Which technology are you interested in?";
    } else if (option.includes("Security")) {
      botContent = "Security is Noah's priority. With 6+ years in IT, he ensures all his web builds follow OWASP safety standards and secure coding practices.";
    } else if (option.includes("Contact")) {
      botContent = "You can reach Noah directly via email at: noah.alsamawi@gmail.com or by clicking the 'Contact Me' button in the header.";
    }

    setMessages([...messages, userMsg, { role: "assistant", content: botContent }]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-85 h-[500px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-5 bg-blue-600 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-bold text-sm tracking-tight">Noah Intelligence</span>
              </div>
              <button onClick={() => setIsOpen(false)}><X size={18} /></button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50 dark:bg-slate-950/50">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user" 
                    ? "bg-blue-600 text-white rounded-tr-none" 
                    : "bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 rounded-tl-none"
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              
              {/* أزرار الرد السريع للزائر */}
              {messages[messages.length - 1].role === "assistant" && (
                <div className="flex flex-wrap gap-2 pt-2">
                  <button onClick={() => handleQuickReply("View Projects 🚀")} className="text-xs bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 px-3 py-2 rounded-full border border-blue-200 dark:border-blue-800 hover:bg-blue-600 hover:text-white transition-all">
                    View Projects 🚀
                  </button>
                  <button onClick={() => handleQuickReply("Security Skills 🛡️")} className="text-xs bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300 px-3 py-2 rounded-full border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-600 hover:text-white transition-all">
                    Security Skills 🛡️
                  </button>
                  <button onClick={() => handleQuickReply("How to Contact? ✉️")} className="text-xs bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 px-3 py-2 rounded-full border border-purple-200 dark:border-purple-800 hover:bg-purple-600 hover:text-white transition-all">
                    How to Contact? ✉️
                  </button>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 bg-blue-600 text-white rounded-2xl shadow-xl shadow-blue-500/40 flex items-center justify-center relative group"
      >
        <MessageSquare size={26} />
      </motion.button>
    </div>
  );
}