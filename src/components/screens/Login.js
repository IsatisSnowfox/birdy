import React, {Component} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import LoginForm from '../commons/LoginForm';


class Login extends Component {
    navigate = () => {
        const navigateToRegister = NavigationActions.navigate({
            routeName:'Register',
            params:{name:'Register'}
        })

        this.props.navigation.dispatch(navigateToRegister);
    }
    
    render() {
        return(
            <View>
                <LoginForm />
                <Button
                    title="S'enregistrer"
                    onPress={() => this.props.navigation.navigate('Register')}></Button>
            </View>
        )
    }
}


export default Login;