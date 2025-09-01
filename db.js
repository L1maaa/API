// npm i mysql2
const mysql = require("mysql2/promise")

//ciar a conexão
const pool = mysql.createPool({
    hot: "127.0.0.1",
    port: "3306",
    user: "root",
    passworrd: "escola", // no linux coloca senha "escola"
    database: "api_epa"
})
module.exports = Object.freeze({
    pool: pool
})