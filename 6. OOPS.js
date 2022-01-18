c// OOPS in ES6
    // 1. Classes
    class ES6{
        // A Class Body can have only functions and constructors nothing else
        add(a, b) {
            var c = a + b
            console.log("Addition Lambda Function: " + c)
        }
        multip(){

        }

    }

        // 1. Objects
        // Objects are Instances of a Constructor
        // A default constructor will be assigned to your class in the background by your programming engine
        
        // var(Reference Type) obj(Instance/State/Behavior) = new(New Instance/State/Behavior) ES6()(Constructor)
        var obj = new ES6()
        obj.add(1,3)

        var obj1 = new ES6()
        obj1.add(6,8)

    // // 2. Inheritance

        // 1. Single Inheritance

        class A{
            display() {
                console.log("Displaying Single Inheritance")
            }
        }
        class B extends A{
            // Single Inheritance
            add(){
                console.log('ex')
            }
        }
    
        var obj2 = new B()
        obj2.display()

        
    //     // 2. Multilevel Inheritance

        class C{
            displayText(){
                console.log("Displaying Multilevel Inheritance")
            }
        }
        
        class D extends C{}
                                                                                                                        
        class E extends D{}

        var obj3 = new E()
        obj3.displayText()

        // 3. Heirarchical Inheritance
        // Single Class can be distributed to Multiple Classes
        class F{
            display2(){
                console.log("Showing Heirachical Inheritance")
            }
        }

        class G extends F{}
        class H extends F{}

        var obj4 = new G()
        obj4.display2()
        var obj5 = new H()
        obj4.display2()

        // 4. Multiple Inheritance but Java/JavaScript doesn't support Multiple Inheritance
        // NOT SUPPORTED 

    // 3. Custom Constructor

    class Employee{

        // Constructor Reserved Keyword
        constructor(name,age){

            // This Keyword Represents this particular constructor
            // Var name = argument
            // Constructor is not a Function/Method 
            // Constructor cannot have return
            this.name = name
            this.age = age 
        }

        displayNameandAge(){


            
            console.log("Constructor Name: "+ this.name+"\n"+ "Constructor Age:"+this.age)
        }
    }

    var obj5 = new Employee("arjun", "29")
    obj5.displayNameandAge()

    // 4. Overiding 
        // Overiding is only Possible in Inheritance
       class superClass{
            sameName(){
                console.log("Super Class Function")
            }
       }
       class derivedClass extends superClass{
           sameName(){
               console.log("Derived Class Function")
           }
           superMethod(){
               super.sameName()
           }
       }

       var obj6 = new derivedClass()
       obj6.sameName() // Derived Class Function by default is being called
       obj6.superMethod() // Super Class Function is being called using super keyword

    // 4. Overloading

       class overloading{

            add(a,b){
                console.log("Add Function"+ a + b)
            }

            add(a,b,c){
                console.log("Second Add Function:" + a + b + c)
            }

            // Number of arguments is not dependent
            // Data Type of arguments are not also not dependent
       }

       var obj7 = new overloading()
       obj7.add(1,2) 