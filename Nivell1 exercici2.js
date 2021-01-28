/*
- Exercici 2
Creu una funció asíncrona que, rebent un id d'empleat, 
imprimeixi per pantalla el nom de l'empleat i el seu salari
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
        var foundemployee = employees.filter(employees => employees.id === id);
        encontrado = foundemployee[0];
        if (typeof encontrado !== 'undefined'){
            return resolve(encontrado);
        }else{
            reject('Empleado no existe');
        }
    });
}; 

let getSalario = encontrado => { 
    return new Promise((resolve, reject) =>{
        if (typeof encontrado === 'undefined'){
            return reject('Salario no disponible');
        }else{
            var dolares = salaries.filter(salaries => salaries.id === encontrado.id);
            resolve(dolares[0].salary);
        }        
    });
};
   
async function finalmente(id){
    try {
       var encontrado = await getEmpleado(id);
       var resultadoFinal = await getSalario(encontrado);
       console.log(encontrado.name);
       console.log(resultadoFinal)
    } catch (err) {
        console.error(err);
    }
}

finalmente(1);