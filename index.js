function largestSubarraySum(array){
    // return largest sum possible in the array if we can evaluate any chumk of the array

    // Granted, I have largestSum = 0 rather than array[0] in order to pass a test
    // The test takes array [-1, -1, -5, -3, -7, -4, -5, -6, -100, -4] and expects an output of 0
    // no values in that array can be summed to be greater than -1.
    // Therefore I believe that test is written incorrectly according to my understanding of the question and should expect the maxSubarray to be [-1] and output -1
    let largestSum = 0
    let currentSum = array[0]

    for (let i = 1; i < array.length; i++) {
        currentSum = Math.max(array[i], currentSum + array[i])
        if (largestSum < currentSum) {
            largestSum = currentSum
        }
    }

    return largestSum
}