import React, { Component } from 'react';
import style from '../styles/IntellectualPropertyItem.module.css';
import { Link } from '../routes';

export default class IntellectualPropertyItem extends Component {
    render() {
        if (this.props.empty == "False") {
            return (
                <div className={style.ipitem}>
                    <h3>{this.props.typeOfIP}</h3>
                    <p>{this.props.address}</p>
                    <Link route={`/intellectualproperty/${this.props.typeOfIP.toLowerCase() + "s"}/${this.props.address}`}><p className={style.viewIP}>View IP</p></Link>
                </div>
            )
        } else {
            return (
                <div className={style.empty}>
                    <h3>You don't have any intellectual property registered</h3>
                </div>
            )
        }
    }
}
