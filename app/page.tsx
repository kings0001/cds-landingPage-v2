import Image from "next/image";
import VideoPreviewPlayer from "./components/VideoPreviewPlayer";

export default function Home() {
  return (
    <div className="bg-white text-[#020839] overflow-hidden">
      <VideoPreviewPlayer />
    
      <section className="flex flex-col md:flex-row items-center justify-between gap-10 bg-[#F6F8FF] p-6 md:p-16 rounded-3xl">
      {/* LEFT TEXT SECTION */}
      <div className="flex-1 max-w-lg text-center md:text-left space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0B0B0C]">
          Same Product.{" "}
          <span className="text-[#2458E8] italic font-medium">
            Different Story.
          </span>
        </h2>
        <p className="text-[#121212] text-base md:text-lg">
          Both serve their purpose, but only <strong>the branded one</strong> is
          remembered.
        </p>

        <p className="text-[#555] text-sm md:text-base leading-relaxed">
          Two products. One plain, one branded.
          <br />
          Both clean, but only one gets chosen, remembered, and requested.
          <br />
          Branding gives meaning to what people already need.
        </p>

        <button className="mt-4 px-6 py-2 bg-[#2458E8] hover:bg-[#1E47C5] text-white text-sm md:text-base font-medium rounded-full transition-all">
          Let’s Build Your Brand
        </button>
      </div>

      {/* RIGHT MEDIA SECTION */}
      <div className="flex-1 flex justify-center items-center gap-4">
        {/* MAIN VIDEO */}
        <div className="relative w-[230px] md:w-[280px] aspect-2/4 overflow-hidden rounded-2xl bg-[#001B5A] flex justify-center items-center">
          <video
            src="/brand-container-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Optional Overlay Icon */}
          <div className="absolute bottom-3 left-3 bg-white text-[#2458E8] rounded-full p-2 text-xl">
            ✓
          </div>
        </div>

        {/* STACKED IMAGES */}
        <div className="flex flex-col justify-center gap-4">
          <div className="relative w-[120px] md:w-[288px] aspect-square rounded-2xl overflow-hidden bg-linear-to-r from-[#072056] to-[#08129C]">
            <Image
              src="images/unbranded_container.svg"
              alt="Plain Bottle"
              width={120}
              height={200}
              className="object-cover"
            />
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white rounded-full p-1 text-[#2458E8]">
              ↓
            </div>
          </div>

          <div className="relative w-[120px] md:w-[288px] aspect-square rounded-2xl overflow-hidden bg-linear-to-r from-[#072056] to-[#08129C]">
            <Image
              src="images/branded_container.svg"
              alt="Branded Bottle"
              width={120}
              height={200}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
    
    </div>
  );
}
