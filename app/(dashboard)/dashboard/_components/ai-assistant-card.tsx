"use client";

import { Maximize2, ArrowUp, Paperclip } from "lucide-react";
import { useState } from "react";

export default function AIAssistantCard() {
  const [query, setQuery] = useState("");

  return (
    <div className="bg-gradient-to-br from-[#1b2f4f] to-[#0a1529] rounded-2xl border border-white/5 p-5 flex flex-col relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/15 blur-3xl rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between mb-6 relative">
        <h3 className="text-[15px] font-semibold tracking-tight text-white">Asistente IA</h3>
        <button type="button" className="text-white/30 hover:text-white/60 transition-colors">
          <Maximize2 className="w-4 h-4" strokeWidth={2} />
        </button>
      </div>

      {/* Orb */}
      <div className="flex-1 flex items-center justify-center relative py-4">
        <div className="relative w-24 h-24">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 40% 35%, rgba(101,129,234,0.6) 0%, rgba(101,129,234,0.25) 40%, rgba(59,107,245,0.1) 65%, transparent 80%)",
            }}
          />
          <div
            className="absolute inset-2 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 35% 30%, rgba(140,170,255,0.5) 0%, rgba(101,129,234,0.3) 50%, transparent 70%)",
            }}
          />
          <div className="absolute top-3 left-5 w-3 h-2 bg-white/25 rounded-full blur-[2px] rotate-[-25deg]" />
        </div>
      </div>

      {/* Input */}
      <div className="flex items-center gap-2 bg-white/10 rounded-xl px-3.5 py-2.5 border border-white/10 relative">
        <button type="button" className="text-white/30 hover:text-white/50 transition-colors shrink-0">
          <Paperclip className="w-4 h-4" strokeWidth={2} />
        </button>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Pregunta sobre cumplimiento..."
          className="flex-1 bg-transparent border-none outline-none text-[13px] text-white placeholder:text-white/30 font-medium"
        />
        <button
          type="button"
          className="w-7 h-7 rounded-full bg-accent flex items-center justify-center shrink-0 hover:bg-accent/80 transition-colors"
        >
          <ArrowUp className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
