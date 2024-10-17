let userName = document.querySelector("#name");
let number = document.querySelector("#number");
let mm = document.querySelector("#mm");
let yy = document.querySelector("#yy");
let code = document.querySelector("#code");
let add = document.querySelector("#add");
let numberValidation = document.querySelector("#number-validation")
let yearValidation = document.querySelector("#year-validation")
let monthValidation = document.querySelector("#month-validation")
let numDisplay = document.querySelector("#num-display");
let nameDisplay = document.querySelector("#name-display");
let monthDisplay = document.querySelector("#month-display");
let yearDisplay = document.querySelector("#year-display");
let month = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]

let date = new Date();
let year = date.getFullYear().toString().substring(2,4);

userName.addEventListener("input", () =>{
    nameDisplay.innerHTML = userName.value
})

number.addEventListener("input", ()=>{
    numDisplay.innerHTML = number.value.slice(0,4) + " " + number.value.slice(4,8) + " " + number.value.slice(8, 12) +" " + number.value.slice(12, 16);
})

mm.addEventListener("input", ()=>{
    monthDisplay.innerHTML = mm.value;
})

yy.addEventListener("input", ()=>{
    yearDisplay.innerHTML = yy.value;
})

function addCardDetails(event){
    if(number.value.length != 16){
        numberValidation.style.display = "block";
    }

    for (let i = 0; i < month.length; i++) {
        if(mm.value != month[i]){
            monthValidation.style.value = "block"
        }
    }

    if(yy.value.length > 2){
        yearValidation.style.display = "block"
        yearValidation.innerHTML = "Invalid Year"
    }
}