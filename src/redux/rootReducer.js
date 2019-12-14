import {combineReducers} from 'redux';

import layoutReducer from './layout/layoutReducer';

const rootReducer = combineReducers({
    layout: layoutReducer
})

export default rootReducer;
