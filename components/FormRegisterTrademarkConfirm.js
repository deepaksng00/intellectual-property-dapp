import React, { Component } from 'react';
import Layout from './Layout';
import style from '../styles/FormRegisterTrademarkConfirm.module.css';
import { Router } from '../routes';
import web3 from '../ethereum/web3';
import RingLoader from "react-spinners/RingLoader";
const contract = require("../ethereum/intellectualproperty");


class FormRegisterTrademarkConfirm extends Component {
  state = {
    loading: false
  }

  continueRegistration = async (event) => {
    event.preventDefault();

    const { values } = this.props;
    var tokenMetadata = '';
    // const instance = await IPRegister.deployed();

    const currentTimestamp = new Date().getTime() / 1000;
    var expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 5);
    expirationDate = expirationDate.getTime() / 1000;

    // creating metadata for NFT
    tokenMetadata += "{ ";
    tokenMetadata += ('"PubDate"'+':"'+currentTimestamp.toString()+'", ');
    tokenMetadata += ('"ExpirationDate"'+':"'+expirationDate.toString()+'", ');
    tokenMetadata += ('"IpfsHash"'+':"'+values.fileHash+'", ');
    tokenMetadata += ('"TypeOfIP"'+':"'+values.typeOfIP+'", ');
    tokenMetadata += ('"MarkDesc"'+':"'+values.markDesc+'"');
    tokenMetadata += " }";

    const address = values.address[0];
    const ipfsHash = values.fileHash;

    console.log(tokenMetadata);

    try {
      // await contract.default.methods.awardIP(address, ipfsHash, tokenMetadata).send({ from: address, gasLimit: "5000000" })
                                                                              // .catch( console.log("error") );
      const numOfTokens = await contract.default.methods.totalSupply().call();
      const tokenOfUser = await contract.default.methods.tokenOfOwnerByIndex(address, 0).call();
      const tokenURI = await contract.default.methods.tokenURI(tokenOfUser).call();
    
      const JSONURI = JSON.parse(tokenURI);

      console.log(JSONURI.PubDate);
      console.log(JSONURI.ExpirationDate);
      console.log(JSONURI.TypeOfIP);
      console.log(JSONURI.MarkDesc);
      console.log(JSONURI.IpfsHash);
    } catch (error) {
      console.log(error)
    }
  }

  backRegistration = e => {
    e.preventDefault();
    this.props.previousStep(1);
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const address = await web3.eth.getAccounts();
    if (address == "") {
      alert("Metamask is not setup correctly, please load Metamask and try again!");
      Router.pushRoute('/');
    }
    this.setState({ loading: false });
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
        }
      </div>
    );
  }
}

export default FormRegisterTrademarkConfirm;
