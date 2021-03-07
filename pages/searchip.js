import React, { Component } from 'react';
import Layout from '../components/Layout';
import web3 from '../ethereum/web3';
import factory from '../ethereum/factory';
import IntellectualPropertyItem from '../components/IntellectualPropertyItem';
import { Link, Router } from '../routes';
import style from '../styles/SearchIP.module.css';

export default class YourIP extends Component {
    static async getInitialProps(props) {
        const users = await factory.methods.getUsers().call();

        let trademarks = [];
        let patents = [];
        let designs = [];

        for (var i = 0; i < users.length; i++) {
            trademarks.push(await factory.methods.getTrademarks(users[i]).call());
            patents.push(await factory.methods.getPatents(users[i]).call());
            designs.push(await factory.methods.getDesigns(users[i]).call());
        }

        return {
            trademarks: trademarks,
            patents: patents,
            designs: designs
        };
    }

    async componentDidMount() {
        const address = await web3.eth.getAccounts();
        if (address == "") {
            alert("Metamask is not setup correctly, please load Metamask and try again!");
            Router.pushRoute('/');
        }
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        const searchAddress = document.getElementById('ipAddress').value;
        let found = '';
        let typeOfIP = '';

        const trademarks = this.props.trademarks;
        const patents = this.props.patents;
        const designs = this.props.designs;

        for(var i = 0; i < trademarks.length; i++) {
            if(trademarks[i] == searchAddress) {
                found = trademarks[i];
                typeOfIP = 'trademarks';
            }
        }
        for(var i = 0; i < patents.length; i++) {
            if(patents[i] == searchAddress) {
                found = patents[i];
                typeOfIP = 'patents';
            }
        }
        for(var i = 0; i < designs.length; i++) {
            if(designs[i] == searchAddress) {
                found = designs[i];
                typeOfIP = 'designs';
            }
        }

        if(found == '') {
            alert("No results found");
        } else {
            Router.pushRoute(`/intellectualproperty/${typeOfIP}/${found}`);
        }
    }

    render() {
        return (
            <Layout>
                <form className={style.form} onSubmit={this.onFormSubmit}>
                    <h2>Search for IP</h2>
                    <input id="ipAddress" className={style.ipAddressBar} type='text'/>
                    <input className={style.button} type="submit" />
                </form>
            </Layout>
        )
    }
}
