const connection = require ("../database")

function getStart(request, response)
{
    let respuesta = {error:true, codigo:200, mensaje: 'Punto de inicio'};
    response.send(respuesta);
}

// ----------------------------------------------------------------------------

function getProfe(request,response)
{
    let sql;
    let id = request.query.id_prof;
    if(!id){
       sql = "SELECT * FROM tacher"
    }else{

        sql = `SELECT * FROM teacher WHERE students_id=${id}`;
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

function postProfe(request,response)
{
    console.log(request.body);

    let nombre = request.body.nombreProf;
    let apellido = request.body.apellidoProf;

    let sql = "INSERT INTO teacher (first_name, last_name) VALUES ('" + nombre + "', ' " + apellido + "')'";

    console.log(sql);
    connection.query(sql,function (err,result)
    {
        if(err){
            console.log(err)
        }else{
            console.log(result);
            if(result.insertId){
                response.send(String(result.insertId));
            }else{
                response.send("-1")
            }
        }
    })
}

// --------------------------------------------------------

  function putProfe(request,response)
  {
    let sql; 
    let id = request.query.id;
        
        let nuevoNombreP    = request.body.nombreProf;
        let nuevoApellidoP  = request.body.apellidoProf;


        sql = "UPDATE teacher SET first_name = '" + nuevoNombreP +  "', last_name = ' " + nuevoApellidoP + " ' WHERE teacher_id = ' " + id + " ' ";
    
    connection.query(sql, function (err,result){

        if (err){
            console.log(err);
        }else{
            response.send(result);
        }
    })
  }

//   -------------------------------------------------------------------------------------------------

    function deleteProfe (request,response)
    {
        let sql;
        let id = request.query.id;

            sql = `DELETE FROM teacher WHERE teacher_id=${id}`;
    
        connection.query(sql, function (err,result){
            if (err){
                console.log(err);
            }else{
                response.send(result);
            }
        })
    }

  module.exports = {getProfe, postProfe, putProfe, deleteProfe}