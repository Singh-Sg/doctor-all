import { Get_Treat_Api } from '../Action/TreatmentAct';

const initialState = {
    list: []
}

const yourReducer = (state = initialState, action) => {
    switch (action.type) {
        case Get_Treat_Api:
            return {
                ...state,
                list: action.value,
            };
        // other cases
        default:
            return state;
    }
};

export default yourReducer;