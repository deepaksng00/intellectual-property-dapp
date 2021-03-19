import React, { Component } from 'react';
import Layout from '../../components/Layout';
import web3 from '../../ethereum/web3';
import style from '../../styles/PatentShow.module.css';
import { Link, Router } from '../../routes';
import RingLoader from "react-spinners/RingLoader";
const contract = require("../../ethereum/intellectualproperty");


export default class PatentShow extends Component {
    state = {
        loading: false
    }

    static async getInitialProps(props) {
        const id = props.query.address;
        const tokenID = parseInt(id);

        try {
            const tokenURI = await contract.default.methods.tokenURI(tokenID).call();
            const owner = await contract.default.methods.ownerOf(tokenID).call();
            const JSONURI = JSON.parse(tokenURI);

            if ((JSONURI.TypeOfIP).toString().toLowerCase() != "patent") {
                return {
                    notPatent: false,
                    exists: true
                }
            }

            const publicationDate = JSONURI.PubDate;
            const expirationDate = JSONURI.ExpirationDate;
            const fileHash = JSONURI.IpfsHash;
            const title = JSONURI.Title;
            const inventorAddress = JSONURI.InventorAddress;

            return {
                id: id,
                publicationDate: publicationDate,
                expirationDate: expirationDate,
                owner: owner,
                fileHash: fileHash,
                title: title,
                inventorAddress: inventorAddress,
                exists: true,
                isPatent: true
            }
        } catch (err) {
            console.log(err);
            return {
                exists: false,
                isPatent: false
            }
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
            <div>
                {
                    this.state.loading ?

                    <div class="loadingContainer"><RingLoader color={"#ffffff"} loading={this.state.loading} size={60} /></div>

                    :

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
                }
            </div>
        )
    }
}
