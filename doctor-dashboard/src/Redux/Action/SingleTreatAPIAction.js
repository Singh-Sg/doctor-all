import axios from 'axios';

export const Get_SingleApi="Get_SingleApi";

export const Get_SingleFun=(data)=>{
    return{
        type: Get_SingleApi,
        value:data
    }
}

export const Single_Get = (id,headers) => {
    return (dispatch) => {
        axios.get(`http://127.0.0.1:8000/api/doctor/treatments/${id}`, { headers: headers }).then((res) => {
            dispatch(Get_SingleFun(res.data));
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }
}