import React, { Component } from 'react';
import Layout from '../components/Layout';
import web3 from '../ethereum/web3';
import factory from '../ethereum/factory';
import IntellectualPropertyItem from '../components/IntellectualPropertyItem';
import { Link, Router } from '../routes';
import style from '../styles/SearchIP.module.css';

export default class YourIP extends Component {
    state = {
        matchingTrademarks: [],
        matchingPatents: [],
        matchingDesigns: [],
        ipAddress: '',
        found: ''
    }

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

    searchIP = (ipAddress) => {
        var matchingPatents = [];
        var matchingDesigns = [];
        var matchingTrademarks = [];

        for(var i = 0; i < this.props.trademarks.length; i++) {
            if((this.props.trademarks[i].toString()).includes(ipAddress.toString())) {
                matchingTrademarks.push(this.props.trademarks[i]);
            }
        }
        for(var i = 0; i < this.props.patents.length; i++) {
            if((this.props.patents[i].toString()).includes(ipAddress.toString())) {
                matchingPatents.push(this.props.patents[i]);
            }
        }
        for(var i = 0; i < this.props.designs.length; i++) {
            if((this.props.designs[i].toString()).includes(ipAddress.toString())) {
                matchingDesigns.push(this.props.designs[i]);
            }
        }

        matchingPatents = matchingPatents.slice(0, 9);
        matchingDesigns = matchingDesigns.slice(0, 9);
        matchingTrademarks = matchingTrademarks.slice(0, 9);

        this.setState({ matchingPatents });
        this.setState({ matchingTrademarks });
        this.setState({ matchingDesigns });
    }

    ipAddress_change = () => {
        const ipAddress = document.getElementById('ipAddress').value;
        this.setState({ ipAddress });
        this.searchIP(ipAddress);
    }

    renderIP(isEmpty) {
        var trademarkItems = this.state.matchingTrademarks.map(address => {
            return <IntellectualPropertyItem
                typeOfIP = "Trademark" 
                address = { address } 
                empty = "False"
            />   
        });

        var patentItems = this.state.matchingPatents.map(address => {
            return <IntellectualPropertyItem
                typeOfIP = "Patent"
                address = { address }
                empty = "False"
            />
        });

        var designItems = this.state.matchingDesigns.map(address => {
            return <IntellectualPropertyItem
                typeOfIP = "Design"
                address = { address }
                empty = "False"
            />
        });

        return new Map([ trademarkItems, patentItems, designItems ]);
    }

    render() {
        return (
            <Layout>
                <form className={style.form}>
                    <h2>Search for IP</h2>
                    <input id="ipAddress" className={style.ipAddressBar} type='text' value={this.state.ipAddress} onChange={this.ipAddress_change} />
                    <button className={style.next} type='button' onClick={ this.continueRegistration }>Next</button>
                    <h3>{ this.renderIP(false) } { console.log(this.state.matchingTrademarks) } {console.log(this.props.trademarks)}</h3>
                </form>
            </Layout>
        )
    }
}
