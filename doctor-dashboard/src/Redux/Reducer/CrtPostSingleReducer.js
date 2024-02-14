import { SingleGetAPI } from "../Action/CrtPostSingleAction";

const initialState = {
    getSingle: []
};

const getsingleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SingleGetAPI:
            return {
                ...state,
                getSingle: action.value,
            };
        default:
            return state;
    }
};

export default getsingleReducer;