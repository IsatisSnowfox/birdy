import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';
import {Field} from './Field';
import {connect} from 'react-redux'

import * as actions from '../../actions/';

class Form extends Component {
    onButtonPress() {
        this.props.logIn();
        console.log(this.props);
        //T KONAIKTAI
    }
    render() {
        return(
            <View>
                <Field
                label="E-mail"
                placeholder="exemple@birdy.be">

                </Field>

                <Field
                label="Mot de passe"
                placeholder="mot de passe">
                </Field>

                <Button
                title="Connexion">
                </Button>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.email,
        password: state.password,
    }
}

export {Form};
connect(mapStateToProps, actions)(Form)