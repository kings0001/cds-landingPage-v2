import Image from "next/image";
import VideoPreviewPlayer from "./components/VideoPreviewPlayer";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-white text-[#020839] overflow-hidden">
      <VideoPreviewPlayer />
    
      <section className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-[55px] lg:gap-16 px-8 md:px-12 lg:px-20 py-12 md:py-16 lg:py-24 max-w-[1400px] mx-auto">
        {/* LEFT TEXT SECTION */}
        <div className="flex flex-col items-start gap-9 lg:gap-10 w-full max-w-[334px] lg:max-w-[487px]">
          <div className="flex flex-col gap-[13px] lg:gap-6 w-full">
            {/* Main Heading */}
            <h2 className="text-[24px] lg:text-[44px] leading-[0.73] lg:leading-[1.25] font-[var(--font-plus-jakarta-sans)] font-semibold text-[#111111]">
              Same Product.
              <br />
              <span className="font-[var(--font-monotype-corsiva)] text-[36px] lg:text-[64px] leading-[0.73] lg:leading-[55px] font-normal text-[#1C4ED1] italic">
                Different Story.
              </span>
            </h2>

            {/* Subtitle and Body Text */}
            <div className="flex flex-col gap-[17px] lg:gap-6 w-full">
              <p className="text-[16px] lg:text-[25px] leading-[30px] lg:leading-[1.2] font-[var(--font-plus-jakarta-sans)] text-black lg:max-w-[407px]">
                Both serve their purpose, but only the{" "}
                <strong className="font-semibold">branded one is remembered.</strong>
              </p>

              <p className="text-[18px] lg:text-[20px] leading-normal font-[var(--font-plus-jakarta-sans)] text-black opacity-80">
                Two products. One plain, one branded.
                <br />
                Both clean, but only one gets chosen, remembered, and requested. Branding gives meaning to what people already need.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            className="bg-[#1C4ED1] hover:bg-[#1C4ED1]/90 text-[#F5F5F5] px-[23px] py-[17.5px] rounded-full h-auto text-[16px] font-medium transition-all w-[249px]"
          >
            Let&apos;s Build Your Brand
          </Button>
        </div>

        {/* RIGHT MEDIA SECTION */}
        <div className="flex flex-col lg:flex-row items-center gap-[10px] w-full lg:w-auto justify-center lg:justify-start">
          {/* MAIN BRANDED BOTTLE CONTAINER */}
          <div className="relative w-full max-w-[329px] lg:w-[410px] h-[399px] lg:h-[497px] rounded-[25px] bg-[#040B37] overflow-hidden flex items-center justify-center">
            <video
              src="/brand-container-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            ></video>

            {/* Checkmark Overlay */}
            <div className="absolute bottom-[54px] lg:bottom-16 left-[54px] lg:left-[67px] w-[54px] h-[54px] lg:w-[67.5px] lg:h-[67.5px] rounded-full bg-[#1C4ED1] flex items-center justify-center">
              <svg
                width="36"
                height="36"
                viewBox="0 0 76 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[28px] h-[28px] lg:w-[36px] lg:h-[36px]"
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
          <div className="flex flex-col items-center gap-[9px] relative w-full max-w-[329px] lg:w-auto">
            {/* Top Bottle - Unbranded */}
            <div className="w-full lg:w-[288px] h-[243px] rounded-[25px] bg-gradient-to-br from-[#08129C] to-[#072056] flex items-center justify-center p-[22px] relative overflow-hidden">
              <Image
                src="/images/unbranded_container.svg"
                alt="Unbranded Container"
                width={120}
                height={199}
                className="w-[120px] h-auto object-contain"
              />
            </div>

            {/* Arrow Icon */}
            <div className="w-[51px] h-[51px] rounded-full bg-[#F4F6FB] flex items-center justify-center shrink-0 z-10">
              <div className="w-[35px] h-[35px] rounded-full bg-[#1C4ED1] flex items-center justify-center">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[25px] h-[25px]"
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
            <div className="w-full lg:w-[288px] h-[243px] rounded-[25px] bg-gradient-to-br from-[#08129C] to-[#072056] flex items-center justify-center p-[22px] relative overflow-hidden">
              <Image
                src="/images/branded_container.svg"
                alt="Branded Container"
                width={120}
                height={200}
                className="w-[120px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    
    </div>
  );
}
