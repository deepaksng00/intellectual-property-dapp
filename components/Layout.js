import React from 'react';
import style from "../styles/Layout.module.css";
import { Link } from '../routes';

export default (props) => {
  return (
    <div className={style.main_container}>
      <header className={style.header}>
        <Link route="/"><h1 className={style.title}>&copy; INTELLECTUAL PROPERTY</h1></Link>
      </header>
      { props.children }
      <footer className={style.footer}>
        <h2>Powered by Ethereum</h2>
      </footer>
    </div>
  );
};
