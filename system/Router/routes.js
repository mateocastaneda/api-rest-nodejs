/* establecemos todos los endpoints de nuestro proyecto */
let router = require('express').Router();
let payments = require('../../app/controllers/paymentsController');
let users = require('../../app/controllers/usersController');

/* aca vamos a establecer todas las rutas ya sean: */
/* Get, Post, Put, Delete */

/* endpoint: localhost/v1 */
router.get('/', function (req, res) {
    res.json({
        status: true,
        message: 'Bienvenid@! En nuestra v1'
    });
});

/* endpoint: localhost/v1/metodo/ */
router.get('/getUsers', (req, res) => users.getPagos(req, res));
router.post('/addPago', (req, res) => payments.addPago(req, res));

/* exportamos API ROUTES */
module.exports = router;