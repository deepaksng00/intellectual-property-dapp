import React, { Component } from 'react';
import Layout from '../components/Layout';
import web3 from '../ethereum/web3';
import IntellectualPropertyItem from '../components/IntellectualPropertyItem';
import { Router } from '../routes';
import RingLoader from "react-spinners/RingLoader";
const contract = require("../ethereum/intellectualproperty");


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

            const numOfTokens = await contract.default.methods.balanceOf(address[0]).call();

            if (parseInt(numOfTokens) == 0) {
                this.setState({ isEmpty: true });
            } else {
                this.setState({ isEmpty: false });
                for (var i = 0; i < numOfTokens; i++) {
                    const currentTokenID = await contract.default.methods.tokenOfOwnerByIndex(address[0], i).call();
                    const tokenURI = await contract.default.methods.tokenURI(currentTokenID).call();
                    const JSONURI = JSON.parse(tokenURI);
                    switch (JSONURI.TypeOfIP.toString().toLowerCase()) {
                        case "trademark": trademarks.push(currentTokenID); break;
                        case "patent": patents.push(currentTokenID); break;
                        case "design": designs.push(currentTokenID); break;
                    }
                }
            }
            
            this.setState({ trademarks });
            this.setState({ patents });
            this.setState({ designs });

            this.setState({ loading: false })
        }
    }
    
    renderIP(isEmpty) {
        if (isEmpty == true) {
            return <IntellectualPropertyItem empty = "True" />
        } else {
            var trademarkItems = this.state.trademarks.map(tokenID => {
                return <IntellectualPropertyItem
                    typeOfIP = "Trademark" 
                    address = { tokenID.toString() } 
                    empty = "False"
                />   
            });
    
            var patentItems = this.state.patents.map(tokenID => {
                return <IntellectualPropertyItem
                    typeOfIP = "Patent"
                    address = { tokenID.toString() }
                    empty = "False"
                />
            });
    
            var designItems = this.state.designs.map(tokenID => {
                return <IntellectualPropertyItem
                    typeOfIP = "Design"
                    address = { tokenID.toString() }
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
