import axios from "axios";
export {doGet400, doGet500};

const axiosInstanse = axios.create({
    baseURL: process.env.VUE_APP_API_ORIGIN
});

function doGet400(){
    return axiosInstanse.get("/api/err/400");
}
function doGet500(){
    return axiosInstanse.get("/api/err/500");
}