// import React, {Component} from 'react';
// import {View, Button, Text, LayoutAnimation} from 'react-native';
// import {Field, Spinner} from './';
// import firebase from 'firebase';
// import MainStyles from '../../styles/MainStyles.js';


// class Form extends Component{
//     state = {email:'', password:'', error:'', loading:false}
//     onButtonPress(){
//         LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
//         this.setState({error:'', loading:true});

//         const {email, password} = this.state;
//         firebase.auth().signInWithEmailAndPassword(email, password)
//             .then(this.onLoginSuccess.bind(this))
//             .catch(()=>{
//                 firebase.auth().createUserWithEmailAndPassword(email, password)
//                 .then(this.onLoginCreation.bind(this))
//                     .catch(this.onLoginFail.bind(this));
//             });
//     };

//     onLoginSuccess() {
//         this.setState({
//             email:'',
//             password:'',
//             loading:false,
//             error:'Bravo tu es connecté.',
//         })
//     }

//     onLoginCreation() {
//         this.setState({
//             email:'',
//             password:'',
//             loading:false,
//             error:'Ton compte a été créé!',
//         })
//     }

//     onLoginFail() {
//         this.setState({
//             error:'Mot de passe incorrect',
//             loading:false,
//         })
//     }

//     renderButton(){
//         if(this.state.loading) {
//             return <Spinner />
//         }
//         return(
//             <Button
//                 title='Log In'
//                 style={this.buttonStyle}
//                 onPress={this.onButtonPress.bind(this)} >
//             </Button>
//         );
//     }


//     render() {
//         const {buttonContainerStyle, buttonStyle} = MainStyles;
//         console.log(this.state.email);
//         return(
//         <View>
//             <Field
//                 label='Email'
//                 placeholder='example@text.com'
//                 value={this.state.email}
//                 onChangeText={text =>
//                 this.setState({email:text})}
//             />

//             <Field
//                 secureTextEntry
//                 label='Password'
//                 placeholder='password'
//                 value={this.state.password}
//                 onChangeText={text => this.setState({password:text})}
//             />

//             <View style={buttonContainerStyle}>
//                 {this.renderButton()}
//             </View>
//             <Text>
//                 {this.state.error}
//             </Text>
//         </View>
//         );
//     }


//     // Spring
//     CustomLayoutSpring = {
//         duration: 400,
//         create: {
//             type: LayoutAnimation.Types.spring,
//             property: LayoutAnimation.Properties.scaleXY,
//             springDamping: 0.7,
//         },
//         update: {
//             type: LayoutAnimation.Types.spring,
//             springDamping: 0.7,
//         },
//     };
// };

// export {Form};
