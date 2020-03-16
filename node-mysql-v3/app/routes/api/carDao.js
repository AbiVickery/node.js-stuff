const pool = require('./dbconfig');

class CarDao {
    constructor() {
        this.pool = pool;
    }

    findAll(req, res) {
        let sql = 'SELECT * FROM cars';
        this.pool.query(sql, function (error, rows) {
            if (error) {
                res.json({
                    "error": true,
                    "message": error
                });
            };
            res.json(rows);
        });
    }


updateById(req, res) {
    // let sql = 'SELECT * FROM cars WHERE id = ?';
    let sql = 'UPDATE cars set city_mpg = ?, hwy_mpg = ?, WHERE id = ?';
    this.pool.query(sql, [
        req.body.city_mpg,
        req.body.hwy_mpg,
        req.body.id
    ], (err, rows) => {
        if (err) {
            res.json({
                "error": true,
                "message": err
            });
        };
        res.json(rows);
    });
}
}
module.exports = CarDao;