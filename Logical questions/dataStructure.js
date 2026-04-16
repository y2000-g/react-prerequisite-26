
let Array = [4,7,9,1,3,5,2,6,8]
    console.log("----Sorting is begin now---------")
    console.log("1. Bubble Sort")
    let count = 0
for(let indexOuter = 0; indexOuter<=Array.length-2; indexOuter++)
{
    
    for(let indexInner = 0; indexInner<=Array.length-(2+indexOuter); indexInner++)
    {
        count++
        if (Array[indexInner] > Array[indexInner+1])
        {
            let temp = Array[indexInner+1]
            Array[indexInner+1] = Array[indexInner]
            Array[indexInner] = temp 
        }     
    }
}
console.log(Array)
console.log("Number of Times Loop excuted", count)
console.log("A"== "a")
console.log("A" > "B")
console.log("A" < "a")

let Arrstring = ["a", "A", "B", "b", "c", "E", "c", "g","b", "d" ]
console.log("Arrstring lenght", Arrstring.length)

let count1 = 0
for(let indexArrstringOuter = 0; indexArrstringOuter<=Arrstring.length-2; indexArrstringOuter++)
{
    count1++
    // console.log("indexArrayOuter",indexArrstringOuter)
    for(let indexArrstringInner =0; indexArrstringInner<=Arrstring.length-2; indexArrstringInner++)
    {
        // console.log("arrayIndex", Arrstring[indexArrstringInner])
        // console.log("indexArrayInner",indexArrstringInner)
        if(Arrstring[indexArrstringInner] >= Arrstring[indexArrstringInner+1])
        {
            let temp = Arrstring[indexArrstringInner+1]
            // console.log("Temp", temp)
            Arrstring[indexArrstringInner+1] = Arrstring[indexArrstringInner]
            // console.log("arrIndex+1", Arrstring[indexArrstringInner+1])
            Arrstring[indexArrstringInner] = temp
        }
    }
}
console.log("time loop", count1)
console.log("Arrstring", Arrstring)

// let ArrayObject = [{firstname:"Kartik", lastname:"Gupta", age:"34"}]
let ArrayObject = [{schoolage:"16", collageage:"21", schoolage2:"17", retirementage:"65"}]
console.log(ArrayObject.length)
for(let indexArrayObjectOuter = 0; indexArrayObjectOuter<=ArrayObject.length-2; indexArrayObjectOuter++)
{
    for(let indexArrayObjectInner =0; indexArrayObjectInner<=ArrayObject.length-2; indexArrayObjectInner++)
    {
      
    }
}
console.log("ArrayObject", ArrayObject)