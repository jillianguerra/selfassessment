const valueEl = document.querySelector('#value')
const amountEl = document.querySelector('#amount')
const plusBtn = document.querySelector('#plus-button')
const minusBtn = document.querySelector('#minus-button')

let amount = 0
let sum = 0
console.log(`it's javascript time`)

amountEl.addEventListener('input', (e) => {
    console.log('hi')
    amount = parseInt(e.target.value)
})
plusBtn.addEventListener('click', (e) => {
    console.log('button')
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