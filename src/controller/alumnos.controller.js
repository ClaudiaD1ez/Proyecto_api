const connection = require ("../database")

function getStart(request, response)
{
    let respuesta = {error:true, codigo:200, mensaje: 'Punto de inicio'};
    response.send(respuesta);
}

// ----------------------------------------------------------------------------

function getAlumno(request,response)
{
    let sql;
    let id = request.query.id;
    if(!id){
       sql = "SELECT * FROM students"
    }else{
        // sql = "SELECT * FROM students WHERE students_id=" + id;
        sql = `SELECT * FROM students WHERE students_id=${id}`;
    }

    connection.query(sql, function (err,result){
        if (err){
            console.log(err);
        }else{
            response.send(result);
        }
    })
}

// ---------------------------------------------------------------

function postAlumno(request,response)
{
    console.log(request.body);

    let nombre = request.body.first_name;
    let apellido = request.body.last_name;
    let grupo = request.body.group_id;
    let ano = request.body.ano;

    let sql =`INSERT INTO students (first_name, last_name, group_id, año_ingreso) VALUES ("${nombre}","${apellido}","${grupo}","${ano}" )`

    console.log(sql);
    connection.query(sql,function (err,result)
    {
        let respuesta
        if(err){
            console.log(err)
        }else{
            console.log(result);
            if(result.insertId){
               respuesta = {error:false, codigo: 200, mensaje: "Alumno añadido" }
            }else{
                respuesta = {error:true, codigo:300,mensaje:"error"}
            }
          response.send(respuesta);
        }
    })
}

// --------------------------------------------------------

  function putAlumno(request,response)
  {
    let sql; 
    let id = request.query.id;
        
        let nuevoNombre   = request.body.nombre;
        let nuevoApellido  = request.body.apellido;
        let nuevoGrupo    = request.body.grupo;
        let nuevoAño      = request.body.año;

        sql = "UPDATE students SET first_name = '" + nuevoNombre +  "', last_name = ' " + nuevoApellido +  "', group_id = ' " + nuevoGrupo +  "', año_ingres = ' " + nuevoAño + " ' WHERE students_id =${id}";
    
    connection.query(sql, function (err,result){

        if (err){
            console.log(err);
        }else{
            response.send(result);
        }
    })
  }

//   -------------------------------------------------------------------------------------------------

    function deleteAlumno (request,response)
    {
        let sql;
        let id = request.query.id;

            sql = `DELETE FROM students WHERE students_id=${id}`;
    
        connection.query(sql, function (err,result){
            if (err){
                console.log(err);
            }else{
                response.send(result);
            }
        })
    }

  module.exports = {getAlumno,postAlumno,putAlumno, deleteAlumno}