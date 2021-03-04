import React from 'react';
import { Link } from '../routes';
import style from '../styles/Layout.module.css';

export default (props) => {
  return (
    <div className={style.main_container}>
      <header className={style.header}>
        <Link route="/"><h1 className={style.title}>&copy; INTELLECTUAL PROPERTY</h1></Link>
        <Link route="/"><h4 className={[style.home, style.headerButton].join(" ")}>Home</h4></Link>
        <Link route="/intellectualproperty/register"><h4 className={[style.register, style.headerButton].join(" ")}>Register Your IP</h4></Link>
        <Link route="/yourip"><h4 className={[style.yourip, style.headerButton].join(" ")}>Your IP</h4></Link>
        <Link route="/searchip"><h4 className={[style.search, style.headerButton].join(" ")}>Search for IP</h4></Link>
        <Link route="/"><h4 className={[style.faq, style.headerButton].join(" ")}>FAQ</h4></Link>
        <div id="menuContainer" className={style.menuContainer}>
          <div className={style.bar1}></div>
          <div className={style.bar2}></div>
          <div className={style.bar3}></div>
        </div>
      </header>
      <section>
        { props.children }
      </section>
      <footer className={style.footer}>
        <h2>Powered by Ethereum</h2>
        <div className={style.ethereumImage}>
          <img alt="Ethereum Logo" src="/ethereum.png"/>
        </div>
        <Link route="/"><h4 className={[style.privacyPolicy, style.footerButton].join(" ")}>Privacy Policy</h4></Link>
        <Link route="/"><h4 className={[style.termsAndConditions, style.footerButton].join(" ")}>T&Cs</h4></Link>
        <Link route="/"><h4 className={[style.aboutUs, style.footerButton].join(" ")}>About Us</h4></Link>
        <Link route="/"><h4 className={[style.contactUs, style.footerButton].join(" ")}>Contact Us</h4></Link>
      </footer>
    </div>
  );
};
