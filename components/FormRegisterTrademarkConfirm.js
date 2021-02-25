import React, { Component } from 'react';
import Layout from './Layout';
import style from '../styles/FormRegisterTrademarkConfirm.module.css';
import { Link, Router } from '../routes';
import web3 from '../ethereum/web3';
import factory from '../ethereum/factory';

class FormRegisterTrademarkConfirm extends Component {
   continueRegistration = async (event) => {
    const { values } = this.props;
    event.preventDefault();
    const compiled_trademark = require("../ethereum/build/Trademark.json");
    alert("Creating IP");

    try {
      await factory.methods.createTrademark(values.markDesc, values.fileHash)
        .send({ from: values.address[0], gasLimit: "5000000"})
        .catch(() => {throw 'HashAlreadyUsed';})

      const trademarks = await factory.methods.getTrademarks(values.address[0]).call();
      const numOfTrademarks = trademarks.length;
      const address = trademarks[numOfTrademarks-1];
      const trademark = await new web3.eth.Contract(compiled_trademark.abi, address);

      const filingDate_UNIX = await trademark.methods.getFilingDate().call();
      const trademark_date_obj = new Date(filingDate_UNIX * 1000);
      const filingDate = trademark_date_obj.getFullYear().toString() + "-" + (trademark_date_obj.getMonth()+1).toString() + "-" + trademark_date_obj.getDate().toString();
      const owner = await trademark.methods.getOwner().call();
      const status = await trademark.methods.getStatus().call();
      // const publicationDate_UNIX = await trademark.methods.getPublicationDate().call();
      // const publicationDate_obj = new Date(publicationDate_UNIX * 1000);
      // const publicationDate = publicationDate_obj.getFullYear().toString() + "-" + (publicationDate_obj.getMonth()+1).toString() + "-" + publicationDate_obj.getDate().toString();
      const status_date_UNIX = await trademark.methods.getStatusDate().call();
      const status_date_object = new Date(status_date_UNIX * 1000);
      const status_date = status_date_object.getFullYear().toString() + "-" + (status_date_object.getMonth()+1).toString() + "-" + status_date_object.getDate().toString();
      const renewal_date_UNIX = await trademark.methods.getExpirationDate().call();
      const renewal_date_obj = new Date(renewal_date_UNIX * 1000);
      const renewal_date = renewal_date_obj.getFullYear().toString() + "-" + (renewal_date_obj.getMonth()+1).toString() + "-" + renewal_date_obj.getDate().toString();
      const mark_desc = await trademark.methods.getMarkDesc().call();
      const mark_hash = await trademark.methods.getHash().call();

      console.log("Address: " + address);
      console.log("Owner: " + owner);
      console.log("Status: " + status);
      console.log("Status last changed: " + status_date)
      console.log("Filing date: " + filingDate);
      // console.log("Publication date: " + publicationDate);
      console.log("Renewal date: " + renewal_date);
      console.log("Mark description: " + mark_desc);
      console.log("Mark hash: " + mark_hash);

      this.props.changeForm('ip_addr', address);
      this.props.changeForm('address', owner);

      this.props.nextStep(1);
    } catch (error) {
      alert("ERROR: The hash has already been registered!");
      this.props.previousStep(2);
    }
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
          <p className={style.markDescLabel}>Mark description:</p>
          <input className={style.markDesc} type='text' value={values.markDesc} readOnly />
          <p className={style.markHashLabel}>Mark hash:</p>
          <input className={style.markHash} type='text' value={values.fileHash} readOnly />
          <button className={style.back} type='button' onClick={ this.backRegistration }>Back</button>
          <button className={style.next} type='button' onClick={ this.continueRegistration }>Register Trademark</button>
      </form>
      </Layout>
    );
  }
}

export default FormRegisterTrademarkConfirm;
