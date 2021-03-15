import React, { Component } from 'react';
import Layout from '../components/Layout';
import web3 from '../ethereum/web3';
import factory from '../ethereum/factory';
import IntellectualPropertyItem from '../components/IntellectualPropertyItem';
import { Router } from '../routes';
import RingLoader from "react-spinners/RingLoader";

export default class YourIP extends Component {
    state = {
        trademarks: [],
        patents: [],
        designs: [],
        isEmpty: false,
        loading: false
    }

    async componentDidMount() {
        this.setState({ loading: true });
        const address = await web3.eth.getAccounts();
        if (address == "") {
            this.setState({ loading: false });
            alert("Metamask is not setup correctly, please load Metamask and try again!");
            Router.pushRoute('/');
        } else {
            let trademarks = [];
            let patents = [];
            let designs = [];
            trademarks = await factory.methods.getTrademarks(address[0]).call();
            patents = await factory.methods.getPatents(address[0]).call();
            designs = await factory.methods.getDesigns(address[0]).call();
            
            this.setState({ trademarks });
            this.setState({ patents });
            this.setState({ designs });

            if (trademarks.length == 0 && patents.length == 0 && designs.length == 0) {
                this.setState({ isEmpty: true });
            }
            this.setState({ loading: false });
        }
    }
    
    renderIP(isEmpty) {
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
            <div>
                {
                    this.state.loading ?
                    
                    <div class="loadingContainer"><RingLoader color={"#ffffff"} loading={this.state.loading} size={60} /></div>

                    :

                    <Layout>
                        { this.renderIP(this.state.isEmpty) }
                    </Layout>  
                }
            </div>
        )
    }
}
