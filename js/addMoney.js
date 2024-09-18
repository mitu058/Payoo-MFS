
// step-1: add event handeler to the add money button
document.getElementById('btn-add-mpney')
.addEventListener('click',function(event){
  event.preventDefault();

//   step-2: get money to be added to the account
const inputAddMoney = document.getElementById('input-add-money').value

const pinNumberInput = document.getElementById('pin-number-input').value

// step-3: verify pin number
if(pinNumberInput === '1234'){
    console.log('adding money to your account')

    // step-4:get the current blance
    const blance = document.getElementById('current-blance').innerText
    console.log(blance)

    // step-5: add addmoney input with balance
    const addMoneyNumber = parseFloat(inputAddMoney)
    const balanceNumber = parseFloat(blance)
   const newBlance = addMoneyNumber+balanceNumber
console.log(newBlance)

// step-6: update the blance in UI/DOM
document.getElementById('current-blance').innerText = newBlance
}
else{
    alert('wrong pin number')
}
})