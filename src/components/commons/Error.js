import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';

class Error extends Component {
    render() {
        console.log(this.props);
        if(typeof this.props.state.auth.error !== "undefined") {
            return (
                <Text>{this.props.error.message}</Text>
            );
        }
        if(typeof this.props.state.register.error !== "undefined") {
            return (
                <Text>{this.props.state.register.error.message}</Text>
            );
        }
        else {
            return <View></View>;
        }
    }
}

function mapStateToProps(state) {
    return ({
        state
    });
}

export default connect(mapStateToProps)(Error);