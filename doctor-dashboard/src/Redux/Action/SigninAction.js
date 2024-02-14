import axios from "axios";

export const Signin_API = "Signin_API";

export const Sign_func = (data) => {
    return {
        type: Signin_API,
        value: data,
    }
}

export const Post_Api = (payload) => {
    return (dispatch) => {
        axios.post(`http://127.0.0.1:8000/api/token/`, payload).then((res) => {
            localStorage.setItem("refersh_token", res.data.refresh);
            localStorage.setItem("token", res.data.access);
            dispatch(Sign_func(res.data.access));
        })
            .catch((error) => {
                console.error('Login failed:', error);
            });
    }
}