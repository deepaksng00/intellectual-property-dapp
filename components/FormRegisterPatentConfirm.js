import React, { Component } from 'react';
import Layout from './Layout';
import style from '../styles/FormRegisterPatentConfirm.module.css';
import { Router } from '../routes';
import web3 from '../ethereum/web3';
import RingLoader from "react-spinners/RingLoader";
const contract = require("../ethereum/intellectualproperty");


class FormRegisterPatentConfirm extends Component {
  state = {
    loading: false
  }

  continueRegistration = async (event) => {
    event.preventDefault();

    const { values } = this.props;
    var tokenMetadata = '';

    this.setState({ loading: true });

    const inventorAddress_full = values.address1_patent + ", " + values.address2_patent + ", " + values.addressCity_patent + ", " + values.addressCounty_patent + ", " + values.addressPostcode_patent + ", " + values.addressCountry_patent;
    const currentTimestamp = new Date().getTime() / 1000;
    var expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 20);
    expirationDate = expirationDate.getTime() / 1000;

    // creating metadata for NFT
    tokenMetadata += "{ ";
    tokenMetadata += ('"PubDate"'+':"'+currentTimestamp.toString()+'", ');
    tokenMetadata += ('"ExpirationDate"'+':"'+expirationDate.toString()+'", ');
    tokenMetadata += ('"IpfsHash"'+':"'+values.fileHash+'", ');
    tokenMetadata += ('"TypeOfIP"'+':"'+"Patent"+'", ');
    tokenMetadata += ('"Title"'+':"'+values.patentTitle+'", ');
    tokenMetadata += ('"InventorAddress"'+':"'+inventorAddress_full+'"');
    tokenMetadata += " }";

    const address = values.address[0];
    const ipfsHash = values.fileHash;

    try {

      const tx = await contract.default.methods.awardIP(address, ipfsHash, tokenMetadata).send({
        from: address,
        gasLimit: "5000000"
      });

      this.setState({ loading: false });

      const tokenID = tx.events.Transfer.returnValues["tokenId"];

      this.props.changeForm("tokenID", tokenID);
      this.props.changeForm("address", address);

      this.props.nextStep(1);  
    } catch (error) {
      this.setState({ loading: false });
      if ((error.message.toString()).includes("Hash Already Registered")) {
        alert("This invention has already been registered.");
        this.props.previousStep(5);
      } else {
        alert("There has been an error with the transaction. Please try again later.");
        console.log(error);
        this.props.previousStep(5);
      }
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
        }
      </div>

    );
  }
}

export default FormRegisterPatentConfirm;
