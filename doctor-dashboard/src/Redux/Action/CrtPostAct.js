import Swal from "sweetalert2";
import axios from "axios";
export const GET_POST_API = 'GET_POST_API';

export const GetResponse = (data) => {
    return {
        type: GET_POST_API,
        value: data
    }
}

export const getApiPosts = (headers) => {
    return (dispatch) => {
        axios.get(`http://127.0.0.1:8000/api/doctor/article`, { headers: headers })
            .then((res) => {
                dispatch(GetResponse(res.data));
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }
}

export const postApiPost = (headers, formData) => {
    return (dispatch) => {
        axios.post(`http://127.0.0.1:8000/api/doctor/article`, formData, { headers: headers }).then((res) => {
            dispatch(getApiPosts(headers));
        })
            .catch((error) => {
                console.log("Error", error);
            })
    }
}

export const patchApiPost = (headers, formData, selectedId) => {
    return (dispatch) => {
        axios.patch(`http://127.0.0.1:8000/api/doctor/article/${selectedId}`, formData, { headers: headers }).then((res) => {
                // setCrtArticle(res.data);
                dispatch(getApiPosts(headers));
                // SuccessAlert();
                // ResetTreat();
                // setValue(0);
                // setIsUpdate(false);
                // setSelectedId(null);
            })
            .catch((error) => {
                console.error('Error updating treatment:', error);
                // InvaliAlert('Error updating treatment');
            });
    }
}

export const DeleteApiPost = (headers, idd) => {
    return (dispatch) => {
        axios.delete(`http://127.0.0.1:8000/api/doctor/article/${idd}`, { headers: headers }).then((res) => {
            Swal.fire({
                title: 'deleted',
                text: "data deleted",
                icon: 'success',
                timer: 3000,
                showConfirmButton: false,
            })
            dispatch(getApiPosts(headers))
        })
            .catch((error) => {
                console.error("Error deleting treatment:", error);
            });
    }
}




