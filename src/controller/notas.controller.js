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
    // let id = request.body.student_id;

    if(request.query.student_id != null){
        sql = `SELECT * FROM marks WHERE student_id=`+ request.query.student_id;
        // sql=`SELECT mark_id, student_id, mark FROM marks WHERE student_id =${id}`
        // sql = `SELECT subjects.title , mark , student_id FROM subjects JOIN marks`
     }else{
         // sql = "SELECT * FROM students WHERE students_id=" + id;
         sql = `SELECT *  FROM marks`
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

function postNota(request,response)
{
    console.log(request.body);

    let estudiante = request.body.student_id;
    let asignatura = request.body.subject_id;
    let fecha = request.body.date;
    let nota = request.body.mark;

    let sql =`INSERT INTO marks (student_id, subject_id, date, mark) VALUES ("${estudiante}","${asignatura}","${fecha}","${nota}" )`

    connection.query(sql,function (err,result)
    {
        let respuesta
        if(err){
            console.log(err)
        }else{
            console.log(result);
            if(result.insertId){
                respuesta = {error:false, codigo: 200, mensaje: "Nota añadido" }
            }else{
                respuesta = {error:true, codigo:400,mensaje:"error" }
            }
            response.send(respuesta)
        }
    })
}

// --------------------------------------------------------


function putNota(request,response)
{
  let sql; 
  let id = request.body.student_id; //¿idMark?
      
      let nuevoEstudiante  = request.body.student_id;
      let nuevoAsignatura  = request.body.subject_id;
      let nuevoFecha       = request.body.date;
      let nuevoNota        = request.body.mark;


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

function deleteNota(request,response)
{
    let sql;
    let id = request.body.student_id; //¿idMark?
    console.log(id);

        sql = `DELETE FROM marks WHERE student_id=${id}`;

    connection.query(sql, function (err,result){

        if (err){
            respuesta = {error:true, codigo: 200, mensaje: "error" }
        }else{
            respuesta = {error:false, codigo: 200, mensaje: "Nota eliminada" }
        }
        response.send(respuesta);

    })
}

module.exports = {getNota,postNota,putNota, deleteNota}