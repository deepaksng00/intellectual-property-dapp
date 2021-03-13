import React, { Component } from 'react';
import Layout from './Layout';
import style from '../styles/FormRegisterDesignConfirm.module.css';
import { Link, Router } from '../routes';
import web3 from '../ethereum/web3';
import factory from '../ethereum/factory';
import RingLoader from "react-spinners/RingLoader";

class FormRegisterDesignConfirm extends Component {
  state = {
    loading: false
  }

  continueRegistration = async (event) => {
    const { values } = this.props;
    event.preventDefault();
    const compiled_design = require("../ethereum/build/Design.json");

    try {
      this.setState({ loading: true });
      await factory.methods.createDesign(values.comment, values.fileHash).send({
        from: values.address[0],
        gasLimit: "5000000"
      })
      .catch(() => { throw 'HashAlreadyUsed' });
  
      const designs = await factory.methods.getDesigns(values.address[0]).call();
      const numOfDesigns = designs.length;
      const address = designs[numOfDesigns-1];

      this.props.changeForm('ip_addr', address);
      this.props.changeForm('address', values.address[0]);

      this.setState({ loading: false });

      this.props.nextStep(1);
    } catch (err) {
      this.setState({ loading: false });
      if(err == 'HashAlreadyUsed') {
        alert("ERROR: The hash has already been registered!");
      } else {
        console.log(err);
      }
      this.props.previousStep(8);
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
      <div>
        {
          this.state.loading ?

          <div class="loadingContainer">
            <RingLoader color={"#ffffff"} loading={this.state.loading} size={60} />
          </div>

          :

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
        }
      </div>

    );
  }
}

export default FormRegisterDesignConfirm;
