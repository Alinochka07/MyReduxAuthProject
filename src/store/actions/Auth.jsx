import { 
    REGISTER_SUCCESS, REGISTER_FAIL, 
    LOGIN_SUCCESS, LOGIN_FAIL, 
    LOGOUT, SET_MESSAGE
} from "./Types";
import AuthService from "../../auth/AuthService";


export const signup = (username, email, password) => (dispatch) => {
    return AuthService.signup(username, email, password)
    .then((response) => {
        dispatch({
            type: REGISTER_SUCCESS
        });
        dispatch({
            type: SET_MESSAGE,
            payload: response.data.message
        })

        return Promise.resolve()
    }, (error) => {
        const message = (
            error.response && 
            error.response.data && 
            error.response.data.message) ||
            error.message ||
            error.toString();

            dispatch({
                type: REGISTER_FAIL
            });
            dispatch({
                type: SET_MESSAGE,
                payload: message
            })
            return Promise.reject()
        }
    )
}



export const login = (email, password) => (dispatch) => {
    return AuthService.login(email, password)
    .then((data) => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: {user: data}
        });

        return Promise.resolve();
    }, (error) => {
        const message = (
            error.response && 
            error.response.data && 
            error.response.data.message) ||
            error.message ||
            error.toString();

            dispatch({
                type: LOGIN_FAIL,
            })

            dispatch({
                type: SET_MESSAGE,
                payload: message
            })

            return Promise.reject()
    })
}

export const logout = () => (dispatch) => {
    return AuthService.logout()
    .then(
        dispatch({
        type: LOGOUT
    })
    )
}
