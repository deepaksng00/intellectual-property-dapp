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
          <h2>Your { this.props.values.typeOfIP.toLowerCase() } has been registered!</h2>
          <p className={style.p1}>The <b>owner</b> of the intellectual property is: <b>{ this.props.values.address }</b></p>
          <p className={style.p2}>The <b>address</b> of your intellectual property is: <b>{ this.props.values.ip_addr }</b></p>
          <p className={style.p3}>The <b>hash</b> associated with your intellectual property file is: <b>{ this.props.values.fileHash }</b></p>
          <button className={style.homePage} type='button' onClick={ this.home }>Home Page</button>
        </div>
      </Layout>
    );
  }
}

export default FormRegisterReceipt;
