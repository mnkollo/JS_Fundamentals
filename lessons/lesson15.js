// function compressFirstBox(boxes){
//     console.log(boxes[0])
// }
// // 0(1) - Constant Time

const boxes = [0,1,2,3,4,5]
function logFirstTwoBoxes(boxes){
    console.log(boxes[0])    // O(1)
    console.log(boxes[1])    // O(1)
}

logFirstTwoBoxes(boxes)   // O(2)


// What is the Bog O of the below function? (Hint, you may want to go line by line)
function funChallenge(input){
    let a = 10;  //0(1)
    a = 50 + 3;   //0(1)

    for(let i = 0; i< input.length; i++){    //O(n)    --> Linear Time
        anotherFunction();     //O(n)
        let stranger = true;   //O(n)
        a++;      //O(n)
    }
    return a;       //O(1)
}

//BIG O(3 + 4n)

funChallenge()