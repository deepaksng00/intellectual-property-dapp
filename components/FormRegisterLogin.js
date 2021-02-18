import React, { Component } from 'react';
import Layout from './Layout';
import style from '../styles/FormRegisterLogin.module.css';
import { Link, Router } from '../routes';
import web3 from '../ethereum/web3';

class FormRegisterLogin extends Component {
  continueRegistration = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  async componentDidMount() {
    const address = await web3.eth.getAccounts();
    if (address == "") {
      alert("Metamask is not setup correctly, please load Metamask and try again!");
      Router.pushRoute('/');
    }
  }

  render() {
    const { values } = this.props;
    const { nextStep } = this.props;

    return (
      <Layout>
        <form className={style.form}>
          <h2>Login</h2>
          <input type='input' value={ values.address } readOnly />
          <button type='button' onClick={ this.continueRegistration }>Login</button>
        </form>
      </Layout>
    );
  }
}

export default FormRegisterLogin;
