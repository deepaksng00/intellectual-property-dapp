import React, { Component } from 'react';
import Layout from "../../components/Layout";
import style from "../../styles/RegisterIP.module.css";
import { Link } from "../../routes";

class RegisterIP extends Component {
  render() {
    return (
      <Layout>
        <nav className={style.grid_item}><Link route="/"><a href="#">Home</a></Link> > <Link route="/intellectualproperty/register"><a href="#">Register</a></Link></nav>
        <h1>New IP</h1>
      </Layout>
    );
  }
}

export default RegisterIP;
