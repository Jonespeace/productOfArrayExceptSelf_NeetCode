function productExceptSelf(nums) {
    // Get the length of the input array
    const n = nums.length;

    // Initialize two arrays to store the product of elements to the left and right of each index
    const leftProducts = new Array(n).fill(1);
    const rightProducts = new Array(n).fill(1);

    // Calculate the product of elements to the left of each index
    let leftProduct = 1;
    for (let i = 1; i < n; i++) {
        leftProduct *= nums[i - 1];
        leftProducts[i] = leftProduct;
    }

    // Calculate the product of elements to the right of each index
    let rightProduct = 1;
    for (let i = n - 2; i >= 0; i--) {
        rightProduct *= nums[i + 1];
        rightProducts[i] = rightProduct;
    }

    // Calculate the final result by multiplying left and right products for each index
    const result = [];
    for (let i = 0; i < n; i++) {
        result[i] = leftProducts[i] * rightProducts[i];
    }

    return result;
}

// Example usage:
const inputArray = [1, 2, 3, 4];
const resultArray = productExceptSelf(inputArray);
console.log(resultArray);
