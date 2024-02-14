import { Get_SingleApi } from '../Action/SingleTreatAPIAction';

const initialState = {
    singlelist: []
}

const singleReducer = (state = initialState, action) => {
    switch (action.type) {
        case Get_SingleApi:
            return {
                ...state,
                singlelist: action.value,
            };
        default:
            return state;
    }
};

export default singleReducer;