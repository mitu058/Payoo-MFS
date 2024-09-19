
// search: from submit realoading the page

// step-1: set event handler
document.getElementById('btn-login') 
.addEventListener('click',function(event){
    // step-2: prevent default behaviour (prevent reloading browser)
event.preventDefault() 
console.log('button clicked')

// step-3: get the phone number and pin number
const phoneNumber = document.getElementById('phone-number').value
const pinNumber = document.getElementById('pin-number').value
console.log(phoneNumber, pinNumber)

// step-4: validate phone & pin .(temporaray method it is not proper way)
if(phoneNumber === '01725' && pinNumber==='1234'){
   
    window.location.href = './home.html'
}

else{
    alert('wrong phone or pin')
}
})