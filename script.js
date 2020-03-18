let initialSum=document.getElementById('initial');
let monthlyPayment=document.getElementById('monthly');
let button = document.getElementById('calculate');
button.addEventListener('click', calculateSum);

function calculateSum(){
   console.log(initialSum.value);
   console.log(monthlyPayment.value);
}