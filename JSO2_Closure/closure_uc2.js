// Use case 2 — Memoization
const display2 = document.getElementById('result2-JSO2');


function calculateLogicCreater(){
     const cache = {};
     return function (n) {
        const startTime = Date.now() // capture start time
        if(!cache[n]){
          let val=0;
          for(let i=0;i<n;i++){
            val = val+i;  
          } 
          cache[n] = val;   
        } 
        const endTime = Date.now() // capture end time
        return `${cache[n]} in ${endTime-startTime} time unit`;
     }
}

const calculateLogic = calculateLogicCreater();  
let number = 0;
const onInputChange = (e) => {
  number = e.target.value;
}

const calculate = () => {

   const val =  calculateLogic(number);
   display2.textContent = val;
}