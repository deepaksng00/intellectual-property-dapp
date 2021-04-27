import React, { Component } from 'react';
import Layout from './Layout';
import style from '../styles/FormRegisterTrademarkConfirm.module.css';
import { Router } from '../routes';
import web3 from '../ethereum/web3';
import RingLoader from "react-spinners/RingLoader";
import ipfs from '../ethereum/ipfs';
const contract = require("../ethereum/intellectualproperty");


class FormRegisterTrademarkConfirm extends Component {
  state = {
    loading: false
  }

  continueRegistration = async (event) => {
    event.preventDefault();

    const { values } = this.props;
    var tokenMetadata = '';
    
    this.setState({ loading: true });

    const currentTimestamp = new Date().getTime() / 1000;
    var expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 10);
    expirationDate = expirationDate.getTime() / 1000;

    const address = values.address[0];

    ipfs.files.add(this.props.values.fileBuffer, async (error, result) => {
      if (error) {
        alert("There has been an issue with the file upload.");
        this.previousStep(2);
      }

      const ipfsHash = result[0].hash;
      this.props.changeForm('fileHash', result[0].hash);

      // creating metadata for NFT
      tokenMetadata += "{ ";
      tokenMetadata += ('"PubDate"'+':"'+currentTimestamp.toString()+'", ');
      tokenMetadata += ('"ExpirationDate"'+':"'+expirationDate.toString()+'", ');
      tokenMetadata += ('"TypeOfIP"'+':"'+"Trademark"+'", ');
      tokenMetadata += ('"IpfsHash"'+':"'+ipfsHash+'", ');
      tokenMetadata += ('"MarkDesc"'+':"'+values.markDesc+'"');
      tokenMetadata += " }";

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
        console.log(error)
        if ((error.message.toString()).includes("Hash Already Registered")) {
          alert("This invention has already been registered.");
          this.props.previousStep(2);
        } else {
          alert("There has been an error with the transaction. Please try again later.");
          this.props.previousStep(2);
        }
      }
    });
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
              <p className={style.addressLabel}>Account address:</p>
              <input className={style.address} type='text' value={values.address} readOnly />
              <p className={style.dateLabel}>Date:</p>
              <input className={style.date} type='text' value={values.currentDate} readOnly />
              <p className={style.typeOfIPLabel}>Type of IP:</p>
              <input className={style.typeOfIP} type='text' value={values.typeOfIP} readOnly />
              <p className={style.markDescLabel}>Mark description:</p>
              <input className={style.markDesc} type='text' value={values.markDesc} readOnly />
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
