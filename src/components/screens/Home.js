import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';
import {connect} from 'react-redux';
import Login from './Login';
import {logoutUser} from '../../actions/auth';


class Home extends Component {
    
    onButtonPress() {
        this.props.logoutUser();
    }

    render() {
        return(
            <View>
                <Text>Bonjour</Text>
                <Button
                    title="Se déconnecter"
                    onPress={this.onButtonPress.bind(this)}
                ></Button>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {logoutUser})(Home);


