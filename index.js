function largestSubarraySum(array){
    // return largest sum possible in the array if we can evaluate any chumk of the array

    let largestSum = array[0]
    let currentSum = array[0]

    for (let i = 1; i < array.length; i++) {
        currentSum = Math.max(array[i], currentSum + array[i])
        if (largestSum < currentSum) {
            largestSum = currentSum
        }
    }

    return largestSum
}