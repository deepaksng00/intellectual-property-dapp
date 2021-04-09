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
                            <p className={style.p1}>Register your intellectual property on the Ethereum blockchain, for simple proof of ownership and easy access!</p>
                            <p className={style.p2}>You only will have access to your intellectual property, using your Ethereum address, you will be able to create and modify your intellectual property, and prove your ownership.</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Index;