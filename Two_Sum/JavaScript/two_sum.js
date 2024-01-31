/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Create a hash map to store the indices of numbers
    const numIndices = {};

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement needed to reach the target
        const complement = target - nums[i];

        // Check if the complement exists in the hash map
        if (complement in numIndices) {
            // Return the indices of the two numbers that add up to the target
            return [numIndices[complement], i];
        }

        // Store the current number's index in the hash map
        numIndices[nums[i]] = i;
    }

    // If no solution is found, return an empty array or handle it as needed
    return [];
};

// Define your main function
function main() {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = twoSum(nums, target);
    console.log(result); // Output: [0, 1]
}

// Check if the script is being run directly (not imported as a module)
if (require.main === module) {
    main();
}
