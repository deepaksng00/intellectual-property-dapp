import React from 'react';
import style from "../styles/Layout.module.css";

export default (props) => {
  return (
    <div className={style.main_container}>
      <header className={style.header}>
        <h1 className={style.title}>&copy; INTELLECTUAL PROPERTY</h1>
      </header>
      { props.children }
      <footer className={style.footer}>
        <h2>Powered by Ethereum</h2>
      </footer>
    </div>
  );
};
