const defaultState = {
    isLoggedIn: false,
    email: '',
    password: ''
}


const auth = (state = defaultState, action) => {
    switch(action.type) {
        case 'LOGIN':
            console.log(action);
            const { user: { uid: userId} } = action;
            return { ...state, isLoggedIn: true, userId }
        case 'LOGIN_HAS_FAILED':
            console.log('erreur lors de l\'authentification');
            const { error } = action;
            return { ...state, isLoggedIn: false, error }
        default:
            return state;
    }
}
export default auth;
/*

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'LOGIN':
            return action.user;
        case 'LOGIN_HAS_FAILED':
            console.error('erreur lors de l\'authentification');
            return action.hasFailed;
        default:
            return state;
    }
}
*/
/*
export function loginHasFailed(state = defaultState, action) {
    switch(action.type) {
        case 'LOGIN_HAS_FAILED':
            return action.hasFailed;
        default:
            return state;
    }
}

export function login(state = defaultState, action) {
    switch(action.type) {
        case 'LOGIN':
            return action.user;
        default:
            return state;
    }
}
*/


// add a LoginIsLoading Reducer + action ? https://codepen.io/stowball/post/a-dummy-s-guide-to-redux-and-thunk-in-react#creating-our-reducers-7