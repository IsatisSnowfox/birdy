import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, FlatList, TouchableWithoutFeedback, Image} from 'react-native';
import * as firebase from 'firebase'
import Bird from './Bird'
 
class Encyclopedia extends Component {
    constructor(props) {
        super(props);
        this.state = {birds: undefined, selectedBird: undefined}
    }
    componentWillMount() {
        this.getAllBirds()
            .then((birds) => {
                this.setState(() => {
                    return {birds}
                })
            })
    }

    getAllBirds() {
        return new Promise((resolve, reject) => {
            firebase.database().ref("birds").once("value")
                .then((dataSnapshot) => {
                    resolve(dataSnapshot.val())
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }

    renderBird(singleBird) {
        if(typeof singleBird.item === "undefined") {
            return <View></View>
        }
        if(this.state.selectedBird == singleBird.index) {
            return <Bird bird={singleBird.item} />
        }
        return(
            <View>
                <TouchableOpacity onPress={() => {this.singleBirdIndex = singleBird.index; this.setState((state) => {return {...state, selectedBird: this.singleBirdIndex}})}}>
                    <View>
                        <Text>{singleBird.item.common_name}</Text>
                        <Image style={{width: 50, height: 50}} source={{uri: typeof singleBird.item.pictures !== 'undefined' ? singleBird.item.pictures[0] : ''}} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    renderContent() {
        if(typeof this.state.birds === "undefined") {
            return <Text>Bonjour</Text>
        }
        return(
            <View>
                <FlatList 
                    data={this.state.birds}
                    renderItem={this.renderBird.bind(this)}
                    keyExtractor={(bird, index) => index}
                    extraData={this.state}
                    />
            </View>
        )
    }

    render() {
        return(
            <View>
                {this.renderContent()}
            </View>
        )
    }
}

export default Encyclopedia;