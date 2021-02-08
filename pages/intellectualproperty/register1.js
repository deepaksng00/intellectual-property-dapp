import React, { Component } from 'react';
import Layout from "../../components/Layout";
import style from "../../styles/RegisterIP.module.css";
import { Link } from "../../routes";
import web3 from "../../ethereum/web3";
import factory from "../../ethereum/factory";

class Register1 extends Component {
  state = {
    addresses: '',
    timestamp: '',
    typeOfIP: ''
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
        // add code for hashing
    }
  }

  next_1 = (event) => {
    var radioButtons = document.getElementsByName('ip_type');
    var typeOfIP = '';

    if (!radioButtons[0].checked && !radioButtons[1].checked && !radioButtons[2].checked) {
      document.getElementById("typeOfIP").style.border = "2px solid red";
      alert("ERROR! You haven't selected the type of intellectual property you want to register!");
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
      document.getElementById("register_2").style.display = "grid";
    }
  }

  back_2 = (event) => {
    document.getElementById("register_2").style.display = "none";
    document.getElementById("register_1").style.display = "grid";
    document.getElementById("typeOfIP").style.border = "none";
  }

  render() {
    return (
      <Layout>
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
            <p className={style.test}>Test: </p>
            <input className={style.testEntry} type="text" placeholder="Text..." name="test" value={this.state.addresses} readOnly/>
            <p className={style.label2}>Date: </p>
            <input className={style.surname} type="text" placeholder="Text..." name="test" value={this.state.timestamp} readOnly/>
            <p className={style.label3}>Type of IP: </p>
            <div className={style.radioButtons}>
              <input type="radio" id="trademark" name="ip_type" value="trademark"/>
              <label htmlFor="trademark">Trademark</label><br/>
              <input type="radio" id="patent" name="ip_type" value="patent"/>
              <label htmlFor="patent">Patent</label><br/>
              <input type="radio" id="design" name="ip_type" value="design"/>
              <label htmlFor="design">Design</label>
            </div>
            <p className={style.label4}>File: </p>
            <input className={style.fileEntry} type="file"/>
            <button className={style.back} type="button" onClick={this.back_2}>Back</button>
            <button className={style.next} type="button" onClick={this.next_2}>Next</button>
          </form>
        </div>

      </Layout>
    );
  }
}

export default Register1;
