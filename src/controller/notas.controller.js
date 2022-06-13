const connection = require ("../database")

function getStart(request, response)
{
    let respuesta = {error:true, codigo:200, mensaje: 'Punto de inicio'};
    response.send(respuesta);
}

// ----------------------------------------------------------------------------

function getNota(request,response)
{
    let sql;
    let id = request.query.idMark;

        sql = `SELECT subjects.title , mark , student_id FROM subjects JOIN marks WHERE student_id=${id}`;
    
    connection.query(sql, function (err,result){
        if (err){
            console.log(err);
        }else{
            response.send(result);
        }
    })
}

// --------------------------------------------------------------------------------------------

function postNota(request,response)
{
    console.log(request.body);

    let estudiante = request.body.nombre;
    let asignatura = request.body.apellido;
    let fecha = request.body.grupo;
    let nota = request.body.año;

    let sql = "INSERT INTO marks (student_id, subject_id, date, mark) VALUES ('" + estudiante + "', ' " + asignatura + "' , '" + fecha + "','" + nota + "')'";

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


function putNota(request,response)
{
  let sql; 
  let id = request.query.idMark;
      
      let nuevoEstudiante  = request.body.estudiante;
      let nuevoAsignatura  = request.body.asignatura;
      let nuevoFecha       = request.body.fecha;
      let nuevoNota        = request.body.nota;


      sql = "UPDATE marks SET student_id = '" + nuevoEstudiante +  "', subject_id = ' " + nuevoAsignatura +  "', date = ' " + nuevoFecha +  "', mark = ' " + nuevoNota + " ' WHERE student_id = ' " + id + " ' ";
  
  connection.query(sql, function (err,result){
      
      if (err){
          console.log(err);
      }else{
          response.send(result);
      }
  })
}

// --------------------------------------------------------------------------

function deleteNota (request,response)
{
    let sql;
    let id = request.query.idMark;

        sql = `DELETE FROM marks WHERE students_id=${id}`;

    connection.query(sql, function (err,result){
        if (err){
            console.log(err);
        }else{
            response.send(result);
        }
    })
}

module.exports = {getNota,postNota,putNota, deleteNota}