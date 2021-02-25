import React, { Component } from 'react';
import Layout from '../../components/Layout';
import web3 from '../../ethereum/web3';

export default class PatentShow extends Component {
    static async getInitialProps(props) {
        const address = props.query.address;
        const compiled_patent = require("../../ethereum/build/Patent.json");
        const patent = await new web3.eth.Contract(compiled_patent.abi, address);

        const status = await patent.methods.getStatus().call();
        const inventorAddress = await patent.methods.getInventorAddress().call();
        const filingDate = await patent.methods.getFilingDate().call();
        const publicationDate = await patent.methods.getPublicationDate().call();
        const statusDate = await patent.methods.getStatusDate().call();
        const expirationDate = await patent.methods.getExpirationDate().call();
        const owners = await patent.methods.getOwner().call();
        const fileHash = await patent.methods.getHash().call();
        const title = await patent.methods.getTitle().call();

        return {
            address: address,
            status: status,
            inventorAddress: inventorAddress,
            filingDate: filingDate,
            publicationDate: publicationDate,
            statusDate: statusDate,
            expirationDate: expirationDate,
            owners: owners,
            fileHash: fileHash,
            title: title
        };
    }
    
    render() {
        return (
            <Layout>
                {this.props.address} <br />
                {this.props.status} <br />
                {this.props.inventorAddress} <br />
                {this.props.filingDate} <br />
                {this.props.publicationDate} <br />
                {this.props.statusDate} <br />
                {this.props.expirationDate} <br />
                {this.props.owners} <br />
                {this.props.fileHash} <br />
                {this.props.title} <br />
            </Layout>
        )
    }
}
