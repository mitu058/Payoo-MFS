
// search: from submit realoading the page

// step-1: set event handler
document.getElementById('btn-login') 
.addEventListener('click',function(event){
    // step-2: prevent default behaviour (prevent reloading browser)
event.preventDefault() //vejal to begginers
console.log('button clicked')

// step-3: get the phone number
const phoneNumber = document.getElementById('phone-number').value
console.log(phoneNumber)
})