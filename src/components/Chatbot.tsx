import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Cloud } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { getChatResponse, type Message } from '../services/chatService';

// Keep the internal knowledge base for quick fallbacks or simple queries if needed, 
// but primarily use the AI service.
const KNOWLEDGE_BASE = {
  company: "Alladi Cloud Solutions Pvt. Ltd. (ACS) is an innovative IT company specializing in technologically advanced products like Smartest Cab, My Ride, and Buddy Poker. We are a subsidiary of Brainy Way Solutions Inc, USA.",
  ceo: "Our CEO and Founder is Malleshaiah (Mal) Alladi, a computer engineer with over 30 years of IT experience. He is a certified PMP and AWS Solution Architect with an MS IT from Virginia Tech.",
  services: "We offer custom software development, mobile app development (Android/iOS/Flutter), project delivery support, and maintenance. Our expertise includes Java, JEE, Spring, Angular, and many more.",
  products: {
    "Smartest Cab": "A complete taxi ecosystem with Passenger and Driver apps, designed to help small taxi businesses retain 90% of fares.",
    "My Ride": "An innovative ride-sharing solution built with Flutter and REST services for high performance.",
    "Buddy Poker": "A high-end gaming application using sophisticated poker algorithms.",
    "Paperless Classroom": "An EdTech solution for electronic document management and compliance tracking in schools.",
    "Point of Sale": "Custom retail ERP solutions integrated with MySql/Oracle databases.",
    "Grants Management": "A role-based system for Federal and State grants with automated workflows.",
  },
  contact: {
    address: "Plot No: 201, 2nd Floor, Ashoka My Home Chambers, Begumpet, Hyderabad, T.S., 500003",
    phone: "+91 90009 30077",
    email: "hr@alladicloudsolutions.com"
  },
  location: "Our main development center is located in Begumpet, Hyderabad, India."
};

const getBotResponse = (input: string): string => {
  const query = input.toLowerCase();
  
  if (query.includes('ceo') || query.includes('founder') || query.includes('malleshaiah')) {
    return KNOWLEDGE_BASE.ceo;
  }
  if (query.includes('products') || query.includes('apps') || query.includes('smartest') || query.includes('ride')) {
    return `Our products include: ${Object.keys(KNOWLEDGE_BASE.products).join(', ')}. Which one would you like to know more about?`;
  }
  if (query.includes('service') || query.includes('build') || query.includes('develop')) {
    return KNOWLEDGE_BASE.services;
  }
  if (query.includes('contact') || query.includes('address') || query.includes('email') || query.includes('phone')) {
    return `You can reach us at ${KNOWLEDGE_BASE.contact.email} or call ${KNOWLEDGE_BASE.contact.phone}. Visit us at: ${KNOWLEDGE_BASE.contact.address}`;
  }
  if (query.includes('about') || query.includes('who are you')) {
    return KNOWLEDGE_BASE.company;
  }
  
  for (const [product, desc] of Object.entries(KNOWLEDGE_BASE.products)) {
    if (query.includes(product.toLowerCase())) {
      return desc;
    }
  }

  return "I'm the ACS assistant. I can tell you about our products (Smartest Cab, My Ride, Buddy Poker), our services, or provide contact information for our Hyderabad office. How can I help?";
};

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hi! I am Alladi AI. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: input };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await getChatResponse(newMessages);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      // Fallback to local knowledge base if API fails
      const fallbackResponse = getBotResponse(input);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: fallbackResponse 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] h-[500px] glass rounded-[2rem] overflow-hidden shadow-2xl flex flex-col border border-slate-200/50 dark:border-slate-800/50"
          >
            {/* Header */}
            <div className="p-4 bg-primary-600 text-white flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <Cloud className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-sm">Alladi AI</p>
                  <p className="text-[10px] text-primary-100 flex items-center">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse" />
                    Online
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-lg">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.filter(m => m.role !== 'system').map((msg, i) => (
                <div key={i} className={cn("flex", msg.role === 'user' ? "justify-end" : "justify-start")}>
                  <div className={cn(
                    "max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed",
                    msg.role === 'user' 
                      ? "bg-primary-600 text-white rounded-tr-none" 
                      : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none"
                  )}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={isLoading ? "Alladi AI is typing..." : "Ask me anything..."}
                disabled={isLoading}
                className="flex-1 bg-slate-100 dark:bg-slate-900 border-none focus:ring-2 focus:ring-primary-500 rounded-xl px-4 py-2 text-sm disabled:opacity-50"
              />
              <button
                onClick={handleSend}
                className="p-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-primary-600 text-white rounded-2xl shadow-xl shadow-primary-600/30 flex items-center justify-center hover:bg-primary-700 transition-colors"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </motion.button>
    </div>
  );
};
