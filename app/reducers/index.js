import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as welcome from './welcome';
import * as about from './about';
const rootReducer = combineReducers({
    routing,
    config: (state = {}) => state,
    ...welcome,
    ...about,
});

export default rootReducer;