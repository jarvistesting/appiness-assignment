const initialState = {
    "username": "hruday@gmail.com",
    "password": "hruday123",
    "loginError": false,
    "isLoggedIn": false
}

const loginReducer = (state = initialState, action) => {
    let newState = {...state};
    if (action.type === 'LOGIN_SUCCESS') {
        if (action.credential.email.toLowerCase() === newState.username.toLowerCase() && action.credential.password.toLowerCase() === newState.password.toLowerCase()) {
            return {
                ...state,
                loginError: false,
                isLoggedIn: true
            }
        } else {
            return {
                ...state,
                loginError: true,
                isLoggedIn: false
            }
        }
    }
    return state;
}

export default loginReducer;