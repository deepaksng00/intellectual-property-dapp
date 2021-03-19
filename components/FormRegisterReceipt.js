import React, { Component } from 'react';
import Layout from './Layout';
import style from '../styles/FormRegisterReceipt.module.css';
import { Router } from '../routes';

class FormRegisterReceipt extends Component {
  async componentDidMount() {

  }

  home = (event) => {
    Router.pushRoute('/');
  }

  goToIP = (event) => {
    switch (this.props.values.typeOfIP) {
      case "Trademark": Router.pushRoute(`/intellectualproperty/trademarks/${this.props.values.tokenID}`); break;
      case "Patent": Router.pushRoute(`/intellectualproperty/patents/${this.props.values.tokenID}`); break;
      case "Design": Router.pushRoute(`/intellectualproperty/designs/${this.props.values.tokenID}`); break; 
    }
  }

  render() {
    let prefix = "";

    switch (this.props.values.typeOfIP) {
      case "Trademark": prefix = "TM"; break;
      case "Patent": prefix = "PT"; break;
      case "Design": prefix = "DS"; break;
    }
    
    return (
      <Layout>
        <div className={style.main_section}>
          <h2>Your { this.props.values.typeOfIP.toLowerCase() } has been registered!</h2>
          <p className={style.p1}>The <b>owner</b> of the intellectual property is: <b>{ this.props.values.address }</b></p>
          <p className={style.p2}>The <b>ID</b> of your intellectual property is: <b>{ prefix + this.props.values.tokenID }</b></p>
          <p className={style.p3}>The <b>hash</b> associated with your intellectual property file is: <b>{ this.props.values.fileHash }</b></p>
          <button className={style.yourIP} type='button' onClick={ this.goToIP }>Go to Your IP</button>
          <button className={style.homePage} type='button' onClick={ this.home }>Home Page</button>
        </div>
      </Layout>
    );
  }
}

export default FormRegisterReceipt;
