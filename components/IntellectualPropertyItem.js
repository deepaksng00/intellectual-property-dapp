import React, { Component } from 'react';
import style from '../styles/IntellectualPropertyItem.module.css';

export default class IntellectualPropertyItem extends Component {
    render() {
        return (
            <div className={style.ipitem}>
                <h3>{this.props.typeOfIP}</h3>
                <p>{this.props.address}</p>
                <p>View IP</p>
            </div>
        )
    }
}
