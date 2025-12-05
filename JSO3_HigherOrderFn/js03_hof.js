/**
 *  Create a person class / constructor 
 *  Create a employee class / constructor 
 *  As employee is also a person , we wanna inherit few of the properties from the parent class person
 * 
 */


// Person constructor function
// This will refer to newly created object
function Person(name,age){
  this.name = name ;
  this.age = age;
//   this.getName = function () {
//     return this.name;
//   }
}

Person.prototype.getName = function () {
  return this.name;  
}

// Manager constructor function
function Employee(name,company){
   this.name = name ; 
   this.company = company;  
}

Employee.prototype.__proto__ = Person.prototype;

const person1 = new Person('Anvit','2.5'); 
console.log('person1',person1);

const emp1 = new Employee('Krishan','31');
console.log('emp1',emp1); 




/*
   higher Order functions : In Js we have some many places we use higher order functions 
   What ? : As we know javascript functions are first class functions so they can be treated as veriable when they are used as paramns or return also.
   They have very important role for functional programming 
   Examples : Map , filter , reduce , ThrottleCreator Fn , DebounceCreator Fn etc
*/

const arr = [2,3,4,5,6];
const iteratorLogic = (item) => {
   return item*2;
}
const updatedArr = arr.map(iteratorLogic);


/*
   Now we are going to create one higher order function just by mimic map
   mapjs03
*/ 

Array.prototype.mapJS03 = function(fn){
      let resultArr = [];
//    this  will represent arr 
    this.forEach(item=>{
       resultArr.push(fn(item))
    })
    return resultArr;
}


const newUpdatedArr = arr.map(iteratorLogic);


/*
  similiarly lets mimic filter also 
*/

const iteratorLogic2 = (item) => {
   if(item<7){
    return true;
   }
   else {
    return false;
   }
}

const amounts = [3,6,9,1];
const filteredAmount = amounts.filter(iteratorLogic2)


Array.prototype.filterJSO3 = function(fn) {
  let resultArr = [];  
  this.forEach(item => {
     if(!!fn(item)){
      resultArr.push(item);
     }
  })
  return resultArr;
}

const newFilteredAmount = amounts.filterJSO3(iteratorLogic2)




/*
    The reduce method
*/ 

const rowData = [{name:'A',val:15},{name:'B',val:25},{name:'A',val:35},{name:'B',val:35}]

const iteratorLogic3 = (accumlator,iterator)=>{
    // check if accumlator already have the same name object
    // if yes then process 
    // else add in accumlator
    const idx = accumlator.findIndex((item)=>item.name===iterator.name);
    if(idx>=0){
     accumlator[idx].val = accumlator[idx].val+iterator.val;
    }
    else {
     accumlator.push(iterator);
    }   
    return accumlator;
}

const finalData = rowData.reduce(iteratorLogic3,[]);
console.log('finalData',finalData);
