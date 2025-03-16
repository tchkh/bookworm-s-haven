function HeroSection() {
  return (
    <>
      {/* Mobile */}
      <main className="md:hidden pt-10 pb-10 pl-4 pr-4 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-[40px] text-[#26231E] leading-12 text-center">
            Stay Informed, Stay Inspired
          </h1>
          <p className="font-medium leading-6 text-[#75716B] text-center">
            Discover a World of Knowledge at Your Fingertips. Your Daily Dose of
            Inspiration and Information.
          </p>
        </div>
        <div>
          <img
            className="w-[343px] h-[470px] rounded-2xl object-cover"
            src="../public/images/hero-img.jpg"
            alt="Man with a black and white cat perched on his shoulder, standing in a snow-covered forest with yellow autumn trees in the background."
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <span className="font-medium text-[12px] text-[#75716B]">
              -Author
            </span>
            <h1 className="font-semibold text-2xl text-[#43403B]">
              Thompson P.
            </h1>
          </div>
          <p className="font-medium leading-6 text-[#75716B]">
            I am a pet enthusiast and freelance writer who specializes in animal
            behavior and care. With a deep love for cats, I enjoy sharing
            insights on feline companionship and wellness. <br />
            <br />
            When i’m not writing, I spends time volunteering at my local animal
            shelter, helping cats find loving homes.
          </p>
        </div>
      </main>
      {/* Desktop */}
      <main className="max-md:hidden flex flex-row justify-center items-center gap-[60px]">
        <div className="flex flex-col gap-6">
          <h1 className="font-semibold text-[52px] text-[#26231E] leading-[60px] text-right">
            Stay <br />
            Informed, <br />
            Stay Inspired
          </h1>
          <p className="font-medium leading-6 text-[#75716B] text-right">
            Discover a World of Knowledge at Your <br />
            Fingertips. Your Daily Dose of Inspiration <br />
            and Information.
          </p>
        </div>
        <div>
          <img
            className="w-[386px] h-[529px] rounded-2xl object-cover"
            src="../public/images/hero-img.jpg"
            alt="Man with a black and white cat perched on his shoulder, standing in a snow-covered forest with yellow autumn trees in the background."
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <span className="font-medium text-[12px] text-[#75716B]">
              -Author
            </span>
            <h1 className="font-semibold text-2xl text-[#43403B]">
              Thompson P.
            </h1>
          </div>
          <p className="font-medium leading-6 text-[#75716B]">
            I am a pet enthusiast and freelance writer <br />
            who specializes in animal behavior and <br />
            care. With a deep love for cats, I enjoy <br />
            sharing insights on feline companionship <br />
            and wellness. <br />
            <br />
            When i’m not writing, I spends time <br />
            volunteering at my local animal shelter, <br />
            helping cats find loving homes.
          </p>
        </div>
      </main>
    </>
  );
}

export default HeroSection;
