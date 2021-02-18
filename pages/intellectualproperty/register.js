import React, { Component } from 'react';
import Layout from '../../components/Layout';
import style from '../../styles/Index.module.css';
import FormRegisterLogin from '../../components/FormRegisterLogin';
import web3 from '../../ethereum/web3';

class Register extends Component {
  state = {
    step: 1,
    address: '',
    currentDate: '',
    typeOfIP: '',
    markDesc: '',
    fileHash: '',
    patentTitle: '',
    addressLine1_patent: '',
    addressLine2_patent: '',
    addressLineCity_patent: '',
    addressLineCounty_patent: '',
    addressLineCountry_patent: '',
    addressLinePostcode_patent: ''
  }

  async componentDidMount() {
    const address = await web3.eth.getAccounts();
    const currentTimestamp = new Date();
    const currentDate = ('0' + currentTimestamp.getDate()).slice(-2) + "-" + ('0' + (currentTimestamp.getMonth() + 1)).slice(-2) + "-" + currentTimestamp.getFullYear();
    this.setState({ address });
    this.setState({ currentDate });
  }

  nextStep = () => {
    const step = this.state.step;
    this.setState({ step: step + 1 });
  }

  previousStep = () => {
    const step = this.state.step;
    this.setState({ step: step - 1 });
  }

  formChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  render() {
    const { step } = this.state;
    const {
      address, currentDate, typeOfIP, markDesc, fileHash, patentTitle,
      addressLine1_patent, addressLine2_patent, addressLineCity_patent,
      addressLineCounty_patent, addressLineCountry_patent, addressLinePostcode_patent
    } = this.state;

    const values = {
      address, currentDate, typeOfIP, markDesc, fileHash, patentTitle,
      addressLine1_patent, addressLine2_patent, addressLineCity_patent,
      addressLineCounty_patent, addressLineCountry_patent, addressLinePostcode_patent
    }

    switch(step) {
      case 1:
        return (
          <FormRegisterLogin
            nextStep = { this.nextStep }
            changeForm = { this.formChange }
            values = { values }
          />
        );
      case 2:
        return (
          <h2>General Details</h2>
        );
      case 3:
        return(
          <h2>IP specific</h2>
        );
    }

    return (
      <Layout>
        <h3>Ensuring Metamask is connected correctly</h3>

      </Layout>
    );
  }
}

export default Register;
