import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { login } from "../store/actions/Auth";




const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };
  

const Login = (props) => {

    const navigate = useNavigate();
    const form = useRef();
    const checkButton = useRef()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const {isLoggedIn} = useSelector(state => state.AuthReducer)
    const {message} = useSelector(state => state.Message)

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
    }

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username)
    }

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password)
    }

    // form.current.validateAll();
    // if(checkButton.current.context._errors.length === 0) {
    //     dispatch(login(username, password))
    //     .then(() => {
    //         navigate('/profile');
    //         window.location.reload();
    //     })
    //     .catch(() => {
    //         setLoading(false)
    //     })
    // } else {
    //     setLoading(false)
    // }

    if(isLoggedIn) {
        return navigate('/profile')
    }

    return (
        <div className='container'>
            <div className='card card-container'>
                <img alt='profile-avatar' width='150px' 
                src='https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png'
                className='profile-img-card'/>
                <form onSubmit={handleSubmit} ref={form}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                        type="text"
                        className="form-control"
                        name="username"
                        value={username}
                        onChange={onChangeUsername}
                        validations={[required]}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={password}
                        onChange={onChangePassword}
                        validations={[required]}
                        />
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary btn-block" disabled={loading}>
                        {loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                        )}
                        <span>Login</span>
                        </button>
                    </div>

                    {message && (
                        <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                            {message}
                        </div>
                        </div>
                    )}
                    <button style={{ display: "none" }} ref={checkButton} />
                </form>
            </div>
        </div>
    );
};

export default Login;