import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class Home extends Component {

    render() {
        return (
            <div>
                <Helmet title="Síða finnst ekki" />
                <p>Síða fannst ekki</p>
            </div>
        );
    }
}