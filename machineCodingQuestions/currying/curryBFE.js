

function curry(fn) {
    function curried(...args){
      if (args.length >= fn.length) // if we have recieved the total arguements required by the callback function fn then return the direct answer
      //if not it means we have to still get other arguements hence send the function
      {
        return fn(...args);
      }
      return (...missingArgs) =>   //if the args.length is less than the cb function expected arguement length that means there are still some arguements 
      //that will be sent in another currying function so we return a function to continue currying (a)(b)(c) here when (a) is called it checks if 1 ==3
      //its false so return a function(which may accept arguement) and when compiler goes to (a)(b) now the returned function from (a) is called with "b" as its arguements 
      //so line 14 is executed and as per 14 it again calls curried with combined args and checks condition again 
        curried(...args, ...missingArgs);
  
  
    }
    return curried;
  }
  
  
  const join = (a, b, c) => {
    return `${a}_${b}_${c}`
  }
  const curriedJoin = curry(join)
  console.log(curriedJoin(1)(2, 3));//when values in arguement is passed as values seperated by comma using spread operator to access whole
  // curriedJoin(1, 2, 3) ;
  // curriedJoin(1)(2, 3) ;
  // curriedJoin(1, 2)(3) ;




//   1. Why should we not return curried() and use curried instead in line 15? solution use bind

// In a curried function, curried is the function that needs to be returned because it is the one responsible for handling 
//the argument accumulation and calling the original function when the required number of arguments is met.
// Returning curried() would immediately invoke the function and return its result


//2. Why should we not use return (...missingArgs) => { curried(...args, ...missingArgs); }?

//When you use curly braces {}, you're defining the body of the function. In this case, you must explicitly use the return statement 
//If you omit the curly braces, the arrow function implicitly returns the result of the expression immediately following the => symbol


//WE USE BIND , CALL , APPLY TO RETURN A FUNCTION , BECAUSE WHEN WE USE "return fn(..args)" it will immediately resolve the function and is not returned as a function

//USING BIND

function curryBind(fn) {
    return function curried(...args) {
      // if number of arguments match
      if (args.length >= fn.length) {
        return fn.call(this, ...args)
      } 
      // just return a bounded curried() with args pre-filled
      return curried.bind(this, ...args)
    }
  }


//First Call (curriedAdd(1)):

// curried() is called with 1, so args = [1].
// Since args.length (1) is less than fn.length (3), we don't have enough arguments to call add.
// The function returns curried.bind(this, 1), which is a new function where 1 is pre-filled. This function will now accumulate the second argument.
// It remembers that 1 was the first argument and will use it when the final function (after all the arguments are accumulated) is called.


// How bind() Works to "Remember" Arguments:
// Here’s the key part:

// bind() creates a new function where the arguments provided to bind() are pre-filled.
// In the case of curriedAdd(1), bind(this, 1) creates a new function where 1 is stored in its argument list.
// When you call the returned function with (2), the new argument (2) is added to the argument list, and now the function "remembers" both 1 and 2.
// Every time you call the curried function, the arguments are accumulated, and the function keeps adding new arguments until it has enough to call the original function (add).

function curryCall(fn) {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn.call(this, ...args); // Immediately call the function when we have enough arguments
      }
      return curried.call(this, ...args); // Calls curried immediately, not returning a new function
    };
  }