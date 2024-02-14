import { combineReducers } from 'redux';
import yourReducer from './TreatmentRed';
import treatmentReducer from './UpdateTreatRed';
import postReducer from './CrtPostRed';
import singleReducer from './SingleTreatAPIReducers';
import signinReducer from './SigninReducerApi';
import signupReducer from './SignupReducer';
import SpecialityReducer from './SpecialtyReducer';
import getsingleReducer from './CrtPostSingleReducer';
import docprofReducer from './DocProfileReducer';

export default combineReducers({
    postReducer,
    yourReducer,
    treatmentReducer,
    singleReducer,
    signinReducer,
    signupReducer,
    SpecialityReducer,
    getsingleReducer,
    docprofReducer
});
