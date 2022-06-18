class Nota{
    
    constructor(student_id,subject_id,date,mark){

        this.student_id = student_id
        this.subject_id = subject_id
        this.date = date
        this.mark = mark
    }

}

// ------------mostrar formularios
function mostrarAlumnos(){
   document.getElementById('alumnos').style.display = 'block'
   document.getElementById('notas').style.display = 'none'
   document.getElementById('profesores').style.display = 'none'
   document.getElementById('grupo').style.display = 'none'
   document.getElementById('asignaturas').style.display = 'none'
}
function mostrarNotas(){
    document.getElementById('notas').style.display = 'block'
    document.getElementById('alumnos').style.display = 'none'
    document.getElementById('profesores').style.display = 'none'
    document.getElementById('grupo').style.display = 'none'
    document.getElementById('asignaturas').style.display = 'none'
}
function mostrarProfes(){
    document.getElementById('profesores').style.display = 'block'
    document.getElementById('alumnos').style.display = 'none'
    document.getElementById('notas').style.display = 'none'
    document.getElementById('grupo').style.display = 'none'
    document.getElementById('asignaturas').style.display = 'none'

}
function mostrarGrupos(){
    document.getElementById('grupo').style.display = 'block'
    document.getElementById('alumnos').style.display = 'none'
    document.getElementById('profesores').style.display = 'none'
    document.getElementById('notas').style.display = 'none'
    document.getElementById('asignaturas').style.display = 'none'

}
function mostrarAsignaturas(){
    document.getElementById('asignaturas').style.display = 'block'
    document.getElementById('alumnos').style.display = 'none'
    document.getElementById('profesores').style.display = 'none'
    document.getElementById('grupo').style.display = 'none'
    document.getElementById('notas').style.display = 'none'
}
// ------------------------------------------------------------------

async function mostrarNot(){
    let url
    let id = document.getElementById("idMark").value
    console.log(id)
    if(id){
        url = `http://localhost:3000/notas?student_id=${id}`;

    }else{
        url="http://localhost:3000/notas"

    }

    let params={
        headers:{"content-type":"application/json; charset=UTF-8",
        method:"GET"}
    }


    try{
        let data = await fetch(url,params)
        let result = await data.json()

        console.log(result)

        // if(result.length == 1){
        //     console.log("mostrar uno")
           
        //     let imprimirTodo =
        //     `<p>Id del estudiante:   ${result[0].student_id}</p>
        //      <p>Id de la asignatura: ${result[0].subject_id}</p>
        //      <p>Fecha:               ${result[0].date}</p>
        //      <p>Nota:                ${result[0].mark}</p>`
             
        //      document.getElementById("mostrar").innerHTML += imprimirTodo

        // }else{
        //     console.log("mostrar Todos")
        // if(result.student_id == id){
            for(i=0 ; i<result.length ; i++){
            
                 let imprimirTodo =

                 `<p>Id del estudiante:   ${result[i].student_id}</p>
                  <p>Id de la asignatura: ${result[i].subject_id}</p>
                  <p>Fecha:               ${result[i].date}</p>
                  <p>Nota:                ${result[i].mark}</p>`
                 
                
                document.getElementById("mostrar").innerHTML += imprimirTodo
             }
        // }
        
    }catch(err){
        console.log(err)
    }
}

// -------------------------------------------------------------

async function crearNot(){
    console.log("funciona?")
        try{
    
            let estudiante = document.getElementById("estudiante").value;
            let asignatura = document.getElementById("asignatura").value;
            let fecha = document.getElementById("fecha").value;
            let nota = document.getElementById("nota").value;
    
        let nuevoNota = new Nota (estudiante, asignatura, fecha,nota)
        console.log(nuevoNota)
    
        const url = 'http://localhost:3000/notas'
    
                let param = {
                    "headers":{"content-type":"application/json; charset= UTF-8"},
                    "body": JSON.stringify(nuevoNota),
                    "method": "POST"
                }
                
                let data = await fetch(url, param)    
                console.log(data);
                  
                let resultado = await data.json()
                console.log(resultado)
                console.log(resultado.error)    
                    if(resultado.error){         
                        console.log("error")   
                    }else{
                        console.log("Usuario creado correctamente")} 
    
                            
             }catch(error){
              console.log(error)
            }
        }
   //------------------------------------------------------------------------------------
   async function deleteNot(){

    try{
        let id = document.getElementById('idMark').value;
        let json = { "student_id" : id}
        console.log(id)

        let url = `http://localhost:3000/notas?id=${id}`;

        let param = {
            
            headers:{"content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(json),
            method: "DELETE"
        }

        let data   = await fetch( url, param );
        console.log(data);
        let result = await data.json();

        if(result.error){         
            console.log("error")   
        }else{
            console.log("Nota eliminada correctamente" )} 

    }catch(err){
        console.log(err);
    }
}

//------------------------------------------------------------------------------------------
 
async function actualizarNota(){

    try{

        // let id = document.getElementById("id").value
        let nuevoEstudiante = document.getElementById("estudiante").value;
        let nuevaAsignatura = document.getElementById("asignatura").value;
        let nuevaFecha = document.getElementById("fecha").value;
        let nuevaNot = document.getElementById("nota").value;

        let nuevaNota = new Nota (nuevoEstudiante, nuevaAsignatura, nuevaFecha, nuevaNot)

        let url = `http://localhost:3000/notas?id=${id}`;

        let param = {

            headers:{"content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify(nuevaNota),
            method: "PUT"
        }

        console.log(nuevaNota)

        let data   = await fetch ( url, param );
        let result = await data.json();

        if( result.err ){
            console.log("ERROR");
        }
        else{
            console.log("Usuario Actualizado");
        }

    } catch (error) {
        console.log( error );
    }
 }
