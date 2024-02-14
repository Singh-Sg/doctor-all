import Swal from 'sweetalert2';
import axios from 'axios';
export const Get_Treat_Api = "Get_Treat_Api";

export const Get_Treat_Func = (data) => {
    return {
        type: Get_Treat_Api,
        value: data
    }
}

export const Get_Api = (headers) => {
    return (dispatch) => {
        axios.get(`http://127.0.0.1:8000/api/doctor/treatments`, { headers: headers })
            .then((res) => {
                dispatch(Get_Treat_Func(res.data));
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }
}


export const Post_Api = (formData, headers) => {
    return (dispatch) => {
        axios.post(`http://127.0.0.1:8000/api/doctor/treatments`, formData, { headers: headers }).then((res) => {
            // setCrtTreat(res.data);
            dispatch(Get_Api(headers));
        })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }
}

export const Update_Api = (formData, headers, selectedId) => {
    return (dispatch) => {
        axios.patch(`http://127.0.0.1:8000/api/doctor/treatments/${selectedId}`, formData, { headers: headers })
            .then((res) => {
                // setCrtTreat(res.data);
                dispatch(Get_Api(headers));
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }
}

export const Single_Get = (id,headers) => {
    return (dispatch) => {
        axios.get(`http://127.0.0.1:8000/api/doctor/treatments/${id}`, { headers: headers }).then((res) => {
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }
}

// export const update_single = (headers,idd) => {
//     return (dispatch) => {
//         axios.get(`http://127.0.0.1:8000/api/doctor/treatments/${idd}`, { headers: headers }).then((res) => {
//             console.log(res.data);
//             const { title, icon, image, description } = res.data[0];
//         })
//     }
// }