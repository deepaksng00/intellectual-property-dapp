import React, { Component, useContext } from 'react';
import Layout from "../../components/Layout";
import style from "../../styles/RegisterIP.module.css";
import { Link } from "../../routes";
import web3 from "../../ethereum/web3";
import factory from "../../ethereum/factory";
import GeneralProps from "../../components/GeneralProps";

class Register2 extends Component {
  state = {
    test: ""
  }

  componentDidMount() {
  }


  render() {
    return (
      <Layout>
        <h1>
          <GeneralProps />
        </h1>
      </Layout>
    );
  }
}

export default Register2;
