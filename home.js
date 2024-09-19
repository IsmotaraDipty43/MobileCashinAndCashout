
// add money
document.getElementById('btnAddMoney').addEventListener('click',function(event){
  event.preventDefault();
  const addMoneyInput = document.getElementById('amount').value;
  const pinnumber=document.getElementById('pin').value;
  if(pinnumber === "55"){
 const currentBalance = document.getElementById('currentbalance').innerText;
 const balance = parseFloat(currentBalance);
 const newMoney = parseFloat(addMoneyInput);
const newBalance = balance + newMoney;
document.getElementById('currentbalance').innerText = newBalance;
document.getElementById('pin').value ='';
document.getElementById('amount').value = '';
  }else{
    alert('failed to add the money in account');
    document.getElementById('pin').value ='';
document.getElementById('amount').value = '';
  }

})

//cashout

document.getElementById('btncashoutMoney').addEventListener('click',function(event){
event.preventDefault();
const withdrawMoney = document.getElementById('withdraw').value;
const pin = document.getElementById('pinn').value
if(pin === "55"){
 const currentBalance = document.getElementById('currentbalance').innerText;
const money = parseFloat(withdrawMoney);
const balance = parseFloat(currentBalance);
const newamount = balance - money;
document.getElementById('currentbalance').innerText = newamount;
document.getElementById('pinn').value ='';
document.getElementById('withdraw').value = '';
  }else{
    alert('failed to add the money in account');
    
    document.getElementById('pinn').value ='';
    document.getElementById('withdraw').value = '';

  }


})
// toggole
document.getElementById('cash-out').addEventListener('click',function(){

document.getElementById('cashout-from').classList.remove('hidden');
document.getElementById('addmoneyfrom').classList.add('hidden');
})


document.getElementById('add').addEventListener('click',function(){

  document.getElementById('cashout-from').classList.add('hidden');
  document.getElementById('addmoneyfrom').classList.remove('hidden');


})



