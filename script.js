const form = document.getElementById('parking-form')
const nameInput = document.getElementById('name')

let formIsValid

form.addEventListener('input', function(event){
    console.log('input captured')
})


form.addEventListener('focus', function(event){
    // let foucusedElement = form.activeElement 
    if (focusedElement.innerText === '' || focusedElement.innerText == null) {
        error.id = 'message'
        document.focusedElement.appendChild(error).innerText = 'Name is required'
        event.preventDefault()
    }
})


// form.addEventListener('submit', function(event){
//     if (nameInput.value === '' || nameInput.value == null ){
//         const error = document.createElement('div')
//         error.id = 'message'
//         document.getElementById('name-field').appendChild(error).innerText = 'Name is required'
//         event.preventDefault()
//     }

//     })
