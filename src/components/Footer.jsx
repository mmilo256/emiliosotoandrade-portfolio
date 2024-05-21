import Logo from "./Logo";
import Socials from "./Socials";

function Footer() {
  return (
    <footer className="bg-gray-950">
      <div className="container mx-auto px-2 md:px-0 flex items-center justify-between h-16">
        <Logo />
        <Socials />
      </div>
    </footer>
  );
}

export default Footer;
