import axios from "axios";
export {doGet400, doGet500,doGetInfo,doGetWarn};

const axiosInstanse = axios.create({
    baseURL: process.env.VUE_APP_API_ORIGIN
});

function doGet400(){
    return axiosInstanse.get("/api/err/400");
}
function doGet500(){
    return axiosInstanse.get("/api/err/500");
}

function doGetInfo(){
    return axiosInstanse.get("/api/err/info");
}

function doGetWarn(){
    return axiosInstanse.get("/api/err/warning");
}