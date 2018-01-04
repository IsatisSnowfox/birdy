/**
 * Birdy
 * https://github.com/stephecloutier/birdy
 * Started on 03/01/18
 */

import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as firebase from 'firebase';

import firebaseConfig from './settings';
import Login from './src/components/Login';
import Home from './src/components/Home';

let firebaseApp;

class App extends Component {
    componentDidMount() {
        firebaseApp = firebase.initializeApp(firebaseConfig);
    }

    
    render() {
        if (!this.props.isLoggedIn) {
            console.log('Tu es connecté bravo');
            return <Login />;
            
        } else {
            return <Home />;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}

export default connect(mapStateToProps)(App);
