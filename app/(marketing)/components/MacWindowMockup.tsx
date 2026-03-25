export default function MacWindowMockup() {
  return (
    <div className="w-full max-w-[900px] mx-auto rounded-2xl overflow-hidden mockup-glow border border-black/[0.06]">
      {/* Title bar */}
      <div className="flex items-center gap-1.5 sm:gap-2 bg-white/80 backdrop-blur-sm px-2.5 py-2 sm:px-4 sm:py-3 border-b border-black/[0.06]">
        <div className="flex gap-[5px] sm:gap-[6px]">
          <span className="w-[8px] h-[8px] sm:w-[11px] sm:h-[11px] rounded-full bg-[#FF5F57]" />
          <span className="w-[8px] h-[8px] sm:w-[11px] sm:h-[11px] rounded-full bg-[#FEBC2E]" />
          <span className="w-[8px] h-[8px] sm:w-[11px] sm:h-[11px] rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-dark-teal/[0.04] text-dark-teal/40 text-[10px] sm:text-[12px] font-medium px-2.5 py-[2px] sm:px-3.5 sm:py-[3px] rounded-md tracking-wide">
            app.getverify.cl
          </div>
        </div>
        <div className="w-[36px] sm:w-[51px]" />
      </div>

      {/* Body */}
      <div className="bg-[#F8F9FC]">
        <img
          src="/mockup.webp"
          alt="Verify dashboard preview"
          className="w-full h-auto block"
        />
      </div>
    </div>
  );
}
