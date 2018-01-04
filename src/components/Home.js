import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';
import {connect} from 'react-redux';


class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {}; 
    }

    render() {
        return(
            <View>
                <Text>
                    Bravo
                </Text>
            </View>
        )
    }
}


export default Home;

