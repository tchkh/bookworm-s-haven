import "boxicons";

function Footer() {
  return (
    <footer className="pt-10 pb-10 pl-4 pr-4 flex flex-col gap-6 items-center">
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
  );
}

export default Footer;
