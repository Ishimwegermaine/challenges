function hasContiguousSubarray(arr, target) {
    let sum = 0;
    let map = new Map();
    map.set(0, -1);  // To handle the case when subarray starts from index 0
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        
        if (map.has(sum - target)) {
            return true;
        }
        
        map.set(sum, i);
    }
    
    return false;
}

// Example usage:
console.log(hasContiguousSubarray([4, 2, 7, 1, 9, 5], 17)); // true
