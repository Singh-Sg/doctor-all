import {Signin_API} from '../Action/SigninAction'

const initialState={
    signinlist:null,

}

const signinReducer = (state = initialState, action) => {
    switch (action.type) {
        case Signin_API:
            return {
                ...state,
                signinlist: action.value,
            };
        default:
            return state;
    }
};

export default signinReducer;