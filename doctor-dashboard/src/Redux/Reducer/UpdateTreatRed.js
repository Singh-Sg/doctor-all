import { UPDATE_TREATMENT_DATA } from "../Action/UpdateTreat";

const initialState = {
    crtTreat: {},
    // icon: '',
    // image: '',
    // selectedId: null,
    // isUpdate: false,
    // open: false,
    // value: 0,
};

const treatmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_TREATMENT_DATA':
            // const { title, icon, image, description } = action.value;
            return {
                ...state,
                crtTreat:action.value
                // crtTreat: { title, icon, image, description },
                // icon: `http://127.0.0.1:8000/${icon}`,
                // image: `http://127.0.0.1:8000/${image}`,
                // selectedId: action.value.idd,
                // isUpdate: true,
                // open: false,
                // value: 1,
            };
        default:
            return state;
    }
};

export default treatmentReducer;
