import { SET_NUMBER, GET_VIDEO_URL } from '../actions/about'
export const testAbout = (state={number:1}, action)=>{
    switch(action.type){
        case SET_NUMBER:
            return Object.assign({},state,{ number: action.data});
        case `${GET_VIDEO_URL}_SUCCESS`:
            return Object.assign({},state,{ ...action.payload.result});
        default:
            return state;
    }
}