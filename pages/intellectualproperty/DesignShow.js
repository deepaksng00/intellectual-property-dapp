import React, { Component } from 'react';
import Layout from '../../components/Layout';
import web3 from '../../ethereum/web3';
import style from '../../styles/DesignShow.module.css';
import { Link, Router } from '../../routes';
import factory from '../../ethereum/factory';

export default class PatentShow extends Component {
    static async getInitialProps(props) {
        const address = props.query.address;
        const compiled_design = require("../../ethereum/build/Design.json");
        const design = await new web3.eth.Contract(compiled_design.abi, address);

        const status = await design.methods.getStatus().call();
        const publicationDate = await design.methods.getPublicationDate().call();
        const statusDate = await design.methods.getStatusDate().call();
        const expirationDate = await design.methods.getExpirationDate().call();
        const owners = await design.methods.getOwner().call();
        const fileHash = await design.methods.getHash().call();
        const comment = await design.methods.getComment().call();

        return {
            address: address,
            status: status,
            publicationDate: publicationDate,
            statusDate: statusDate,
            expirationDate: expirationDate,
            owners: owners,
            fileHash: fileHash,
            comment: comment
        };
    }
    
    render() {
        const statusDateObj = new Date(this.props.statusDate * 1000);
        const formattedStatusDate = 
            statusDateObj.getDate().toString() + "-" + (statusDateObj.getMonth()+1).toString() + "-" + statusDateObj.getFullYear().toString();

        let formattedPublicationDate;

        const publicationDateObj = new Date(this.props.publicationDate * 1000);
        formattedPublicationDate = 
        publicationDateObj.getDate().toString() + "-" + (publicationDateObj.getMonth()+1).toString() + "-" + publicationDateObj.getFullYear().toString();

        const expirationDateObj = new Date(this.props.expirationDate * 1000);
        const formattedExpirationDate = 
            expirationDateObj.getDate().toString() + "-" + (expirationDateObj.getMonth()+1).toString() + "-" + expirationDateObj.getFullYear().toString();

        return (
            <Layout>
                <form className={style.form}>
                    <h2>Design {this.props.address} </h2>
                    <p className={style.addressLabel}>Address:</p>
                    <input className={style.address} type='text' value={this.props.address} readOnly />
                    <p className={style.statusLabel}>Status:</p>
                    <input className={style.status} type='text' value={this.props.status} readOnly />
                    <p className={style.statusDateLabel}>Last status change:</p>
                    <input className={style.statusDate} type='text' value={formattedStatusDate} readOnly />
                    <p className={style.publicationDateLabel}>Publication Date:</p>
                    <input className={style.publicationDate} type='text' value={formattedPublicationDate} readOnly />
                    <p className={style.expirationDateLabel}>Expiration date:</p>
                    <input className={style.expirationDate} type='text' value={formattedExpirationDate} readOnly />
                    <p className={style.ownerLabel}>Owner address:</p>
                    <input className={style.owner} type='text' value={this.props.owners} readOnly />
                    <p className={style.fileHashLabel}>File hash:</p>
                    <input className={style.fileHash} type='text' value={this.props.fileHash} readOnly />
                    <p className={style.commentLabel}>Comment:</p>
                    <input className={style.comment} type='text' value={this.props.comment} readOnly />
                    <button className={style.disableButton} type='button' onClick={ this.disableContract }>Disable Patent</button>
                </form>
            </Layout>
        )
    }
}
