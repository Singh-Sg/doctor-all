import axios from "axios";

export const SpecialityAPI="SpecialityAPI";

export const SpecFunc=(data)=>{
    return{
        type:SpecialityAPI,
        value:data,
    }
}

export const Single_Get = () => {
    return (dispatch) => {
        axios.get(`http://127.0.0.1:8000/api/super-specialty/`).then((res) => {
            dispatch(SpecFunc(res.data));
        })
        .catch((error)=>{
            console.log("API data error",error);
        })
    }
}

