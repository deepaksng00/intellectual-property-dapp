import React, { Component } from 'react';
import Layout from '../../components/Layout';
import style from '../../styles/Index.module.css';
import FormRegisterLogin from '../../components/FormRegisterLogin';
import FormRegisterGeneral from '../../components/FormRegisterGeneral';
import FormRegisterTrademark from '../../components/FormRegisterTrademark';
import FormRegisterTrademarkConfirm from '../../components/FormRegisterTrademarkConfirm';
import FormRegisterPatent from '../../components/FormRegisterPatent';
import FormRegisterPatentConfirm from '../../components/FormRegisterPatentConfirm';
import FormRegisterDesign from '../../components/FormRegisterDesign';
import FormRegisterDesignConfirm from '../../components/FormRegisterDesignConfirm';
import FormRegisterReceipt from '../../components/FormRegisterReceipt';
import web3 from '../../ethereum/web3';

class Register extends Component {
  state = {
    step: 1,
    address: '',
    currentDate: '',
    typeOfIP: '',
    fileHash: '',
    markDesc: '',
    patentTitle: '',
    address1_patent: '',
    address2_patent: '',
    addressCity_patent: '',
    addressCounty_patent: '',
    addressCountry_patent: '',
    addressPostcode_patent: '',
    comment: '',
    ip_addr: ''
  }

  async componentDidMount() {
    const address = await web3.eth.getAccounts();
    const currentTimestamp = new Date();
    const currentDate = ('0' + currentTimestamp.getDate()).slice(-2) + "-" + ('0' + (currentTimestamp.getMonth() + 1)).slice(-2) + "-" + currentTimestamp.getFullYear();
    this.setState({ address });
    this.setState({ currentDate });
  }

  nextStep = (steps) => {
    const step = this.state.step;
    this.setState({ step: step + steps });
  }

  previousStep = (steps) => {
    const step = this.state.step;
    this.setState({ step: step - steps });
  }

  formChange = (input, value) => {
    this.setState({ [input]: value });
  }

  render() {
    const { step } = this.state;
    const {
      address, currentDate, typeOfIP, markDesc, fileHash, patentTitle,
      address1_patent, address2_patent, addressCity_patent,
      addressCounty_patent, addressCountry_patent, addressPostcode_patent,
      comment, ip_addr } = this.state;

    const values = {
      address, currentDate, typeOfIP, markDesc, fileHash, patentTitle,
      address1_patent, address2_patent, addressCity_patent,
      addressCounty_patent, addressCountry_patent, addressPostcode_patent,
      comment, ip_addr
    }

    switch(step) {
      case 1:
        return (
          <FormRegisterLogin
            nextStep = { this.nextStep }
            previousStep = { this.previousStep }
            changeForm = { this.formChange }
            values = { values }
          />
        );
      case 2:
        return (
          <FormRegisterGeneral
            nextStep = { this.nextStep }
            previousStep = { this.previousStep }
            changeForm = { this.formChange }
            values = { values }
          />
        );
      case 3:
        return (
          <FormRegisterTrademark
            nextStep = { this.nextStep }
            previousStep = { this.previousStep }
            changeForm = { this.formChange }
            values = { values }
          />
        );
      case 4:
        return (
          <FormRegisterTrademarkConfirm
            nextStep = { this.nextStep }
            previousStep = {this.previousStep}
            changeForm = { this.formChange }
            values = { values }
          />
        );
      case 5:
        return (
          <FormRegisterReceipt
            nextStep = { this.nextStep }
            previousStep = { this.previousStep }
            changeForm = { this.formChange }
            values = { values }
          />
        );
      case 6:
        return (
          <FormRegisterPatent
            nextStep = { this.nextStep }
            previousStep = { this.previousStep }
            changeForm = { this.formChange }
            values = { values }
          />
        );
      case 7:
        return (
          <FormRegisterPatentConfirm
            nextStep = { this.nextStep }
            previousStep = { this.previousStep }
            changeForm = { this.formChange }
            values = { values }
          />
      );
      case 8:
        return (
          <FormRegisterReceipt
            nextStep = { this.nextStep }
            previousStep = { this.previousStep }
            changeForm = { this.formChange }
            values = { values }
          />
        );
      case 9:
        return (
          <FormRegisterDesign
            nextStep = { this.nextStep }
            previousStep = { this.previousStep }
            changeForm = { this.formChange }
            values = { values }
          />
        );
      case 10:
        return (
          <FormRegisterDesignConfirm
            nextStep = { this.nextStep }
            previousStep = { this.previousStep }
            changeForm = { this.formChange }
            values = { values }
          />
        );
      case 11:
        return (
          <FormRegisterReceipt
            nextStep = { this.nextStep }
            previousStep = { this.previousStep }
            changeForm = { this.formChange }
            values = { values }
          />
        );
    }

    return (
      <Layout>

      </Layout>
    );
  }
}

export default Register;
