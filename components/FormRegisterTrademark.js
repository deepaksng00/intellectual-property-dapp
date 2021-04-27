import React, { Component } from 'react';
import Layout from './Layout';
import style from '../styles/FormRegisterTrademark.module.css';
import { Router } from '../routes';
import web3 from '../ethereum/web3';
import RingLoader from "react-spinners/RingLoader";

class FormRegisterTrademark extends Component {
  state = {
    loading: false
  }

  continueRegistration = e => {
    e.preventDefault();
    this.props.nextStep(1);
  }

  backRegistration = e => {
    e.preventDefault();
    this.props.previousStep(1);
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const address = await web3.eth.getAccounts();
    this.props.changeForm('address', address);
    this.setState({ loading: false });
  }

  markDesc_change = (event) => {
    const { changeForm } = this.props;
    changeForm('markDesc', document.getElementById("markDesc").value);
  }

  render() {
    const { values } = this.props;
    const { nextStep } = this.props;

    return (
      <div>
      {
        this.state.loading ?

        <div class="loadingContainer"><RingLoader color={"#ffffff"} loading={this.state.loading} size={60} /></div>

        :

        <Layout>
          <form className={style.form}>
            <h2>Intellectual Property Registration Form 2/2 (Trademark)</h2>
            <p className={style.markDescLabel}>Mark description:</p>
            <input id="markDesc" className={style.markDesc} placeholder='Enter a description of your trademark' type='text' value={this.props.values.markDesc} onChange={this.markDesc_change} />
            <button className={style.back} type='button' onClick={ this.backRegistration }>Back</button>
            <button className={style.next} type='button' onClick={ this.continueRegistration }>Next</button>
          </form>
        </Layout>
      }
      </div>
    );
  }
}

export default FormRegisterTrademark;
