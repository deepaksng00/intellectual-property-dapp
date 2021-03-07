import React, { Component } from 'react';
import Layout from '../../components/Layout';
import web3 from '../../ethereum/web3';
import style from '../../styles/PatentShow.module.css';
import { Link, Router } from '../../routes';
import factory from '../../ethereum/factory';

export default class PatentShow extends Component {
    static async getInitialProps(props) {
        const address = props.query.address;
        const compiled_patent = require("../../ethereum/build/Patent.json");
        const patent = await new web3.eth.Contract(compiled_patent.abi, address);

        const status = await patent.methods.getStatus().call();
        const inventorAddress = await patent.methods.getInventorAddress().call();
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
            publicationDate: publicationDate,
            statusDate: statusDate,
            expirationDate: expirationDate,
            owners: owners,
            fileHash: fileHash,
            title: title,
            inventorAddress: inventorAddress
        };
    }

    disableContract = async () => {
        const compiled_patent = require("../../ethereum/build/Patent.json");

        const patent = await new web3.eth.Contract(compiled_patent.abi, this.props.address);
        const accounts = await web3.eth.getAccounts();

        try {
            await factory.methods.disablePatent(this.props.fileHash, this.props.address)
                .send({ from: accounts[0], gasLimit: "5000000"})
                .catch((err) => { throw err; });

            Router.pushRoute(`/intellectualproperty/patents/${this.props.address}`);

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
                    <h2>Patent {this.props.address} </h2>
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
                    <p className={style.titleLabel}>Title:</p>
                    <input className={style.title} type='text' value={this.props.title} readOnly />
                    <p className={style.inventorAddressLabel}>Inventor address:</p>
                    <input className={style.inventorAddress} type='text' value={ this.props.inventorAddress } readOnly />
                    <button className={style.disableButton} type='button' onClick={ this.disableContract }>Disable Patent</button>
                </form>
            </Layout>
        )
    }
}
