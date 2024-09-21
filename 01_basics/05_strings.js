const name="jas"
const repocount= 1

// console.log(name +repocount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);          //other method of output strings

const gamename= new String('Jasper') /*other method to declare strings. (This method provides KEY VALUE PAIRS, STRING LENGTH etc. in browser console)
like below:
    
VM370:2 String {'Jasper'}0: "J"1: "a"2: "s"3: "p"4: "e"5: "r"length: 6[[Prototype]]: String[[PrimitiveValue]]: "Jasper"


*/

// console.log(gamename);

console.log(gamename[3]);   // accesed Key value pair
console.log(gamename.__proto__); //accessed a string method

//BELOW ARE ALL DIFFERENT  STRING METHODS
console.log(gamename.length); 
console.log(gamename.toLocaleUpperCase()); 
console.log(gamename.charAt(2)); 
console.log(gamename.indexOf('p')); 

const newstring=gamename.substring(0,4)
console.log(newstring);

const anotherstring=gamename.slice(4,-1)        //???????
console.log(anotherstring);


const newstring1="    Potter   "
console.log(newstring1);
console.log(newstring1.trim());



const url= "https://hitesh.com/hitesh%20kumar"

console.log(url.replace('%20', '-'));

console.log(url.includes('sundar'));

console.log(gamename.split('-'));


