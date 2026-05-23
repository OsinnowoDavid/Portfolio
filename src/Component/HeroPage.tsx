
export function Hero() {
  return (
    <section className="w-full mt-40 px-4 py-20 flex flex-col items-center justify-center gap-[40px] text-center">
      
      {/* Text Container */}
      <div className="flex flex-col items-center gap-[24px] max-w-[938px]">
        <h1 className=" font-bold text-[60px] lg:text-[60px] md:text-[64px] leading-[1.2] text-[#0F1115]">
          We Design and Build Products That Shape the Future.
        </h1>
        <p className=" font-medium text-[24px] md:text-[24px] leading-[1.2] text-[#323745]">
          From strategy to launch, we build modern digital products designed for<br/> performance and growth.
        </p>
      </div>

      {/* CTA Button */}
      <button className="flex items-center justify-center gap-[10px] py-[16px] px-[24px] bg-[#0F1115] rounded-[100px] transition-transform hover:scale-105 active:scale-95 group">
        <span className="font-['Inter'] font-semibold text-[24px] md:text-[32px] text-[#F1F1F1]">
          Book a Call
        </span>
        {/* Arrow Icon */}
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.5668 12.3744L12.0208 21.9203M21.9203 20.5061C21.9203 20.5061 23.0382 13.1388 21.9203 12.0208C20.8024 10.9029 13.435 12.0208 13.435 12.0208" stroke="#F1F1F1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      </button>

    </section>
  );
}
export default Hero;