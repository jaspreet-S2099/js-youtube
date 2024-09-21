/*
"JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime."

NOTE: To master js we need to properly learn - OBJECTS and WEB EVENTS
*/

/*
PRIMITIVE(Call by value type):

String, Number, Boolean, null, undefined, Symbol, BigInt

*/

/*
NON PRIMITIVE(Referenced type):

Array, Objects, Functions

    NOTE: return type of all these is OBJECT
*/
const score =100
const scorevalue=100.4

const isLoggedIn= false
const outsideTemp=null
let userEmail;

const id= Symbol('123')
const otherid=Symbol('123')
// console.table([id, otherid]);
console.log(id===otherid);

const bignumber=12345678901234567n //we use 'n' to show bigint for massive values

const heroes=["bat", "noir","hulk" ]; //an array

let myobj= {            
    name: "Jas",
    age: 21
}
//anything inbetween {} is object

const myFunction = function(){      //a function
    console.log("Hello World");
    
}

//  NOTE: RETURN TYPE OF FUNCTION IS 'FUNCTION OBJECT'

console.log(typeof bignumber);


/*
Return type of variables in JavaScript
1) Primitive Datatypes              
       Number => number             
       String  => string            
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
 */

//************************************************************************** */
// STACK-> primitive types
//HEAP-> non primitive "



let myname="jaspreet singh"
let othername=myname
othername="Harry puttar"

console.log(myname);
console.log(othername);         //example of STACK implementation
                                //we work on copy values


let user1={
    email: "test@yahoo.com",
    upi: "user@apl"
}

let user2=user1

user2.email="real@gmail.com"

console.log(user1.email);           //syntax of referencing objects
console.log(user2.email);           //example of HEAP implementation
                                //in heap we work on original reference(real time changes everywhere) 
