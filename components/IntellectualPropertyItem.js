import React, { Component } from 'react';
import style from '../styles/IntellectualPropertyItem.module.css';
import { Link } from '../routes';

export default class IntellectualPropertyItem extends Component {
    render() {
        return (
            <div className={style.ipitem}>
                <h3>{this.props.typeOfIP}</h3>
                <p>{this.props.address}</p>
                <Link route={`/intellectualproperty/${this.props.typeOfIP.toLowerCase() + "s"}/${this.props.address}`}><p className={style.viewIP}>View IP</p></Link>
            </div>
        )
    }
}
