let initial=document.getElementById('initial');
let monthly=document.getElementById('monthly');
let percent=document.getElementById('percent');
let deposit=document.getElementById('time');
let button=document.getElementById('calculate');
button.addEventListener('click', calculateSum);

function calculateSum(){
   let initialSum = +initial.value;
   console.log('Изначальная сумма ' + initialSum);
   let monthlyPayment = +monthly.value;
   console.log('Ежемесячный платеж ' + monthlyPayment);
   let percentRate = +percent.value;
   console.log('Процентная ставка ' + percentRate);
   let depositTime = +deposit.value;
   console.log('Время депозита ' + depositTime);   

   if(initialSum>0 && monthlyPayment>=0 && percentRate<100 && percentRate>0 && depositTime>0 && Number.isInteger(depositTime)){
    let balance=initialSum;
    let timeMonth = Math.floor(depositTime/30);
    console.log('Месяцев ' + timeMonth);
        for (let i=0; i<timeMonth; i++) {
        balance=balance + monthlyPayment + (balance+monthlyPayment)*percentRate/1200;
        }
        alert('Ваш баланс будет ' + balance);
   }
   else {
        alert('Неверный формат');
        console.log('Неверный формат');
   }
}
