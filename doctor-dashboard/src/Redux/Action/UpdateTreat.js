import axios from 'axios';

export const UPDATE_TREATMENT_DATA = "UPDATE_TREATMENT_DATA"

export const updateTreatmentData = (data) => ({
    type: 'UPDATE_TREATMENT_DATA',
    value: data,
});

export const fetchTreatmentData = (id, headers) => {
    return (dispatch) => {
        axios.get(`http://127.0.0.1:8000/api/doctor/treatments/${id}`, { headers }).then((res) => {
            dispatch(updateTreatmentData(res.data[0]));
        })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }
};
