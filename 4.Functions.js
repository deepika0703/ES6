// 1. General Function Expression
    function display(){
        console.log("Displaying General Function Expression")
    }
    display() // Function Call

// 2. Returning Functions
    function returnFunctions(){
        return 10;
    }
    console.log("Returning Functions"+returnFunctions())
    

// 3. Paramaterized Functions
    function parameterFunction(a,b){
        var c = a + b
        console.log("Parametized Functions:"+ c)
    }
    parameterFunction(10,2)

// 4. Default Function Parameter
    function defaultFunctionParmeter(a, b = 10){
        var c = a + b 
        console.log("Default Function Parameters:"+ c)
    }
    defaultFunctionParmeter(10)
    defaultFunctionParmeter(10,11) // Pass By Values
    defaultFunctionParmeter(c = 10, k = 13) // Pass By Arguments
    
// 5. Rest Parameterized Functions
    function restParameter(...param){ // Spread Operator
        console.log("Rest Parameterized Functions:" + param)
    }
    restParameter(1,2,3,4,5,6,7,8,9)

// 6. Anonymous Functions
   var anonymousFunction = function () {
       console.log("Anonymous Function")
   }
   anonymousFunction();

// 7. Immediately Invoked Function Expression
   (function (a,b) {
       var c = a + b
       console.log("IIFE & Tail Call Optimization: " + c)
   })(1,2) // Tail Call Optimization

// 8. Recursive Functions
   function factorial(num){
        if(num <= 0){
            return 1
        }
        else{
            //     6   * factorial(6 -1){
                                // 5 * factorial(4)
                                // 6 * 5 * 4 * 3 * 2 * 1 * 1
                        //}
            return num * factorial(num - 1)
        }
   }
   console.log("Recursive Functions:" + factorial(6))

// 9. Anonymous Recursive Functions
   var factorial1 = function (num){
        if(num <= 0){
            return 1
        }
        else{
            //     6   * factorial(6 -1){
                                // 5 * factorial(4)
                                // 6 * 5 * 4 * 3 * 2 * 1 * 1
                        //}
            return num * factorial1(num - 1)
        }
    }
    console.log("Anonymous Recursive Functions:" + factorial1(6))

// 10. Lamda Functions // Arrow // Fat Arrow Functions

    var lamdaFunction = () => {
        console.log("Lamda Function")
    }

// 11. Lamda Function without Parenthesis and {}

   (c => console.log("Lamda Function2 : "+c))(6);
  

// 12. Function Hoisting
   
    function hoist(){
        console.log(message)
        var message = 'Hoisting is all the rage!'
    }
    hoist()

    // expression()

    var expression = function hoisting(){
        console.log('will this work')
    }

    var double;

    function double(num){
        return (num * 2)
    }
   
    console.log(typeof double)

// 13. Generator Functions