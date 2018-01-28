import AppNavigation from "../navigators/AppNavigation";

const navReducer = (state, action) => {
    const newState = AppNavigation.router.getStateForAction(action, state);
    return newState || state;
}

export default navReducer;