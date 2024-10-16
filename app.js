let name = document.querySelector("#name");
let number = document.querySelector("#number");
let mm = document.querySelector("#mm");
let yy = document.querySelector("#yy");
let code = document.querySelector("#code");
let add = document.querySelector("#add");
let numDisplay = document.querySelector("#num-display");
let nameDisplay = document.querySelector("#name-display");
let monthDisplay = document.querySelector("#month-display");
let yearDisplay = document.querySelector("#year-display");

function addCardDetails(event){
    numDisplay.innerText = number.value;
    
}