import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, FlatList, Image} from 'react-native';
import * as firebase from 'firebase'

class Bird extends Component {
    componentWillMount() {
        this.bird = {
            common_name: undefined,
            description: undefined,
            distribution: undefined,
            family: undefined,
            habitats: [],
            latin_name: undefined,
            max_size: undefined,
            min_size: undefined,
            pictures: [],
        }
        if(typeof this.props.bird.common_name !== "undefined") {
            this.bird.common_name = <View>
                                        <Text>Nom commun</Text>
                                        <Text>{this.props.bird.common_name}</Text>
                                    </View>
        }
        if(typeof this.props.bird.description !== "undefined") {
            this.bird.description = <View>
                                        <Text>Description</Text>
                                        <Text>{this.props.bird.description}</Text>
                                    </View>
        }
        if(typeof this.props.bird.distribution !== "undefined") {
            this.bird.distribution = <View>
                                        <Text>Distribution</Text>
                                        <FlatList 
                                            data={this.props.bird.distribution}
                                            renderItem={(singleDistribution) => <Text>{singleDistribution.lat} {singleDistribution.lng}</Text>}
                                            keyExtractor={(bird, index) => index} />
                                    </View>
        }
        if(typeof this.props.bird.family !== "undefined") {
            this.bird.family = <View>
                                    <Text>Famille</Text>
                                    <Text>{this.props.bird.family}</Text>
                                </View>
        }
        if(this.props.bird.habitats != false) {
            this.bird.habitats = <View>
                                    <Text>Habitat(s)</Text>
                                    <FlatList 
                                        data={this.props.bird.habitats}
                                        renderItem={(singleHabitat) => <Text>{singleHabitat.item}</Text>}
                                        keyExtractor={(bird, index) => index} />
                                </View>
        }
        if(typeof this.props.bird.latin_name !== "undefined") {
            this.bird.latin_name = <View>
                                    <Text>Nom latin</Text>
                                    <Text>{this.props.bird.latin_name}</Text>
                                </View>
        }
        if(typeof this.props.bird.min_size !== "undefined") {
            this.bird.min_size = <View>
                                    <Text>Taille minimum</Text>
                                    <Text>{this.props.bird.min_size}</Text>
                                </View>
        }
        if(typeof this.props.bird.max_size !== "undefined") {
            this.bird.max_size = <View>
                                    <Text>Taille maximum</Text>
                                    <Text>{this.props.bird.max_size}</Text>
                                </View>
        }
        if(this.props.bird.pictures != false) {
            this.bird.pictures = <View>
                                    <Text>Image(s)</Text>
                                    <FlatList 
                                        data={this.props.bird.pictures}
                                        renderItem={(singlePicture) => <Image source={{uri: singlePicture.item}} style={{width: 50, height: 50}} />}
                                        keyExtractor={(picture, index) => index} />
                                </View>
        }
    }
    render() {
        return (
            <View style={{marginTop: 20, marginBottom: 20}}>
                {this.bird.common_name}
                {this.bird.latin_name}
                {this.bird.description}
                {this.bird.distribution}
                {this.bird.family}
                {this.bird.habitats}
                {this.bird.min_size}
                {this.bird.max_size}
                {this.bird.pictures}
            </View>
        )
    }
}

export default Bird;