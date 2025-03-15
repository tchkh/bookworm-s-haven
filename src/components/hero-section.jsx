function HeroSection() {
  return (
    <main className="pt-10 pb-10 pl-4 pr-4 flex flex-col gap-10">
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
          src="src/assets/images/hero-img.jpg"
          alt="Man with a black and white cat perched on his shoulder, standing in a snow-covered forest with yellow autumn trees in the background."
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <span className="font-medium text-[12px] text-[#75716B]">
            -Author
          </span>
          <h1 className="font-semibold text-2xl text-[#43403B]">Thompson P.</h1>
        </div>
        <p className="font-medium leading-6 text-[#75716B]">
          I am a pet enthusiast and freelance writer who specializes in animal
          behavior and care. With a deep love for cats, I enjoy sharing insights
          on feline companionship and wellness. <br />
          <br />
          When i’m not writing, I spends time volunteering at my local animal
          shelter, helping cats find loving homes.
        </p>
      </div>
    </main>
  );
}

export default HeroSection;
