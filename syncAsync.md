# Synchronous and Asynchrounous
| Synchronous                                      | Asynchronous|
|--------------------------------------------------|-------------|
|Synchrounous functions pause execution of the program till the function returns a value or error                                            | Asynchrounous functions allow the execution to proceed and allow the call back to process their error or success functions |
|Synchronous functions are first order functions they take in a variable and return variable (array/object/javascript variable)              | Asynchronous functions are second order functions, which take in another function to execute in case of error or success|
| Synchronous functions are executed in the main thread in which javascript code execution happens                                           | Asynchrnous functions are classified by javscript as functions that require callback and are executed once their callback is fired and the synchronous functions executing on the thread are done. |

# Definition of Promise
Promise is a proxy for data that is not yet available when promise is created but will be in future.
