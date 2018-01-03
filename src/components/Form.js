import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';
import {Field} from './Field';

class Form extends Component {
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

export {Form};