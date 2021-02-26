import React, { Component } from 'react';
import Layout from '../../components/Layout';
import web3 from '../../ethereum/web3';

export default class DesignShow extends Component {
    static async getInitialProps(props) {
        const address = props.query.address;
        const compiled_design = require("../../ethereum/build/Design.json");
        const design = await new web3.eth.Contract(compiled_design.abi, address);

        const status = await design.methods.getStatus().call();
        const filingDate = await design.methods.getFilingDate().call();
        const publicationDate = await design.methods.getPublicationDate().call();
        const statusDate = await design.methods.getStatusDate().call();
        const expirationDate = await design.methods.getExpirationDate().call();
        const owners = await design.methods.getOwner().call();
        const fileHash = await design.methods.getHash().call();
        const comment = await design.methods.getComment().call();

        return {
            address: address,
            status: status,
            filingDate: filingDate,
            publicationDate: publicationDate,
            statusDate: statusDate,
            expirationDate: expirationDate,
            owners: owners,
            fileHash: fileHash,
            comment: comment
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
                {this.props.comment} <br />
            </Layout>
        )
    }
}
