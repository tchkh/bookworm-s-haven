import "boxicons";

function Footer() {
  return (
    <>
      <footer className="md:hidden pt-10 pb-10 pl-4 pr-4 flex flex-col gap-6 items-center">
        <div className="flex flex-row gap-6">
          <span>Get in touch</span>
          <div className="flex flex-row gap-4">
            <box-icon name="linkedin" type="logo"></box-icon>
            <box-icon name="github" type="logo"></box-icon>
            <box-icon name="google" type="logo"></box-icon>
          </div>
        </div>
        <button className="font-medium underline text-[#26231E]">
          Home page
        </button>
      </footer>
      <footer className="max-md:hidden flex flex-row justify-between pt-[60px] pb-[60px] pl-[120px] pr-[120px] bg-[#EFEEEB]">
        <div className="flex flex-row gap-6">
          <span className="font-medium text-[#43403B]">Get in touch</span>
          <div className="flex flex-row gap-4">
            <box-icon name="linkedin" type="logo"></box-icon>
            <box-icon name="github" type="logo"></box-icon>
            <box-icon name="google" type="logo"></box-icon>
          </div>
        </div>
        <span className="font-medium underline text-[#26231E]">Home page</span>
      </footer>
    </>
  );
}

export default Footer;
