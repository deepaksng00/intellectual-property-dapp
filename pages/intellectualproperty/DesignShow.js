import React, { Component } from 'react'
import Layout from '../../components/Layout'

export default class DesignShow extends Component {
    static async getInitialProps(props) {
        console.log(props.query.address);
    }
    
    render() {
        return (
            <Layout>
                This is a design form
            </Layout>
        )
    }
}
