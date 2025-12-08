class Counter{
  constructor(){
    this.count =0;
  }  
  increment(){
    this.count = this.count+1;
  }
  decrement(){
    this.count = this.count-1;
  }
}

const counterObj = new Counter();
export default counterObj;