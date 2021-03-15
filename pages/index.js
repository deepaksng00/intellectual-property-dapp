import React from 'react';
import style from '../styles/Index.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default (props) => {
    return (
        <div className={style.main_container}>
            <video className={style.showcase_video} src="video.mp4" muted loop autoPlay></video>
            <div className={style.header_text}>
                <Header />
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