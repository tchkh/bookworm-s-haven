import "boxicons";

function Header() {
  return (
    <nav className="flex flex-row justify-between pt-3 pb-3 pl-6 pr-6">
      <div>
        <img src="src/assets/svg/logo.svg" alt="hh-logo" />
      </div>
      <div>
        <box-icon name="menu"></box-icon>
      </div>
    </nav>
  );
}

export default Header;
