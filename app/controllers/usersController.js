/* llamamos el modelo */
const usersModel = require('../models/usersModel');

module.exports.getPagos = function (req, res) {
    return usersModel.getUsers(req, res);
}