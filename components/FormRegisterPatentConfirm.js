import React, { Component } from 'react';
import Layout from './Layout';
import style from '../styles/FormRegisterPatentConfirm.module.css';
import { Link, Router } from '../routes';
import web3 from '../ethereum/web3';
import factory from '../ethereum/factory';

class FormRegisterPatentConfirm extends Component {
  continueRegistration = async (event) => {
    const { values } = this.props;
    event.preventDefault();
    const compiled_patent = require("../ethereum/build/Patent.json");
    alert("Creating IP");

    const inventorAddress_full = values.address1_patent + ", " + values.address2_patent + ", " + values.addressCity_patent + ", " + values.addressCounty_patent + ", " + values.addressPostcode_patent + ", " + values.addressCountry_patent;

    await factory.methods.createPatent(values.patentTitle, inventorAddress_full).send({
     from: values.address[0],
     gasLimit: "5000000"
    });

    const patents = await factory.methods.getPatents().call();
    const numOfPatents = await factory.methods.getNumOfPatents().call();
    const address = patents[numOfPatents-1];
    const patent = await new web3.eth.Contract(compiled_patent.abi, address);

    const filingDate_UNIX = await patent.methods.getFilingDate().call();
    const patent_date_obj = new Date(filingDate_UNIX * 1000);
    const filingDate = patent_date_obj.getFullYear().toString() + "-" + (patent_date_obj.getMonth()+1).toString() + "-" + patent_date_obj.getDate().toString();
    const owner = await patent.methods.getOwner().call();
    const status = await patent.methods.getStatus().call();
    // const publicationDate_UNIX = await patent.methods.getPublicationDate().call();
    // const publicationDate_obj = new Date(publicationDate_UNIX * 1000);
    // const publicationDate = publicationDate_obj.getFullYear().toString() + "-" + (publicationDate_obj.getMonth()+1).toString() + "-" + publicationDate_obj.getDate().toString();
    const status_date_UNIX = await patent.methods.getStatusDate().call();
    const status_date_object = new Date(status_date_UNIX * 1000);
    const status_date = status_date_object.getFullYear().toString() + "-" + (status_date_object.getMonth()+1).toString() + "-" + status_date_object.getDate().toString();
    const renewal_date_UNIX = await patent.methods.getExpirationDate().call();
    const renewal_date_obj = new Date(renewal_date_UNIX * 1000);
    const renewal_date = renewal_date_obj.getFullYear().toString() + "-" + (renewal_date_obj.getMonth()+1).toString() + "-" + renewal_date_obj.getDate().toString();
    const inventorAddress = await patent.methods.getInventorAddress().call();
    const title = await patent.methods.getTitle().call();

    console.log("Address: " + address);
    console.log("Owner: " + owner);
    console.log("Status: " + status);
    console.log("Status last changed: " + status_date)
    console.log("Filing date: " + filingDate);
    // console.log("Publication date: " + publicationDate);
    console.log("Renewal date: " + renewal_date);
    console.log("Inventor address: " + inventorAddress);
    console.log("Title: " + title);

    this.props.changeForm('ip_addr', address);
    this.props.changeForm('address', owner);

    this.props.nextStep(1);
  }

  backRegistration = e => {
    e.preventDefault();
    this.props.previousStep(1);
  }

  async componentDidMount() {
    // const address = await web3.eth.getAccounts();
    // if (address == "") {
    //   alert("Metamask is not setup correctly, please load Metamask and try again!");
    //   Router.pushRoute('/');
    // }
  }

  render() {
    const { values } = this.props;
    const { nextStep } = this.props;

    return (
      <Layout>
        <form className={style.form}>
          <h2>Confirm your details</h2>
          <p className={style.addressLabel}>Address:</p>
          <input className={style.address} type='text' value={values.address} readOnly />
          <p className={style.dateLabel}>Date:</p>
          <input className={style.date} type='text' value={values.currentDate} readOnly />
          <p className={style.typeOfIPLabel}>Type of IP:</p>
          <input className={style.typeOfIP} type='text' value={values.typeOfIP} readOnly />
          <p className={style.patentTitleLabel}>Title:</p>
          <input className={style.patentTitle} type='text' value={values.patentTitle} readOnly />
          <p className={style.address1Label}>Address line 1:</p>
          <input id="address1" className={style.address1} type='text' value={values.address1_patent} readOnly />
          <p className={style.address2Label}>Address line 2:</p>
          <input id="address2" className={style.address2} type='text' value={values.address2_patent} readOnly />
          <p className={style.addressCityLabel}>City:</p>
          <input id="city" className={style.city} type='text' value={values.addressCity_patent} readOnly />
          <p className={style.addressCountyLabel}>County:</p>
          <input id="county" className={style.county} type='text' value={values.addressCounty_patent} readOnly />
          <p className={style.addressPostcodeLabel}>Postcode:</p>
          <input id="postcode" className={style.postcode} type='text' value={values.addressPostcode_patent} readOnly />
          <p className={style.addressCountryLabel}>Country:</p>
          <input id="country" className={style.country} type='text' value={values.addressCountry_patent} readOnly />
          <button className={style.back} type='button' onClick={ this.backRegistration }>Back</button>
          <button className={style.next} type='button' onClick={ this.continueRegistration }>Register Patent</button>
      </form>
      </Layout>
    );
  }
}

export default FormRegisterPatentConfirm;
