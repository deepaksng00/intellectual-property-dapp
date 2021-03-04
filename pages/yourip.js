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
        designs: [],
        isEmpty: false
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

            if (trademarks.length == 0 && patents.length == 0 && designs.length == 0) {
                this.setState({ isEmpty: true });
            }
        }
    }
    
    renderIP(isEmpty) {
        console.log(isEmpty)
        if (isEmpty == true) {
            return <IntellectualPropertyItem empty = "True" />
        } else {
            var trademarkItems = this.state.trademarks.map(address => {
                return <IntellectualPropertyItem
                    typeOfIP = "Trademark" 
                    address = { address } 
                    empty = "False"
                />   
            });
    
            var patentItems = this.state.patents.map(address => {
                return <IntellectualPropertyItem
                    typeOfIP = "Patent"
                    address = { address }
                    empty = "False"
                />
            });
    
            var designItems = this.state.designs.map(address => {
                return <IntellectualPropertyItem
                    typeOfIP = "Design"
                    address = { address }
                    empty = "False"
                />
            });
    
            return new Map([ trademarkItems, patentItems, designItems ]);
        }
    }

    render() {
        return (
            <Layout>
                { this.renderIP(this.state.isEmpty) }
            </Layout>
        )
    }
}
