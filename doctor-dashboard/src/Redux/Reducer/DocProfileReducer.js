import { DocprofileAPI } from "../Action/DocProfileAction";

const initialState = {
    docProfile: []
};

const docprofReducer = (state = initialState, action) => {
    switch (action.type) {
        case DocprofileAPI:
            return {
                ...state,
                docProfile: action.value,
            };
        default:
            return state;
    }
};

export default docprofReducer;