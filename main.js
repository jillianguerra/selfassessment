const valueEl = document.querySelector('#value')
const amountEl = document.querySelector('#amount')
const plusBtn = document.querySelector('#plus-button')
const minusBtn = document.querySelector('#minus-button')

let amount = 0
let sum = 0

amountEl.addEventListener('input', (e) => {
    amount = parseInt(e.target.value)
})
plusBtn.addEventListener('click', (e) => {
    valueEl.textContent = getValue(true)
    valueEl.style.color = getColor()
})
minusBtn.addEventListener('click', (e) => {
 valueEl.textContent = getValue(false)
 valueEl.style.color = getColor()
})

function getValue(method) {
    method ? sum += amount :
    sum -= amount
    return sum
}
function getColor() {
    let color = sum < 0 ? 'red' : 'white'
    return color
}