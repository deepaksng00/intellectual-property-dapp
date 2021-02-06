import React, { Component } from 'react';
import Layout from "../../components/Layout";
import style from "../../styles/RegisterIP.module.css";
import { Link } from "../../routes";
import web3 from "../../ethereum/web3";

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
            <input className={style.account} type="text" placeholder="Text..." name="test" value={this.state.addresses} readonly/>
            <p className={style.label2}>Date: </p>
            <input className={style.surname} type="text" placeholder="Text..." name="test" value={this.state.timestamp} readonly/>
            <p className={style.label3}>Type of IP: </p>
            <div className={style.radioButtons}>
              <input type="radio" id="trademark" name="ip_type" value="trademark"/>
              <label for="trademark">Trademark</label><br/>
              <input type="radio" id="patent" name="ip_type" value="patent"/>
              <label for="patent">Patent</label><br/>
              <input type="radio" id="design" name="ip_type" value="design"/>
              <label for="design">Design</label>
            </div>
            <p className={style.label4}>File: </p>
            <input className={style.file} type="file"/>
            <button type="submit">Register</button>
          </form>
        </div>
      </Layout>
    );
  }
}

export default RegisterIP;
