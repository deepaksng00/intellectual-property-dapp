import React, { Component } from 'react';
import style from '../styles/Footer.module.css';
import { Link, Router } from '../routes';

class Footer extends Component  {
    state = {
        active: false
    }

    componentDidMount() {
        
    }

    onMenuButtonClick = e => {
        e.preventDefault();
        this.setState({ active: !this.state.active });
    }

    render() {
        return (
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
        );
    }
}

export default Footer;