# JsConcepts
Consists javascript related topics which are really interesting and backbone for JS 

1. Rate limiters at client side (debounce and throttle)
What is a rate limiter , so as the name suggests it is the tool which helps us to avoid unnecessary network calls. Basically it is helping us to protect our platform 
from happening any duplicate or unnecessary activity which is already in progress or instead of making unnecessary network calls for small changes.

At client side we have so many loop holes which can affect our platform or server if not protected using rate limiters such as input search which makes so many network calls for each keystroke or a button which have very heavy operations with network call , triggered more than once on the same time.
To prevent such loop holes there are some very good concepts in javascript - Debounce and Throttling (Rate limiters at client side )

Debounce : The core idea is to delay the execution of a function until a certain amount of time has passed since the last time the event occurred.

Throttle : A function runs at most once within a specified time interval.
                     

