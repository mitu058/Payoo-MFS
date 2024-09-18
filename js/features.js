
document.getElementById('btn-show-cash-out').addEventListener('click', function(){

    // show cash out button clicked
    document.getElementById('cash-out-form').classList.remove('hidden')

    // hide the add money form
    document.getElementById('add-money-from').classList.add('hidden')
})

// show add money from and hide cashout from
document.getElementById('btn-show-add-money').addEventListener('click',function(){

    // show add money button clicked
    document.getElementById('add-money-from').classList.remove('hidden')

    document.getElementById('cash-out-form').classList.add('hidden')
})