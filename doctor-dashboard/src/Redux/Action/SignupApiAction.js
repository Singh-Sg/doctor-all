import axios from 'axios';

export const Signup_Api = "Signup_Api";

export const Sign_func = (data) => {
    return {
        type: Signup_Api,
        value: data,
    }
}

export const SignupDataApi = (formData) => {
    return (dispatch) => {
        axios.post(`http://127.0.0.1:8000/api/user/register/`, formData).then((res) => {
            dispatch(Sign_func(res.data));
            debugger
        })
            .catch((error) => {
                console.log("API Error", error);
            });
    }
}