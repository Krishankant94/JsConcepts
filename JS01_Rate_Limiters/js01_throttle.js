let result2 = document.getElementById('result2-js01');
const btn = document.getElementById('btn-js01');
let attemp = 0 ; 

const processPayment = () => {
    attemp++; 
    result2.textContent = `${attemp} payment processed` 
}

const throttle = (fn,delay,inform) => {
  let isAlreadyInProgress = false;
  return function (...params) {
     const context = this;
     if(!isAlreadyInProgress){
        isAlreadyInProgress = true;
        inform(isAlreadyInProgress);
        fn.apply(context,params);
        setTimeout(()=>{isAlreadyInProgress=false;inform(isAlreadyInProgress)},delay);
     } 
  }
}
const informer =(isAlreadyBusy) => {
   btn.disabled = isAlreadyBusy
}
const TTL2 = 5*1000;
const throttledPaymentProcess = throttle(processPayment,TTL2,informer);

const onPaymentInitiate = () => {
    throttledPaymentProcess();
}