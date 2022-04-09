import React from "react";

function Result() {
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }
  //20. Valid Parentheses
  // function isValid(s: string): boolean {
  //   const stack: string[] = [];
  //   const map: { [key: string]: string } = {
  //     "(": ")",
  //     "[": "]",
  //     "{": "}",
  //   };
  //   for (let char of s) {
  //     if (map[char]) {
  //       stack.push(map[char]);
  //       console.log('there is "'+ char+ '" then push "' + map[char] + '" to stack');
  //     } else {
  //       console.log("remove the last element of stack: " +stack[stack.length - 1]);
  //       if (stack.pop() !== char) {
  //         console.log("check last element: " + stack[stack.length - 1]);
  //         return false;
  //       }
  //     }
  //   }
  //   return !stack.length;
  // }
  // console.log(isValid("([])[{}(])]"));

  //21. Merge Two Sorted Lists
  // Definition for singly-linked list.
  // class ListNode {
  //   val: number;
  //   next: ListNode | null;
  //   constructor(val?: number, next?: ListNode | null) {
  //     this.val = val === undefined ? 0 : val;
  //     this.next = next === undefined ? null : next;
  //   }
  // }

  // function mergeTwoLists(
  //   list1: ListNode | null,
  //   list2: ListNode | null
  // ): ListNode | null {
  //   if (!list1) return list2;
  //   if (!list2) return list1;
  //   if (list1.val < list2.val) {
  //     list1.next = mergeTwoLists(list1.next, list2);
  //     return list1;
  //   } else {
  //     list2.next = mergeTwoLists(list1, list2.next);
  //     return list2;
  //   }
  // }

  // console.log();

  //392. Is Subsequence
  // function isSubsequence(s: string, t: string): boolean {
  //   let i = 0;
  //   let j = 0;
  //   while (i < s.length && j < t.length) {
  //     if (s[i] === t[j]) {
  //       console.log(s[i] + " === " + t[j] + " is true i++");
  //       i++;
  //     }
  //     console.log(s[i] + " !== " + t[j] + " is true j++");
  //     j++;
  //   }
  //   return i === s.length;
  // }
  // console.log(isSubsequence("abc", "ahbgdf"));

  // 26. Remove Duplicates from Sorted Array

  // function removeDuplicates(nums: number[]): number {
  //   if (nums.length === 0) return 0;
  //   let i = 0;
  //   for (let j = 1; j < nums.length; j++) {
  //     if (nums[i] !== nums[j]) {
  //       i++;
  //       nums[i] = nums[j];
  //     }
  //   }
  //   return i + 1;
  // };
  // console.log(removeDuplicates([1,1,2,2,3,3,4]));
  // way2
  // function removeDuplicates(nums: number[]): number {
  //   if (nums.length === 0) return 0;
  //   let slow = 0;
  //   let fast = 0;
  //   while (fast < nums.length) {
  //     if (nums[slow] !== nums[fast]) {
  //       slow++;
  //       nums[slow] = nums[fast];
  //     }
  //     fast++;
  //   }
  //   return slow + 1;
  // }

  //80. Remove Duplicates from Sorted Array II
  // answer is wrong will fix later
  // function removeDuplicates(nums: number[]): number {
  //   if (nums.length === 0) return 0;
  //   let slow = 0;
  //   let fast = 0;
  //   console.log("this is start slow: " + slow + " fast: " + fast);
  //   while (fast < nums.length) {
  //     if (nums[slow] !== nums[fast]) {
  //       slow+=2;
  //       console.log("this is slow+1: " + nums + " after fast not equal nums[slow]: " + nums[slow] + " nums[fast]: " + nums[fast]);
  //       nums[slow] = nums[fast];
  //       nums[slow+1] = nums[fast+1];
  //     }
  //     console.log("This is equal nums[slow]: " + nums[slow] + " nums[fast]: " + nums[fast]);
  //     fast++;
  //   }
  //   console.log("Last out: "+(slow + 1))
  //   return slow + 1;
  // }
  // console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));

  //27. Remove Element

  // function removeElement(nums: number[], val: number): number {
  //   let i = 0;
  //   for (let j = 0; j < nums.length; j++) {
  //     if (nums[j] !== val) {
  //       nums[i] = nums[j];
  //       i++;
  //     }
  //   }
  //   return i;
  // };

  //28. Implement strStr()
  // function strStr(haystack: string, needle: string): number {
  //   if (!needle) return 0;
  //   if (needle.length === 0) return 0;
  //   let i = 0;
  //   let j = 0;
  //   while (i < haystack.length && j < needle.length) {
  //     if (haystack[i] === needle[j]) {
  //       i++;
  //       j++;
  //     } else {
  //       i = i - j + 1;
  //       j = 0;
  //     }
  //   }
  //   if (j === needle.length) return i - j;
  //   return -1;
  // };
  // way 2

  // function strStr(haystack: string, needle: string): number {
  //   if (!needle) return 0;
  //   return haystack.indexOf(needle);
  // }
  // const myArr = [2, 3, 4, 5, 6];
  // let total = 0;
  // for(let i = 0; i < myArr.length; i++){
  //   total += myArr[i];
  // }
  // console.log(myArr);

  // function multiplyAll(arr: number[][]): number {
  //   let product = 1;
  //   // Only change code below this line
  //   arr.flat().map(num => product *= num);
  //   // Only change code above this line
  //   return product;
  // }

  // console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));

  // function sum(arr: number[], n: number): number {
  //   // Only change code below this line

  //   if (n <= 0) {
  //     return 0;
  //   } else {
  //     return sum(arr, n - 1) + arr[n - 1];
  //   }

  //   // Only change code above this line
  // }
  // console.log(sum([1, 2, 3, 4, 5], 3));

  // function randomWholeNum() {

  //   // Only change code below this line

  //   console.log(Math.floor(Math.random()*10)) ;
  // }
  // randomWholeNum();
  //We have defined a function called countdown with one parameter (n). The function should use recursion to return an array containing the integers n through 1 based on the n parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind.
  // function countdown(n: number): number[] {
  //   return n < 1 ? [] : [n, ...countdown(n - 1)];
  // }
  //413. Arithmetic Slices
  // function numberOfArithmeticSlices(nums: number[]): number {
  //   //Given an integer array nums, return the number of arithmetic subarrays of nums.
  //   let count = 0;
  //   const dp = new Array(nums.length).fill(0);
  //   for (let i = 2; i < nums.length; i++) {
  //     if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
  //       dp[i] = dp[i - 1] + 1;
  //       count += dp[i];
  //     }
  //   }
  //   return count;
  // }

  //2. Add Two Numbers
  /**
   * Definition for singly-linked list.
   * class ListNode {
   *     val: number
   *     next: ListNode | null
   *     constructor(val?: number, next?: ListNode | null) {
   *         this.val = (val===undefined ? 0 : val)
   *         this.next = (next===undefined ? null : next)
   *     }
   * }
   */

  // class ListNode {
  //   val: number;
  //   next: ListNode | null;
  //   constructor(val?: number, next?: ListNode | null) {
  //     this.val = val === undefined ? 0 : val;
  //     this.next = next === undefined ? null : next;
  //   }
  // }

  // function addTwoNumbers(
  //   l1: ListNode | null,
  //   l2: ListNode | null
  // ): ListNode | null {
  //   let result = new ListNode(0);
  //   let current = result;
  //   let carry = 0;
  //   while (l1 || l2 || carry) {
  //     let sum = carry;
  //     if (l1) {
  //       sum += l1.val;
  //       l1 = l1.next;
  //     }
  //     if (l2) {
  //       sum += l2.val;
  //       l2 = l2.next;
  //     }
  //     carry = Math.floor(sum / 10);
  //     current.next = new ListNode(sum % 10);
  //     current = current.next;
  //   }
  //   return result.next;
  // }
  //799. Champagne Tower
  // function champagneTower(
  //   poured: number,
  //   query_row: number,
  //   query_glass: number
  // ): number {
  // let arr = new Array(query_row + 1).fill(0);
  // arr[0] = poured;
  // for (let i = 0; i < query_row; i++) {
  //   for (let j = 0; j <= i; j++) {
  //     let q = Math.floor((arr[j] - 1) / 2);
  //     if (q > 0) {
  //       arr[j] = 1;
  //       arr[j + 1] += q;
  //     }
  //   }
  // }
  // return arr[query_glass] - 1;

  // let dp = new Array(query_row + 1).fill(0).map(() => new Array(query_row + 1).fill(0));
  // dp[0][0] = poured;
  // for (let i = 0; i < query_row; i++) {
  //   for (let j = 0; j <= i; j++) {
  //     let q = Math.floor((dp[i][j] - 1) / 2);
  //     if (q > 0) {
  //       dp[i + 1][j] += q;
  //       dp[i + 1][j + 1] += q;
  //     }
  //   }
  // }
  // return Math.min(1, dp[query_row][query_glass]);

  // let dp = new Array(query_row + 1)
  //   .fill(0)
  //   .map((_) => new Array(query_row + 1));

  // dp[0][0] = poured;
  // for (let r = 1; r <= query_row; r++) {
  //   dp[r][0] = Math.max(dp[r - 1][0] - 1, 0) / 2;
  //   dp[r][r] = Math.max(dp[r - 1][r - 1] - 1, 0) / 2;
  //   for (let j = 1; j < r; j++) {
  //     let left = Math.max(dp[r - 1][j - 1] - 1, 0) / 2;
  //     let right = Math.max(dp[r - 1][j] - 1, 0) / 2;
  //     dp[r][j] = left + right;
  //   }
  // }
  // return Math.min(dp[query_row][query_glass], 1);
  // }

  // 1359. Count All Valid Pickup and Delivery Options
  // function countOrders(n: number): number {
  //   let dp = new Array(n + 1).fill(0);
  //   dp[0] = 1;
  //   for (let i = 1; i <= n; i++) {
  //     for (let j = 1; j <= i; j++) {
  //       dp[i] += dp[j - 1] * dp[i - j];
  //     }
  //   }
  //   return dp[n];
  // };

  /**
   * Definition for singly-linked list.
   * class ListNode {
   *     val: number
   *     next: ListNode | null
   *     constructor(val?: number, next?: ListNode | null) {
   *         this.val = (val===undefined ? 0 : val)
   *         this.next = (next===undefined ? null : next)
   *     }
   * }
   */

  // function mergeTwoLists(
  //   list1: ListNode | null,
  //   list2: ListNode | null
  // ): ListNode | null {
  //   if (!list1) return list2;
  //   if (!list2) return list1;
  //   if (list1.val < list2.val) {
  //     list1.next = mergeTwoLists(list1.next, list2);
  //     return list1;
  //   } else {
  //     list2.next = mergeTwoLists(list1, list2.next);
  //     return list2;
  //   }
  // }

  // //141. Linked List Cycle
  // function hasCycle(head: ListNode | null): boolean {
  //   let slow = head;
  //   let fast = head;
  //   while (fast && fast.next) {
  //     slow = slow!.next;
  //     fast = fast.next!.next;
  //     if (slow === fast) return true;
  //   }
  //   return false;
  // };

  // 82. Remove Duplicates from Sorted List II
  //Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

  // function deleteDuplicates(head: ListNode | null): ListNode | null {
  //   if (!head) return head;
  //   let current = head;
  //   while (current.next) {
  //     if (current.val === current.next.val) {
  //       current.next = current.next.next;
  //     } else {
  //       current = current.next;
  //     }
  //   }
  //   return head;
  // };

  //1991. Find the Middle Index in Array
  // function findMiddleIndex(nums: number[]): number {
  //   let leftSum = 0;
  //   let rightSum = nums.reduce((prev, curr) => prev + curr, 0) - nums[0];
  //   for (let i = 0; i < nums.length; i++) {
  //     if (leftSum === rightSum) return i;
  //     leftSum += nums[i];
  //     rightSum -= nums[i + 1] || 0;
  //   }
  //   return -1;
  // }

  //   function reversePrint(head: ListNode | null): number[] {
  //     let arr = [];
  //     while (head) {
  //       arr.push(head.val);
  //       head = head.next;
  //     }
  //     return arr.reverse();
  // };

  // function findRepeatNumber(nums: number[]): number {
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       if (nums[i] === nums[j]) return nums[i];
  //     }
  //   }
  // };
  // function findRepeatNumber(nums: number[]): number {
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       if (nums[i] === nums[j]) return nums[i];
  //     }
  //   }
  // };
  //125. Valid Palindrome
  // function validPalindrome(s: string): boolean {
  //   const replacedString = s.replace(/[^a-z0-9]/ig, "").toLowerCase()
  //   let left = 0;
  //   let right = replacedString.length - 1;
  //   while (left < right) {
  //     if (replacedString[left] !== replacedString[right]) {
  //       return false;
  //     }
  //     left++;
  //     right--;
  //   }
  //   return true;
  // };
  //240. Search a 2D Matrix II
  // function searchMatrix(matrix: number[][], target: number): boolean {
  //   if (!matrix.length) return false;
  //   let row = matrix.length - 1;
  //   let col = 0;
  //   while (row >= 0 && col < matrix[0].length) {
  //     if (matrix[row][col] === target) return true;
  //     if (matrix[row][col] > target) row--;
  //     else col++;
  //   }
  //   return false;
  // };

  // function searchMatrix(matrix: number[][], target: number): boolean {
  //   return matrix.flat().includes(target)
  // };
  // using API
//   function searchMatrix(matrix: number[][], target: number): boolean {
//     if (!matrix.length) return false;
//     let col = 0;
//     while (col < matrix.length) {
//         if (matrix[col].includes(target)) {
//             return true
//         }
//         col++
//     }
//     return false;
// };
// binary search
// function searchMatrix(matrix: number[][], target: number): boolean {
//   for (const line of matrix) {
//     let left = 0;
//     let right = line.length - 1;
//     let middle;

//     while (left <= right) {
//       middle = Math.floor((left + right) / 2);

//       if (line[middle] === target) {
//         return true;
//       }

//       if (line[middle] < target) {
//         left = middle + 1;
//       } else {
//         right = middle - 1;
//       }
//     }
//   }
//     return false;
// };

   
  //31. Next Permutation

  /**
 Do not return anything, modify nums in-place instead.
 */
  // function nextPermutation(nums: number[]): void {
  //   let i = nums.length - 2;
  //   function swap(nums: number[], i: number, j: number): void {
  //     const tmp = nums[j];
  //     nums[j] = nums[i];
  //     nums[i] = tmp;
  //   }
  //   while (i >= 0 && nums[i] >= nums[i + 1]) i--;
  //   if (i == -1) {
  //     nums.reverse();
  //     return;
  //   }
  //   let j = nums.length - 1;
  //   while (nums[j] <= nums[i]) j--;
  //   swap(nums, i, j);
  //   j = nums.length - 1;
  //   while (i + 1 < j) {
  //     swap(nums, i + 1, j);
  //     i++;
  //     j--;
  //   }
  // }

  /**
 Do not return anything, modify nums in-place instead.
 */
  // function nextPermutation(nums: number[]): void {
  //   let i = nums.length - 2;                   // 向左遍历，i从倒数第二开始是为了nums[i+1]要存在
  //   while (i >= 0 && nums[i] >= nums[i + 1]) { // 寻找第一个小于右邻居的数
  //       i--;
  //   }
  //   if (i >= 0) {                             // 这个数在数组中存在，从它身后挑一个数，和它换
  //       let j = nums.length - 1;                // 从最后一项，向左遍历
  //       while (j >= 0 && nums[j] <= nums[i]) {  // 寻找第一个大于 nums[i] 的数
  //           j--;
  //       }
  //       [nums[i], nums[j]] = [nums[j], nums[i]]; // 两数交换，实现变大
  //   }
  //   // 如果 i = -1，说明是递减排列，如 3 2 1，没有下一排列，直接翻转为最小排列：1 2 3
  //   let l = i + 1;
  //   let r = nums.length - 1;
  //   while (l < r) {                            // i 右边的数进行翻转，使得变大的幅度小一些
  //       [nums[l], nums[r]] = [nums[r], nums[l]];
  //       l++;
  //       r--;
  //   }
  // };

  //744. Find Smallest Letter Greater Than Target
  // function nextGreatestLetter(letters: string[], target: string): string {
  //   const length = letters.length;
  //   let nextGreater = letters[0];
  //   for (let i = 0; i < length; i++) {
  //       if (letters[i] > target) {
  //           nextGreater = letters[i];
  //           break;
  //       }
  //   }
  //   return nextGreater;
  // };

  // function nextGreatestLetter(letters: string[], target: string): string {
  //   const length = letters.length;
  //   if (target >= letters[length - 1]) {
  //     return letters[0];
  //   }
  //   let low = 0,
  //     high = length - 1;
  //   while (low < high) {
  //     const mid = Math.floor((high - low) / 2) + low;
  //     if (letters[mid] > target) {
  //       high = mid;
  //     } else {
  //       low = mid + 1;
  //     }
  //   }
  //   return letters[low];
  // }

  //7. Reverse Integer
  // function reverse(x: number): number {
  //   let result = 0;
  //   while(x) {
  //       result = result * 10 + x % 10;
  //       if(result > 2147483647 || result < -2147483648)
  //           return 0;
  //       x = Math.trunc(x / 10);
  //       x = ~~(x / 10); //delete the part after decimal point
  //   }
  //   return result;
  // };

  //35. Search Insert Position
  // there are four cases:
  // 1. target is before the first element
  // 2. target is after the last element
  // 3. target is in the middle
  // 4. target is equal to some element
  // Simple solution:
  // function searchInsert(nums: number[], target: number): number {
  //   //target is before/ equal/ in/ the first element
  //   for(let i = 0; i < nums.length; i++) {
  //     if(nums[i] >= target) {
  //       return i;
  //     }
  //   }
  //   //target is after the last element
  //   return nums.length;
  // };

  // Binary Search:

  //Implementing a queue with two stacks
  //Implement a queue with two stacks. The declaration of the queue is as follows. Please implement its two functions appendtail and deletehead to insert integers at the end of the queue and delete integers at the head of the queue respectively. (if there is no element in the queue, the deletehead} operation returns - 1)
  // class CQueue {
  //   // define two stacks
  //   private stackIn: any[];
  //   private stackOut: any[];

  //   constructor() {
  //     this.stackIn = [];
  //     this.stackOut = [];
  //   }

  //   appendTail(value: number): void {
  //     //this is add to the end of the queue
  //     this.stackIn.push(value);
  //   }

  //   deleteHead(): number {
  //     //check if the stackOut is empty
  //     //then check stackIn if is empty will jump off if loop return -1
  //     // if stackIn is not empty will pop it to stackOut then jump off return
  //     if (this.stackOut.length === 0) {
  //       //pop all the elements from end of stackIn to first of stackIn to stackOut
  //       //then is reverse the stackIn to stackOut
  //       //that we can pop the first element of stackIn or the last element of stackOut
  //       while (this.stackIn.length > 0) {
  //         this.stackOut.push(this.stackIn.pop());
  //       }
  //     }
  //     //check if the stackOut is empty and stackIn is empty will return -1
  //     // if stackOut is not empty will pop it to stackOut then jump off return
  //     // that means we did not reverse the stackIn to stackOut
  //     return this.stackOut.length === 0 ? -1 : this.stackOut.pop();
  //   }
  // }
  // 155. Min Stack
  // class MinStack {
  //   dataStack: Array<number>;
  //   minStack: number;
  //   constructor() {
  //     this.dataStack = [];
  //     this.minStack = Infinity;
  //   }

  //   push(val: number): void {
  //     this.dataStack.push(val);
  //     if (val < this.minStack) {
  //       this.minStack = val;
  //     }
  //   }

  //   pop(): void {
  //     this.dataStack.pop();
  //     this.minStack = Math.min(...this.dataStack);
  //   }

  //   top(): number {
  //     return this.dataStack[this.dataStack.length - 1];
  //   }

  //   getMin(): number {
  //     return this.minStack;
  //   }
  // }

  // function reverseList(head: ListNode | null): ListNode | null {
  //   let prev: ListNode | null = null;
  //   let curr: ListNode | null = head;
  //   while (curr) {
  //     const next = curr.next;
  //     curr.next = prev;
  //     prev = curr;
  //     curr = next;
  //   }
  //   return prev;
  // };

  // replace blank

  // function replaceSpace(s: string): string {
  //   return s.split(' ').join('%20')
  //   };

  //reverseLeftWords
  // function reverseLeftWords(s: string, n: number): string {
  //   return s.slice(n) + s.slice(0, n);
  // };

  //reverseString
  // using
  // var reverseString = function(s:[]) {
  //   return s.reverse()
  // };

  // using two pointers
  // function reverseString(s: string[]): void {
  //   if(s.length === 0) {
  //     return;
  //   }
  //   let left = 0;
  //   let right = s.length - 1;
  //   while(left < right) {
  //     const temp = s[left];
  //     s[left] = s[right];
  //     s[right] = temp;
  //     left++;
  //     right--;
  //   }
  // }

  // day 4 search
  // find repeated number
  // 输入：
  // [2, 3, 1, 0, 2, 5, 3]
  // 输出：2 或 3
  //function findRepeatNumber(nums: number[]): number {
  //   nums.sort();
  //   for ( let i = 0; i < nums.length; i ++){
  //       if (nums[i] == nums[i+1]){
  //           return nums[i]
  //       }
  //   }
  // };

  // 53 find the number in ordered array
  // function search(nums: number[], target: number): number {
  //   let count = 0;
  //   for ( let i = 0; i< nums.length ; i++){
  //       if (nums[i]==target){
  //           count++;
  //       }
  //   }
  //   return count
  // };

  // 53 find the missing number in 0~n-1

  // function missingNumber(nums: number[]): number {
  //   if (nums[0] !== 0) return 0;
  //   for (let i = 0; i < nums.length; i++) {
  //       if (nums[i + 1] - nums[i] !== 1) {
  //           return nums.length = 0 ? 1 : i + 1
  //       }
  //   }
  // };

  // 1. Two Sum
  // function twoSum(nums: number[], target: number): number[] {
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       if (nums[i] + nums[j] === target) {
  //         return [i, j];
  //       }
  //     }
  //   }
  // }
  // function twoSum(nums: number[], target: number): number[] {
  //   const map = new Map();
  //   for (let i = 0; i < nums.length; i++) {
  //     if (map.has(target - nums[i])) {
  //       return [map.get(target - nums[i]), i];
  //     }
  //     map.set(nums[i], i);
  //   }
  // }

  // search in binary array


  return (
    <>
      <iframe
        width="879"
        height="500"
        src="//player.bilibili.com/player.html?aid=926582470&bvid=BV1DT4y1j7H6&cid=217176398&page=1"
        scrolling="no"
        // border="0"
        frameBorder="0"
        // frameSpacing="0"
        allowFullScreen
      >
        {" "}
      </iframe>
      <iframe
        width="879"
        height="500"
        src="https://www.youtube.com/embed/CTnSrpUo3wQ"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
}

export default Result;
