import React, { useState, useEffect } from 'react';

import NavBar from './navbar/NavBar';
import Footer from './footer/Footer';
import MobileMenu from './mobile-menu/MobileMenu';

const Layout = (props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileStyle, setIsMobileStyle] = useState(window.innerWidth < 700);

  useEffect(() => {
    const navbarStyleHandler = () => {
      if (window.innerWidth > 700) {
        setIsMobileStyle(false);
        setIsMobileMenuOpen(false);
      } else {
        setIsMobileStyle(true);
      }
    };
    window.addEventListener('resize', navbarStyleHandler);
    return () => {
      window.removeEventListener('resize', navbarStyleHandler);
    };
  }, []);

  const mobileMenuToggler = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <React.Fragment>
      <NavBar
        isOpen={isMobileMenuOpen}
        menuHandler={mobileMenuToggler}
        isMobileDevice={isMobileStyle}
      />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        closeMenu={() => setIsMobileMenuOpen(false)}
        navbarHandler={mobileMenuToggler}
      />
      <main>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
