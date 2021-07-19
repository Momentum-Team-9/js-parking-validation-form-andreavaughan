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
    if (carMake.value === '' || carMake.value == null ){
        const errorCarMake = document.createElement('div')
        errorCarMake.id = 'carmake-message'
        document.getElementById('car-make-div').appendChild(errorCarMake).innerText = 'Car make is required'
    }
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

form.addEventListener('submit', function(event){
    validateNameInput()
    changeNameErrorStyle()
    validateCarYear()
    changeCarYearErrorStyle()
    // validateCarMake()
    validateDaysField()
    validateCvvField()
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
    let daysFieldIsValid = validateDaysField()
    let cvvFieldIsValid = validateCvvField()
    console.log(nameIsValid) 
    console.log(carYearIsValid)
    console.log(daysFieldIsValid)
    console.log(cvvFieldIsValid)
        //create a variable for each validate function, add variable to this line
    if (nameIsValid && carYearIsValid && daysFieldIsValid && cvvFieldIsValid){
        return true 
    } else 
        return false
}