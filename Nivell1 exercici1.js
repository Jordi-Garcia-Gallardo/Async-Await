/*
- Exercici 1
Donats els objectes Employees i Salaries, creu una arrow function getEmpleado 
que retorni una Promise efectuant la cerca en l'objecte pel seu id. 
Creu una altra arrow function getSalario que rebi com a paràmetre un objecte Employee i retorni el seu salari.
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
            reject('Salario no disponible');
        }else{
            var dolares = salaries.filter(salaries => salaries.id === encontrado.id);
            resolve(dolares[0].salary);
        }        
    });
};

getEmpleado(3)
.then(encontrado => getSalario(encontrado))
.then(resultadoFinal => {
  console.log(encontrado);
  console.log(resultadoFinal)
})
.catch(err =>{
  console.error(err)
});