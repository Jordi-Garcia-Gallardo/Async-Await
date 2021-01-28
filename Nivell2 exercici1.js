/*
- Exercici 1
Creu una funció asíncrona que anomeni a una altra que retorni una Promise que efectuï la seva resolve amb una demora de 2 segons.
*/
let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

var foundemployee = "";
var dolares = "";
var encontrado = ""

let getEmpleado = id => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=> {
           var foundemployee = employees.filter(employees => employees.id === id);
           encontrado = foundemployee[0];
           if (typeof encontrado !== 'undefined'){
           return resolve(encontrado);
           }else{
           reject('Empleado no existe');
           }
        },2000);
    });
}

let getSalario = encontrado => { 
    return new Promise((resolve, reject) =>{
        setTimeout(()=> {
            if (typeof encontrado === 'undefined'){
            return reject('Salario no disponible');
            }else{
            var dolares = salaries.filter(salaries => salaries.id === encontrado.id);
            resolve(dolares[0].salary);
            }        
        },2000);
    });
}

async function finalmente(id){
    try {
       var encontrado = await getEmpleado(id);
       console.log(encontrado.name);
       var resultadoFinal = await getSalario(encontrado);
       console.log(resultadoFinal)
    } catch (err) {
       console.error(err);
    }
}

finalmente(2);