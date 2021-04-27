import React, { Component } from 'react';
import style from '../styles/Index.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from '../routes';


class Index extends Component {
    state = {
        active: false
    }

    onMenuButtonClick = e => {
        e.preventDefault();
        this.setState({ active: !this.state.active });
    }

    componentDidMount() {
        alert("This application is running for testing purposes only! Please DO NOT enter any personal details, as the plaform has not been secured. Thank you.");
    }

    render() {
        return (  
            <div className={style.main_container}>
                <video className={style.showcase_video} src="video.mp4" muted loop autoPlay></video>
                <div className={style.header_text}>
                    <div className={style.titleContainer}>
                        <Link route="/"><h1 className={style.pageTitle}>Intellectual Property</h1></Link>
                            { this.state.active ?
                                <div className={[style.menu_button, style.active].join(" ")} onClick={this.onMenuButtonClick}></div>
                            :
                                <div className={style.menu_button} onClick={this.onMenuButtonClick}></div>
                            }
                    </div>
                    { this.state.active ?
                        <div className={[style.menu, style.active].join(" ")}>
                            <ul>
                                <Link route="/"><li>Home</li></Link>
                                <Link route="/intellectualproperty/register"><li>Register your IP</li></Link>
                                <Link route="/userip"><li>Your IP</li></Link>
                                <Link route="/search"><li>Search IP</li></Link>
                            </ul>
                        </div>
                    : 
                        <div className={style.menu}>
                            {/* <ul>
                                <Link route="/"><li>Home</li></Link>
                                <Link route="/intellectualproperty/register"><li>Register your IP</li></Link>
                                <Link route="/yourip"><li>Your IP</li></Link>
                                <Link path="/searchip"><li>Search IP</li></Link>
                            </ul> */}
                        </div>  
                    }
                    <div className={style.text}>
                        <h1 className={style.title}>The future of intellectual property</h1>
                        <div className={style.paragraphs}>
                            <p className={style.p1}>Register your intellectual property on the Ethereum blockchain, for simple proof of ownership and easy access! You only will have access to your intellectual property, using your Ethereum address, you will be able to create and modify your intellectual property, and prove your ownership.</p>
                        </div>
                    </div>
                </div>
                { this.state.active ?
                    <div></div>
                :

                    <footer className={style.footer}>
                        <h2>Powered by Ethereum</h2>
                        <div className={style.ethereumImage}>
                            <img alt="Ethereum Logo" src="/ethereum.png"/>
                        </div>
                        <Link route="/privacypolicy"><h4 className={[style.privacyPolicy, style.footerButton].join(" ")}>Privacy Policy</h4></Link>
                        <Link route="/termsandconditions"><h4 className={[style.termsAndConditions, style.footerButton].join(" ")}>T&Cs</h4></Link>
                        <Link route="/aboutus"><h4 className={[style.aboutUs, style.footerButton].join(" ")}>About Us</h4></Link>
                        <Link route="/contactus"><h4 className={[style.contactUs, style.footerButton].join(" ")}>Contact Us</h4></Link>
                    </footer> 
                }
            </div>
        );
    }
}

export default Index;