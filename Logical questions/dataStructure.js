
console.log("----Sorting is begin now---------")

let bubblearrayNum = bubblesortArray([4,7,9,1,0,5,2,6,8])
    // Bubble sort 
    console.log("-----Bubble Sort------")


function bubblesortArray(array)
    {
        let count = 0
        for(let indexOuter = 0; indexOuter <= array.length-2; indexOuter++)
            {
                count++    
                for(let indexInner = 0; indexInner <= array.length-(2+indexOuter); indexInner++)
                    {
                        if (array[indexInner] > array[indexInner+1])
                            {
                                let temp = array[indexInner+1]
                                array[indexInner+1] = array[indexInner]
                                array[indexInner] = temp 
                            }     
                    }
            }
            
            return array
    }
    console.log("BubbleSort output:", bubblearrayNum)
    // console.log("Number of Times Loop excuted", count)
    console.log("A"== "a")
    console.log("A" > "B")
    console.log("A" < "a")

let bubblearrString = bubblearrStringFun(["a", "A", "B", "b", "c", "E", "c", "g","b", "d" ])
    // console.log("arrstring lenght", arrstring.length)
    console.log("-----Bubble Sort for string------")
function bubblearrStringFun(array)
    {
        let count1 = 0
        for(let indexOuter = 0; indexOuter <= array.length-2; indexOuter++)
        {
            count1++
            for(let indexInner = 0; indexInner <= array.length-2; indexInner++)
            {
                if(array[indexInner] >= array[indexInner+1])
                {
                    let temp = array[indexInner+1]
                    array[indexInner+1] = array[indexInner]
                    array[indexInner] = temp
                }
            }
        }
        return array
    }

    // console.log("time loop", count1)
    console.log("arrstring", bubblearrString)

let bubblearrayObject = [ 
    { name: "Ravi" },
    { name: "Ankit" },
    { name: "Suman" },
    { name: "Ankur" },
    { name: "Samir" }]
    
    console.log("-----Bubble Sort for Object------")
    // console.log("ABC" < "AAA")
    // console.log("ABC" > "AAA")
    // console.log("ABC" == "AAA")
    // console.log(ArrayObject.length)
    console.log(bubblearrayObject)
var bubblesortedArray = bubblearrayObjectFun(bubblearrayObject)
function bubblearrayObjectFun(array)
 {
     for(let indexOuter = 0; indexOuter<=array.length-2; indexOuter++)
        {
            for(let indexInner = 0; indexInner<=array.length-(2+indexOuter); indexInner++)
            {
                // console.log("--------------------------------")
                // console.log("indexInner: ", indexInner)
                // console.log("array[indexInner].name: ", array[indexInner].name)
                // console.log("array[indexInner+1].name: ", array[indexInner+1].name)
                // console.log("Checking in if: ", array[indexInner].name > array[indexInner+1].name)
                if (array[indexInner].name > array[indexInner+1].name)
                {
                    let temp = array[indexInner+1].name
                    array[indexInner+1].name = array[indexInner].name
                    array[indexInner].name = temp 
                }     
            }
        }

        return array
 }
 console.log(bubblesortedArray)

    bubblesortedArray = bubblesortNumArray([4,7,9,1,3,5,2,6,8])
    console.log("-----Bubble Sort for number(different array)------")
    console.log([4,7,9,1,3,5,2,6,8])
function bubblesortNumArray(array)

    {
        for(let indexOuter = 0; indexOuter <= array.length-2; indexOuter++)
            {    
                for(let indexInner = 0; indexInner <= array.length-(2+indexOuter); indexInner++)
                    {
                        if (array[indexInner] > array[indexInner+1])
                            {
                                let temp = array[indexInner+1]
                                array[indexInner+1] = array[indexInner]
                                array[indexInner] = temp 
                            }     
                    }
            }
            
            return array
    }
    console.log(bubblesortedArray)

// Selection sort
    // Find the smallest element in the list
    // Swap it with the first position
    // Then find the next smallest from the list and swap it with the second position
    // Continue swapping until the list is sorted

    console.log("----------Selection Sort for Number-----------")
    console.log([4,7,9,1,3,5,2,6,8])
let selectionarrayNum = selectionarrayNumFun([4,7,9,1,3,5,2,6,8]) 

    function selectionarrayNumFun(selectionarrayNum)
    {
        // console.log("selection array",selectionarrayNum)
        for(sortIndex = 0; sortIndex < selectionarrayNum.length; sortIndex++)
        {
            let tempIndex = sortIndex
                // console.log("sortIndex: ", sortIndex)
                // console.log("tempIndex: ", tempIndex)
            for(indexInner = sortIndex+1; indexInner < selectionarrayNum.length; indexInner++)
                {
                    if(selectionarrayNum[tempIndex] > selectionarrayNum[indexInner])
                    {
                        tempIndex = indexInner
                    }
                }
                // console.log("Found smallest Index:", tempIndex)
                // console.log("sortIndex: ", sortIndex)
            if(tempIndex != sortIndex)
                {
                    let temp1 = selectionarrayNum[tempIndex]
                        selectionarrayNum[tempIndex] = selectionarrayNum[sortIndex]
                        selectionarrayNum[sortIndex] = temp1
                        // console.log("Swapped "+selectionarrayNum[tempIndex]+" & "+selectionarrayNum[sortIndex])   
                }
        }
        return selectionarrayNum
    }
    console.log(selectionarrayNum)
    
    console.log("----------Selection Sort for String-----------")
    console.log(["a", "A", "c", "B", "C", "A", "d", "H", "I", "k"])
let selectionarrayString = selectionarrayStringFun(["a", "A", "c", "B", "C", "A", "d", "H", "I", "k"])
    
    function selectionarrayStringFun(selectionarrayString)
    {
        for(sortIndex = 0; sortIndex < selectionarrayString.length; sortIndex++)
        {
            let tempIndex = sortIndex
            for(indexInner = sortIndex+1; indexInner < selectionarrayString.length; indexInner++)
                {
                    if(selectionarrayString[tempIndex] > selectionarrayString[indexInner])
                    {
                        tempIndex = indexInner
                    }
                    // console.log("Found smallest Index:", tempIndex)
                }
            if(tempIndex != sortIndex)
                {
                    let temp1 = selectionarrayString[tempIndex]
                        selectionarrayString[tempIndex] = selectionarrayString[sortIndex]
                        selectionarrayString[sortIndex] = temp1
                        // console.log("Swapped "+selectionarrayString[tempIndex]+" & "+selectionarrayString[sortIndex])   
                }
        }
        return selectionarrayString
    }
    console.log(selectionarrayString)
    

let selectionarrayObjectName = [
    {name: "Anita"},
    {name: "Yashita"},
    {name: "Shivam"},
    {name: "Riya"},
    {name: "Ranu"}]

    console.log("----------Selection Sort for Object-----------")
    console.log(selectionarrayObjectName)
let selectionarrayObj = selectionarrayObjFun(selectionarrayObjectName)
    
    function selectionarrayObjFun(selectionarrayObj)
    {
        for(sortIndex = 0; sortIndex < selectionarrayObj.length; sortIndex++)
        {
            let tempIndex = sortIndex
            for(indexInner = sortIndex+1; indexInner < selectionarrayObj.length; indexInner++)
                {
                    // console.log("Temp index", tempIndex)
                    // console.log("Indexinner", indexInner)
                    // console.log("Index value....", selectionarrayObj[indexInner])
                    // console.log("Temp value......", selectionarrayObj[tempIndex])
                    if(selectionarrayObj[tempIndex].name > selectionarrayObj[indexInner].name)
                    {
                        tempIndex = indexInner
                        // console.log("Temp index", tempIndex)
                    }
                    // console.log("Found smallest Index:", tempIndex)
                }
            if(tempIndex != sortIndex)
                {
                    let temp1 = selectionarrayObj[tempIndex]
                        selectionarrayObj[tempIndex] = selectionarrayObj[sortIndex]
                        selectionarrayObj[sortIndex] = temp1
                        // console.log("Swapped "+selectionarrayObj[tempIndex]+" & "+selectionarrayObj[sortIndex])  
                }
        }
        return selectionarrayObj
    }
    console.log(selectionarrayObj)

// Insertion sort
// Algorithm
// Assume the first element is already sorted 
// Pick the next element  
// Compare if left>right, then insert it in the first position
// Repeat this until the list is sorted

let insertionArrayNum = insertionArrayNumFun([4,2,7,3,1,6,8,9,5])
console.log(insertionArrayNum)

let sArray = array[0]
let sarrayIndex = 1
function insertionArrayNumFun(array)
{
    for(let outerIndex = 1; outerIndex <= array.length - 1; outerIndex++)
    {
        // while((array[outerIndex] < sArray[sArray.length - sarrayIndex]) && (sArray.length - (sarrayIndex+1)>= 0 ))
        // {}
        //  sarrayIndex++

        // if(array[outerIndex] < sArray[sArray.length - sarrayIndex])
        // {
        //     if(sArray.length - (sarrayIndex + 1) >= 0 )
        //     {
        //         sarrayIndex++
        //     }
        // }
    }
}


