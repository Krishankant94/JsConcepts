//Use case 1 — Data encapsulation , Modules  and private variables
// Counte App 

const display1 = document.getElementById('result1-JS02');

function createCounter(){
   let count = 0;
   return {
    incrementCounter : function(){
        count = count+1;
    },
    decrementCounter : function() {
        count = count-1; 
    },  
    getCountValue : function() {
        return count;
    }  
   } 
}


const counter1 = createCounter();

const increment = () =>{
    const {incrementCounter,getCountValue} = counter1;
    incrementCounter();
    display1.textContent = getCountValue();
}

const decrement = () => {
    const {decrementCounter,getCountValue} = counter1;
    decrementCounter();
    display1.textContent = getCountValue();
}

