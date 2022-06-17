const input_text = document.querySelector("form input[type='text']")
const input_password = document.querySelector("form input[type='password']")
input_text.addEventListener('keyup', (event) => {
  //   console.log(count_value)
  change_rotate(event)
})

input_password.addEventListener('keyup', (event) => {
  //   console.log(count_value)
  change_rotate(event)
})

function change_rotate(event) {
  let count_value = event.target.value.split('').length
  if (count_value == 0) {
    event.target.style.transform = 'rotate(0deg)'
  } else {
    let final_deg = 5 * count_value
    for (let i = 0; i < final_deg; i++) {
      event.target.style.transform = `rotate(${i}deg)`
      event.target.style.paddingLeft = `${i}px`
    }
  }
}
