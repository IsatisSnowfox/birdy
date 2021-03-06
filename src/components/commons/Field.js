import React, {Component} from 'react';
import {TextInput, Text, View} from 'react-native';

const Field = ({label,onChangeText,placeholder,secureTextEntry}) => {
    return(
        <View>
            <Text>{label}</Text>

            <TextInput
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                placeholder={placeholder}
                onChangeText={onChangeText} />
        </View>
    )
}

//export {Field};
export default Field;
