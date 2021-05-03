import React, { Component } from 'react';
import Layout from '../../components/Layout';
import web3 from '../../ethereum/web3';
import style from '../../styles/DesignShow.module.css';
import { Link, Router } from '../../routes';
import RingLoader from "react-spinners/RingLoader";
const contract = require("../../ethereum/intellectualproperty");


export default class PatentShow extends Component {
    state = {
        loading: false
    }

    // server-side js rendering
    
    static async getInitialProps(props) {
        const id = props.query.address;
        const tokenID = parseInt(id);

        try {
            const tokenURI = await contract.default.methods.tokenURI(tokenID).call();
            const owner = await contract.default.methods.ownerOf(tokenID).call();
            const JSONURI = JSON.parse(tokenURI);

            if ((JSONURI.TypeOfIP).toString().toLowerCase() != "design") {
                return {
                    notDesign: false,
                    exists: true
                }
            }

            const publicationDate = JSONURI.PubDate;
            const expirationDate = JSONURI.ExpirationDate;
            const fileHash = JSONURI.IpfsHash;
            const comment = JSONURI.Comment;

            return {
                id: id,
                publicationDate: publicationDate,
                expirationDate: expirationDate,
                owner: owner,
                fileHash: fileHash,
                comment: comment,
                exists: true,
                isDesign: true
            }           
        } catch (err) {
            console.log(err);
            return {
                exists: false,
                isDesign: false
            }
        }
    }
    
    componentDidMount() {
        if (!this.props.exists) {
            alert("ERROR: This IP doens't exist.");
            Router.push("/");
        } else if (!this.props.isDesign) {
            alert("ERROR: The IP associated to this ID is not a design.");
            Router.push("/");
        }
    }

    render() {
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
                            <h2>Design {this.props.address} </h2>
                            <p className={style.addressLabel}>ID:</p>
                            <input className={style.address} type='text' value={this.props.id} readOnly />
                            <p className={style.publicationDateLabel}>Publication Date:</p>
                            <input className={style.publicationDate} type='text' value={formattedPublicationDate} readOnly />
                            <p className={style.expirationDateLabel}>Expiration date:</p>
                            <input className={style.expirationDate} type='text' value={formattedExpirationDate} readOnly />
                            <p className={style.ownerLabel}>Owner address:</p>
                            <input className={style.owner} type='text' value={this.props.owner} readOnly />
                            <p className={style.imageLabel}>Image:</p>
                            <a className={style.linkImage} target="_blank" href={`https://ipfs.io/ipfs/${this.props.fileHash}`}><img className={style.image} onClick={ this.expandImage } src={`https://ipfs.io/ipfs/${this.props.fileHash}`} /></a>
                            <p className={style.commentLabel}>Comment:</p>
                            <input className={style.comment} type='text' value={this.props.comment} readOnly />
                        </form>
                    </Layout>
                }
            </div>
            
        )
    }
}
