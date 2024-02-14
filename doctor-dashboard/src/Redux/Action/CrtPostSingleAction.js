import axios from "axios";

export const SingleGetAPI = "SingleGetAPI";

export const SingleFun = (data) => {
    return {
        type: SingleGetAPI,
        value: data,
    }
}

export const getSingleApi = (id, headers) => {
    return (dispatch) => {
        axios.get(`http://127.0.0.1:8000/api/doctor/article/${id}`, { headers: headers }).then((res) => {
            dispatch(SingleFun(res.data));
        })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }
}