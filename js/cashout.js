document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = document.getElementById('input-cash-out').value
    const cashOutPin = document.getElementById('cash-out-pin').value


   if(cashOutPin === '1234'){


    const blance = document.getElementById('current-blance').innerText

    const newCash = parseFloat(cashOut)
    const newInput = parseFloat(blance)

    const newAmount =  newInput-newCash

    document.getElementById('current-blance').innerText = newAmount
   }

   else{
    alert('Failed to cash out')
   }
})