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
        } else document.getElementById('name-message').remove() 
            return true
    } else if (nameInput.value === '' || nameInput.value == null ){
        error.id = 'name-message'
        error.className = 'input-invalid'
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
            return
        } else if (daysField.value < 1 || daysField.value > 30){
            error.id = 'daysfield-number-message'
            document.getElementById('days-field').appendChild(error).innerText  = 'Must be for between 1-30 days'
            document.getElementById('daysfield-message').remove()
        } else document.getElementById('daysfield-message').remove()
    } else if (document.getElementById('daysfield-number-message')){
        if (daysField.value < 1 || daysField.value > 30){
            return
        } else document.getElementById('daysfield-number-message').remove()
    } else if (daysField.value === '' || daysField.value == null){
        error.id = 'daysfield-message'
        document.getElementById('days-field').appendChild(error).innerText  = 'Number of days is required'
        console.log(daysField.value)
    } else if (daysField.value < 1 || daysField.value > 30){
        error.id = 'daysfield-number-message'
        document.getElementById('days-field').appendChild(error).innerText  = 'Must be for between 1-30 days'
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
            return

        } else if (regex.test(cvvField.value) == false){
            error.id = 'cvvfield-number-message'
            document.getElementById('cvv-field').appendChild(error).innerText  = 'Must be a valid CVV'
            document.getElementById('cvvfield-message').remove()

        } else document.getElementById('cvvfield-message').remove()

    } else if (document.getElementById('cvvfield-number-message')){
        if (regex.test(cvvField.value) == false){
            return

        } else document.getElementById('cvvfield-number-message').remove()

    } else if (cvvField.value === '' || cvvField.value == null){
        error.id = 'cvvfield-message'
        document.getElementById('cvv-field').appendChild(error).innerText  = 'CVV is required'
        console.log(cvvField.value)

    } else if (regex.test(cvvField.value) == false){
        error.id = 'cvvfield-number-message'
        document.getElementById('cvv-field').appendChild(error).innerText  = 'CVV must be a 3-digit number'
    }
}

form.addEventListener('submit', function(event){
    validateNameInput()
    validateCarYear()
    // validateCarMake()
    validateDaysField()
    validateCvvField()

    let formIsValid = validateForm() 
    if (formIsValid == false){
        event.preventDefault()
        console.log('submit attempted')
    } 
    //else console.log('form submitted')
})

function validateForm() {
    let nameIsValid = validateNameInput()
    let carYearIsValid = validateCarYear()
    console.log(nameIsValid) //create a variable for each validate function, add variable to this line
    if (nameIsValid && carYearIsValid){
        return true 
    } else 
        return false
}