import React, { Component } from 'react';
import Layout from './Layout';
import style from '../styles/FormRegisterReceipt.module.css';
import { Link, Router } from '../routes';
import web3 from '../ethereum/web3';
import Head from 'next/head';

class FormRegisterReceipt extends Component {
  async componentDidMount() {

  }

  home = (event) => {
    Router.pushRoute('/') ;
  }

  render() {
    return (
      <Layout>
        <div className={style.main_section}>
          <h2>Your intellectual property has been registered!</h2>
          <p className={style.p1}>The owner of the intellectual property is: { this.props.values.address }</p>
          <p className={style.p2}>The address of your intellectual property is: { this.props.values.ip_addr }</p>
          <p className={style.p3}>The hash associated with your intellectual property file is: { this.props.values.fileHash }</p>
          <button className={style.homePage} type='button' onClick={ this.home }>Home Page</button>
        </div>
      </Layout>
    );
  }
}

export default FormRegisterReceipt;
