

export function getMergeSortLogic(array){
    const animations = [];
    // const copy_array = array.slice()
    mergeSortHelper(array, 0, array.length-1, animations)
    // console.log(array)
    return animations
}

function mergeSortHelper(mainArray, start, end, animations){
    if (start < end){
        const mid = Math.floor((end+start)/2)
        mergeSortHelper(mainArray,start,mid, animations)
        mergeSortHelper(mainArray,mid+1,end, animations)
        merge(mainArray, start, mid, end, animations)
    }
}

function merge(mainArray, start, mid, end, animations){
    let copy_array = new Array(end-start+1)
    let i = start
    let j = mid+1
    let k = 0

    while(i <= mid && j <= end){
        animations.push([i,j])
        animations.push([i,j])
        if (mainArray[i] <= mainArray[j]){
            animations.push([k,mainArray[i]])
            copy_array[k] = mainArray[i]
            k += 1
            i += 1
        }
        else {
            animations.push([k,mainArray[j]])
            copy_array[k] = mainArray[j]
            k += 1
            j += 1
        }
    }
    
    while(i <= mid){
        animations.push([i,i])
        animations.push([i,i])
        
        animations.push([k,mainArray[i]])
        copy_array[k] = mainArray[i]
        k += 1
        i += 1
    }
    
    while(j <= end){
        animations.push([j,j])
        animations.push([j,j])
        animations.push([k,mainArray[j]])
        copy_array[k] = mainArray[j]
        k += 1
        j += 1
    }

    // console.log(copy_array)
    for( let i = start; i < end+1; i++){
        mainArray[i] = copy_array[i-start]
    }

}