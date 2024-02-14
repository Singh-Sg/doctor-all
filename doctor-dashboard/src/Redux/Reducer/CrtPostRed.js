import { GET_POST_API } from "../Action/CrtPostAct";

const initialState = {
    Postlist: []
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POST_API:
            return {
                ...state,
                Postlist: action.value,
            };
        default:
            return state;
    }
};

export default postReducer;