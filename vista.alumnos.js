class Alumno{
    
    constructor(first_name,last_name,group_id,ano){

        this.first_name = first_name
        this.last_name = last_name
        this.group_id = group_id
        this.ano = ano
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

async function mostrarAl(){
    let url
    let id = document.getElementById("id").value
    if( !id){
        url="http://localhost:3000/alumnos"
    }else{
        url = `http://localhost:3000/alumnos?id=${id}`;
    }

    let params={
        headers:{"content-type":"application/json; charset=UTF-8",
        method:"GET"}
    }

    try{
        let data = await fetch(url,params)
        let result = await data.json()

        console.log(result)

        if(result.length == 1){
            console.log("mostrar uno")
           
            let imprimirTodo =
            `<p>Id del estudiante:   ${result[0].students_id}</p>
             <p>Nombre:              ${result[0].first_name}</p>
             <p>Apellido:            ${result[0].last_name}</p>
             <p>Id del Grupo:        ${result[0].group_id}</p>
             <p>Año de ingreso:      ${result[0].año_ingreso}</p>`
             
             document.getElementById("mostrar").innerHTML += imprimirTodo

        }else{
            console.log("mostrar Todos")

            for(i=0 ; i<result.length ; i++){

                let imprimirTodo =
               `<p>Nombre:   ${result[i].students_id}</p>
                <p>Edad:     ${result[i].first_name}</p>
                <p>Genero:   ${result[i].last_name}</p>
                <p>Peso:     ${result[i].group_id}</p>
                <p>Altura:   ${result[i].año_ingreso}</p>`
                
                document.getElementById("mostrar").innerHTML += imprimirTodo
             }
        }


    }catch(err){
        console.log(err)
    }
}

// --------------------------------------
async function crearAl(){
console.log("funciona?")
    try{

        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let grupo = document.getElementById("grupoForm").value;
        let ano = document.getElementById("ano").value;

    let nuevoAlumno = new Alumno(nombre, apellido, grupo,ano)


    const url = 'http://localhost:3000/alumnos'

            let param = {
                "headers":{"content-type":"application/json; charset= UTF-8"},
                "body": JSON.stringify(nuevoAlumno),
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
                    console.log("Nota creado correctamente")} 

                        
         }catch(error){
          console.log(error)
        }
    }


// ----------------------------------------------------------------------------------------------------------

async function deleteAlum(){

    try{
        let id = document.getElementById('id').value;
        // let json = { "id" : id}


        let url = `http://localhost:3000/alumnos?id=${id}`;

        let param = {
            
            headers:{"content-type": "application/json; charset=UTF-8" },
            method: "DELETE"
        }

        let data   = await fetch( url, param );
        console.log(data);
        let result = await data.json();

        if(result.error){         
            console.log("error")   
        }else{
            console.log("Usuario eliminado correctamente" )} 

    }catch(err){
        console.log(err);
    }
}

// -------------------------------------------------------------

async function putAlumno(){

    try{

        let id = document.getElementById("id").value
        let nuevoNombre = document.getElementById("nombre").value;
        let nuevoApellido = document.getElementById("apellido").value;
        let nuevoGrupo = document.getElementById("grupoForm").value;
        let nuevoAno = document.getElementById("ano").value;

        let nuevoAlumno = new Alumno (nuevoNombre, nuevoApellido, nuevoGrupo, nuevoAno)

        let url = `http://localhost:3000/alumnos?id=${id}`;

        let param = {

            headers:{"content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify(nuevoAlumno),
            method: "PUT"
        }

        console.log(nuevoAlumno);

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


// async function mostrarAsign(){
//     let url
//     let id = document.getElementById("idAsign").value
//     if( id != " "){
//         url = `http://localhost:3000/asignatura?id=${id}`;
//     }else{
//         url="http://localhost:3000/asignatura"
//     }

//     let params={
//         headers:{"content-type":"application/json; charset=UTF-8",
//         method:"GET"}
//     }

//     try{
//         let data = await fetch(url,params)
//         let result = await data.json()

//         // console.log(result)

//         if(result.length = 1){
//             console.log("mostrar uno")
//             console.log(result)
//             let imprimirTodo =
//             `<p>Id del la asignatura:   ${result[0].subjects_id}</p>
//              <p>Nombre de asignatura:   ${result[0].title}</p>`
             
//              document.getElementById("mostrar").innerHTML += imprimirTodo

//         }else{
//             for(i=0 ; i<result.profesionales.length ; i++){
            
//                 console.log("mostrar Todos")

//                  let imprimirTodo =
//                `<p>id de  asignatura:   ${result[i].subject_id}</p>
//                 <p>Nombre asignatura:   ${result[i].title}</p>`
                
//                 document.getElementById("mostrar").innerHTML += imprimirTodo
//              }
//         }

//     }catch(err){
//         console.log(err)
//     }
// }

