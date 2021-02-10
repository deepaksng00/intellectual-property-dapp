import React, { Component } from 'react';
import Layout from "../../components/Layout";
import style from "../../styles/RegisterIP.module.css";
import { Link } from "../../routes";
import web3 from "../../ethereum/web3";
import factory from "../../ethereum/factory";
import Head from 'next/head';

class Register1 extends Component {
  state = {
    addresses: '',
    timestamp: '',
    typeOfIP: '',
    publicationDate: '',
    markDesc: '',
    md5: ''
  }

  async componentDidMount() {
    const addresses = await web3.eth.getAccounts();
    this.setState({ addresses });
    const currentTime = new Date();
    const timestamp = ('0' + currentTime.getDate()).slice(-2) + "-" + ('0' + (currentTime.getMonth() + 1)).slice(-2) + "-" + currentTime.getFullYear();
    this.setState({ timestamp });
  }

  file_upload = (event) => {
    const file = document.getElementById("file_upload");
    console.log(file.files);
    if (file.files[0].size > 104857600) {
      alert(`${file.files[0].name} is too big! Max size is 100MB`);
      file.value = "";
    } else {
      const reader = new FileReader();
      reader.onload = () => {
        var hash = CryptoJS.MD5(CryptoJS.enc.Latin1.parse(reader.result));
        var md5 = hash.toString(CryptoJS.enc.Hex);
        this.setState({ md5 });
      }
      reader.readAsBinaryString(file.files[0]);
    }
  }

  next_1 = (event) => {
    var radioButtons = document.getElementsByName('ip_type');
    var typeOfIP = '';

    if (!radioButtons[0].checked && !radioButtons[1].checked && !radioButtons[2].checked) {
      document.getElementById("typeOfIP").style.border = "2px solid red";
      alert("ERROR! You haven't selected the type of intellectual property you want to register!");
    } else {
      if (document.getElementById("file_upload").value == "") {
        document.getElementById("file_upload").style.border = "2px solid red";
        alert("ERROR! You haven't selected the file you want to register!");
      } else {
        if (radioButtons[0].checked == true) {
          typeOfIP = 'trademark';
        } else if (radioButtons[1].checked == true) {
          typeOfIP = 'patent';
        } else if (radioButtons[2].checked == true) {
          typeOfIP = 'design';
        }

        this.setState({ typeOfIP });

        document.getElementById("register_1").style.display = "none";

        if (typeOfIP == 'trademark') {
          document.getElementById("register_2").style.display = "grid";
        } else if (typeOfIP == 'patent') {
          document.getElementById("register_patent").style.display = "grid";
        } else if (typeOfIP == 'design') {
          document.getElementById("register_design").style.display = "grid";
        }
      }
    }
  }

  onChange_publicationDate = (event) => {
    const publicationDate = document.getElementById("publicationDate").value;
    this.setState({ publicationDate });
  }

  onChange_markDesc = (event) => {
    const markDesc = document.getElementById("markDesc").value;
    this.setState({ markDesc });
  }

  back_2 = (event) => {
    document.getElementById("register_2").style.display = "none";
    document.getElementById("register_1").style.display = "grid";
    document.getElementById("typeOfIP").style.border = "none";
    document.getElementById("file_upload").style.border = "none";
  }

  register = async (event) => {
    const addresses = await web3.eth.getAccounts();
    // trademark
    const compiled_trademark = require("../../ethereum/build/Trademark.json");
    console.log("Creating IP...")
    await factory.methods.createTrademark(this.state.publicationDate, this.state.markDesc, this.state.md5).send({
      from: addresses[0],
      gasLimit: "5000000"
    });
    console.log("IP created, address: ")
    const trademarks = await factory.methods.getTrademarks().call();
    const numOfTrademarks = await factory.methods.getNumOfTrademarks().call();
    const address = trademarks[numOfTrademarks-1];
    const trademark = await new web3.eth.Contract(compiled_trademark.abi, address);
    const filingDate_UNIX = await trademark.methods.getFilingDate().call();
    const trademark_date_obj = new Date(filingDate_UNIX * 1000);
    const ip_date_complete = trademark_date_obj.getFullYear().toString() + "-" + (trademark_date_obj.getMonth()+1).toString() + "-" + trademark_date_obj.getDate().toString();
    alert(`The contract has been created! The address is: ${address} and the filing date is: ${ip_date_complete}`);
  }

  render() {
    return (
      <Layout>
        <Head>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/core.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/md5.js"></script>
        </Head>
        <div id="register_1" className={style.main_grid_container_1}>
          <nav className={style.grid_item_1}>
            <Link route="/"><a href="#">Home</a></Link> > <Link route="/intellectualproperty/register"><a href="#">Register</a></Link>
          </nav>
          <form className={[style.grid_item_1, style.section_form_1].join(" ")}>
            <h2>Intellectual Property Registration Form 1/2</h2>
            <p className={style.accountLabel}>Account: </p>
            <input className={style.account} type="text" placeholder="Text..." name="account" value={this.state.addresses} readOnly/>
            <p className={style.dateLabel}>Date: </p>
            <input className={style.date} type="text" placeholder="Text..." name="date" value={this.state.timestamp} readOnly/>
            <p className={style.typeOfIPLabel}>Type of IP: </p>
            <div className={style.typeOfIP} id="typeOfIP">
              <input type="radio" id="trademark" name="ip_type" value="trademark"/>
              <label htmlFor="trademark">Trademark</label><br/>
              <input type="radio" id="patent" name="ip_type" value="patent"/>
              <label htmlFor="patent">Patent</label><br/>
              <input type="radio" id="design" name="ip_type" value="design"/>
              <label htmlFor="design">Design</label>
            </div>
            <p className={style.fileLabel}>File: </p>
            <input id="file_upload" className={style.file} onChange={this.file_upload} type="file"/>
            <button type="button" onClick={this.next_1}>Next</button>
          </form>
        </div>

        <div id="register_2" className={style.main_grid_container_2}>
          <nav className={style.grid_item_2}>
            <Link route="/"><a href="#">Home</a></Link> > <Link route="/intellectualproperty/register"><a href="#">Register</a></Link>
          </nav>
          <form className={[style.grid_item_2, style.section_form_2].join(" ")}>
            <h2>Intellectual Property Registration Form 2/2</h2>
            <p className={style.test}>Publication date: </p>
            <input className={style.testEntry} type="text" placeholder="DD-MM-YEAR" id="publicationDate" value={this.state.publicationDate} onChange={this.onChange_publicationDate}/>
            <p className={style.label2}>Mark description: </p>
            <input className={style.surname} type="text" placeholder="Enter the mark description..." id="markDesc" value={this.state.markDesc} onChange={this.onChange_markDesc}/>
            <button className={style.back} type="button" onClick={this.back_2}>Back</button>
            <button className={style.next} type="button" onClick={this.register}>Register trademark</button>
          </form>
        </div>

        <div id="register_patent" className={style.main_grid_container_patent}>

        </div>

        <div id="register_design" className={style.main_grid_container_design}>

        </div>
      </Layout>
    );
  }
}

export default Register1;
