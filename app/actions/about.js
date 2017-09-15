import axios from 'axios';
export const SET_NUMBER = 'SET_NUMBER';
export const GET_VIDEO_URL = 'GET_VIDEO_URL';
var instance = axios.create({
    baseURL: "http://192.168.60.235:6002",
});
export const setNumber =(number)=>{
    return {
        type: SET_NUMBER,
        data: number
    }
}
export const getVideoUrl = params =>{
    return {
        type: GET_VIDEO_URL,
        payload: instance.post( '/ListenInvitation/GetStudentUrl',params)
    }
}