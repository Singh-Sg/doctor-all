import {SpecialityAPI} from '../Action/SpecialtyAction';

const initialState={
    Special:[]
}

const SpecialityReducer=(state=initialState,action)=>{
    switch(action.type){
        case SpecialityAPI:
            return{
                ...state,
                Special:action.value,
            }
            default:
                return state;
    }
}
export default SpecialityReducer;