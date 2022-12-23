import { FC, useEffect, useState } from "react";
import headerLogo from "../assets/images/logo.svg";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";


const Header: FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(true);

  // Checks if screen size is mobile on load.
  useEffect(() => {
    window.innerWidth <= 700 ? setIsMobile(true) : setIsMobile(false);
  }, []);

  // Checks for mobile size.
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 700) setIsMobile(true);
      else setIsMobile(false);
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  });

  return (
    <header className="header">
      <img className="header-logo" src={headerLogo} alt="Shortly Logo" />
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </header>
  );
};

export default Header;
