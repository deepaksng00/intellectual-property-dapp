import React, { Component } from 'react';
import Layout from './Layout';
import style from '../styles/FormRegisterPatent.module.css';
import { Link, Router } from '../routes';
import web3 from '../ethereum/web3';

class FormRegisterTrademark extends Component {
  continueRegistration = e => {
    e.preventDefault();
    this.props.nextStep(1);
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

      </Layout>
    );
  }
}

export default FormRegisterTrademark;
