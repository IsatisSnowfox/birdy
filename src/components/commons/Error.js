import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';

class Error extends Component {
    render() {
        console.log(this.props);
        if(typeof this.props.error !== "undefined") {
            return (
                <Text>{this.props.error.message}</Text>
            );
        }
        else {
            return <View></View>;
        }
    }
}

function mapStateToProps(state) {
    return ({
        error: state.auth.error,
    });
}

export default connect(mapStateToProps)(Error);