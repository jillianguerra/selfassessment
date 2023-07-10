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
    valueEl.textContent = getValue('plus')
})
minusBtn.addEventListener('click', (e) => {
 valueEl.textContent = getValue('minus')
})

function getValue(method) {
    if(method === 'plus'){
        sum += amount
    } else if(method === 'minus') {
        sum -= amount
    }
    return sum
}