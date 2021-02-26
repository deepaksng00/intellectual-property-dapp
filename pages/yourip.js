import React, { Component } from 'react';
import Layout from '../components/Layout';
import web3 from '../ethereum/web3';
import factory from '../ethereum/factory';
import IntellectualPropertyItem from '../components/IntellectualPropertyItem';
import { Link, Router } from '../routes';

export default class YourIP extends Component {
    state = {
        trademarks: [],
        patents: [],
        designs: []
    }

    async componentDidMount() {
        const address = await web3.eth.getAccounts();
        if (address == "") {
            alert("Metamask is not setup correctly, please load Metamask and try again!");
            Router.pushRoute('/');
        } else {
            const trademarks = await factory.methods.getTrademarks(address[0]).call();
            const patents = await factory.methods.getPatents(address[0]).call();
            const designs = await factory.methods.getDesigns(address[0]).call();
            this.setState({ trademarks });
            this.setState({ patents });
            this.setState({ designs });

            if (this.state.trademarks.length == 0 && this.state.patents.length == 0 && this.state.designs.length == 0) {
                alert("You don't have any intellectual property registered.");  
                Router.pushRoute("/");
            }
        }
    }
    
    renderIP() {
        var trademarkItems = this.state.trademarks.map(address => {
            return <IntellectualPropertyItem
                typeOfIP = "Trademark" 
                address = { address } 
            />   
        });

        var patentItems = this.state.patents.map(address => {
            return <IntellectualPropertyItem
                typeOfIP = "Patent"
                address = { address }
            />
        });

        var designItems = this.state.designs.map(address => {
            return <IntellectualPropertyItem
                typeOfIP = "Design"
                address = { address }
            />
        });

        return new Map([ trademarkItems, patentItems, designItems ]);
    }

    render() {
        return (
            <Layout>
                { this.renderIP() }
            </Layout>
        )
    }
}
