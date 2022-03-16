// Given an integer array nums sorted in non - decreasing order, remove the duplicates in -place such that each unique element appears only once.The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result.It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array.You must do this by modifying the input array in -place with O(1) extra memory.

// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

// Constraints:
// 1 <= nums.length <= 3 * 10^4
// - 100 <= nums[i] <= 100
// nums is sorted in non - decreasing order.
/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//     // run this function only if nums.length is between 1 and 300000 and nums[i] is between -100 and 100, else return empty array
//     if((1 <= nums.length && nums.length <= 300000) && (-100 <= nums[0] && nums[nums.length-1] <= 100)){
//         // traverse through nums array 
//         for (let i = 0; i < nums.length ; i++) {
//             // console.log("37", nums[i])
//                 // traverse through nums array starting at i+1
//                 for (let j = i+1; j < nums.length; j++) {
//                     // if nums[i] === nums[j] or nums[j+1] then use splice to remove nums[i]
//                     if (nums[i] === nums[j] || nums[i] === nums[j+1]) {
//                         // console.log(nums[i], nums[j])
//                         // console.log("42", nums)
//                         nums.splice(j, 1)
//                         // console.log("45", nums)
//                         continue
//                         // break
//                     } // else if nums[i] is less than nums[j] and nums[i] is equal nums[j-1], use splice to remove nums[i]
//                     else if (nums[i] < nums[j] && nums[j-1] === nums[i]){
//                         // console.log("51",nums)
//                         nums.splice(i, 1)
//                         break
//                     } else if (nums[i] < nums [j]){
//                         continue
//                     }
//                 }
//             }
//             return nums
//         } 
// };

var removeDuplicates = function (nums) {
    // run this function only if nums.length is between 1 and 300000, else return empty array
    if ((1 <= nums.length && nums.length <= 300000) && (-100 <= nums[0] && nums[nums.length - 1] <= 100)) {
        // traverse through nums array 
        for (let i = 0; i < nums.length; i++) {
            // if nums[i] === nums[j] or nums[j+1] then use splice to remove nums[i]
            // console.log("40", nums[j]) || nums[i+1] === nums[i]
            if (nums[i] === nums[i + 1]) {
                // console.log(nums[i],nums[i+1])
                // console.log("69",nums)
                nums.splice(i, 1)
                i--
                // console.log("76",nums)
                continue
                // else if nums[i] is less than nums[j] and nums[i] is equal nums[j-1], use splice to remove nums[i]
            } else if (nums[i] < nums[i + 1] && nums[i - 1] === nums[i]) {
                // console.log(nums[i],nums[i+1])
                // console.log("74",nums)
                nums.splice(i, 1)
                console.log("83",nums)
                i--
                continue
            } else if (nums[i] < nums[i + 1]) {
                // console.log("86",nums)
                continue
            }
        }
    }
    return nums.length
};


// Example 1:
Input: nums1 = [1, 1, 2]
console.log(removeDuplicates(nums1));

// Output: 2, nums = [1, 2, _]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k(hence they are underscores).

// Example 2:
Input: nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(removeDuplicates(nums2));
// Output: 5, nums = [0, 1, 2, 3, 4, _, _, _, _, _]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k(hence they are underscores).

nums3 = []
// console.log(removeDuplicates(nums3))

nums4 = [1, 1, 1]
console.log(removeDuplicates(nums4))

nums5 = [-1, 1, 2, 2]
console.log(removeDuplicates(nums5))