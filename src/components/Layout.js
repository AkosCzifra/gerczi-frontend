import React, { useState, useEffect } from 'react';

import NavBar from './navbar/NavBar';
import Footer from './footer/Footer';
import MobileMenu from './mobile-menu/MobileMenu';
import Modal from './modal/Modal';
import Backdrop from './backdrop/Backdrop';
import SignupForm from './forms/SignupForm';
import LoginForm from './forms/LoginForm';

const Layout = (props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalForm, setModalForm] = useState('');
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

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const authButtonsHandler = (e) => {
    const formType = e.target.name;
    if (formType === 'signup') {
      setModalForm('signup');
    } else if (formType === 'login') {
      setModalForm('login');
    }
    setIsMobileMenuOpen(false);
    setIsModalOpen(true);
  };

  let form;
  let formTitle;
  if (modalForm === 'login') {
    form = <LoginForm close={closeModal} />;
    formTitle = 'Login';
  } else if (modalForm === 'signup') {
    form = <SignupForm close={closeModal} />;
    formTitle = 'Signup';
  }

  return (
    <React.Fragment>
      <NavBar
        isOpen={isMobileMenuOpen}
        menuHandler={mobileMenuToggler}
        isMobileDevice={isMobileStyle}
        authButtonsHandler={authButtonsHandler}
      />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        navbarHandler={mobileMenuToggler}
        authButtonsHandler={authButtonsHandler}
      />
      <Backdrop isOpen={isModalOpen} clickhandler={closeModal} />
      <Modal isOpen={isModalOpen} title={formTitle}>
        {form}
      </Modal>
      <main>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
