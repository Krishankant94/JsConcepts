// Debount implementation 
const resul1Container = document.getElementById('result1-js01');
const ulElement = document.createElement('ul');
const spanElement = document.createElement('span');

const fetchSearchItem = (searchText) => {
    const liElement = document.createElement('li');
    liElement.textContent = `searching(Network call)... ${searchText}`;
    ulElement.appendChild(liElement);
    spanElement.textContent = document.getElementsByTagName('li').length;
}

const debounce = (fn,delay) => {
     let timerId;
    return function (...params) {
      const context = this;  
      if(timerId){
        clearTimeout(timerId)
      }
      timerId = setTimeout(()=>fn.apply(this,params),delay)
    }
}

const TTL = 3 * 100;
const deboucedSearch = debounce(fetchSearchItem,TTL);

const onChangeInputSearch = (event) => {
    deboucedSearch(event.target.value);
}


resul1Container.appendChild(spanElement)
resul1Container.appendChild(ulElement);

