//month and date formats
let month = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
let date = new Date();
let year = date.getFullYear().toString().substring(2, 4);

// inouts and others select
let userName = document.querySelector("#name");
let number = document.querySelector("#number");
let mm = document.querySelector("#mm");
let yy = document.querySelector("#yy");
let code = document.querySelector("#code");
let add = document.querySelector("#add");
let flipCard = document.querySelector("#flip-card")


//validations select
let numberValidation = document.querySelector("#number-validation")
let expValidation = document.querySelector("#exp-validation")
let dateValidation = document.querySelector("#date-validation")
let codeValidation = document.querySelector("#code-validation")

//display select
let numDisplay = document.querySelector("#num-display");
let nameDisplay = document.querySelector("#name-display");
let monthDisplay = document.querySelector("#month-display");
let yearDisplay = document.querySelector("#year-display");
let codeDisplay = document.querySelector("#code-display");

//making flips the card based on input focus stage
userName.addEventListener("focus", unflip)
number.addEventListener("focus", unflip)
mm.addEventListener("focus", unflip)
yy.addEventListener("focus", unflip)

function unflip(){
    flipCard.classList.remove('flip');
}

code.addEventListener("focus", ()=>{
    flipCard.classList.add('flip');
})

// changing the infos of the card based on inout stage
//validations include
userName.addEventListener("input", () => {
    nameDisplay.innerHTML = userName.value
})

number.addEventListener("input", () => {
    if (number.value == "" || isNaN(number.value)) {
        numberValidation.style.display = "block"
        numDisplay.innerHTML = "**** **** **** ****"
    } else {
        numberValidation.style.display = "none"
        numDisplay.innerHTML = (number.value.slice(0, 4) + " " + number.value.slice(4, 8) + " " + number.value.slice(8, 12) + " " + number.value.slice(12, 16)).padStart(16, '*');
    }
})

mm.addEventListener("input", () => {
    let isValidMonth = false;
    for (let i = 0; i < month.length; i++) {
        if (mm.value == month[i]) {
            isValidMonth = true;
            break;
        }
    }

    if (!isValidMonth || mm.value == "") {
        monthDisplay.innerHTML = "00"
        dateValidation.innerHTML = "Invalid Month"
        dateValidation.style.display = "block"
    } else {
        dateValidation.style.display = "none"
        monthDisplay.innerHTML = mm.value;
    }
})

yy.addEventListener("input", () => {
    if (isNaN(yy.value) || yy.value == "") {
        yearDisplay.innerHTML = "00"
        expValidation.style.display ="none"
        dateValidation.innerHTML = "Invalid Year"
        dateValidation.style.display = "block"
    } else if(yy.value < 24){
        expValidation.style.display ="block"
    }
    else {
        expValidation.style.display ="none"
        dateValidation.style.display = "none"
        yearDisplay.innerHTML = yy.value;
    }
})

code.addEventListener("input", () => {
    if (isNaN(code.value) || code.value == "") {
        codeDisplay.innerHTML = "000"
        codeValidation.style.display = "block"
    } else {
        codeValidation.style.display = "none"
        codeDisplay.innerHTML = code.value.padStart(3, '0');
    }
})

function addCardDetails(event) {
    if (number.value.length != 16) {
        numberValidation.style.display = "block";
    }else{
        Swal.fire({
            icon: 'success',
            title: 'Successfully Added',
            text: 'Your card has been saved successfully',
        });
    }
}