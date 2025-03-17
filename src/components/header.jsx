import "boxicons";
import logomobile from "../assets/svg/logo-mobile.svg";
import logodesktop from "../assets/svg/logo-desktop.svg";

function Header() {
  return (
    <nav className="flex flex-row justify-between pt-3 pb-3 pl-6 pr-6 md:pt-4 md:pb-4 md:pl-[120px] md:pr-[120px]">
      <div>
        <img className="md:hidden" src={logomobile} alt="hh-mobile-logo" />
        <img
          className="max-md:hidden"
          src={logodesktop}
          alt="hh-desktop-logo"
        />
      </div>
      <div className="md:flex md:flex-row md:gap-2">
        <box-icon className="md:hidden" name="menu"></box-icon>
        <button className="max-md:hidden border border-[#75716B] rounded-[999px] pt-3 pb-3 pl-10 pr-10">
          Log in
        </button>
        <button className="max-md:hidden bg-black rounded-[999px] pt-3 pb-3 pl-10 pr-10 text-white">
          Sign up
        </button>
      </div>
    </nav>
  );
}

export default Header;
