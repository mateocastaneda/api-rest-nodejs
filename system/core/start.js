const bodyParser = require('body-parser');

/* creamos un archivo start que tendra todas las dependencias necesarias */
module.exports = function (app) {
    let apiRoutes = require("../Router/routes");
    let apiVersion = 'v1';
    /* app.get('/', (req, res) => res.send('Error 404 &bull; Esta página no puede ser accedida')); */

    /* iniciamos las rutas de la api versionada */
    /* app.use('/' + apiVersion, apiRoutes); */
    app.use('/', apiRoutes);

    /* iniciamos la app */
    InitApp(app);
}

function InitApp(app) {
    /* creamos el puerto de salida */
    const PORT = process.env.PORT || 8084; /* establecemos el puerto de salida */

    /* iniciamos el parser de tipo json */
    app.use(bodyParser.json());

    /* iniciamos la App usando el puerto de salida establecido */
    app.listen(PORT, () => console.log(`Server Run On Port: ${PORT}`));
}