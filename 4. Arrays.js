// // 1. Single Dimensional Array

//     // One Identity can store multiple values
//     var array = [1,2,3,4,5,6]
//     for(let i = 0; i<array.length; i++)
//     {
//         console.log(array[i])
//     }
// //------------------------------------------------------------------------------------------------------------//

// // 2. Multi Diminesional Array

//     var array1 = [[1,2,3,4],[5,6,7,8]]

//     for(var i = 0; i<2; i++){

//         for(var j =0; j<=3; j++){

//             // First  Iteration: array1[0][0]
//             // Second Iteration: array1[0][1]
//             // Third  Iteration: array1[0][2]
//             // Fourth Iteration: array1[0][3]
            
//             // Fifth  Iteration: array1[1][0]
//             // Sixth  Iteration: array1[1][1]
//             // Seventth Iteration: array1[1][2]
//             // Eigth Iteration: array1[1][3]

//             console.log("Two Dimensional Array: "+ array1[i][j])

//         }
//     }

//     // Matrix Addition

//     var array1 = [[1,2],[3,4]]
//     var array2 = [[5,6],[7,8]]

//     var sumArray = [[],[]]
//     for(var i =0; i<2; i++){
//         for(var j=0; j<2; j++){

//         // Iterations
//         // sumArray[0][0] = array1[0][0] + array2[0][0]
//         // sumArray[0][1] = array1[0][1] + array2[0][1]
//         // sumArray[0][2] = array1[0][2] + array2[0][2]
//         // sumArray[1][0] = array1[1][0] + array2[1][0]
//         // sumArray[1][1] = array1[1][1] + array2[1][1]
//         // sumArray[1][2] = array1[1][2] + array2[1][2]
//             sumArray[i][j] = array1[i][j] + array2[i][j]
//         }
//     }
//     console.log(sumArray)

    // Array Constructor
            //1. Using an Array Constructor also we can define an Array
           
            var arr_names = new Array(4)  
            for(var i = 0;i<arr_names.length;i++) { 
            arr_names[i] = i * 2 
            console.log("Using Array Constructor for Position: " + arr_names[i]) 
            }
            //2. Using an Array Constructor Comma Delimited Values
            var names = new Array("Mary","Tom","Jack","Jill") 
            for(var i = 0;i<names.length;i++) { 
            console.log("Providing Values in a Constructor: "+ names[i]) 
            }
    
    // Array Methods

            // 1. Concat Method
                // syntax 
                // array.concat(value1, value2, ..., valueN);
                // User to Merge multiple arrays

                var alpha = ["a", "b", "c"]; 
                var numeric = [1, 2, 3];
                var alphaNumeric = alpha.concat(numeric); 
                console.log("1. Concat Method alphaNumeric : " + alphaNumeric );

            // 2. Every Method
            // Syntax
            // array.every(callback[, thisObject]); 
            // callback − Function to test for each element.
            // thisObject − Object to use as this when executing callback.
            // It only Gives boolean Values

            // For the Callback function in every method we have certain parameter to be passed
            // element/currentvalue - The current element of array. -> Mandatory
            // index - It is optional. The index of current element.
            // array - It is optional. The array on which every() operated.
            // thisArg - It is optional. The value to use as this while executing callback.

                    // 1. Every Method for Element/ Value
                    function isBigEnough(element) { 
                         return (element >= 10); 
                    } 
                    
                    var passed = [12,10,44].every(isBigEnough); 
                    console.log("Test Value for element/Value: " + passed ); 
                    
                    // 2. Every Method for Index/Position
                    function isBigEnoughindex(element, index, array){
                        return index < 2 
                    }
                    var passed1 = [10,11].every(isBigEnoughindex)
                    console.log("Test Value for Index: "+ passed1)

                    // // 3. Every Method with Array ---> Uncomplete Topic
                    // function isBigEnougharray(element, index, array){
                    //     return array = 1
                    // }
                    // var arr = [1,2,3,4]
                    // var passed2 = arr.every(isBigEnoughindex)
                    // console.log("Test Value for Array: " + passed2)
    

            // 3. Filter Method
            // array.filter(callback[, thisObject]); 
          
            function isBigEnoughFilter(element, index, array) { 
                return (index < 2); 
             } 
             var passedFilter = [12, 5, 8, 130, 44].filter(isBigEnoughFilter); 
             console.log("Test Value : " + passedFilter );  

            //4.  For Each Method
            var nums = new Array(12,13,14,15)  
            console.log("Printing original array......")  

            // array.forEach(callback[, thisObject]);  
            nums.forEach(function(element,index) { 
               console.log("Value: " + element) 
               console.log("Index Position: " + index)
            }) 

            // First you are reversing the array with Reverse Method
            // Printing the Reversed array using forEach Method            
            nums.reverse()  //reverses the array element
            console.log("Printing Reversed array....")  
            nums.forEach(function(val,index){ 
               console.log(val) 
               console.log(index)
            })  


            // 5. Indexof method
            // array.indexOf(searchElement[, fromIndex]);   

            // searchElement − Element to locate in the array.
            // fromIndex −The index at which to begin the search. 
            // Defaults to 0, i.e. the whole array will be searched.
            // If the index is greater than or equal to the length of the array, -1 is returned.
            // indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.


            
            var index = [12, 5, 8, 130, 44].indexOf(8); 
            console.log("index is : " + index )  


            // 6.Join Method
            // array.join(separator); 
            // separator − Specifies a string to separate each element of the array. 
            // If omitted, the array elements are separated with a comma.



            var arr = new Array("First","Second","Third"); 
            var str = arr.join();
            console.log("str : " + str ); 
            var str = arr.join(" + "); 
            console.log("str : " + str );  
            var str = arr.join(", "); 
            console.log("str : " + str );  


            // create an array
            const words = ['Hello', 'there', 'world!'];
            // join the array with spaces in between
            const greeting = words.join(' WOW ');
            // display string
            console.log(greeting); // Hello WOW there WOW world!
        
            // 7. Split Method 
        
            // The split() method turns a String into an array of strings, by separating the string at each instance of a specified separator string.


            // new string with commas
            const stringWithCommas = 'I, want, to, come, home';
            // split string by the commas into an array
            const wordArray = stringWithCommas.split(', ')
            console.log(wordArray)
            // join array into a string with a space as separator.
            const stringWithoutCommas = wordArray.join(' ');
            // display new string
            console.log(stringWithoutCommas)

            // 8. Lastindexof
            // Syntax:array.lastIndexOf(searchElement[, fromIndex]);  

            var indexlastindex = [12, 5, 8, 9, 9, 130, 44, 9].lastIndexOf(9); 
            console.log("index is : " + indexlastindex ); 

            // 9. Map method
            // Map function will not mutate the existing array instead it creates a new array to execute callback functions on each element
            // Takes a callback function that is called once for each element.
            // Calls the callback function and gets the result of the operation run on the element
            // Returns a new array with the results> The .map() method creates a new array and doesn't mutate the old array.
            //  callback This is the function that executes each of the elements of the array. The callback function is required and can take three parameters:
            // element: This is the element currently being executed - required.
            // index: This is the index of the current item - optional.
            // array: This is the array that is currently being processed - optional.
               
                   
            let arrayformap = [1, 2, 3, 4, 5];
            let newArray = arrayformap.map(function(number){
                return number * 2
            })
        
            console.log(arrayformap);
            console.log(newArray);

            const numbers = [2, 4, 6, 8];
            const squares = numbers.map(number => number * number);
            console.log(squares);
            
            //  arrays of objects
            /// Student data in an object


            const students = [{name: 'Rich', score: 33}, {name: 'Peter', score: 55}];
            // Run through array and fetch scores
            let scores = students.map(function(student){
            return student.score
            });
            // Output scores in an array
            console.log(scores);

            //10 Pop method
            ['me', 'him', 'you'].pop() 
            console.log( ['me', 'him', 'you'].pop());


            //  List of names
            const studen = ['william', 'john', 'chris', 'mike']
            // Remove the last name
            const newStudents = studen.pop()
            
            // Output the removed name
            console.log(newStudents)


            // 11. push method
            let newArrayPush = [1, 2, 3, 4, 5].push(6)

            const namStr = ['Johnny', 'Pete', 'Sammy'].push('Larry')
            console.log(namStr);
            console.log(newArrayPush)

            // 12. Reduce
            // array.reduce(callback[, initialValue]);   
            // reduce() method applies a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value.
            var total = [0, 1, 2, 3].reduce(function(a, b){ return a + b; }); 
            console.log("total is : " + total );    
            
            // 13.Reduce Right
            // array.reduceRight(callback[, initialValue]); 
            // reduceright() method applies a function simultaneously against two values of the array (from Right-to-left) as to reduce it to a single value.
            
            var total1 = [0, 2, 1].reduceRight(function(a, b){ return a - b; }); 
            console.log("total is : " + total1 );  
            
            //14. Reverse
            //  List of items
            const list = ['fish', 'cow', 'ham', 'ram', 'table']
            //  Reverse list
            list.reverse()
            // Output result
            console.log(list)


            // 15.shift

            // List of numbers
                const lis = [10, 20, 30, 40, 50]
                // Remove first number
                const newList = lis.shift()
                // Output result
                console.log(newList)

            // 16.slice
            // Array of various elements
            // Slice index number start '1'
            const things = ['cup', 'house', 'spoon', 'plate']
            // Copy array elements from index 1
            const cutThings = things.slice(2)
            // Output result
            console.log(cutThings)

            // array.slice(start, end)

            const numb = [2, 3, 4, 5, 6];
            const sliced = numb.slice(2,3);
            console.log(sliced);
            //output: Array [4,5]

            //  An array of objects
            const users = [{name: 'Pete', id: 1}, {name: 'Rich', id: 2}, {name: 'Johnny', id: 3}];
            // Copy users from a particular index
            const lastUsers = users.slice(1);
            // Output users from the selected range
            console.log(lastUsers);

            // 17. splice
            // array.splice(startIndex, deleteCount[, item1, item2, ...])

            const items = [1, 2, 3, 4, 5]
            // Delete 4 elements counting from the 0 index
            let deletedItems = items.splice(1,2)
            // Output deleted elements
            console.log(deletedItems)
            console.log(items);

            // 

            // List of languages
            const languages = ['python', 'java', 'c++'];
            // Add new languages from index 2 and remove no element

            languages.splice(2, 0, 'javascript', 'ruby');
            // Output result
            console.log(languages);

            // 18. Unshift

            console.log([0, 0.5, 1, 2, 3, 4, 5].unshift(0, 0.5))
            // o/p // [0, 0.5, 1, 2, 3, 4, 5]

            // New Array
            let arry = [10, 20, 30, 40, 50]
            // Add new numbers to start of the array
            let newLength = arry.unshift(2, 5)
            // Display new length and old array
            console.log(newLength)
            console.log(arry)

            // 19.some
            // array.some(callback[, thisObject]);
            // some() method tests whether some element in the array passes the test implemented by the provided function.

  

            function isBigEnough(element, index, array) { 
                return (element >= 10); 
             } 
             var retval = [2, 5, 8, 9, 4].some(isBigEnough); 
             console.log("Returned value is : " + retval ); 
             var retval = [12, 5, 8, 1, 4].some(isBigEnough); 
             console.log("Returned value is : " + retval )

            // //  20.To source method
            // var z ={name:"arjun", age:25}
            // console.log(z.toSource());

            // 21 . Sort
            //  array.sort( compareFunction ); 
            var ar = new Array("orange", "mango", "banana", "sugar"); 
            var sorted = ar.sort(); 
            console.log("Returned string is : " + sorted );

            // 22. tostring
            // to convert array into string format
            var arrs1 = new Array("orange", "mango", "banana", "sugar");         
            var str = arrs1.toString(); 
            console.log("Returned string is array: " + arrs1 ); 

            // ES6 Array Method

            // 1.Find
            var num = [ 2, 3,4,1]; 
            var oddNumber = num.find((x) => x % 2 == 1); 
            console.log(oddNumber); // 1

            ['chris', 'nick', 'holly'].find(function(name) {
                return name === 'holly';
            });
            // or simplified with es6 arrow functions
            ['chris', 'nick', 'holly'].find(name => name === 'holly');

            const people = ['chris', 'nick', 'holly'];
            // find chris
            const singlePerson = people.find(name => name === 'chris');
            console.log(singlePerson);
            // output: chris