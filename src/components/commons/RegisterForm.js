import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Button, Text} from 'react-native';
import Field from './Field';
import Error from './Error';
import {createUser} from '../../actions/register';

//import {loginUser} from '../../actions/auth';

class RegisterForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {}; 
    }


    onButtonPress(){
        this.props.createUser(this.props.register.email, this.props.register.password)
    }

    render() {
        return(
            <View>
                <Text>
                    {this.props.formText}
                </Text>
                <Field 
                    label="Numéro ISN"
                    placeholder="AA00BB"
                    value={this.props.isn}
                    onChangeText={(text) => {
                        this.props.register.isn = text;
                    }}
                />
                <Field 
                    label="Prénom"
                    placeholder="Jean"
                    value={this.props.firstName}
                    onChangeText={(text) => {
                        this.props.registrer.firstName = text;
                    }}
                />
                <Field 
                    label="Nom"
                    placeholder="Valjean"
                    value={this.props.lastName}
                    onChangeText={(text) => {
                        this.props.registrer.lastName = text;
                    }}
                />
                <Field
                    label='Email'
                    placeholder='jeanvaljean@birdy.be'
                    value={this.props.email}
                    onChangeText={(text) => {
                        this.props.register.email = text;
                    }}

                />
                <Field
                    secureTextEntry
                    label='Mot de passe'
                    value={this.props.password}
                    onChangeText={text => this.props.register.password = text}
                />
                <View>
                    <Button
                        title="S'enregistrer"
                        onPress={this.onButtonPress.bind(this)}>
                    </Button>
                </View>
                <Error />
            </View>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {createUser})(RegisterForm);