const mysql = require('mysql')
var conn = mysql.createConnection({
    host: 'db4free.net',port: 3306,
    user: 'chuong2001',
    password: 'chuong03022001',
    database: 'gametalav1',
    multipleStatements: true,
    connectionLimit: 100
}); // host free

// var conn = mysql.createConnection({
//     host: "localhost",
//     user: 'root',
//     password: '',
//     database: 'game'
// }) // localhost

module.exports= conn;