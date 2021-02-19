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

  backRegistration = e => {
    e.preventDefault();
    this.props.previousStep(1);
  }

  async componentDidMount() {
    const address = await web3.eth.getAccounts();
    if (address == "") {
      alert("Metamask is not setup correctly, please load Metamask and try again!");
      Router.pushRoute('/');
    }
  }

  patentTitle_change = (event) => {
    const { changeForm } = this.props;
    changeForm('patentTitle', document.getElementById("patentTitle").value);
  }

  address1_change = (event) => {
    const { changeForm } = this.props;
    changeForm('address1_patent', document.getElementById("address1").value);
  }

  address2_change = (event) => {
    const { changeForm } = this.props;
    changeForm('address2_patent', document.getElementById("address2").value);
  }

  addressCity_change = (event) => {
    const { changeForm } = this.props;
    changeForm('addressCity_patent', document.getElementById("city").value);
  }

  addressCounty_change = (event) => {
    const { changeForm } = this.props;
    changeForm('addressCounty_patent', document.getElementById("county").value);
  }

  addressPostcode_change = (event) => {
    const { changeForm } = this.props;
    changeForm('addressPostcode_patent', document.getElementById("postcode").value);
  }

  addressCountry_change = (event) => {
    const { changeForm } = this.props;
    changeForm('addressCountry_patent', document.getElementById("country").value);
  }

  render() {
    const { values } = this.props;
    const { nextStep } = this.props;

    return (
      <Layout>
        <form className={style.form}>
          <h2>Intellectual Property Registration Form 2/2 (Patent)</h2>
          <p className={style.patentTitleLabel}>Title:</p>
          <input id="patentTitle" className={style.patentTitle} type='text' value={this.props.patentTitle} onChange={this.patentTitle_change} />
          <p className={style.address1Label}>Address line 1:</p>
          <input id="address1" className={style.address1} type='text' value={this.props.address1_patent} onChange={this.address1_change} />
          <p className={style.address2Label}>Address line 2:</p>
          <input id="address2" className={style.address2} type='text' value={this.props.address2_patent} onChange={this.address2_change} />
          <p className={style.addressCityLabel}>City:</p>
          <input id="city" className={style.city} type='text' value={this.props.addressCity_patent} onChange={this.addressCity_change} />
          <p className={style.addressCountyLabel}>County:</p>
          <input id="county" className={style.county} type='text' value={this.props.addressCounty_patent} onChange={this.addressCounty_change} />
          <p className={style.addressPostcodeLabel}>Postcode:</p>
          <input id="postcode" className={style.postcode} type='text' value={this.props.addressPostcode_patent} onChange={this.addressPostcode_change} />
          <p className={style.addressCountryLabel}>Country:</p>
          <input id="country" className={style.country} type='text' value={this.props.addressCountry_patent} onChange={this.addressCountry_change} />
          <button className={style.back} type='button' onClick={ this.backRegistration }>Back</button>
          <button className={style.next} type='button' onClick={ this.continueRegistration }>Next</button>
        </form>
      </Layout>
    );
  }
}

export default FormRegisterTrademark;
