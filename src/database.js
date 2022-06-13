const mysql = require("mysql2")

const connection = mysql.createConnection(
    {
        host :"localhost",
        user: "root",
        password : "escalopecode",
        database: "reto2"
    });

connection.connect(function(error){
    if(error){
        console.log(error)
    }else{
        console.log("conexion correcta")
    }
});

module.exports = connection;