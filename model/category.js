module.exports = class Category {
    constructor() {
        this.db = require('../util/database');
    }

    getAll(cb) {
        this.db.execute('SELECT c.id as CID, c.name as CName FROM category c WHERE c.is_deleted = 0')
            .then(result => {
                cb(result[0]);
            })
            .catch(err => {
                console.log(err)
                return (err);
            })
    }

    insert(cName, cb) {
        this.db.execute('INSERT INTO `category`(`name`) VALUES (?)', [cName])
            .then(result => {
                cb(result[0]);
            })
            .catch(err => {
                console.log(err)
                return (err);
            })
    }

    update(CName, CID, cb) {
        this.db.execute('UPDATE `category` SET `name`="' + CName + '" WHERE `id` =' + CID)
            .then(result => {
                cb(result[0]);
            })
            .catch(err => {
                console.log(err)
                return (err);
            })
    }

    delete(CID, cb) {
        this.db.execute('UPDATE `category` SET `is_deleted` = ' + CID + ' WHERE `id`=' + CID)
            .then(result => {
                cb(result[0]);
            })
            .catch(err => {
                console.log(err)
                return (err);
            })
    }
}