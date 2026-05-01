// Program - 1 
// str = ""
// for(let num = 1; num<=50; num++)
// {
//     if(num == 1)
//     {
//         str = str + num
//     }
//     else{
//         str = str + ", " + num
//     }
//     // console.log(num)
// }
// console.log(str)

// Program - 2
str2 = ""
for(let num = 1; num<=50; num++)
{
    if(num%3 == 0)
    {
        str2 = str2 + "Fizz"
    }
    if (num%5 == 0) {
        str2 = str2 + "Buzz"
    }
    if( num%3 != 0 && num%5 != 0)
    {
        str2 = str2 + " "+ num
    }
    str2 = str2 + " "
}
console.log(str2)

// Program - 3 ( Factorial)
let givenNum = 8
let result = 1
for( fac = 1; fac <= givenNum; fac++)
{
    // fac = fac * fac
    result = result * fac 
}
console.log(result)

// Program - 4 (Astric)
let ast = "*"
for(let sqr = 1; sqr <= 5; sqr++)
{
    for( let sqrInner = 1; sqrInner <= 5; sqrInner++)
    {
        ast = ast + "*"
    }
}
console.log(ast)
