import api from "./api";

const URL = "/empleados";

let service = {};

service.create = function(data) {
    return api.post(`${URL}`, data).then(res => res.data);
};

service.get = function() {
    return api.get(`${URL}`).then(res => res.data);
};

service.getOne = function(data) {
    return api
        .get(`${URL}` + "/" + data.Clave_Emp + "/edit", data)
        .then(res => res.data);
};

service.put = function(data) {
    return api.put(`${URL}`, data).then(res => res.data);
};

service.delete = function(data) {
    return api.delete(`${URL}`, { params: data }).then(res => res.data);
};

service.findByName = function(data) {
    return api.post(`${URL}/findByName`, data).then(res => res.data);
};

export default service;
