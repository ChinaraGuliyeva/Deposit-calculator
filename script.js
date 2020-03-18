let initial=document.getElementById('initial');
let monthly=document.getElementById('monthly');
let percent=document.getElementById('percent');
let deposit=document.getElementById('time');
let button=document.getElementById('calculate');
button.addEventListener('click', calculateSum);

function calculateSum(){
   let initialSum = +initial.value;
   console.log(initialSum);
   let monthlyPayment = +monthly.value;
   console.log(monthlyPayment);
   let percentRate = +percent.value;
   console.log(percentRate);
   let depositTime = +deposit.value;
   console.log(depositTime);   

   if(initialSum>0 && monthlyPayment>=0 && percentRate<100 && percentRate>0 && depositTime>0 && Number.isInteger(depositTime)){
    //not ready 
    
    let result=initialSum+monthlyPayment*percentRate/12
   }
   else {
        alert('Неверный формат');
   }
}
