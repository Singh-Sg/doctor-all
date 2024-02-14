import Swal from "sweetalert2";
import axios from "axios";

export const DocprofileAPI = "DocprofileAPI";

export const profileFunc = (data) => {
    return {
        type: DocprofileAPI,
        value: data,
    }
}

export const getDocApi = (headers) => {
    return (dispatch) => {
        axios.get(`http://127.0.0.1:8000/api/doctor`, { headers: headers })
            .then((res) => {
                dispatch(profileFunc(res.data));
            })
            .catch((error) => {
                console.log('error', error);
            })
    }
}

export const patchDocApi = (headers) => {
    return (dispatch) => {
        axios
            .patch(`http://127.0.0.1:8000/api/doctor`,
                updateFormtype === 'Profile_image' || updateFormtype === 'profile'
                    ? formData
                    : updateformdata,
                { "headers": headers })
            .then((res) => {
                // console.log("res.data from submit btn : ", res.data);
                setUserData(res.data);
                setOpen(false)
                Swal.fire({
                    text: "Profile updated successfully!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((error) => {
                console.log("API Error", error);
            });
    }
}