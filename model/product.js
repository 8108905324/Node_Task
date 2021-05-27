module.exports = class Product {
    constructor() {
        this.db = require('../util/database');
    }

    getAll(start, cb) {
        this.db.execute('SELECT p.id as PID, p.name as PName, c.id as CID, c.name as CName FROM product p INNER JOIN category c ON p.category_id = c.id WHERE p.is_deleted = 0 && c.is_deleted = 0 LIMIT ' + start + ', 10')
            .then(result => {
                cb(result[0]);
            })
            .catch(err => {
                console.log(err)
                return (err);
            })
    }

    get(cb) {
        this.db.execute('SELECT p.id as PID, p.name as PName, c.id as CID, c.name as CName FROM product p INNER JOIN category c ON p.category_id = c.id WHERE p.is_deleted = 0 && c.is_deleted = 0')
            .then(result => {
                cb(result[0]);
            })
            .catch(err => {
                console.log(err)
                return (err);
            })
    }

    insert(CID, PName, cb) {
        this.db.execute('INSERT INTO `product`(`category_id`, `name`) VALUES (?,?)', [CID, PName])
            .then(result => {
                cb(result[0]);
            })
            .catch(err => {
                console.log(err)
                return (err);
            })
    }

    update(PName, PID, cb) {
        this.db.execute('UPDATE `product` SET `name`="' + PName + '" WHERE `id` =' + PID)
            .then(result => {
                cb(result[0]);
            })
            .catch(err => {
                console.log(err)
                return (err);
            })
    }

    delete(PID, cb) {
        this.db.execute('UPDATE `product` SET `is_deleted` = 1 WHERE `id`=' + PID)
            .then(result => {
                cb(result[0]);
            })
            .catch(err => {
                console.log(err)
                return (err);
            })
    }
}