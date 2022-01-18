// DECISION MAKING

    // 1. IF CONDITION
    var a = 10
    var b = 12
    if(a == 10){
        console.log("If Condition is True")
    }

    // 2. IF ELSE CONDITION
    if(a == 11){
        console.log("If Condition is True")
    }
    else{
        console.log("If Condition is False")
    }

    // 3. IF ELSE IF CONDITION 
    if(a == 12){
        console.log("IF Condition is True")
    }
    else if(a == 10)
    {
        console.log("ELSE IF Condition is True")
    }
    else{
        console.log("ELSE IF Condition is False")
    }

    // 4. Nested IF Condition
    if(a == 10){
        console.log("First Condition is Passed")
        if(b == 12){
            console.log("Second Condition is True")
        }
    }

    // 5. Switch Case

    switch(a){

        case 1:
            console.log("Value of a is 1")

        case 2:
            console.log("Value of a is 2")

        case 10:
            console.log("Value ofa is "+ a)
            break;

        case 11:
            console.log("Value of a is 11")

        default:
            console.log("Value of a is None")

    }

    // Loops

        // 1. For Loop
        // Syntax: 
        // for(initialize; condition; update){
        // }
        for(let i =0; i<5; i++){
            console.log("For Loop i:"+ i)
        }

        // 2. For in Loop
        var obj = {name:"arjun", address:"JP Nagar"}
        for(let i in obj){
            console.log("For in Loop for object: "+ obj[i])
        }
        // 3. For of Loop
        var array = [1,2,3,4,5,6]
 
        for(k of array){
            console.log("For of Loop for Array: "+ array[k])
        }
        // 4. While Loop
        // Condition is the priority
        var m = 1
        while(m <= 10){
            console.log("While Loop with the Condtion: " + m )
            m++
        }
        // 5. Do While Loop
        do{
            var i = 0
            console.log("First Iteration executes without taking condition into consider: " + i)
            i++
        }while(i<1)