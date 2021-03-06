import * as firebase from 'firebase';

import {NavigationActions} from 'react-navigation';

export const loginUser = (email, password) => dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((response) => {
            return (dispatch(loginUserSuccess(response)),
                    dispatch(NavigationActions.navigate({routeName: 'DrawerStack'})));
        })
        .catch((error) => {
            return dispatch(loginUserFail(error));
        });
}

export const loginUserSuccess = (response) => {
    return {
        type: 'LOGIN',
        user: response,
    }
}

export const loginUserFail = (error) => {
    return {
        type: 'LOGIN_HAS_FAILED',
        error
    }
}

export const logoutUser = () => (dispatch) => {
    firebase.auth().signOut()
        .then(() => {
            const actionToDispatch = NavigationActions.reset({
                index: 0,
                key: null,  // black magic
                actions: [NavigationActions.navigate({ routeName: 'LoginStack' })]
            });
            return(dispatch(signOutUser()),
                    dispatch(actionToDispatch));
        })
        .catch((error) => {
            console.error(error);
        });
}

export const signOutUser = () => {
    return {
        type: "SIGN_OUT"
    }
}

