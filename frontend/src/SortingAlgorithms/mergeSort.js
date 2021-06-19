

function getMergeSortLogic(array){
    const ans = [];
    copy_array = array.slice()
    mergeSortHelper(array, 0, array.length-1)
    console.log(array)
    return ans
}

function mergeSortHelper(mainArray, start, end){
    if (start < end){
        mid = Math.floor((end+start)/2)
        console.log(mid)
        mergeSortHelper(mainArray,start,mid)
        mergeSortHelper(mainArray,mid+1,end)
        merge(mainArray, start, mid, end)
    }
}

function merge(mainArray, start, mid, end){
    copy_array = new Array(end-start+1)
    // console.log(mainArray)
    i = start
    j = mid+1
    k = 0

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

getMergeSortLogic([14,7,3,12,9,11,6,2])