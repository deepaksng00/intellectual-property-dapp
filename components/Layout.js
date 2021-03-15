import React from 'react';
import style from '../styles/Layout.module.css';
import Header from './Header';
import Footer from './Footer';

export default (props) => {
  return (
    <div className={style.main_container}>
      <Header />
      { props.children }
      <Footer />
    </div>
  );
};
