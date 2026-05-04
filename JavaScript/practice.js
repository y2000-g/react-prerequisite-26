// Data type - Number
// All JavaScript numbers are stored as decimal numbers (floating point)
// Numbers can be written with, or without decimals:

let x1 = 45.00;
let x2 = 34; 

console.log("x1", x1)
console.log("x2", x2)
console.log(typeof x1)
console.log(typeof(x2))

// Data type - A string (a text string) is a series of characters
let para1 = "This is 'Cat'"
let para2 = 'and this is "Dog"'
let para3 = " - Both are Domestic animals"

console.log("Answer:", para1 + para2 + para3 )
console.log(typeof(para1))

// BigInt
let num = 1234567890123456789012345n;
let numw2 = BigInt(1234567890123456789012345)
console.log("num", num)
console.log(typeof(num))
console.log("num", numw2)
console.log(typeof(numw2))


// Boolean
let x = true;
let y = false;
x == 8
console.log("boolean x", x == 9)
console.log(typeof(x))

// Object
const person = {firstName:"John", lastName:"Doe"};
console.log("Object", person)
console.log(typeof(person))

// Undefined
let h = " ";
let i;

// Null
let c = null;
let d = null;

// Symbol
// const k = new Symbol();
// const l = Symbol();
// console.log("symbol", k)

// Scope 
var num1 = 10
let num2 = 20
{
    console.log(num1)
    console.log(num2)
    var num3 = 30
    let num4 = 40
    console.log(num3)
    console.log(num4)
    {
        console.log(num2)
        console.log(num3)
        console.log(num4)
    }
}
console.log(num1)
console.log(num2)
console.log(num3)
// console.log(num4)

let hexaVar = 0x123
let octalVar = 0o1234
let binaryVar = 0b010100

console.log(hexaVar)
console.log(octalVar)
console.log(binaryVar)

let exp = 9000
let expNum = 9e3
let exp1 = 0.00123
let exp1Num = 123e-5
let a = 1/0
console.log(a)
console.log(expNum)
console.log(exp1Num)
console.log(typeof a)
let b = -Infinity
console.log(b)
console.log(typeof b)

let strSingleQuote = 'Yashita "Gole"'
console.log(strSingleQuote)
let string = "abc\\123"
console.log(string)
let string2 = "Front-end \"class\""
console.log(string2)
let test = "100"*"10"
console.log("Test", test)

// Boolean
let state = 5
console.log("Result:", state == 8)
console.log("Result:", state != 8)

// Number Methods
let numMethod = 10000
num.toString();
console.log("numbertoString", numMethod)
console.log(typeof numMethod)

numMethod.toPrecision(3);
console.log("numbertoPrecision", numMethod)

let numVar = 123.456
console.log(numVar.toPrecision(2))
console.log(numVar.toPrecision(4))
console.log(numVar.toPrecision(6))
console.log(numVar.toPrecision(8))

let str3 = "Hello"
str3.concat(" ", "World", " ") 

let bigInt1 = 123456789000234000045677n
let bigInt2 = 1n 
console.log(typeof bigInt1)
console.log(typeof bigInt2)

// let bigInt3 = 1000n/0n 

// String Interpolation
let myName = "Yashita"
console.log("Hey My name is "+myName)
console.log(`Hey My name is ${myName}`)

console.time()
console.log("Test console ")
console.timeEnd()
// myfunction()
// str3.myfuntion()