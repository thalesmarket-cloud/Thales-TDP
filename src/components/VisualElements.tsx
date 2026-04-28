import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Calendar, 
  BarChart3, 
  FileCheck2, 
  Lock, 
  Bell, 
  CheckCircle2,
  Database
} from 'lucide-react';

export const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none h-full w-full">
      {/* Floating Icons */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute top-[10%] left-[5%] text-corporate-blue"
      >
        <ShieldCheck size={120} weight="light" />
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[60%] right-[10%] text-corporate-accent opacity-20"
      >
        <Calendar size={80} />
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 20, 0],
          x: [0, 10, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] left-[15%] text-corporate-blue opacity-15"
      >
        <Database size={60} />
      </motion.div>

      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] left-[40%] text-corporate-blue"
      >
        <FileCheck2 size={150} />
      </motion.div>

      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Radial Gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,69,139,0.05)_100%)]"></div>
    </div>
  );
};

export const AnimatedBadge = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full mb-6"
  >
    <CheckCircle2 size={14} className="text-corporate-accent" />
    <span className="text-[10px] uppercase tracking-widest font-semibold text-corporate-blue">Conformité DGI Maroc & Réglementation 2024</span>
  </motion.div>
);

export const SecureShield = () => (
  <div className="flex items-center space-x-2 text-green-600 font-medium text-sm mt-4">
    <Lock size={16} />
    <span>Données sécurisées & RGPD</span>
  </div>
);
