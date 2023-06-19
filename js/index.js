document.addEventListener("DOMContentLoaded", () =>{

 const createMonster =   document.getElementById('create-monster')
 const createContainer =   document.getElementById('monster-container')

let count = 50; 

function fetchMonsters(){
fetch(`http://localhost:3000/monsters/?_limit=${count}`)
.then(res => res.json())
.then (data => data.forEach(info => loadMonsters(info))
)
}
 fetchMonsters (); 


const addBttn = document.createElement('button')
addBttn.textContent = "Add 50 pages";
createMonster.append(addBttn);
addBttn.addEventListener('click', (e) =>{
    count = count +50 
 console.log(count);
    e.preventDefault();
createContainer.innerHTML = "";
fetchMonsters()
})




function loadMonsters(info){
const name = document.createElement('h2');
const age = document.createElement('h3');
const desc = document.createElement('p');

name.textContent = info.name;
age.textContent = `Age:${info.age}`;
desc.textContent = `Bio: ${info.description}`;

nameInput.placeholder = " Insert name here "
ageInput.placeholder = " Insert age here "
descInput.placeholder = " Insert desc here "
createContainer.append(name, age , desc);


}
const nameInput = document.createElement('Input');
const ageInput = document.createElement('Input');
const descInput = document.createElement('Input');

const button = document.createElement('button');
button.textContent = 'create monster button'

createMonster.append(nameInput , ageInput , descInput , button)


const monsterData = {
    name: nameInput.value,
    age: ageInput.value,
    description: descInput.value 

}
const configObject = {
    method : 'POST' ,
    headers:
{
  "Content-Type": "application/json",
  Accept: "application/json"
},
body: JSON.stringify(monsterData)


}

button.addEventListener('click', (e) =>{
    e.preventDefault();
   // add post request 
   
   
   
   const monsterData = {
    name: nameInput.value,
    age: ageInput.value,
    description: descInput.value 

}
const configObject = {
    method : 'POST' ,
    headers:
{
  "Content-Type": "application/json",
  Accept: "application/json"
},
body: JSON.stringify(monsterData)

 


}
fetch(`http://localhost:3000/monsters`, configObject)
   .then(resp => resp.json())
   .then(data => console.log(data));
})
})
