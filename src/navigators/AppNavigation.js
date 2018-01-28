import React from 'react';
import { Text } from 'react-native';
import {StackNavigator, DrawerNavigator} from 'react-navigation';
import Login from '../components/screens/Login';
import Register from '../components/screens/Register';
import Home from '../components/screens/Home';
import Profile from '../components/screens/Profile';
import Encyclopedia from '../components/Encyclopedia'

const DrawerStack = DrawerNavigator({
    Home: { screen: Home },
    Profile: { screen: Profile },
    Encyclopedia: { screen: Encyclopedia }
});

const DrawerNavigation = StackNavigator({
    DrawerStack: { screen: DrawerStack }
}, {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
        headerStyle: {backgroundColor: 'white'},
        title: 'GG',
        headerLeft: <Text onPress={() => navigation.navigate('DrawerToggle')}>Burger</Text>,
        gesturesEnabled: false,
    })
});

const LoginStack = StackNavigator(
    {
        Login: {
            screen: Login,
            routeName: 'Login',
            navigationOptions: {
                headerTitle: 'Connexion',
            },
        },
        Register: {
            screen: Register,
            routeName: 'Register',
            navigationOptions: {
                headerTitle: 'Inscription',
            }
        },
    },

    {
        navigationOptions: {
            headerStyle: {backgroundColor:'lightgrey'}
        },
    }   
);

const PrimaryNav = StackNavigator({
    LoginStack: { screen: LoginStack },
    DrawerStack: { screen: DrawerNavigation }
}, {
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'LoginStack'
})

export default PrimaryNav;