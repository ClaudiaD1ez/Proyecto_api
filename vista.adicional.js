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
 
 async function mostrarAdic(){
    let url
    let id = document.getElementById("alumID").value

        url = `http://localhost:3000/adicional?id=${id}`;


    let params={
        headers:{"content-type":"application/json; charset=UTF-8",
        method:"GET"}
    }

    try{
        let data = await fetch(url,params)
        let result = await data.json()

        console.log(result)

            let imprimirTodo =

            `<p>Nota Media: ${result[0].notaMedia}</p>`
             
             document.getElementById("mostrar").innerHTML += imprimirTodo

    }catch(err){
        console.log(err)
    }
}

// ---------------------------------------------------------------------------------------------------------

async function mostrarAl2(){
    let url
    let id = document.getElementById("alumID").value
    if( !id){
        url="http://localhost:3000/apuntadas"
    }else{
        url = `http://localhost:3000/apuntadas?id=${id}`;
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
            `<p>Nombre:       ${result[0].first_name}</p>
             <p>Apellido:     ${result[0].last_name}</p>
             <p>Asignaturas:  ${result[0].title}</p>`
             
             
             document.getElementById("mostrar").innerHTML += imprimirTodo

        }else{
            console.log("mostrar Todos")

            for(i=0 ; i<result.length ; i++){

                let imprimirTodo =
               `<p>Nombre:       ${result[i].first_name}</p>
                <p>Apellido:     ${result[i].last_name}</p>
                <p>Asignaturas:  ${result[i].title}</p>`
                
                document.getElementById("mostrar").innerHTML += imprimirTodo
             }
        }


    }catch(err){
        console.log(err)
    }
}

// --------------------------------------------------------------------------------------------------------------------

async function impartidasMost(){
    let url
    let id = document.getElementById("profID").value
    if( !id){
        url="http://localhost:3000/impartidas"
    }else{
        url = `http://localhost:3000/impartidas?id=${id}`;
    }

    let params={
        headers:{"content-type":"application/json; charset=UTF-8",
        method:"GET"}
    }

    try{
        let data = await fetch(url,params)
        let result = await data.json()

        console.log(result)

        if(id != null){
            console.log("asign. del profe")

            for(i=0 ; i<result.length ; i++){
           
            let imprimirTodo =

            ` ${result[i].title}</p>`
             
            document.getElementById("mostrar").innerHTML += imprimirTodo
            }

        }else{
            console.log("mostrar Todos")

            for(i=0 ; i<result.length ; i++){

                let imprimirTodo =
               `<p>Nombre:       ${result[i].first_name}</p>
                <p>Apellido:     ${result[i].last_name}</p>
                <p>Asignaturas:  ${result[i].title}</p>`
                
                document.getElementById("mostrar").innerHTML += imprimirTodo
             }
        }


    }catch(err){
        console.log(err)
    }
}