import React, { Component } from 'react';
import Layout from '../../components/Layout';
import web3 from '../../ethereum/web3';
import style from '../../styles/TrademarkShow.module.css';
import { Link, Router } from '../../routes';
import factory from '../../ethereum/factory';

export default class TrademarkShow extends Component {
    static async getInitialProps(props) {
        const address = props.query.address;
        const compiled_trademark = require("../../ethereum/build/Trademark.json");
        const trademark = await new web3.eth.Contract(compiled_trademark.abi, address);

        const status = await trademark.methods.getStatus().call();
        const publicationDate = await trademark.methods.getPublicationDate().call();
        const statusDate = await trademark.methods.getStatusDate().call();
        const expirationDate = await trademark.methods.getExpirationDate().call();
        const owners = await trademark.methods.getOwner().call();
        const fileHash = await trademark.methods.getHash().call();
        const markDesc = await trademark.methods.getMarkDesc().call();

        return {
            address: address,
            status: status,
            publicationDate: publicationDate,
            statusDate: statusDate,
            expirationDate: expirationDate,
            owners: owners,
            fileHash: fileHash,
            markDesc: markDesc
        };
    }

    disableContract = async () => {
        const compiled_trademark = require("../../ethereum/build/Trademark.json");

        const trademark = await new web3.eth.Contract(compiled_trademark.abi, this.props.address);
        const accounts = await web3.eth.getAccounts();

        try {
            await factory.methods.disableTrademark(this.props.fileHash, this.props.address)
                .send({ from: accounts[0], gasLimit: "5000000"})
                .catch((err) => { throw err; });

            Router.pushRoute(`/intellectualproperty/trademarks/${this.props.address}`);

            alert("The contract has been disabled.");
        } catch (err) {
            alert("There has been an issue with the transaction, please try again!");
            console.log(err);
        }       
    }
    
    render() {
        const statusDateObj = new Date(this.props.statusDate * 1000);
        const formattedStatusDate = 
            ('0' + statusDateObj.getDate()).slice(-2) + "-" + ('0' + (statusDateObj.getMonth() + 1)).slice(-2) + "-" + statusDateObj.getFullYear();

        let formattedPublicationDate;

        const publicationDateObj = new Date(this.props.publicationDate * 1000);
        formattedPublicationDate = 
            ('0' + publicationDateObj.getDate()).slice(-2) + "-" + ('0' + (publicationDateObj.getMonth() + 1)).slice(-2) + "-" + publicationDateObj.getFullYear();

        const expirationDateObj = new Date(this.props.expirationDate * 1000);
        const formattedExpirationDate = 
            ('0' + expirationDateObj.getDate()).slice(-2) + "-" + ('0' + (expirationDateObj.getMonth() + 1)).slice(-2) + "-" + expirationDateObj.getFullYear();

        return (
            <Layout>
                <form className={style.form}>
                    <h2>Trademark {this.props.address} </h2>
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
                    <p className={style.markDescLabel}>Mark description:</p>
                    <input className={style.markDesc} type='text' value={this.props.markDesc} readOnly />
                    <button className={style.disableButton} type='button' onClick={ this.disableContract }>Disable Trademark</button>
                </form>
            </Layout>
        )
    }
}
