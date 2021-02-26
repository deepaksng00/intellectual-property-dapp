import React, { Component } from 'react'
import Layout from '../../components/Layout'

export default class DesignShow extends Component {
    static async getInitialProps(props) {
        const address = props.query.address;
        const compiled_trademark = require("../../ethereum/build/Trademark.json");
        const trademark = await new web3.eth.Contract(compiled_trademark.abi, address);

        const status = await trademark.methods.getStatus().call();
        const filingDate = await trademark.methods.getFilingDate().call();
        const publicationDate = await trademark.methods.getPublicationDate().call();
        const statusDate = await trademark.methods.getStatusDate().call();
        const expirationDate = await trademark.methods.getExpirationDate().call();
        const owners = await trademark.methods.getOwner().call();
        const fileHash = await trademark.methods.getHash().call();
        const markDesc = await trademark.methods.getMarkDesc().call();

        return {
            address: address,
            status: status,
            filingDate: filingDate,
            publicationDate: publicationDate,
            statusDate: statusDate,
            expirationDate: expirationDate,
            owners: owners,
            fileHash: fileHash,
            markDesc: markDesc
        };
    }
    
    render() {
        return (
            <Layout>
                {this.props.address} <br />
                {this.props.status} <br />
                {this.props.filingDate} <br />
                {this.props.publicationDate} <br />
                {this.props.statusDate} <br />
                {this.props.expirationDate} <br />
                {this.props.owners} <br />
                {this.props.fileHash} <br />
                {this.props.markDesc} <br />
            </Layout>
        )
    }
}
