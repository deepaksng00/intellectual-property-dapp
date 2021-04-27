import React, { Component } from 'react';
import Layout from './Layout';
import style from '../styles/FormRegisterDesignConfirm.module.css';
import { Router } from '../routes';
import web3 from '../ethereum/web3';
import RingLoader from "react-spinners/RingLoader";
import ipfs from '../ethereum/ipfs';
const contract = require("../ethereum/intellectualproperty");


class FormRegisterDesignConfirm extends Component {
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
    expirationDate.setFullYear(expirationDate.getFullYear() + 5);
    expirationDate = expirationDate.getTime() / 1000; 
    
    ipfs.files.add(this.props.values.fileBuffer, async (error, result) => {
      if (error) {
        alert("There has been an issue with the file upload.");
        this.previousStep(8);
      }

      const ipfsHash = result[0].hash;
      this.props.changeForm('fileHash', result[0].hash);

      // creating metadata for NFT
      tokenMetadata += "{ ";
      tokenMetadata += ('"PubDate"'+':"'+currentTimestamp.toString()+'", ');
      tokenMetadata += ('"ExpirationDate"'+':"'+expirationDate.toString()+'", ');
      tokenMetadata += ('"IpfsHash"'+':"'+ipfsHash+'", ');
      tokenMetadata += ('"TypeOfIP"'+':"'+"Design"+'", ');
      tokenMetadata += ('"Comment"'+':"'+values.comment+'"');
      tokenMetadata += " }";

      const address = values.address[0];

      try {

        const tx = await contract.default.methods.awardIP(address, ipfsHash, tokenMetadata).send({
          from: address,
          gasLimit: "5000000"
        });

        this.setState({ loading: false });

        const tokenID = tx.events.Transfer.returnValues["tokenId"];

        this.props.changeForm('tokenID', tokenID);
        this.props.changeForm('address', address);

        this.props.nextStep(1);
      } catch (error) {
        this.setState({ loading: false });

        if ((error.message.toString()).includes("Hash Already Registered")) {
          alert("This invention has already been registered.");
          this.props.previousStep(8);
        } else {
          alert("There has been an error with the transaction. Please try again later.");
          console.log(error);
          this.props.previousStep(8);
        }
      }
    });
  }

  backRegistration = e => {
    e.preventDefault();
    this.props.previousStep(1);
  }

  async componentDidMount() {

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
