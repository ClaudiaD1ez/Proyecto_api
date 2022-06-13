const connection = require ("../database")

function getStart(request, response)
{
    let respuesta = {error:true, codigo:200, mensaje: 'Punto de inicio'};
    response.send(respuesta);
}

// ----------------------------------------------------------------------------------


function getAsignatura(request,response)
{
    let sql;
    let id = request.query.idAsign;
    if(!id){
       sql = "SELECT * FROM subjects"
    }else{
        sql = `SELECT subjects.title FROM subjects JOIN students WHERE students_id=${id}`;
    }

    connection.query(sql, function (err,result){
        if (err){
            console.log(err);
        }else{
            response.send(result);
        }
    })
}

// --------------------------------------------------------------------------------------------

function postAsignatura(request,response)
{
    console.log(request.body);

    let asignatura = request.body.nombreAsign;


    let sql = "INSERT INTO subjects (title) VALUES ('" + asignatura + "')'";

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


function putAsignatura(request,response)
{
  let sql; 
  let id = request.query.idAsign;
      
      let nuevoAsignatura  = request.body.nombreAsign;

      sql = "UPDATE subjects SET title = '" + nuevoAsignatura +  "'  WHERE subjects_id = ' " + id + " ' ";
  
  connection.query(sql, function (err,result){
      
      if (err){
          console.log(err);
      }else{
          response.send(result);
      }
  })
}

// --------------------------------------------------------------------------

function deleteAsignatura (request,response)
{
    let sql;
    let id = request.query.idAsign;

        sql = `DELETE FROM subjects WHERE subjects_id=${id}`;

    connection.query(sql, function (err,result){
        if (err){
            console.log(err);
        }else{
            response.send(result);
        }
    })
}

module.exports = {getAsignatura, postAsignatura, putAsignatura, deleteAsignatura}