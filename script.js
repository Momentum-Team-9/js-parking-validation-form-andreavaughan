const form = document.getElementById('parking-form')
const nameInput = document.getElementById('name')

let formIsValid

form.addEventListener('input', function(event){
    console.log('input captured')
})

// form.addEventListener('focus', function(event){
//     // let foucusedElement = form.activeElement 
//     if (focusedElement.innerText === '' || focusedElement.innerText == null) {
//         const error = document.createElement('div')
//         error.id = 'message'
//         document.focusedElement.appendChild(error).innerText = 'Name is required'
//         event.preventDefault()
//     }
// })

function validateNameInput(){
    const error = document.createElement('div')
    if (document.getElementById('name-message')){
        if (nameInput.value === '' || nameInput.value == null){
            return
        } else document.getElementById('name-message').remove()
    } else if (nameInput.value === '' || nameInput.value == null ){
        error.id = 'name-message'
        document.getElementById('name-field').appendChild(error).innerText = 'Name is required' 
     }
}

const carYear = document.getElementById('car-year')

function validateCarYear(){
    if (carYear.value === '' || carYear.value == null ){
        const error = document.createElement('div')
        error.id = 'caryear-message'
        document.getElementById('car-year-div').appendChild(error).innerText  = 'Car year is required'
        console.log(carYear.value)
    } else if (carYear.value < 1990 || carYear.value > 2022){
        const error = document.createElement('div')
        error.id = 'caryear-number-message'
        document.getElementById('car-year-div').appendChild(error).innerText  = 'Must be a valid model year'
    }
}

const carMake = document.getElementById('car-make')

function validateCarMake(){
    if (carMake.value === '' || carMake.value == null ){
        const errorCarMake = document.createElement('div')
        errorCarMake.id = 'carmake-message'
        document.getElementById('car-make-div').appendChild(errorCarMake).innerText = 'Car make is required'
    }
}

form.addEventListener('submit', function(event){
    event.preventDefault()
    validateNameInput()
    validateCarYear()
    // validateCarMake()

    
    console.log('form submit attempted')
})
