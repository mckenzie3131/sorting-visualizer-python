export function getBubbleSortLogic(array){
    const animations = [];
    bubbleSortHelper(array,animations)
    // console.log(array)
    return animations
}

function bubbleSortHelper(array,animations) {
    let sorted = false
    // console.log(array)
    while(!sorted){
        sorted = true
        for( let i = 1; i < array.length; i++){
            if (array[i-1] > array[i]){
                let temp = array[i];
                array[i] = array[i-1]
                array[i-1] = temp
                sorted = false;
            }
        }
    }
}

function swap(elementOne, elementTwo){
    var temp = elementOne;
    elementOne = elementTwo;
    elementTwo = temp;
}