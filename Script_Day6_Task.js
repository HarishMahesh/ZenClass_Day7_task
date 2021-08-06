// task 1 what is shadowing how it effects with let,const,var

/*Shadowing: Now, when a variable is declared in a certain scope having 
the same name defined on its outer scope and when we call the variable from 
the inner scope, the value assigned to the variable in the inner scope is the 
value that will be stored in the variable in the memory space. This is known as Shadowing or Variable Shadowing. */

//example

function func() {
    let a = 'Harish';
      
    if (true) {
        let a = 'Mahesh';  // New value assigned
        console.log(a); 
    }
      
    console.log(a); 
}
func();

// the same is applicable for const also
/*
output:
Mahesh
Harish
*/

/* Illegal Shadowing:  while shadowing a variable, it should not cross the boundary of the scope, 
i.e. we can shadow var variable by let variable but cannot do the opposite. So, if we try to shadow 
let variable by var variable, it is known as Illegal Shadowing and it will give the error as “variable is already defined.” */

//example

function har() {
    var c = 'Kalees';
    let d = 'kalees';
      
    if (true) {
        let c = 'Vijay'; // Legal Shadowing
        var d = 'Vijay'; // Illegal Shadowing
        console.log(c); // It will print 'GeeksforGeeks'
        console.log(d); // It will print error
    }
}
har();

/*
output:
Identifier 'd' has already been declared
*/

// task 2 - what is deadzone when it comes to hoisting

/* the JavaScript engine runs through the code twice, in two phases types, Creation Phase and Execution Phase.
And it’s true. actually, the engine goes first through the code in Creation Phase and allocate memory space for 
variables that are declared with var, there is another player here that is called the initializer, which is responsible 
to initialize their value to undefined. In the second phase(Execution Phase), the engine goes through the code and executes. */

console.log(myVar) // undefiend  ---> here since initializer is assigned a value undefined to myVar we are getting the op as undefined.
var myVar = 2;
console.log(myVar) //  2

/* in the same way for let and const creation phase will happen as similar to var but the initializer 
set the variables with a special mode called TDZ (Temporal Dead Zone), which means the variables exist 
but you can’t access them until you assign some value. */

console.log(i) // reference error since it is in TDZ till the variable is initialized with a values or untill it is declared.
let i = 2;
console.log(i) // 2


