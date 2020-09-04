import api from "./api";

const URL = "/departamentos";

let service = {};

service.get = function() {
    return api.get(`${URL}`).then(res => res.data);
};

service.getOne = function(data) {
    return api
        .get(`${URL}` + "/" + data.id + "/edit", data)
        .then(res => res.data);
};


service.findByName = function(data) {
    return api.post(`${URL}/findByName`, data).then(res => res.data);
};

export default service;
