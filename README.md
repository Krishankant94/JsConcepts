# JsConcepts
Consists javascript related topics which are really interesting and backbone for JS 

1. Rate limiters at client side (debounce and throttle)
What is a rate limiter , so as the name suggests it is the tool which helps us to avoid unnecessary network calls. Basically it is helping us to protect our platform 
from happening any duplicate or unnecessary activity which is already in progress or instead of making unnecessary network calls for small changes.

At client side we have so many loop holes which can affect our platform or server if not protected using rate limiters such as input search which makes so many network calls for each keystroke or a button which have very heavy operations with network call , triggered more than once on the same time.
To prevent such loop holes there are some very good concepts in javascript - Debounce and Throttling (Rate limiters at client side )

Debounce : The core idea is to delay the execution of a function until a certain amount of time has passed since the last time the event occurred.

Throttle : A function runs at most once within a specified time interval.
                     

2. Closure In Javascript 
It is going to be very interesting topic as closure contribute a lot in Javascript.It is an amazing feature which is part of Js.We should say that javascript already a rich language but closure increases it’s power a lot.

What :       It is a function which remembers its lexical scope or we can say that function along with lexical memory.

“Whenever an inner function returns from outer function and executed  sometime later but during the execution it still remembers the outer functions scope and variables even though the outer functions does not exists any more”

use cases : 
                   
Use case 1 — Data encapsulation , Modules  and private variables
Use case 2 — Memoization
Use case 3 — Partial application

The formatMoney function takes two optional arguments: prefix (defaulting to “$”) and precision (defaulting to 2). It returns an inner function that takes a single argument (number). This inner function uses the captured values of prefix and precision from the closure to format the provided number with the specified prefix and number of decimal places.

function formatMoney(prefix = "$", precision = 2) {
  return function(number) {
    return prefix + number.toFixed(precision);
  }
}

const usdFormatter = formatMoney("$", 2);
const eurFormatter = formatMoney("€", 3);

console.log(usdFormatter(123.456)); // Output: $123.46
console.log(eurFormatter(789.0123)); // Output: €789.012

By calling formatMoney with specific values for prefix and precision, we create new functions like usdFormatter and eurFormatter. These new functions are partially applied versions of the original formatMoney function, with the currency symbol and number of decimal places already set.
