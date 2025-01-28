import Logo from "./Logo";
import Profile from "./Profile";

function Header() {
  return (
    <div>
      <header className="flex justify-between items-center p-4">
        <Logo />
        <Profile />
      </header>
    </div>
  );
}

export default Header;
