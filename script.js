const form = document.getElementById('parking-form')
const nameInput = document.getElementById('name')

let formIsValid

form.addEventListener('input', function(event){
    console.log('input captured')
})

function validateNameInput(){
    const error = document.createElement('div')
    if (document.getElementById('name-message')){
        if (nameInput.value === '' || nameInput.value == null){
            return false
        } else 
            document.getElementById('name-message').remove() 
            return true
    } else if (nameInput.value === '' || nameInput.value == null ){
        error.id = 'name-message'
        document.getElementById('name-field').appendChild(error).innerText = 'Name is required' 
        return false
     } return true
}

const carYear = document.getElementById('car-year')

function validateCarYear(){
    const error = document.createElement('div')
    if (document.getElementById('caryear-message')){
        if (carYear.value === '' || carYear.value == null){
            return false
        } else if (carYear.value < 1990 || carYear.value > 2022){
            error.id = 'caryear-number-message'
            document.getElementById('car-year-div').appendChild(error).innerText  = 'Must be a valid model year'
            document.getElementById('caryear-message').remove()
            return false
        } else document.getElementById('caryear-message').remove()
                return true
    } else if (document.getElementById('caryear-number-message')){
        if (carYear.value < 1990 || carYear.value > 2022){
            return false
        } else document.getElementById('caryear-number-message').remove()
                return true
    } else if (carYear.value === '' || carYear.value == null){
        error.id = 'caryear-message'
        document.getElementById('car-year-div').appendChild(error).innerText  = 'Car year is required'
        return false
    } else if (carYear.value < 1990 || carYear.value > 2022){
        error.id = 'caryear-number-message'
        document.getElementById('car-year-div').appendChild(error).innerText  = 'Must be a valid model year'
        return false
    } return true
}

const carMake = document.getElementById('car-make')

function validateCarMake(){
    const error = document.createElement('div')
    if (document.getElementById('car-make-message')){
        if (nameInput.value === '' || nameInput.value == null){
            return false
        } else 
            document.getElementById('car-make-message').remove() 
            return true
    } else if (nameInput.value === '' || nameInput.value == null ){
        error.id = 'car-make-message'
        document.getElementById('car-make-div').appendChild(error).innerText = 'Make is required' 
        return false
     } return true
}

const daysField = document.getElementById('days')

function validateDaysField(){
    const error = document.createElement('div')
    if (document.getElementById('daysfield-message')){
        if (daysField.value === '' || daysField.value == null){
            return false
        } else if (daysField.value < 1 || daysField.value > 30){
            error.id = 'daysfield-number-message'
            document.getElementById('days-field').appendChild(error).innerText  = 'Must be for between 1-30 days'
            document.getElementById('daysfield-message').remove()
            return false
        } else document.getElementById('daysfield-message').remove()
            return true
    } else if (document.getElementById('daysfield-number-message')){
        if (daysField.value < 1 || daysField.value > 30){
            return false
        } else document.getElementById('daysfield-number-message').remove()
            return true
    } else if (daysField.value === '' || daysField.value == null){
        error.id = 'daysfield-message'
        document.getElementById('days-field').appendChild(error).innerText  = 'Number of days is required'
        console.log(daysField.value)
        return false
    } else if (daysField.value < 1 || daysField.value > 30){
        error.id = 'daysfield-number-message'
        document.getElementById('days-field').appendChild(error).innerText  = 'Must be for between 1-30 days'
        return false
    } return true
}

const creditCardField = document.getElementById('credit-card-field')

function validateCardNumber(number) {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;

    return luhnCheck(number);
}

function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}

function validateCreditCardField(){
    const error=document.createElement('div')
    let cardNumber = document.getElementById('credit-card')
    if (document.getElementById('card-message')){
        if (validateCardNumber(cardNumber.value) == false){
            return false
        } else 
            document.getElementById('card-message').remove() 
            return true
    } else if (validateCardNumber(cardNumber.value) == false){
        error.id = 'card-message'
        document.getElementById('credit-card-field').appendChild(error).innerText = 'Must be a valid credit card number' 
        return false
    }
}

const cvvField = document.getElementById('cvv')

function validateCvvField(){
    const error = document.createElement('div')
    console.log(cvvField.value)
    let regex = new RegExp('^[0-9][0-9][0-9]$')
    console.log(regex.test(cvvField.value))
    if (document.getElementById('cvvfield-message')){
        if (cvvField.value === '' || cvvField.value == null){
            return false

        } else if (regex.test(cvvField.value) == false){
            error.id = 'cvvfield-number-message'
            document.getElementById('cvv-field').appendChild(error).innerText  = 'Must be a valid CVV'
            document.getElementById('cvvfield-message').remove()
            return false

        } else document.getElementById('cvvfield-message').remove()
            return true

    } else if (document.getElementById('cvvfield-number-message')){
        if (regex.test(cvvField.value) == false){
            return false

        } else document.getElementById('cvvfield-number-message').remove()
        return true

    } else if (cvvField.value === '' || cvvField.value == null){
        error.id = 'cvvfield-message'
        document.getElementById('cvv-field').appendChild(error).innerText  = 'CVV is required'
        console.log(cvvField.value)
        return false

    } else if (regex.test(cvvField.value) == false){
        error.id = 'cvvfield-number-message'
        document.getElementById('cvv-field').appendChild(error).innerText  = 'CVV must be a 3-digit number'
        return false
    } return true
}


//This Section changes the styling of the errors 

function changeNameErrorStyle() {
    let nameIsValid = validateNameInput()
    let nameFieldId = document.getElementById('name-field')
    if (nameIsValid == false){
        nameFieldId.setAttribute('class', 'input-field input-invalid')
    } else 
        nameFieldId.setAttribute('class', "input-field input-valid")
}

function changeCarYearErrorStyle() {
    let carYearIsValid = validateCarYear()
    let carYearFieldId = document.getElementById('car-year-div')
    if (carYearIsValid == false){
        carYearFieldId.setAttribute('class', 'input-invalid')
    } else 
        carYearFieldId.setAttribute('class', "input-valid")
}

function changeCarMakeErrorStyle() {
    let carMakeIsValid = validateCarMake()
    let carMakeFieldId = document.getElementById('car-make-div')
    if (carMakeIsValid == false){
        carMakeFieldId.setAttribute('class', 'input-invalid')
    } else 
        carMakeFieldId.setAttribute('class', "input-valid")
}

function changeDaysFieldErrorStyle() {
    let daysFieldIsValid = validateDaysField()
    let daysFieldId = document.getElementById('days-field')
    if (daysFieldIsValid == false){
        daysFieldId.setAttribute('class', 'input-field input-invalid')
    } else 
        daysFieldId.setAttribute('class', "input-field input-valid")
}

function changeCreditCardFieldErrorStyle() {
    let creditCardIsValid = validateCreditCardField()
    let creditCardId = document.getElementById('credit-card-field')
    if (creditCardIsValid == false){
        creditCardId.setAttribute('class', 'input-field input-invalid')
    } else 
        creditCardId.setAttribute('class', "input-field input-valid")
}

function changeCvvFieldErrorStyle() {
    let cvvFieldIsValid = validateCvvField()
    let cvvFieldId = document.getElementById('cvv-field')
    if (cvvFieldIsValid == false){
        cvvFieldId.setAttribute('class', 'input-field input-invalid')
    } else 
        cvvFieldId.setAttribute('class', "input-field input-valid")
}

//This section checks for validation before allowing the form to submit

form.addEventListener('submit', function(event){
    validateNameInput()
    changeNameErrorStyle()
    validateCarYear()
    changeCarYearErrorStyle()
    validateCarMake()
    changeCarMakeErrorStyle()    
    validateDaysField()
    changeDaysFieldErrorStyle()
    validateCreditCardField()
    changeCreditCardFieldErrorStyle()
    validateCvvField()
    changeCvvFieldErrorStyle()
    event.preventDefault()

    let formIsValid = validateForm() 
    if (formIsValid == false){
        event.preventDefault()
        console.log('submit attempted')
    } else return
})

function validateForm() {
    let nameIsValid = validateNameInput()
    let carYearIsValid = validateCarYear()
    let carMakeIsValid = validateCarMake()
    let daysFieldIsValid = validateDaysField()
    let creditCardFieldIsValid = validateCreditCardField()
    let cvvFieldIsValid = validateCvvField()
    console.log(nameIsValid) 
    console.log(carYearIsValid)
    console.log(daysFieldIsValid)
    console.log(cvvFieldIsValid)
        //create a variable for each validate function, add variable to this line
    if (nameIsValid && carYearIsValid && carMakeIsValid && daysFieldIsValid && creditCardFieldIsValid && cvvFieldIsValid ){
        showTotal()
        return true
    } else 
        return false
}

function showTotal() {
    let costFive = parseInt(daysField.value) * 5;
    console.log(costFive)
    if (validateDaysField()){
        let daysTotal = document.createElement('div')
        daysTotal.id = 'total'
        document.getElementById('show-total').appendChild(daysTotal).innerText = `Your total is $${costFive}.00`
    } 
}