let db = require('../../system/Database/database');
var con = db.con;

module.exports.getUsers = function (req, res) {
    //Extraemos los parametros
    // var { status } = req.params;
    var sql = `SELECT oid, ds_nombre, ds_correo 
    FROM usuarios`;

    (async () => {
        try {
            return await con.query(sql, (error, results) => {
                if (error) throw error;
                if (results.length > 0) {
                    res.json(results);
                } else {
                    res.json({ 'status': false, 'msg': 'No contamos con usuarios registrados' });
                }
            });
        } catch (err) {
            console.error(err);
            process.exit(1);
        }
    })();
}