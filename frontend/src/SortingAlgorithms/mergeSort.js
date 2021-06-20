

export function getMergeSortLogic(array){
    const ans = [];
    // const copy_array = array.slice()
    mergeSortHelper(array, 0, array.length-1)
    // console.log(array)
    return ans
}

function mergeSortHelper(mainArray, start, end){
    if (start < end){
        const mid = Math.floor((end+start)/2)
        mergeSortHelper(mainArray,start,mid)
        mergeSortHelper(mainArray,mid+1,end)
        merge(mainArray, start, mid, end)
    }
}

function merge(mainArray, start, mid, end){
    let copy_array = new Array(end-start+1)
    let i = start
    let j = mid+1
    let k = 0

    while(i <= mid && j <= end){
        if (mainArray[i] <= mainArray[j]){
            copy_array[k] = mainArray[i]
            k += 1
            i += 1
        }
        else {
            copy_array[k] = mainArray[j]
            k += 1
            j += 1
        }
    }

    while(i <= mid){
        copy_array[k] = mainArray[i]
        k += 1
        i += 1
    }

    while(j <= end){
        copy_array[k] = mainArray[j]
        k += 1
        j += 1
    }

    // console.log(copy_array)
    for( let i = start; i < end+1; i++){
        mainArray[i] = copy_array[i-start]
    }

}