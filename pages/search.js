import React, { Component } from 'react';
import Layout from '../components/Layout';
import web3 from '../ethereum/web3';
import style from '../styles/SearchIP.module.css';
import RingLoader from "react-spinners/RingLoader";
import { Router } from '../routes';
const contract = require("../ethereum/intellectualproperty");


export default class SearchIP extends Component {
    state = {
        loading: false
    }

    async componentDidMount() {
        this.setState({ loading: true });
        const address = await web3.eth.getAccounts();
        if (address == "") {
            this.setState({ loading: false });
            alert("Metamask is not setup correctly, please load Metamask and try again!");
            Router.pushRoute('/');
        }
        this.setState({ loading: false });
    }

    onFormSubmit = async (event) => {
        event.preventDefault();

        this.setState({ loading: true });

        const searchToken = document.getElementById('ipAddress').value;
        let tokenID = '';
        let typeOfIP = '';

        const search_tokenID = parseInt(searchToken);

        try {
            const tokenURI = await contract.default.methods.tokenURI(search_tokenID).call();
            const JSONURI = JSON.parse(tokenURI);
            
            typeOfIP = JSONURI.TypeOfIP;
            tokenID = search_tokenID;

            Router.push(`/intellectualproperty/${typeOfIP.toString().toLowerCase()+"s"}/${tokenID}`);
        } catch (error) {
            this.setState({ loading: false });
            alert("No results found.");
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.loading ?

                    <div class="loadingContainer"><RingLoader color={"#ffffff"} loading={this.state.loading} size={60} /></div>

                    :

                    <Layout>
                        <form className={style.form} onSubmit={this.onFormSubmit}>
                            <h2>Search for Intellectual Property</h2>
                            <input id="ipAddress" className={style.ipAddressBar} placeholder="Enter the ID..." type="search"/>
                            <button className={style.button} type="submit">Search</button>
                        </form>
                    </Layout>
                }
            </div>
        )
    }
}
