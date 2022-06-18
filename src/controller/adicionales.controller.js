const connection = require ("../database")

function getStart(request, response)
{
    let respuesta = {error:true, codigo:200, mensaje: 'Punto de inicio'};
    response.send(respuesta);
}

// GET /media?id=5, o /media:5. Obtiene la nota media del id del alumno---------------------------------------------------
//pasado por parámetro, elegir cualquiera de los dos formatos.

function getAdicional(request,response)
{
    let sql;
    let id = request.query.id;
    if(!id){
       sql = `SELECT AVG (mark) FROM marks`
    }else{
        sql = `SELECT AVG (mark) AS notaMedia FROM marks GROUP BY student_id=${id}`
    }

    connection.query(sql, function (err,result){
        if (err){
            console.log(err);
        }else{
            response.send(result);
        }
    })
}


// GET /apuntadas?id=5 o /apuntadas:5. La lista de las asignaturas a la que----------------------------------------------------------------
// están apuntadas el alumno del id pasado por parámetro, elegir cualquiera de
// los dos formatos.

function getAdicional2(request,response)
{
    let sql;
    let id = request.query.id;
    if(!id){
        sql = `SELECT first_name, last_name, subjects.title FROM students JOIN marks ON (students.students_id = marks.student_id) JOIN subjects ON (marks.subject_id = subjects.subjects_id)`
    }else{
        sql = `SELECT first_name, last_name, subjects.title FROM students JOIN marks ON (students.students_id = marks.student_id) JOIN subjects ON (marks.subject_id = subjects.subjects_id)GROUP BY student_id=${id}`
    }

    connection.query(sql, function (err,result){
        if (err){
            console.log(err);
        }else{
            response.send(result);
        }
    })
}

// GET /apuntadas. Devuelve los nombres y apellidos de todos los alumnos y-----------------------------------------------------------------
// los nombres de las asignaturas a las que están apuntadas.

// function getAdicional3(request,response)
// {
//     let sql;
//     let id = request.query.id;
// sql = `SELECT title FROM subjects JOIN marks ON (subjects.subjects_id = marks.subject_id)`


//        sql = `SELECT first_name, last_name, subjects.title FROM students JOIN marks ON (students.students_id = marks.student_id) JOIN subjects ON (marks.subject_id = subjects.subjects_id)`


//     connection.query(sql, function (err,result){
//         if (err){
//             console.log(err);
//         }else{
//             response.send(result);
//         }
//     })
// }

// GET /impartidas?id=5 o /impartidas:5. La lista de las asignaturas que------------------------------------------------------------------
// imparte el profesor cuyo id es pasado por parámetro, elegir cualquiera de los
// dos formatos.

function getAdicional4(request,response)
{
    let sql;
    let id = request.query.id;
    if(!id){
       sql = `SELECT teacher.first_name, teacher.last_name, subjects.title FROM teacher JOIN subject_teacher ON (teacher.teacher_id = subject_teacher.teacher_id) JOIN subjects ON (subject_teacher.subject_id = subjects.subjects_id) GROUP BY teacher.first_name`
    }else{
        sql = `SELECT subjects.title FROM subjects JOIN subject_teacher ON (subjects.subjects_id = subject_teacher.subject_id) GROUP BY subject_teacher.subject_id=${id}`
    }

    connection.query(sql, function (err,result){
        if (err){
            console.log(err);
        }else{
            response.send(result);
        }
    })
}

// GET /impartidas. Devuelve los nombres y apellidos de todos los-------------------------------------------------------------------------
// profesores y los nombres de las asignaturas a la que imparten.



module.exports = {getAdicional, getAdicional2, getAdicional4}