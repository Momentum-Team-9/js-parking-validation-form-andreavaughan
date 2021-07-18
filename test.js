const form = document.getElementById('parking-form')[0];

const nameInput = document.getElementById('name')
const nameError = document.querySelector('#name + span.input-invalid')

nameInput.addEventListener('input', function(event){

    if (nameInput.validity.valid) {
        nameError.textContent = ''
        nameError.className = 'input-invalid'
    } else {
        showError()
    }
})

form.addEventListener('submit', function (event) {
    if (!nameInput.validity.valid) {
        showError()
        event.preventDefault()
    }
})

function showError() {
    if (nameInput.validity.valueMissing) {
        nameInputError.textContent = "Name is required"
    } 
    nameInputError.className = 'input-invalid'
}