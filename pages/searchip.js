import React, { Component } from 'react';
import Layout from '../components/Layout';
import web3 from '../ethereum/web3';
import factory from '../ethereum/factory';
import style from '../styles/SearchIP.module.css';
import RingLoader from "react-spinners/RingLoader";
import { Router } from '../routes';

export default class SearchIP extends Component {
    state = {
        loading: false
    }

    static async getInitialProps(props) {
        const users = await factory.methods.getUsers().call();

        let trademarks = [];
        let patents = [];
        let designs = [];

        for (var i = 0; i < users.length; i++) {
            const currentTrademarks = await factory.methods.getTrademarks(users[i]).call();
            const currentPatents = await factory.methods.getPatents(users[i]).call();
            const currentDesigns = await factory.methods.getDesigns(users[i]).call();

            console.log(currentTrademarks[i]);
            console.log(currentPatents[i]);
            console.log(currentDesigns[i]);

            trademarks.push(currentTrademarks);
            patents.push(currentPatents);
            designs.push(currentDesigns);
        }

        return {
            trademarks: trademarks,
            patents: patents,
            designs: designs
        };
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

    onFormSubmit = (event) => {
        event.preventDefault();
        this.setState({ loading: true });

        const searchAddress = document.getElementById('ipAddress').value;
        let found = '';
        let typeOfIP = '';

        const trademarks = this.props.trademarks;
        const patents = this.props.patents;
        const designs = this.props.designs;

        for(var i = 0; i < trademarks.length; i++) {
            if(trademarks[i].toString() == searchAddress.toString()) {
                found = trademarks[i];
                typeOfIP = 'trademarks';
            }
        }
        for(var i = 0; i < patents.length; i++) {
            if(patents[i].toString() == searchAddress.toString()) {
                found = patents[i];
                typeOfIP = 'patents';
            }
        }
        for(var i = 0; i < designs.length; i++) {
            if(designs[i].toString() == searchAddress.toString()) {
                found = designs[i];
                typeOfIP = 'designs';
            }
        }

        console.log(this.props.trademarks);

        if(found == '') {
            alert("No results found");
            this.setState({ loading: false });
        } else {
            this.setState({ loading: false });
            Router.pushRoute(`/intellectualproperty/${typeOfIP}/${found}`);
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
                            <h2>Search for IP</h2>
                            <input id="ipAddress" className={style.ipAddressBar} type='text'/>
                            <input className={style.button} type="submit" />
                        </form>
                    </Layout>
                }
            </div>
        )
    }
}
