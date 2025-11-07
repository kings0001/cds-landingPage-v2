import Image from "next/image";
import VideoPreviewPlayer from "./components/VideoPreviewPlayer";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-white text-[#020839] overflow-hidden">
      <VideoPreviewPlayer />
    
      <section className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 px-6 md:px-12 lg:px-20 py-12 md:py-20 lg:py-24 max-w-[1400px] mx-auto">
        {/* LEFT TEXT SECTION */}
        <div className="flex flex-col items-start gap-6 md:gap-10 w-full lg:max-w-[487px] text-center lg:text-left">
          <div className="flex flex-col gap-6 w-full">
            {/* Main Heading */}
            <h2 className="text-[32px] md:text-[44px] leading-[1.25] font-[var(--font-plus-jakarta-sans)] font-semibold text-[#111111]">
              Same Product.
              <br />
              <span className="font-[var(--font-monotype-corsiva)] text-[48px] md:text-[64px] leading-[55px] font-normal text-[#1C4ED1] italic">
                Different Story.
              </span>
            </h2>

            {/* Subtitle and Body Text */}
            <div className="flex flex-col gap-6 w-full">
              <p className="text-[20px] md:text-[25px] leading-[1.2] font-[var(--font-plus-jakarta-sans)] text-black max-w-[407px]">
                Both serve their purpose, but only the{" "}
                <strong className="font-semibold">branded one is remembered.</strong>
              </p>

              <p className="text-[18px] md:text-[20px] leading-normal font-[var(--font-plus-jakarta-sans)] text-black opacity-80">
                Two products. One plain, one branded.
                <br />
                Both clean, but only one gets chosen, remembered, and requested. Branding gives meaning to what people already need.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            className="bg-[#1C4ED1] hover:bg-[#1C4ED1]/90 text-[#F5F5F5] px-6 py-[18px] rounded-full h-auto text-[15px] md:text-[16px] font-medium transition-all"
          >
            Let&apos;s Build Your Brand
          </Button>
        </div>

        {/* RIGHT MEDIA SECTION */}
        <div className="flex items-center gap-3 md:gap-[10px] w-full lg:w-auto justify-center">
          {/* MAIN BRANDED BOTTLE CONTAINER */}
          <div className="relative w-[200px] md:w-[280px] lg:w-[410px] h-[300px] md:h-[400px] lg:h-[497px] rounded-[20px] md:rounded-[25px] bg-[#040B37] overflow-hidden flex items-center justify-center">
            <Image
              src="/brand-container-video.mp4"
              alt="Branded Container"
              width={410}
              height={497}
              className="w-full h-full object-cover"
            />
            
            {/* Checkmark Overlay */}
            <div className="absolute bottom-8 md:bottom-12 lg:bottom-16 left-8 md:left-10 lg:left-12 w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[67.5px] lg:h-[67.5px] rounded-full bg-[#1C4ED1] flex items-center justify-center">
              <svg 
                width="36" 
                height="36" 
                viewBox="0 0 76 76" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] lg:w-[36px] lg:h-[36px]"
              >
                <path 
                  d="M76.71 28.532L34.6959 70.546C32.9747 72.268 30.1841 72.268 28.4628 70.546L0.808502 42.892C-0.912699 41.171 -0.912699 38.38 0.808502 36.659L7.8157 29.652C9.5368 27.931 12.3273 27.931 14.0486 29.652L31.5794 47.181L63.4694 15.291C65.1907 13.57 67.9816 13.57 69.7027 15.291L76.71 22.3C78.431 24.021 78.431 26.811 76.71 28.532Z" 
                  fill="white"
                  transform="translate(-0.5, -13)"
                />
              </svg>
            </div>
          </div>

          {/* STACKED BOTTLES WITH ARROW */}
          <div className="flex flex-col items-center gap-[9px] relative">
            {/* Top Bottle - Unbranded */}
            <div className="w-[140px] md:w-[200px] lg:w-[288px] h-[140px] md:h-[200px] lg:h-[243px] rounded-[20px] md:rounded-[25px] bg-gradient-to-br from-[#08129C] to-[#072056] flex items-center justify-center p-4 md:p-6 lg:p-[22px] relative overflow-hidden">
              <Image
                src="/images/unbranded_container.svg"
                alt="Unbranded Container"
                width={120}
                height={199}
                className="w-[70px] md:w-[100px] lg:w-[120px] h-auto object-contain"
              />
            </div>

            {/* Arrow Icon */}
            <div className="w-[40px] h-[40px] md:w-[45px] md:h-[45px] lg:w-[51px] lg:h-[51px] rounded-full bg-[#F4F6FB] flex items-center justify-center shrink-0 z-10">
              <div className="w-[28px] h-[28px] md:w-[32px] md:h-[32px] lg:w-[35px] lg:h-[35px] rounded-full bg-[#1C4ED1] flex items-center justify-center">
                <svg 
                  width="25" 
                  height="25" 
                  viewBox="0 0 25 25" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] lg:w-[25px] lg:h-[25px]"
                >
                  <path 
                    d="M23.9368 35.5632C24.524 36.1504 25.476 36.1504 26.0632 35.5632L35.6322 25.9942C36.2194 25.407 36.2194 24.455 35.6322 23.8678C35.045 23.2806 34.093 23.2806 33.5058 23.8678L25 32.3736L16.4942 23.8678C15.907 23.2806 14.955 23.2806 14.3678 23.8678C13.7806 24.455 13.7806 25.407 14.3678 25.9942L23.9368 35.5632ZM25 18L23.4964 18L23.4964 34.5L25 34.5L26.5036 34.5L26.5036 18L25 18Z" 
                    fill="white"
                    transform="translate(-12.5, -16)"
                  />
                </svg>
              </div>
            </div>

            {/* Bottom Bottle - Branded */}
            <div className="w-[140px] md:w-[200px] lg:w-[288px] h-[140px] md:h-[200px] lg:h-[243px] rounded-[20px] md:rounded-[25px] bg-gradient-to-br from-[#08129C] to-[#072056] flex items-center justify-center p-4 md:p-6 lg:p-[22px] relative overflow-hidden">
              <Image
                src="/images/branded_container.svg"
                alt="Branded Container"
                width={120}
                height={200}
                className="w-[70px] md:w-[100px] lg:w-[120px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    
    </div>
  );
}
