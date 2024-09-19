 
  document.getElementById('btn').addEventListener('click',function(event){
    event.preventDefault();
  const num = document.getElementById('number').value;
  const pin = document.getElementById('pin').value;
  
  if(num === "017" && pin ==='55')
  {
      console.log('you are login');
     window.location.href="./home.html"
  }else{
      alert('wrong ph or pin')
  }
  document.getElementById('number').value ='';
  document.getElementById('pin').value = '';
  
    })