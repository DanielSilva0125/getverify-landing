export default function MacWindowMockup() {
  return (
    <div className="w-full max-w-[900px] mx-auto rounded-2xl overflow-hidden mockup-glow border border-black/[0.06]">
      {/* Title bar */}
      <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-3 border-b border-black/[0.06]">
        <div className="flex gap-[6px]">
          <span className="w-[11px] h-[11px] rounded-full bg-[#FF5F57]" />
          <span className="w-[11px] h-[11px] rounded-full bg-[#FEBC2E]" />
          <span className="w-[11px] h-[11px] rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-dark-teal/[0.04] text-dark-teal/40 text-[12px] font-medium px-3.5 py-[3px] rounded-md tracking-wide">
            app.getverify.cl
          </div>
        </div>
        <div className="w-[51px]" />
      </div>

      {/* Body placeholder */}
      <div className="bg-light-gray aspect-video" />
    </div>
  );
}
