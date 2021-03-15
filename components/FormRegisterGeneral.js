import React, { Component } from 'react';
import Layout from './Layout';
import style from '../styles/FormRegisterGeneral.module.css';
import { Router } from '../routes';
import web3 from '../ethereum/web3';
import Head from 'next/head';
import RingLoader from "react-spinners/RingLoader";

class FormRegisterGeneral extends Component {
  state = {
    typeOfIP: '',
    changeForm: '',
    loading: false
  }

  continueRegistration = e => {
    e.preventDefault();
    this.setState({ loading: true });
    var radioButtons = document.getElementsByName('ip_type');

    if (!radioButtons[0].checked && !radioButtons[1].checked && !radioButtons[2].checked) {
      this.setState({ loading: false });
      document.getElementById("typeOfIP").style.border = "2px solid red";
      alert("ERROR! You haven't selected the type of intellectual property you want to register!");
    } else {
      if (document.getElementById("file_upload").value == "") {
        this.setState({ loading: false });
        document.getElementById("file_upload").style.border = "2px solid red";
        alert("ERROR! You haven't selected the file you want to register!");
      } else {
        this.setState({ loading: false });
        if (radioButtons[0].checked == true) {
          this.props.changeForm('typeOfIP', 'Trademark');
          this.props.nextStep(1);
        } else if (radioButtons[1].checked == true) {
          this.props.changeForm('typeOfIP', 'Patent');
          this.props.nextStep(4);
        } else if (radioButtons[2].checked == true) {
          this.props.changeForm('typeOfIP', 'Design');
          this.props.nextStep(7);
        }
      }
    }
  }

  previousRegistration = e => {
    e.preventDefault();
    this.props.previousStep(1);
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const { changeForm } = this.props;
    this.setState({ changeForm })
    const address = await web3.eth.getAccounts();
    if (address == "") {
      this.setState({ loading: false });
      alert("Metamask has disconnected, please connect Metamask and try again!");
      Router.pushRoute('/');
    }
    this.setState({ loading: false });
  }

  file_upload = (event) => {
    event.preventDefault();
    try {
      this.setState({loading: true});
      document.getElementById("LayoutComponent").style.display = "none";
      document.getElementById("loader").style.display = "flex";
      const file = document.getElementById("file_upload");
      if (file.files[0].size > 104857600) {
        document.getElementById("LayoutComponent").style.display = "grid";
        document.getElementById("loader").style.display = "none";
        alert(`${file.files[0].name} is too big! Max size is 100MB`);
        file.value = "";
      } else {
        const reader = new FileReader();
        reader.onload = () => {
          var hash = CryptoJS.MD5(CryptoJS.enc.Latin1.parse(reader.result));
          var md5 = hash.toString(CryptoJS.enc.Hex);
  
          this.state.changeForm('fileHash', md5);
          document.getElementById("LayoutComponent").style.display = "grid";
          document.getElementById("loader").style.display = "none";
        }
        reader.readAsBinaryString(file.files[0]);
      }
    } catch (err) {
      alert("There was an issue with the file!");
      console.log(err);
    }
  }

 // add timeout for form
  render() {
    const { values } = this.props;
    const { nextStep } = this.props;
    const { changeForm } = this.props;

    return (
      <div>
        <Layout>
          <Head>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/core.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/md5.js"></script>
          </Head>
          <div class="loadingContainer" className={style.loading} id="loader">
            <RingLoader color={"#ffffff"} loading={this.state.loading} size={60} />
          </div>
          <form className={style.form} id="LayoutComponent">
            <h2>Intellectual Property Registration Form 1/2</h2>
            <p className={style.dateLabel}>Date:</p>
            <input className={style.date} type='text' value={values.currentDate} readOnly />
            <p className={style.typeOfIPLabel}>Type of IP: </p>
            <div className={style.typeOfIP} id="typeOfIP">
              <input type="radio" id="trademark" name="ip_type" value="trademark"/>
              <label htmlFor="trademark">  Trademark</label><br/>
              <input type="radio" id="patent" name="ip_type" value="patent"/>
              <label htmlFor="patent">  Patent</label><br/>
              <input type="radio" id="design" name="ip_type" value="design"/>
              <label htmlFor="design">  Design</label>
            </div>
            <p className={style.fileLabel}>File: </p>
            <input id="file_upload" className={style.file} onChange={this.file_upload} type="file"/>
            <button className={style.back} type='button' onClick={ this.previousRegistration }>Back</button>
            <button className={style.next} type='button' onClick={ this.continueRegistration }>Next</button>
          </form>
        </Layout>
      </div>
      
    );
  }

}

export default FormRegisterGeneral;
