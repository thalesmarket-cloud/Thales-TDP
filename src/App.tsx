import React from 'react';
import { LeadFormSection } from './components/LeadFormSection.tsx';
import { FloatingElements } from './components/VisualElements.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-corporate-blue flex flex-col items-center justify-center">
      <main className="relative w-full">
        <FloatingElements />
        <LeadFormSection />
      </main>
    </div>
  );
}
