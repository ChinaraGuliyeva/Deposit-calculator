let initial = +document.getElementById('initial').value;
let monthly = +document.getElementById('monthly').value;
let percent = +document.getElementById('percent').value;
let deposit = +document.getElementById('time').value;
let error = document.getElementById('error');
let button = document.getElementById('calculate');
button.addEventListener('click', check);

function check() {
   if (initial > 0 && monthly >= 0 && percent < 100 && percent > 0 && deposit > 0 && Number.isInteger(deposit)) {
      calculateSum(initial, monthly, percent, deposit);
   }
   if (initial <= 0 || isNaN(initial)) {
      console.log('Ошибка в первой строке');
      error.insertAdjacentHTML('beforeend', '<p>Ошибка в первой строке</p>');
   }
   if (monthly < 0 || isNaN(monthly)) {
      console.log('Ошибка во второй строке');
      error.insertAdjacentHTML('beforeend', '<p>Ошибка во второй строке</p>');
   }
   if (percent <= 0 || isNaN(percent)) {
      console.log('Ошибка в третьей строке');
      error.insertAdjacentHTML('beforeend', '<p>Ошибка в третьей строке</p>');
   }
   if (deposit <= 0 || isNaN(deposit) || !Number.isInteger(deposit)) {
      console.log('Ошибка в четвертой строке');
      error.insertAdjacentHTML('beforeend', '<p>Ошибка в четвертой строке</p>');
   }
}

function calculateSum(initial, monthly, percent, deposit) {
   let balance = initial;
   let time = Math.floor(deposit / 30);
   //    console.log('Месяцев ' + timeMonth);
   for (let i = 0; i < time; i++) {
      balance = balance + monthly + (balance + monthly) * percent / 1200;
   }
   alert('Баланс будет ' + balance);
}
