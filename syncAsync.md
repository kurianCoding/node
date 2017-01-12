# Synchronous and Asynchrounous

| Synchronous                                      | Asynchronous|
|--------------------------------------------------|-------------|
| Synchrounous functions pause execution of the program till the function returns a value or error                                            | Asynchrounous functions allow the execution of main thread to proceed and let call back functions wait till their execution is completed. |
| Synchronous functions are first order functions they take in a variable and return variable (array/object/javascript variable).             | Asynchronous functions are second order functions, which take in another function to execute as a callback.|
| Synchronous functions are executed in the main thread in which javascript code execution happens.                                           | Asynchronous functions are classified by javscript as functions that require callback and are executed once their callback is fired and the synchronous functions executing on the thread are done. |

# Definition of Promise
Promise is a proxy for data that is not yet available when promise is created.
