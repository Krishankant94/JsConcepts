const display3  = document.getElementById('result3-JSO2');
const divElement1 = document.createElement('div');
const divElement2 = document.createElement('div');

function moneyFormatter(prefix,precision){
   return function (number) {
      return prefix+number.toFixed(precision);
   } 
}

let amount = 0;

const onInputChange2 = (e) => {
  amount = Number(e.target.value);
}



const usdFormat = moneyFormatter('$',2);
const eurFormat = moneyFormatter('€',3);

const format = () => {
   divElement1.innerText = usdFormat(amount);
   divElement2.innerText = eurFormat(amount);
   display3.appendChild(divElement1);
   display3.appendChild(divElement2);
}