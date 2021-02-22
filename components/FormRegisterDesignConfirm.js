import React, { Component } from 'react';
import Layout from './Layout';
import style from '../styles/FormRegisterDesignConfirm.module.css';
import { Link, Router } from '../routes';
import web3 from '../ethereum/web3';
import factory from '../ethereum/factory';

class FormRegisterDesignConfirm extends Component {
   continueRegistration = async (event) => {
    const { values } = this.props;
    event.preventDefault();
    const compiled_design = require("../ethereum/build/Design.json");
    alert("Creating IP");

    await factory.methods.createDesign(values.comment, values.fileHash).send({
     from: values.address[0],
     gasLimit: "5000000"
    });

    const designs = await factory.methods.getDesigns().call();
    const numOfDesigns = await factory.methods.getNumOfDesigns().call();
    const address = designs[numOfDesigns-1];
    const design = await new web3.eth.Contract(compiled_design.abi, address);

    const filingDate_UNIX = await design.methods.getFilingDate().call();
    const design_date_obj = new Date(filingDate_UNIX * 1000);
    const filingDate = design_date_obj.getFullYear().toString() + "-" + (design_date_obj.getMonth()+1).toString() + "-" + design_date_obj.getDate().toString();
    const owner = await design.methods.getOwner().call();
    const status = await design.methods.getStatus().call();
    // const publicationDate_UNIX = await design.methods.getPublicationDate().call();
    // const publicationDate_obj = new Date(publicationDate_UNIX * 1000);
    // const publicationDate = publicationDate_obj.getFullYear().toString() + "-" + (publicationDate_obj.getMonth()+1).toString() + "-" + publicationDate_obj.getDate().toString();
    const status_date_UNIX = await design.methods.getStatusDate().call();
    const status_date_object = new Date(status_date_UNIX * 1000);
    const status_date = status_date_object.getFullYear().toString() + "-" + (status_date_object.getMonth()+1).toString() + "-" + status_date_object.getDate().toString();
    const renewal_date_UNIX = await design.methods.getExpirationDate().call();
    const renewal_date_obj = new Date(renewal_date_UNIX * 1000);
    const renewal_date = renewal_date_obj.getFullYear().toString() + "-" + (renewal_date_obj.getMonth()+1).toString() + "-" + renewal_date_obj.getDate().toString();
    const comment = await design.methods.getComment().call();
    const hash = await design.methods.getDesignHash().call();

    console.log("Address: " + address);
    console.log("Owner: " + owner);
    console.log("Status: " + status);
    console.log("Status last changed: " + status_date)
    console.log("Filing date: " + filingDate);
    // console.log("Publication date: " + publicationDate);
    console.log("Renewal date: " + renewal_date);
    console.log("Comment: " + comment);
    console.log("Hash: " + hash);

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
          <p className={style.commentLabel}>Comment:</p>
          <input className={style.comment} type='text' value={values.comment} readOnly />
          <p className={style.designHashLabel}>Design hash:</p>
          <input className={style.designHash} type='text' value={values.fileHash} readOnly />
          <button className={style.back} type='button' onClick={ this.backRegistration }>Back</button>
          <button className={style.next} type='button' onClick={ this.continueRegistration }>Register Design</button>
      </form>
      </Layout>
    );
  }
}

export default FormRegisterDesignConfirm;
