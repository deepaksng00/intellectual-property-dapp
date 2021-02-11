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
    md5: '',
    publicationDateString: '',
    patentTitle: '',
    addressLine1_patent: '',
    addressLine2_patent: '',
    addressLineCity_patent: '',
    addressLineCounty_patent: '',
    addressLineCountry_patent: ''
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
    const pubDateString_trademark = document.getElementById("publicationDate");
    const pubDateString_patent = document.getElementById("publicationDate_patent");
    var publicationDateString = pubDateString_trademark.value;
    if (document.getElementById("register_patent").style.display == "grid") {
      publicationDateString = pubDateString_patent.value;
    }
    var res = publicationDateString.split("-");
    var d = new Date(res[2], res[1]-1, res[0]);
    const publicationDate = d.getTime() / 1000;
    this.setState({ publicationDateString })
    this.setState({ publicationDate });
  }

  onChange_markDesc = (event) => {
    const markDesc = document.getElementById("markDesc").value;
    this.setState({ markDesc });
  }

  onChange_patentTitle = (event) => {
    const patentTitle = document.getElementById("patentTitle").value;
    this.setState({ patentTitle });
  }

  onChange_addressLine1_patent = (event) => {
    const addressLine1_patent = document.getElementById("addressLine1_patent").value;
    this.setState({ addressLine1_patent });
  }

  onChange_addressLine2_patent = (event) => {
    const addressLine2_patent = document.getElementById("addressLine2_patent").value;
    this.setState({ addressLine2_patent });
  }

  onChange_addressLineCity_patent = (event) => {
    const addressLineCity_patent = document.getElementById("addressLineCity_patent").value;
    this.setState({ addressLineCity_patent });
  }

  onChange_addressLineCounty_patent = (event) => {
    const addressLineCounty_patent = document.getElementById("addressLineCounty_patent").value;
    this.setState({ addressLineCounty_patent });
  }

  onChange_addressLinePostcode_patent = (event) => {
    const addressLinePostcode_patent = document.getElementById("addressLinePostcode_patent").value;
    this.setState({ addressLinePostcode_patent });
  }

  onChange_addressLineCountry_patent = (event) => {
    const addressLineCountry_patent = document.getElementById("addressLineCountry_patent").value;
    this.setState({ addressLineCountry_patent });
  }

  back_2 = (event) => {
    document.getElementById("register_2").style.display = "none";
    document.getElementById("register_patent").style.display = "none";
    document.getElementById("register_1").style.display = "grid";
    document.getElementById("typeOfIP").style.border = "none";
    document.getElementById("file_upload").style.border = "none";
  }

  register = async (event) => {
    const addresses = await web3.eth.getAccounts();
    // trademark
    const compiled_trademark = require("../../ethereum/build/Trademark.json");

    alert("Creating IP...");

    await factory.methods.createTrademark(this.state.publicationDate, this.state.markDesc, this.state.md5).send({
      from: addresses[0],
      gasLimit: "5000000"
    });

    const trademarks = await factory.methods.getTrademarks().call();
    const numOfTrademarks = await factory.methods.getNumOfTrademarks().call();
    const address = trademarks[numOfTrademarks-1];
    const trademark = await new web3.eth.Contract(compiled_trademark.abi, address);

    const filingDate_UNIX = await trademark.methods.getFilingDate().call();
    const trademark_date_obj = new Date(filingDate_UNIX * 1000);
    const filingDate = trademark_date_obj.getFullYear().toString() + "-" + (trademark_date_obj.getMonth()+1).toString() + "-" + trademark_date_obj.getDate().toString();
    const owner = await trademark.methods.getOwner().call();
    const status = await trademark.methods.getStatus().call();
    const publicationDate_UNIX = await trademark.methods.getPublicationDate().call();
    const publicationDate_obj = new Date(publicationDate_UNIX * 1000);
    const publicationDate = publicationDate_obj.getFullYear().toString() + "-" + (publicationDate_obj.getMonth()+1).toString() + "-" + publicationDate_obj.getDate().toString();
    const status_date_UNIX = await trademark.methods.getStatusDate().call();
    const status_date_object = new Date(status_date_UNIX * 1000);
    const status_date = status_date_object.getFullYear().toString() + "-" + (status_date_object.getMonth()+1).toString() + "-" + status_date_object.getDate().toString();
    const renewal_date_UNIX = await trademark.methods.getRenewalDate().call();
    const renewal_date_obj = new Date(renewal_date_UNIX * 1000);
    const renewal_date = renewal_date_obj.getFullYear().toString() + "-" + (renewal_date_obj.getMonth()+1).toString() + "-" + renewal_date_obj.getDate().toString();
    const mark_desc = await trademark.methods.getMarkDesc().call();
    const mark_hash = await trademark.methods.getImageHash().call();

    console.log("Address: " + address);
    console.log("Owner: " + owner);
    console.log("Status: " + status);
    console.log("Status last changed: " + status_date)
    console.log("Filing date: " + filingDate);
    console.log("Publication date: " + publicationDate);
    console.log("Renewal date: " + renewal_date);
    console.log("Mark description: " + mark_desc);
    console.log("Mark hash: " + mark_hash);
  }

  register_patent = async (event) => {
    const addresses = await web3.eth.getAccounts();
    // trademark
    const compiled_patent = require("../../ethereum/build/Patent.json");

    alert("Creating IP...");

    const inventorAddress_Full = this.state.addressLine1_patent + ", " + this.state.addressLine2_patent + ", " + this.state.addressLineCity_patent + ", " + this.state.addressLineCounty_patent + ", " + this.state.addressLinePostcode_patent + ", " + this.state.addressLineCountry_patent;

    await factory.methods.createPatent(this.state.publicationDate, this.state.patentTitle, inventorAddress_Full).send({
      from: addresses[0],
      gasLimit: "5000000"
    });

    const patents = await factory.methods.getPatents().call();
    const numOfPatents = await factory.methods.getNumOfPatents().call();
    const address = patents[numOfPatents-1];
    const patent = await new web3.eth.Contract(compiled_patent.abi, address);

    const filingDate_UNIX = await patent.methods.getFilingDate().call();
    const patent_date_obj = new Date(filingDate_UNIX * 1000);
    const filingDate = patent_date_obj.getFullYear().toString() + "-" + (patent_date_obj.getMonth()+1).toString() + "-" + patent_date_obj.getDate().toString();
    const owner = await patent.methods.getOwner().call();
    const status = await patent.methods.getStatus().call();
    const publicationDate_UNIX = await patent.methods.getPublicationDate().call();
    const publicationDate_obj = new Date(publicationDate_UNIX * 1000);
    const publicationDate = publicationDate_obj.getFullYear().toString() + "-" + (publicationDate_obj.getMonth()+1).toString() + "-" + publicationDate_obj.getDate().toString();
    const status_date_UNIX = await patent.methods.getStatusDate().call();
    const status_date_object = new Date(status_date_UNIX * 1000);
    const status_date = status_date_object.getFullYear().toString() + "-" + (status_date_object.getMonth()+1).toString() + "-" + status_date_object.getDate().toString();
    const renewal_date_UNIX = await patent.methods.getExpirationDate().call();
    const renewal_date_obj = new Date(renewal_date_UNIX * 1000);
    const renewal_date = renewal_date_obj.getFullYear().toString() + "-" + (renewal_date_obj.getMonth()+1).toString() + "-" + renewal_date_obj.getDate().toString();
    const inventorAddress = await patent.methods.getInventorAddress().call();
    const title = await patent.methods.getTitle().call();

    console.log("Address: " + address);
    console.log("Owner: " + owner);
    console.log("Status: " + status);
    console.log("Status last changed: " + status_date)
    console.log("Filing date: " + filingDate);
    console.log("Publication date: " + publicationDate);
    console.log("Renewal date: " + renewal_date);
    console.log("Inventor address: " + inventorAddress);
    console.log("Title: " + title);
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
            <h2>Intellectual Property Registration Form 2/2 (Trademark)</h2>
            <p className={style.test}>Publication date: </p>
            <input className={style.testEntry} type="text" placeholder="DD-MM-YEAR" id="publicationDate" value={this.state.publicationDateString} onChange={this.onChange_publicationDate}/>
            <p className={style.label2}>Mark description: </p>
            <input className={style.surname} type="text" placeholder="Enter the mark description..." id="markDesc" value={this.state.markDesc} onChange={this.onChange_markDesc}/>
            <button className={style.back} type="button" onClick={this.back_2}>Back</button>
            <button className={style.next} type="button" onClick={this.register}>Register trademark</button>
          </form>
        </div>

        <div id="register_patent" className={style.main_grid_container_patent}>
          <nav className={style.grid_item_patent}>
            <Link route="/"><a href="#">Home</a></Link> > <Link route="/intellectualproperty/register"><a href="#">Register</a></Link>
          </nav>
          <form className={[style.grid_item_patent, style.section_form_patent].join(" ")}>
            <h2>Intellectual Property Registration Form 2/2 (Patent)</h2>
            <p className={style.publicationDate_label_patent}>Publication date:</p>
            <input className={style.publicationDate_patent} type="text" placeholder="DD-MM-YEAR" id="publicationDate_patent" value={this.state.publicationDateString} onChange={this.onChange_publicationDate} />
            <p className={style.title_label_patent}>Title: </p>
            <input className={style.title_patent} type="text" placeholder="Enter the patent title..." id="patentTitle" value={this.state.patentTitle} onChange={this.onChange_patentTitle} />
            <p className={style.addressLine1_label_patent}>Address line 1:</p>
            <input className={style.addressLine1_patent} type="text" placeholder="Enter address line 1..." id="addressLine1_patent" value={this.state.addressLine1_patent} onChange={this.onChange_addressLine1_patent}/>
            <p className={style.addressLine2_label_patent}>Address line 2:</p>
            <input className={style.addressLine2_patent} type="text" placeholder="Enter address line 2..." id="addressLine2_patent" value={this.state.addressLine2_patent} onChange={this.onChange_addressLine2_patent}/>
            <p className={style.addressLineCity_label_patent}>City:</p>
            <input className={style.addressLineCity_patent} type="text" placeholder="Enter the city..." id="addressLineCity_patent" value={this.state.addressLineCity_patent} onChange={this.onChange_addressLineCity_patent}/>
            <p className={style.addressLineCounty_label_patent}>County:</p>
            <input className={style.addressLineCounty_patent} type="text" placeholder="Enter the county..." id="addressLineCounty_patent" value={this.state.addressLineCounty_patent} onChange={this.onChange_addressLineCounty_patent}/>
            <p className={style.addressLinePostcode_label_patent}>Postcode:</p>
            <input className={style.addressLinePostcode_patent} type="text" placeholder="Enter the postcode..." id="addressLinePostcode_patent" value={this.state.addressLinePostcode_patent} onChange={this.onChange_addressLinePostcode_patent}/>
            <p className={style.addressLineCountry_label_patent}>Country:</p>
            <input className={style.addressLineCountry_patent} type="text" placeholder="Enter the country..." id="addressLineCountry_patent" value={this.state.addressLineCountry_patent} onChange={this.onChange_addressLineCountry_patent}/>
          </form>
          <button className={style.back} type="button" onClick={this.back_2}>Back</button>
          <button className={style.next} type="button" onClick={this.register_patent}>Register trademark</button>
        </div>

        <div id="register_design" className={style.main_grid_container_design}>

        </div>
      </Layout>
    );
  }
}

export default Register1;
