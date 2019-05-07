export const loginAction = (credential, ownProps) => {
    return (dispatch) => {
        dispatch({
            type: 'LOGIN_SUCCESS',
            credential,
        });
        ownProps.history.push('/dashboard');
    }
}