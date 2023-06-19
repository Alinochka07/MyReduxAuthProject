import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";


const signup = (username, email, password) => {
    return axios.post(`${API_URL}signup`, {
        username, email, password
    })
};

const login = (email, password) => {
    return axios.post(`${API_URL}login`, {
        email, password
    }).then((response) => {
        if(response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data))
        }
        return response.data
    })
};


const logout = () => {
    localStorage.removeItem("user")
};


export default {
    signup,
    login, 
    logout
};