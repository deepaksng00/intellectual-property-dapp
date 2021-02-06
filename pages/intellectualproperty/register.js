import React, { Component } from 'react';
import Layout from "../../components/Layout";
import style from "../../styles/RegisterIP.module.css";
import { Link } from "../../routes";
import web3 from "../../ethereum/web3";
import factory from "../../ethereum/factory";

class RegisterIP extends Component {
  state = {
    addresses: '',
    timestamp: ''
  }

  async componentDidMount() {
    const addresses = await web3.eth.getAccounts();
    this.setState({ addresses });
    const currentTime = new Date();
    const timestamp = ('0' + currentTime.getDate()).slice(-2) + "-" + ('0' + (currentTime.getMonth() + 1)).slice(-2) + "-" + currentTime.getFullYear();
    this.setState({ timestamp });
  }

  submitForm = async (event) => {
    event.preventDefault();
    console.log("Creating IP...");
    document.getElementById("register-label").style.display = "none";
    document.getElementById("loaderObject").style.display = "block";
    const address = await web3.eth.getAccounts();
    await factory.methods.createPatent().send({
      from: address[0],
      gasLimit: "5000000"
    });
    const addressesOfDeployed = await factory.methods.getPatents().call();
    console.log("IP created at address: " + addressesOfDeployed);
    document.getElementById("loaderObject").style.display = "none";
        document.getElementById("register-label").style.display = "block";
  }

  render() {
    return (
      <Layout>
        <div className={style.main_grid_container}>
          <nav className={style.grid_item}>
            <Link route="/"><a href="#">Home</a></Link> > <Link route="/intellectualproperty/register"><a href="#">Register</a></Link>
          </nav>
          <form className={[style.grid_item, style.section_form].join(" ")}>
            <h2>Intellectual Property Registration Form</h2>
            <p className={style.label1}>Account: </p>
            <input className={style.account} type="text" placeholder="Text..." name="test" value={this.state.addresses} readOnly/>
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
            <input className={style.file} type="file"/>
            <button type="submit" onClick={this.submitForm}> <div id="loaderObject" className={style.loader}></div><div id="register-label">Register</div></button>
          </form>
        </div>
      </Layout>
    );
  }
}

export default RegisterIP;
