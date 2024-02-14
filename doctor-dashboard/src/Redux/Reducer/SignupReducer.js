import {Signup_Api} from '../Action/SignupApiAction';

const initialState={
    signupList:null,
}
const signupReducer=(state=initialState,action)=>{
    switch (action.type){
        case Signup_Api:
            return {
                ...state,
                signupList:action.value,
            };
            default:
                return state
    }
};
export default signupReducer;