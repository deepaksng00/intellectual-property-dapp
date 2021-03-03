import React, { Component } from 'react';
import Layout from '../components/Layout';
import web3 from '../ethereum/web3';
import factory from '../ethereum/factory';
import IntellectualPropertyItem from '../components/IntellectualPropertyItem';
import { Link, Router } from '../routes';

export default class YourIP extends Component {
    state = {
        trademarks = [],
        patents = [],
        designs = []
    }

    async componentDidMount() {
        const address = await web3.eth.getAccounts();
        if (address == "") {
            alert("Metamask is not setup correctly, please load Metamask and try again!");
            Router.pushRoute('/');
        } else {
            const users = await factory.methods.getUsers().call();

            var ip = []

            for (var i = 0; i < users.length; i++) {
                trademarks.push(await factory.methods.getTrademarks(users[i]).call());
                patents.push(await factory.methods.getPatents(users[i]).call());
                designs.push()(await factory.methods.getDesigns(users[i]).call());
            }

            this.setState({ trademarks })
            this.setState({ patents });
            this.setState({ designs });
        }
    }

    searchIP() {

    }
    
    renderIP() {

    }

    render() {
        return (
            <Layout>
                { this.renderIP() }
            </Layout>
        )
    }
}
