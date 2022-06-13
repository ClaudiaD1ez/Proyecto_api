const connection = require ("../database")

function getStart(request, response)
{
    let respuesta = {error:true, codigo:200, mensaje: 'Punto de inicio'};
    response.send(respuesta);
}

// ----------------------------------------------------------------------------

function getGrupo(request,response)
{
    let sql;
    let id = request.query.idGrupo;

    if(!id){
       sql = "SELECT * FROM groups"
    }else{
        // sql = "SELECT * FROM students WHERE students_id=" + id;
        sql = `SELECT * FROM groups WHERE groups_id=${id}`;
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

function postGrupo(request,response)
{
    console.log(request.body);

    let grupo = request.body.nombreGrupo;

    let sql = "INSERT INTO groups (name) VALUES ('" + grupo + "')'";

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

  function putGrupo(request,response)
  {
    let sql; 
    let id = request.query.idGrupo;
        
        let nuevoGrupo = request.body.nombre;

        sql = "UPDATE groups SET name = '" + nuevoGrupo +  "'  WHERE group_id = ' " + id + " ' ";
    
    connection.query(sql, function (err,result){

        if (err){
            console.log(err);
        }else{
            response.send(result);
        }
    })
  }

//   -------------------------------------------------------------------------------------------------

    function deleteGrupo(request,response)
    {
        let sql;
        let id = request.query.idGrupo;

            sql = `DELETE FROM groups WHERE group_id=${id}`;
    
        connection.query(sql, function (err,result){
            if (err){
                console.log(err);
            }else{
                response.send(result);
            }
        })
    }

  module.exports = {getGrupo, postGrupo, putGrupo, deleteGrupo}