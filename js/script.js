let inputs = document.querySelectorAll('.field[required]')
console.log(inputs)

window.addEventListener('load', inputs[0].focus())

inputs.forEach(function(input) {
  input.addEventListener('input', function() {
    console.log(`user typed ${input.value}`)
    //console.log('user typed'+ input)
  })

  input.addEventListener('blur', function(event) {
    const element = event.target
    element.setCustomValidity('')
    let isValid = element.checkValidity()

    if (!isValid) {
      element.setCustomValidity(setErrorMsg(element))
      element.classList.add('invalid')
    } else {
      element.setCustomValidity(setErrorMsg(''))
      element.classList.remove('invalid')
    }
  })
})

const setErrorMsg = element => {
  let errorMsg = ''
  switch (element.name) {
    case 'mane':
      errorMsg = 'This field must be your name!'
      break
    case 'email':
      errorMsg = 'We need your email to avoid duplication!'
      break
    case 'age':
      if (element.value < 18) {
        errorMsg = 'Sorry, we can not accept your aplication!'
      } else if (element.validity.valueMissing) {
        errorMsg = 'We need to know your age!'
      }

    default:
      errorMsg = 'Please verify this field'
      break
  }
  return errorMsg
}
