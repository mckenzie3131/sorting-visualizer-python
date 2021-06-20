

export function getMergeSortLogic(array){
    const animations = [];

    const tempArray = array.slice()
    mergeSortHelper(array, 0, array.length-1, tempArray,animations)
    // console.log(array)
    return animations
}

function mergeSortHelper(mainArray, start, end,tempArray, animations){
    if (start < end){
        const mid = Math.floor((end+start)/2)
        mergeSortHelper(tempArray,start,mid, mainArray, animations)
        mergeSortHelper(tempArray,mid+1,end, mainArray, animations)
        merge(mainArray, start, mid, end, tempArray, animations)
    }
}

function merge(mainArray, start, mid, end, tempArray, animations){
    let i = start
    let j = mid+1
    let k = start

    while(i <= mid && j <= end){
        animations.push([i,j])
        animations.push([i,j])
        if (tempArray[i] <= tempArray[j]){
            animations.push([k,tempArray[i]])
            mainArray[k] = tempArray[i]
            k += 1
            i += 1
        }
        else {
            animations.push([k,tempArray[j]])
            mainArray[k] = tempArray[j]
            k += 1
            j += 1
        }
    }
    
    while(i <= mid){
        animations.push([i,i])
        animations.push([i,i])
        
        animations.push([k,tempArray[i]])
        mainArray[k] = tempArray[i]
        k += 1
        i += 1
    }
    
    while(j <= end){
        animations.push([j,j])
        animations.push([j,j])
        
        animations.push([k,tempArray[j]])
        mainArray[k] = tempArray[j]
        k += 1
        j += 1
    }

}