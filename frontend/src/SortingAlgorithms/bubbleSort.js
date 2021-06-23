export function getBubbleSortLogic(array){
    const animations = [];
    bubbleSortHelper(array,animations)
    // console.log(array)
    return animations
}

function bubbleSortHelper(array,animations) {
    let sorted = false
    let round = 0
    // console.log(array)
    while(!sorted){
        sorted = true
        for( let i = 1; i < array.length-round; i++){
            let valueOne = array[i]
            let valueTwo = array[i-1]
            animations.push([i-1,i])
            animations.push([i-1,i])
            if (array[i-1] > array[i]){
                animations.push([i,valueTwo])
                animations.push([i-1,valueOne])
                let temp = array[i];
                array[i] = array[i-1]
                array[i-1] = temp
                sorted = false;
            }else{
                animations.push([i-1,valueTwo])
                animations.push([i,valueOne])
            }

        }
        round++;
    }
}

function swap(elementOne, elementTwo){
    var temp = elementOne;
    elementOne = elementTwo;
    elementTwo = temp;
}