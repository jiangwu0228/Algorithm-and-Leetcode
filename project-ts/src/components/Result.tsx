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
  class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
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
  //   let i:number = 0;
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
  // Brute Force
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

  // function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  //   const combine = nums1.concat(nums2).sort((a, b) => a - b);
  //   console.log(combine);
  //   if (combine.length % 2 === 0) {
  //     return (combine[combine.length / 2 - 1] + combine[combine.length / 2]) / 2;
  //   }
  //   return combine[Math.floor(combine.length / 2)];
  // }
  // console.log(findMedianSortedArrays([-1, -2], [3]));

  //findNumberIn2DArray
  // function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  //   if (!matrix.length) return false;
  //   let col = 0;
  //   while (col < matrix.length) {
  //     if (matrix[col].includes(target)) {
  //       return true;
  //     }
  //     col++;
  //   }
  //   return false;
  // }

  //Brute Force
  // function minArray(numbers: number[]): number {
  //   let min = numbers[0];
  //   for (let i = 1; i < numbers.length; i++) {
  //     if (numbers[i] < min) {
  //       min = numbers[i];
  //     }
  //   }
  //   return min;
  // };

  //   function minArray(numbers: number[]): number {
  //     //binary search
  //     let left = 0;
  //     let right = numbers.length - 1;
  //     while (left < right) {
  //       let mid = Math.floor((left + right) / 2);
  //       if (numbers[mid] > numbers[right]) {
  //         left = mid + 1;
  //       } else if(numbers[mid] < numbers[right]) {
  //         right = mid;
  //       }else {
  //         right--;
  //       }
  //     }
  //     return numbers[left];
  // };

  // first Uniq Char
  // function firstUniqChar(s: string): string {
  //   if (s.length === 0) return " ";
  //   for (let i = 0; i < s.length; i++) {
  //     if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
  //       return s[i];
  //     }
  //   }
  //   return " ";
  // };

  // level Order 1
  //   function levelOrder(root: TreeNode | null): number[] {
  //     if (!root) return [];
  //     const result: number[] = [];
  //     const queue: TreeNode[] = [];
  //     queue.push(root);
  //     while (queue.length) {
  //       const node = queue.shift();
  //       result.push(node.val);
  //       if (node.left) queue.push(node.left);
  //       if (node.right) queue.push(node.right);
  //     }
  //     return result;
  // };

  //102. Binary Tree Level Order Traversal
  // function levelOrder(root: TreeNode | null): number[][] {
  //   if (!root) return [];
  //   const result:number [][] = [];
  //   const queue: TreeNode[] = [root]; //节点入队
  //   while (queue.length) {
  //       let rest: number[] = [];
  //       for (let i = queue.length; i > 0; i--) {  // 需要倒着删，不然数组顺序会改
  //           let node = queue.shift();  // 取出头
  //           rest.push(node.val);  // 把值放入当前层的数组中
  //           node.left && queue.push(node.left);  // 如果有左子树，接着把当前层的node的左子树放入
  //           node.right && queue.push(node.right);  // 如果有右子树
  //       }
  //       result.push(rest)
  //   }
  //   return result;
  // };

  // function levelOrder(root: TreeNode | null): number[][] {
  //   if (!root) return [];
  //   const result: number[][] = [];
  //   const queue: TreeNode[] = [root]; //节点入队
  //   while (queue.length) {
  //     let rest: number[] = [];
  //     let flag = false;
  //     for (let i = queue.length; i > 0; i--) {
  //       // 需要倒着删，不然数组顺序会改
  //       let node = queue.shift(); // 取出头
  //       rest.push(node.val); // 把值放入当前层的数组中
  //       node.left && queue.push(node.left); // 如果有左子树，接着把当前层的node的左子树放入
  //       node.right && queue.push(node.right); // 如果有右子树
  //     }
  //     result.push(flag ? rest.reverse() : rest);// 旋转一层，改变状态
  //     flag = !flag;
  //   }
  //   return result;
  // }

  //剑指 Offer 26. 树的子结构
  // function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
  //   // A or B is empty
  //   if (!A || !B) return false;
  //   // or using recursion
  //   return (
  //     isSame(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
  //   );

  //   function isSame(A: TreeNode | null, B: TreeNode | null): boolean {
  //     // B is empty return true
  //     if (!B) return true;
  //     // A is empty return false
  //     if (!A) return false;
  //     // A and B is not same return false
  //     if (A.val !== B.val) return false;
  //     // or using recursion
  //     return isSame(A.left, B.left) && isSame(A.right, B.right);
  //   }
  // }

  // 226. Invert Binary Tree
  // function invertTree(root: TreeNode | null): TreeNode | null {
  //   if (root) {
  //     // js API
  //     [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  //   }
  //   return root;
  // }

  // 101. Symmetric Tree
  // function isSymmetric(root: TreeNode | null): boolean {
  //   if (!root) return true;
  //   function isMirror(left: TreeNode | null, right: TreeNode | null): boolean {
  //     if (!left && !right) return true;
  //     if (
  //       left &&
  //       right &&
  //       left.val === right.val &&
  //       isMirror(left.left, right.right) &&
  //       isMirror(left.right, right.left)
  //     ) {
  //       return true;
  //     }
  //     return false;
  //   }
  //   return isMirror(root.left, root.right);
  // }

  // 剑指 Offer 09. 用两个栈实现队列
  //   class CQueue {
  //     private stackIn: number[];
  //     private stackOut: number[];

  //     constructor() {
  //         this.stackIn = [];
  //         this.stackOut = [];
  //     }

  //     appendTail(value: number): void {
  //         this.stackIn.push(value)
  //     }

  //     deleteHead(): number {
  //         const { stackIn, stackOut } = this
  //         if (stackIn.length === 0 && stackOut.length === 0) return -1
  //         if (stackOut.length > 0) return stackOut.pop();
  //         while (stackIn.length) {
  //             stackOut.push(stackIn.pop())
  //         }
  //         return stackOut.pop();
  //     }
  // }

  // 剑指 Offer 20. 表示数值的字符串
  // function isNumber(s: string): boolean {
  //   return /^\s*[-+]?((\d+(\.\d+)?)|(\.\d+)|(\d+\.))([eE][-+]?\d+)?\s*$/.test(
  //     s
  //   );
  // }
  // 剑指 Offer 24. 反转链表 recursion
  // function reverseList(head: ListNode | null): ListNode | null {
  //   // prev is the node before the current node, current is the current node
  //   let prev: ListNode | null = null;
  //   let curr: ListNode | null = head;
  //   // pinot current node to prev node, then move current node and prev node to next node
  //   while (curr) {
  //     const next = curr.next;// save next node
  //     curr.next = prev;// current node's next node is prev node
  //     prev = curr;// prev node move to next node
  //     curr = next;// current node move to next node
  //   }
  //   return prev;
  // }

  // function reverseList(head: ListNode | null): ListNode | null {
  //   if (head == null || head.next == null) return head; //the end of recursion
  //   let node = reverseList(head.next);
  //   //next node point to the previous node
  //   head.next.next = head;
  //   //set current node's next node to null
  //   head.next = null;
  //   return node;
  // }

  // 剑指 Offer 30. 包含 min 函数的栈
  //   class MinStack {
  //     dataStack: Array<number>;
  //     minStack: number;
  //     constructor() {
  //         this.dataStack = [];
  //         this.minStack = Infinity;
  //     }

  //     push(val: number): void {
  //         this.dataStack.push(val);
  //         if (val < this.minStack) {
  //             this.minStack = val;
  //         }
  //     }

  //     pop(): void {
  //         this.dataStack.pop();
  //         this.minStack = Math.min(...this.dataStack);
  //     }

  //     top(): number {
  //         return this.dataStack[this.dataStack.length - 1];
  //     }

  //     getMin(): number {
  //         return this.minStack;
  //     }
  // }

  // 斐波那契数列
  //recursion
  // function fib(n: number): number {
  //   //time out
  //   if (n <= 1) return n;
  //   return fib(n - 1) + fib(n - 2);
  // }

  // fibonacci
  // function fib(n: number): number {
  //   //concat API time out
  //   return [0, 1].concat(
  //     Array.from({ length: n - 1 }, (_, i) =>
  //       fib(i) + fib(i + 1)
  //     )
  //   )[n];
  // };

  // function fib(n: number, a = 0, b = 1): number {
  //   return n === 0 ? a : fib(n - 1, b % 1000000007, a + b);
  // };

  //剑指 Offer 10- II. 青蛙跳台阶问题
  // function numWays(n: number): number {
  //   if(n < 2) return 1

  //   let p=0, q=1,r=1

  //   for(let i=2;i<=n;i++){
  //       p = q,
  //       q = r
  //       r= (p+q)%1000000007
  //   }

  //   return r
  // };

  //股票的最大利润

  // function maxProfit(prices: number[]): number {
  //   //min save the lowest price
  //   let min = Number.MAX_SAFE_INTEGER; //7/1/1/1/1/1
  //   //max save the max profit
  //   let max = 0; //0/0/4/4/5//5

  //   prices.forEach((price) => {
  //     //is the lowest price? save it.
  //     min = Math.min(min, price);
  //     //get the profit, if higher than max, save it.
  //     max = Math.max(max, price - min);
  //   });

  //   return max;
  // }
  // 剑指 Offer 42. 连续子数组的最大和
  // function maxSubArray(nums: number[]): number {
  //   let min = nums[0];
  //   let max = nums[0];
  //   for (let i = 1; i < nums.length; i++) {
  //     min = Math.max(min + nums[i], nums[i]);
  //     max = Math.max(max, min);
  //   }
  //   return max;
  // }
  // 剑指 Offer 47. 礼物的最大价值
  // function maxValue(grid: number[][]): number {
  //   const row = grid.length,
  //     column = grid[0].length;

  //   for (let i = 0; i < row; i++) {
  //     for (let j = 0; j < column; j++) {
  //       if (i === 0 && j === 0) continue;

  //       if (i === 0) {
  //         grid[i][j] += grid[i][j - 1];
  //       } else if (j === 0) {
  //         grid[i][j] += grid[i - 1][j];
  //       } else {
  //         grid[i][j] += Math.max(grid[i - 1][j], grid[i][j - 1]);
  //       }
  //     }
  //   }

  //   return grid[row - 1][column - 1];
  // }

  // 剑指 Offer 46. 把数字翻译成字符串
  // function translateNum(num: number): number {
  //   const str = num.toString();
  //   const n = str.length;
  //   let prev = 1;
  //   let cur = 1;
  //   for (let i = 2; i < n + 1; i++) {
  //     const temp = Number(str[i - 2] + str[i - 1]);
  //     if (temp >= 10 && temp <= 25) {
  //       const t = cur;
  //       cur = prev + cur;
  //       prev = t;
  //     } else {
  //       prev = cur;
  //     }
  //   }
  //   return cur;
  // }

  // 剑指 Offer 48. 最长不含重复字符的子字符串
  // function lengthOfLongestSubstring(s: string): number {
  //   const occ = new Map<string, number>();
  //   let max = 0;
  //   let start = 0;
  //   for (let i = 0; i < s.length; i++) {
  //     if (occ.has(s[i])) {
  //       start = Math.max(start, occ.get(s[i]) + 1);
  //     }
  //     max = Math.max(max, i - start + 1);
  //     occ.set(s[i], i);
  //   }
  //   return max;
  // };

  // function lengthOfLongestSubstring(s: string): number {
  //   // hash map to store last occurrence of characters
  //   const ooc = new Set();
  //   const n = s.length;
  //   // right pointer initialize to -1, it didn't point any character when the pointer is at the start of the left edge of the sliding window
  //   let rk = -1,
  //     ans = 0;
  //   for (let i = 0; i < n; i++) {
  //     if (i != 0) {
  //       // remove the left edge of the sliding window
  //       ooc.delete(s[i - 1]);
  //     }
  //     while (rk + 1 < n && !ooc.has(s[rk + 1])) {
  //       // add the right edge of the sliding window
  //       ooc.add(s[++rk]);
  //     }
  //     // update the answer
  //     ans = Math.max(ans, rk - i + 1);
  //   }
  //   return ans;
  // }

  //剑指 Offer 18. 删除链表的节点
  // function deleteNode(head: ListNode | null, val: number): ListNode | null {
  //   if (head === null) return null;

  //   if (head.val === val) return head.next;

  //   let current = head;

  //   while (current.next && current.next.val !== val) {
  //     current = current.next;
  //   }

  //   if (current.next) {
  //     current.next = current.next.next;
  //   }

  //   return head;
  // }

  // function deleteNode(head: ListNode | null, val: number): ListNode | null {
  //   head = { next: head } as ListNode;
  //   let p = head;
  //   while (p.next) {
  //     if (p.next.val === val) {
  //       let target = p.next;
  //       p.next = target.next;
  //       target.next = null;
  //       break;
  //     }
  //     p = p.next;
  //   }
  //   return head.next;
  // }

  // 剑指 Offer 22. 链表中倒数第k个节点
  // function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
  //   let fast = head,
  //     slow = head;
  //   while (k--) {
  //     fast = fast.next;
  //   }
  //   while (fast) {
  //     fast = fast.next;
  //     slow = slow.next;
  //   }
  //   return slow;
  // }
  //剑指 Offer 25. 合并两个排序的链表
  // function mergeTwoLists(
  //   l1: ListNode | null,
  //   l2: ListNode | null
  // ): ListNode | null {
  //   if (!l1) return l2;
  //   if (!l2) return l1;
  //   if (l1.val < l2.val) {
  //     l1.next = mergeTwoLists(l1.next, l2);
  //     return l1;
  //   } else {
  //     l2.next = mergeTwoLists(l1, l2.next);
  //     return l2;
  //   }
  // }

  //剑指 Offer 52. 两个链表的第一个公共节点
  // function getIntersectionNode(
  //   headA: ListNode | null,
  //   headB: ListNode | null
  // ): ListNode | null {
  //   // p1 指向 A 链表头结点，p2 指向 B 链表头结点
  //   let p1: ListNode | null = headA,
  //     p2: ListNode | null = headB;
  //   while (p1 != p2) {
  //     // p1 走一步，如果走到 A 链表末尾，转到 B 链表
  //     if (p1 == null) p1 = headB;
  //     else p1 = p1.next;
  //     // p2 走一步，如果走到 B 链表末尾，转到 A 链表
  //     if (p2 == null) p2 = headA;
  //     else p2 = p2.next;
  //     console.log("##:", p1, p2);
  //   }
  //   return p1;
  // }

  //剑指 Offer 21. 调整数组顺序使奇数位于偶数前面
  //   function exchange(nums: number[]): number[] {
  //     let i = 0 // slow
  //     let j = 0 // quick

  //     while (j < nums.length) {
  //         // even
  //         if (nums[j] % 2 === 0) {
  //             j++
  //         } else {
  //             const temp = nums[i]
  //             nums[i] = nums[j]
  //             nums[j] = temp
  //             i++
  //             j++
  //         }
  //     }
  //     return nums
  // };
  //剑指 Offer 57. 和为s的两个数字
  // function twoSum(nums: number[], target: number): number[] {
  //   let left = 0;
  //   let right = nums.length - 1;
  //   while (nums[left] + nums[right] !== target) {
  //     if (nums[left] + nums[right] > target) {
  //       right--;
  //     } else if (nums[left] + nums[right] < target) {
  //       left++;
  //     }
  //   }
  //   return [nums[left], nums[right]];
  // }

  //剑指 Offer 58 - I. 翻转单词顺序
  // function reverseWords(s: string): string {
  //   return s.trim().split(/\s+/).reverse().join(" ");
  // }

  // 剑指 Offer 12. 矩阵中的路径
  // function exist(board: string[][], word: string): boolean {
  //   const m = board.length;
  //   const n = board[0].length;
  //   const used = new Array(m); // 二维矩阵used，存放bool值
  //   for (let i = 0; i < m; i++) {
  //     used[i] = new Array(n);
  //   }
  //   // canFind 判断当前点是否是目标路径上的点
  //   const canFind = (row: number, col: number, i: number): boolean => {
  //     // row col 当前点的坐标，i当前考察的word字符索引
  //     if (i == word.length) {
  //       // 递归的出口 i越界了就返回true
  //       return true;
  //     }
  //     if (row < 0 || row >= m || col < 0 || col >= n) {
  //       // 当前点越界 返回false
  //       return false;
  //     }
  //     if (used[row][col] || board[row][col] != word[i]) {
  //       // 当前点已经访问过，或，非目标点
  //       return false;
  //     }
  //     // 排除掉所有false的情况，当前点暂时没毛病，可以继续递归考察
  //     used[row][col] = true; // 记录一下当前点被访问了
  //     // canFindRest：基于当前选择的点[row,col]，能否找到剩余字符的路径。
  //     const canFindRest =
  //       canFind(row + 1, col, i + 1) ||
  //       canFind(row - 1, col, i + 1) ||
  //       canFind(row, col + 1, i + 1) ||
  //       canFind(row, col - 1, i + 1);

  //     if (canFindRest) {
  //       // 基于当前点[row,col]，可以为剩下的字符找到路径
  //       return true;
  //     }
  //     used[row][col] = false; // 不能为剩下字符找到路径，返回false，撤销当前点的访问状态
  //     return false;
  //   };

  //   for (let i = 0; i < m; i++) {
  //     // 遍历找起点，作为递归入口
  //     for (let j = 0; j < n; j++) {
  //       if (board[i][j] == word[0] && canFind(i, j, 0)) {
  //         // 找到起点且递归结果为真，找到目标路径
  //         return true;
  //       }
  //     }
  //   }
  //   return false; // 怎么样都没有返回true，则返回false
  // }

  //剑指 Offer 13. 机器人的运动范围

  // function movingCount(m: number, n: number, k: number): number {
  //   // visited 用来记录走过的格子，避免重复
  //   const visited = Array(m)
  //     .fill(0)
  //     .map((_) => Array(n).fill(false));

  //   // 辅助函数，计算位数和
  //   function sum(n: number): number {
  //     let res = 0;
  //     while (n) {
  //       res += n % 10;
  //       n = Math.floor(n / 10);
  //     }
  //     return res;
  //   }
  //   // dfs
  //   function dfs(x: number, y: number): number {
  //     // 对应开头所说的三个终止条件，超过k值、到达边界、走过的格子
  //     if (sum(x) + sum(y) > k || x >= m || y >= n || visited[x][y]) return 0;
  //     else {
  //       // 记录当前格子已经走过，返回当前计数 1 + 后续其他两个方向的总和
  //       visited[x][y] = true;
  //       return 1 + dfs(x + 1, y) + dfs(x, y + 1);
  //     }
  //   }
  //   return dfs(0, 0);
  // }
  // 剑指 Offer 34. 二叉树中和为某一值的路径
  // function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  //   const res: number[][] = [];
  //   const path: number[] = [];
  //   function dfs(node: TreeNode | null, sum: number) {
  //     if (!node) return;
  //     sum += node.val;
  //     path.push(node.val);
  //     if (!node.left && !node.right) {
  //       if (sum === targetSum) {
  //         res.push([...path]);
  //       }
  //     }
  //     dfs(node.left, sum);
  //     dfs(node.right, sum);
  //     path.pop();
  //   }
  //   dfs(root, 0);
  //   return res;
  // }

  //剑指 Offer 54. 二叉搜索树的第k大节点
  // function kthLargest(root: TreeNode | null, k: number): number {
  //   const res: number[] = [];
  //   function dfs(node: TreeNode | null) {
  //     if (!node) return;
  //     dfs(node.right);
  //     res.push(node.val);
  //     dfs(node.left);
  //   }
  //   dfs(root);
  //   return res[k - 1];
  // };

  // 剑指 Offer 45. 把数组排成最小的数
  // function minNumber(nums: number[]): string {
  //   return nums
  //     .sort((a, b) =>
  //       Number(String(a) + String(b)) < Number(String(b) + String(a)) ? -1 : 1
  //     )
  //     .map((e) => String(e))
  //     .join("");
  // }

  // 剑指 Offer 61. 扑克牌中的顺子
  // function isStraight(nums: number[]): boolean {
  //   nums = nums.filter(val => val !== 0).sort((a, b) => a - b)
  //   const s = new Set(nums)
  //   const min = nums[0]
  //   const max = nums[nums.length - 1]
  //   return max - min < 5 && s.size === nums.length
  // }

  // 剑指 Offer 40. 最小的k个数
  // function getLeastNumbers(arr: number[], k: number): number[] {
  //   return arr.sort((a, b) => a - b).slice(0, k);
  // }

  // 剑指 Offer 41. 数据流中的中位数
  // sort in add method
  // class MedianFinder {
  //   arr: number[] = [];
  //   constructor() {
  //     this.arr = [];
  //   }

  //   addNum(num: number): void {
  //     if (this.arr.length === 0) {
  //       this.arr.push(num);
  //     } else {
  //       let left = 0,
  //         right = this.arr.length - 1;
  //       while (left <= right) {
  //         const mid = Math.floor((left + right) / 2);
  //         if (this.arr[mid] === num) {
  //           this.arr.splice(mid, 0, num);
  //           return;
  //         } else if (this.arr[mid] > num) {
  //           right = mid - 1;
  //         } else {
  //           left = mid + 1;
  //         }
  //       }
  //       this.arr.splice(left, 0, num);
  //     }
  //   }

  //   findMedian(): number {
  //     const len = this.arr.length;
  //     if (len % 2 === 0) {
  //       return (this.arr[len / 2 - 1] + this.arr[len / 2]) / 2;
  //     } else {
  //       return this.arr[Math.floor(len / 2)];
  //     }
  //   }
  // }

  //剑指 Offer 41. 数据流中的中位数
  // two pointers get median
  // class MedianFinder {
  //   arr: number[];
  //   left: number;
  //   right: number;
  //   constructor() {
  //     this.arr = [];
  //     this.left = -1;
  //     this.right = -1;
  //   }

  //   addNum(num: number): void {
  //     if (!this.arr.length) {
  //       this.left++;
  //       this.right++;
  //     } else {
  //       if (this.left === this.right) {
  //         this.right++;
  //       } else {
  //         this.left++;
  //       }
  //     }
  //     this.arr.push(num);
  //   }

  //   findMedian(): number {
  //     if (!this.arr.length) return 0;
  //     this.arr.sort((a, b) => a - b);
  //     return (this.arr[this.left] + this.arr[this.right]) / 2;
  //   }
  // }

  //剑指 Offer 41. 数据流中的中位数
  // Brute-force
  // class MedianFinder {
  //   arr: number[] = [];
  //   constructor() {
  //     this.arr = [];
  //   }
  //   addNum(num: number): void {
  //     this.arr.push(num);
  //   }
  //   findMedian(): number {
  //     this.arr.sort((a, b) => a - b);
  //     const len = this.arr.length;
  //     if (len % 2 === 0) {
  //       return (this.arr[len / 2 - 1] + this.arr[len / 2]) / 2;
  //     } else {
  //       return this.arr[Math.floor(len / 2)];
  //     }
  //   }
  // }
  //剑指 Offer 55 - I. 二叉树的深度
  // function maxDepth(root: TreeNode | null): number {
  //   if (!root) return 0;
  //   return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
  // }

  //剑指 Offer 55 - II. 平衡二叉树
  // function isBalanced(root: TreeNode | null): boolean {
  //   if (!root) return true;
  //   const res = [];
  //   function dfs(node: TreeNode | null): number {
  //     if (!node) return 0;
  //     const left = dfs(node.left);
  //     const right = dfs(node.right);
  //     if (Math.abs(left - right) > 1) {
  //       res.push(false);
  //     }
  //     return Math.max(left, right) + 1;
  //   }
  //   dfs(root);
  //   return res.length === 0;
  // }

  //剑指 Offer 64. 求1+2+…+n
  // var sumNums = function (n: number): number {
  //   n && (n += sumNums(n - 1));
  //   return n;
  // };

  //剑指 Offer 68 - I. 二叉搜索树的最近公共祖先
  // function lowestCommonAncestor(
  //   root: TreeNode | null,
  //   p: TreeNode | null,
  //   q: TreeNode | null
  // ): TreeNode | null {
  //   if (!root || root === p || root === q) return root;
  //   const left = lowestCommonAncestor(root.left, p, q);
  //   const right = lowestCommonAncestor(root.right, p, q);
  //   return left && right ? root : left || right;
  // }

  //剑指 Offer 68 - II. 二叉树的最近公共祖先
  // function lowestCommonAncestor(
  //   root: TreeNode | null,
  //   p: TreeNode | null,
  //   q: TreeNode | null
  // ): TreeNode | null {
  //   if (!root || root === p || root === q) return root;
  //   const left: TreeNode | null = lowestCommonAncestor(root.left, p, q)
  //   const right: TreeNode | null = lowestCommonAncestor(root.right, p, q)
  //   return !left ? right : !right ? left : root
  // }

  // 剑指 Offer 07. 重建二叉树
  // function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  //   if (!preorder.length || !inorder.length) return null;
  //   const root = new TreeNode(preorder[0]);
  //   const index = inorder.indexOf(preorder[0]);
  //   root.left = buildTree(
  //     preorder.slice(1, index + 1),
  //     inorder.slice(0, index)
  //   );
  //   root.right = buildTree(
  //     preorder.slice(index + 1),
  //     inorder.slice(index + 1)
  //     );
  //   return root;
  // }

  // 剑指 Offer 16. 数值的整数次方
  // function myPow(x: number, n: number): number {
  //   if (n === 0) return 1;
  //   if (n === 1) return x;
  //   if (n === -1) return 1 / x;
  //   if (n % 2 === 0) {
  //     let a = myPow(x, n / 2);
  //     return a * a;
  //   } else {
  //     let b = myPow(x, (n - 1) / 2);
  //     return b * b * x;
  //   }
  // }

  //剑指 Offer 33. 二叉搜索树的后序遍历序列
  //递归分治法
  // function verifyPostorder(postorder: number[]): boolean {
  //   const check = (
  //     postorder: number[],
  //     left: number,
  //     right: number
  //   ): boolean => {
  //     if (left >= right) {
  //       return true;
  //     }
  //     let i = left,
  //       j = right - 1;
  //     let node = postorder[right];
  //     while (postorder[i] < node) {
  //       i++;
  //     }
  //     while (postorder[j] > node) {
  //       j--;
  //     }
  //     if (i < j) {
  //       return false;
  //     }
  //     return check(postorder, left, j) && check(postorder, i, right - 1);
  //   };
  //   return check(postorder, 0, postorder.length - 1);
  // }
  //单调栈
  // function verifyPostorder(postorder: number[]): boolean {
  //   const stack = [];
  //   let root = Number.MAX_SAFE_INTEGER;
  //   let t: number | undefined;
  //   for (let i = postorder.length - 1; i >= 0; --i) {
  //     if (postorder[i] > root) return false;
  //     while (stack.length && stack[stack.length - 1] > postorder[i]) {
  //       t = stack.pop();
  //       root = t === undefined ? root : t;
  //     }
  //     stack.push(postorder[i]);
  //   }
  //   return true;
  // }

  //191. 位1的个数
  // function hammingWeight(n: number): number {
  //   let count = 0;
  //   while (n) {
  //     n &= n - 1;
  //     count++;
  //   }
  //   return count;
  // };

  //剑指 Offer 65. 不用加减乘除做加法
  // function add(a: number, b: number): number {
  //   while(b !== 0) {
  //     const sum = a ^ b;
  //     const carry = (a & b) << 1;
  //     a = sum;
  //     b = carry;
  //   }
  //   return a;
  // };

  //剑指 Offer 56 - I. 数组中数字出现的次数
  // function singleNumbers(nums: number[]): number[] {
  //   const map = new Map();
  //   for (let i = 0; i < nums.length; i++) {
  //     if (map.has(nums[i])) {
  //       map.delete(nums[i]);
  //     } else {
  //       map.set(nums[i], 1);
  //     }
  //   }
  //   return Array.from(map.keys());
  // };

  // function singleNumbers(nums: number[]): number[] {
  //   const sum = nums.reduce((a, b) => a ^ b, 0);
  //   const lowBit = sum & -sum;
  //   const result: number[] = [];
  //   for (let i = 0; i < nums.length; i++) {
  //     if ((nums[i] & lowBit) === 0) {
  //       result[0] ^= nums[i];
  //     } else {
  //       result[1] ^= nums[i];
  //     }
  //   }
  //   return result;
  // }

  // 剑指 Offer 56 - II. 数组中数字出现的次数 II
  // HashMap
  // function singleNumber(nums: number[]): number {
  //   const map = new Map();
  //   for (let i = 0; i < nums.length; i++) {
  //     if (map.has(nums[i])) {
  //       map.set(nums[i], map.get(nums[i]) + 1);
  //     } else {
  //       map.set(nums[i], 1);
  //     }
  //   }
  //   for (let [key, value] of map) {
  //     if (value === 1) {
  //       return key;
  //     }
  //   }
  // };

  //math
  // function singleNumber(nums: number[]): number {
  //   const set = new Set(nums);
  //   let sum1 = 0;
  //   for (let num of set) {
  //     sum1 += num;
  //   }
  //   let sum2 = 0;
  //   for (let num of nums) {
  //     sum2 += num;
  //   }
  //   return Math.floor((sum1 * 3 - sum2) / 2);;
  // };

  // bitwise
  // function singleNumber(nums: number[]): number {
  //   let arr = new Array(32).fill(0);
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = 0; j < 32; j++) {
  //       arr[j] += (nums[i] >> j) & 1;
  //     }
  //   }
  //   let result = 0;
  //   for (let i = 0; i < 32; i++) {
  //     result += arr[i] % 3 << i;
  //   }
  //   return result;
  // }

  // /剑指 Offer 39. 数组中出现次数超过一半的数字
  // using hashmap
  // function majorityElement(nums: number[]): number {
  //   const map = new Map();
  //   const count = nums.length / 2;
  //   if (nums.length === 1) return nums[0];
  //   for (let num of nums) {
  //     if (!map.has(num)) {
  //       map.set(num, 1);
  //     } else {
  //       let counts = map.get(num);
  //       counts++;
  //       map.set(num, counts);
  //       if (counts > count) return num;
  //     }
  //   }
  // }

  // using sort and return the middle
  // function majorityElement(nums: number[]): number {
  //   return nums.sort((a, b) => a - b)[Math.floor(nums.length / 2)];
  // }

  // using vote
  // function majorityElement(nums: number[]): number {
  //   let candidate = 0,
  //     vote = 0;
  //   for (let item of nums) {
  //     if (vote === 0) {
  //       candidate = item;
  //     }
  //     vote += candidate === item ? +1 : -1;
  //   }
  //   return candidate;
  // }

  //剑指 Offer 66. 构建乘积数组
  // // this is ordered array, must start from [1,2,...,n-1], aim array is aim[i]=[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]
  // function constructArr(nums: number[]): number[] {
  //   //return [] if nums is empty
  //   if (!nums.length) return nums;
  //   // res[i] means the the left product of res[i]
  //   // cuz there is nothing in the left of res[0], so res[0] = 1
  //   const res: number[] = [1];
  //   for (let i = 1; i < nums.length; i++) {
  //     res[i] = res[i - 1] * nums[i - 1];
  //   }

  //   // R means the right product of all elements
  //   // there is nothing in the right of arr, so R = 1
  //   let R = 1;
  //   for (let i = nums.length - 1; i >= 0; i--) {
  //     // for i, left product is res[i], right product is R
  //     res[i] *= R;
  //     // R need include all the product, so R = R * nums[i]
  //     R *= nums[i];
  //   }
  //   return res;
  // }

  // function constructArr(nums: number[]): number[] {
  //   if (!nums.length) return nums;
  //   const length = nums.length;
  //   const L = new Array<number>(length);
  //   const R = new Array<number>(length);
  //   const answer = new Array<number>(length);
  //   //L[i] means the left product of L[i]
  //   //cuz there is nothing in the left of L[0], so L[0] = 1
  //   L[0] = 1;
  //   for (let i = 1; i < length; i++) {
  //     L[i] = L[i - 1] * nums[i - 1];
  //   }
  //   //R[i] means the right product of R[i]
  //   //there is nothing in the right of R[length-1], so R[length-1] = 1
  //   R[length - 1] = 1;
  //   for (let i = length - 2; i >= 0; i--) {
  //     R[i] = R[i + 1] * nums[i + 1];
  //   }
  //   //answer[i] means the product of left and right except nums[i]
  //   for (let i = 0; i < length; i++) {
  //     answer[i] = L[i] * R[i];
  //   }

  //   return answer;
  // }

  //461. Hamming Distance
  // function hammingDistance(x: number, y: number): number {
  //   let count: number = 0;
  //   let xBinary = x.toString(2);
  //   let yBinary = y.toString(2);
  //   const length = Math.max(xBinary.length, yBinary.length);
  //   xBinary = xBinary.padStart(length, "0");
  //   yBinary = yBinary.padStart(length, "0");
  //   for (let i = 0; i < length; i++) {
  //     if (xBinary[i] !== yBinary[i]) count++;
  //   }
  //   return count;
  // }

  // XOR operation in an array
  // 1 means true, they are different
  // function hammingDistance(x: number, y: number): number {
  //   let a = x ^ y;
  //   let count = 0;
  //   while (a) {
  //     count++;
  //     a = a & a - 1;
  //   }
  //   return count;
  // }

  //剑指 Offer 14- I. 剪绳子
  // function cuttingRope(n: number): number {
  //   if (n === 2) return 1;
  //   if (n === 3) return 2;
  //   let res = 1;
  //   while (n > 4) {
  //     res *= 3;
  //     n -= 3;
  //   }
  //   return res * n;
  // };

  //剑指 Offer 57 - II. 和为s的连续正数序列
  //let left = 0, right = 0;

  // while (right < s.size()) {
  //     // 增大窗口
  //     window.add(s[right]);
  //     right++;

  //     while (window needs shrink) {
  //         // 缩小窗口
  //         window.remove(s[left]);
  //         left++;
  //     }
  // }

  function findContinuousSequence(target: number): number[][] {
    let res: number[][] = [];
    let l = 1;
    let r = 2;
    let sum = 3;
    // 滑动窗口框架
    while (l < r) {
      if (sum === target) {
        let ans = [];
        for (let k = l; k <= r; k++) {
          ans[k - l] = k;
        }
        res.push(ans);
        // 等于的情况 我们可以继续窗口往右搜索 同时缩小左边的
        sum = sum - l;
        l++;
      } else if (sum > target) {
        // 大于的条件 缩小窗口 sum已经加过了
        sum = sum - l;
        l++;
      } else {
        // 小于的情况 滑动窗口继续扩大
        r++;
        sum = sum + r;
      }
    }
    return res;
  }

  //剑指 Offer 62. 圆圈中最后剩下的数字
  function lastRemaining(n: number, m: number): number {
    let res = 0;
    for (let i = 2; i <= n; i++) {
      res = (res + m) % i;
    }
    return res;
  }

  //剑指 Offer 29. 顺时针打印矩阵
  function spiralOrder(matrix: number[][]): number[] {
    if (!matrix.length || !matrix[0].length) return []; //空数组
    const res: number[] = [];
    const rows = matrix.length,
      colums = matrix[0].length;
    let left = 0,
      right = colums - 1,
      top = 0,
      bottom = rows - 1;
    while (left <= right && top <= bottom) {
      for (let column = left; column <= right; column++) {
        res.push(matrix[top][column]);
      }
      for (let row = top + 1; row <= bottom; row++) {
        res.push(matrix[row][right]);
      }
      if (left < right && top < bottom) {
        for (let column = right - 1; column > left; column--) {
          res.push(matrix[bottom][column]);
        }
        for (let row = bottom; row > top; row--) {
          res.push(matrix[row][left]);
        }
      }
      [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
    }
    return res;
  }

  // 剑指 Offer 31. 栈的压入、弹出序列
  function validateStackSequences(pushed: number[], popped: number[]): boolean {
    let stack: number[] = [];
    let i = 0;
    for (let num of pushed) {
      stack.push(num);
      while (stack.length && stack[stack.length - 1] === popped[i]) {
        stack.pop();
        i++;
      }
    }
    return !stack.length;
  }

  // 剑指 Offer 20. 表示数值的字符串
  function isNumber(s: string): boolean {
    return /^[\+\-]?((\d+(\.\d*)?)|\.\d+)([eE][-+]?\d+)?$/.test(s.trim());
  }

  //剑指 Offer 67. 把字符串转换成整数
  function strToInt(str: string): number {
    let min = -(2 ** 31),
      max = 2 ** 31 - 1;
    let result = parseInt(str);
    if (isNaN(result)) {
      result = 0;
    }
    //超出限制的情况
    if (result < min) {
      result = min;
    } else if (result > max) {
      result = max;
    }
    return result;
  }

  // 剑指 Offer 59 - I. 滑动窗口的最大值
  function maxSlidingWindow(nums: number[], k: number): number[] {
    // 结果数组
    let res: number[] = [];
    // 队列数组（存放的是元素下标，为了取值方便）
    let queue: number[] = [];
    for (let i = 0; i < nums.length; i++) {
      if (queue.length && queue[0] <= i - k) {
        queue.shift();
      }
      while (queue.length && nums[queue[queue.length - 1]] < nums[i]) {
        queue.pop();
      }
      queue.push(i);
      if (i >= k - 1) {
        res.push(nums[queue[0]]);
      }
    }
    return res;
  }

  // // 剑指 Offer 59 - II. 队列的最大值
  // class MaxQueue {
  //   Queue: number[] = [];

  //   constructor() {
  //     this.Queue = [];
  //   }

  //   max_value(): number {
  //     let max = 0;
  //     for (let i = 0; i < this.Queue.length; i++) {
  //       max = Math.max(max, this.Queue[i]);
  //     }
  //     return this.Queue.length ? max : -1;
  //   }

  //   push_back(value: number): void {
  //     this.Queue.unshift(value);
  //   }

  //   pop_front(): number {
  //     if (this.Queue.length) {
  //       return this.Queue.pop();
  //     }
  //     return -1;
  //   }
  // }

  // 剑指 Offer 37. 序列化二叉树
  /**
   * Definition for a binary tree node.
   * class TreeNode {
   *     val: number
   *     left: TreeNode | null
   *     right: TreeNode | null
   *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
   *         this.val = (val===undefined ? 0 : val)
   *         this.left = (left===undefined ? null : left)
   *         this.right = (right===undefined ? null : right)
   *     }
   * }
   */

  /*
   * Encodes a tree to a single string.
   */
  // function serialize(root: TreeNode | null): string {
  //   const arr = [];
  //   function dfs(root: TreeNode) {
  //     if (!root) {
  //       return arr.push('null')
  //     }
  //     arr.push(root.val)
  //     dfs(root.left)
  //     dfs(root.right)
  //   }
  //   dfs(root)
  //   return arr.join(',')
  // };

  // /*
  //  * Decodes your encoded data to tree.
  //  */
  // function deserialize(data: string): TreeNode | null {
  //   const arr = data.split(',').reverse(); // 反转后用pop来弹出当前子树根节点
  //   function dfs(arr: string[]) {
  //     const val = arr.pop(); // pop效率比shift好，因为shift操作需要调整全部数组元素，而pop只需要操作一个数组元素。
  //     if (val === 'null') return null;
  //     const root = new TreeNode(Number(val))
  //     root.left = dfs(arr)
  //     root.right = dfs(arr)
  //     return root
  //   }
  //   return dfs(arr)
  // };

  // 剑指 Offer 38. 字符串的排列
  // function permutation(s: string): string[] {
  //   const n = s.length,
  //     res = [];
  //   const stateArr = Array(n).fill(false);
  //   const ss = s.split("").sort().join("");
  //   const dfs = (str) => {
  //     if (str.length === n) {
  //       res.push(str);
  //       return;
  //     }
  //     for (let i = 0; i < n; i++) {
  //       if (stateArr[i]) continue;
  //       if (i > 0 && ss[i - 1] === ss[i] && !stateArr[i - 1]) continue;
  //       stateArr[i] = true;
  //       str += ss[i];
  //       dfs(str);
  //       stateArr[i] = false;
  //       str = str.slice(0, str.length - 1);
  //     }
  //   };
  //   dfs("");
  //   return res;
  // }

  // 剑指 Offer 19. 正则表达式匹配
  // function isMatch(s: string, p: string): boolean {
  //   //递归
  //   // return isMatchIdx(s, p, 0, 0);
  //   //动态规划
  //   const sLen = s.length;
  //   const pLen = p.length;
  //   const dp = new Array<boolean[]>(sLen+1);
  //   for (let idx = 0; idx < dp.length; idx++) {
  //     dp[idx] = new Array<boolean>(pLen+1).fill(false);
  //   }

  //   const isMatchIdx: (sIdx: number, pIdx: number) => boolean = (sIdx, pIdx) => {
  //     return p[pIdx-2] === s[sIdx-1] || p[pIdx-2] === '.';
  //   }

  //   // 初始化 dp
  //   dp[0][0] = true;
  //   for(let j = 2; j <= pLen; j += 2) {
  //     //当s为空时，p必须满足a*b*.*这样的结构才能匹配成空串
  //     //当s不为空，p为空为false
  //     dp[0][j] = dp[0][j - 2] && p[j - 1] == '*';
  //   }

  //   for (let i = 1; i < sLen+1; i++) {
  //     for (let j = 0; j < pLen+1; j++) {
  //       if (p[j-1] === '*') {
  //         if (isMatchIdx(i, j)) {
  //           dp[i][j] = dp[i][j-2] || dp[i-1][j];
  //         } else {
  //           dp[i][j] = dp[i][j-2];
  //         }
  //       } else {
  //         if (isMatchIdx(i, j+1)) {
  //           dp[i][j] = dp[i-1][j-1];
  //         } else {
  //           dp[i][j] =false;
  //         }
  //       }
  //     }
  //   }
  //   return dp[sLen][pLen];
  // }

  // function isMatchIdx(
  //   s: string,
  //   p: string,
  //   sIdx: number,
  //   pIdx: number
  // ): boolean {
  //   if (!s[sIdx] && !p[pIdx]) {
  //     return true;
  //   }
  //   if (!p[pIdx] && s[sIdx]) {
  //     return false;
  //   }
  //   if (p[pIdx + 1] === "*") {
  //     if (s[sIdx] === p[pIdx] || (p[pIdx] === "." && s[sIdx])) {
  //       // s 不能为空的原因： '.'正则要求必须至少有一个字符
  //       return (
  //         isMatchIdx(s, p, sIdx + 1, pIdx + 2) || // 例子：s === 'dbc', p === 'a*bc'
  //         isMatchIdx(s, p, sIdx + 1, pIdx) || // 例子：s === 'aaabc', p === 'a*bc'
  //         isMatchIdx(s, p, sIdx, pIdx + 2)
  //       ); // 例子： s === 'abc', p === 'a*abc'
  //     } else {
  //       return isMatchIdx(s, p, sIdx, pIdx + 2); // 例子： s === 'bc', p === 'a*bc'
  //     }
  //   }

  //   if (s[sIdx] === p[pIdx] || (p[pIdx] === "." && s[sIdx])) {
  //     return isMatchIdx(s, p, sIdx + 1, pIdx + 1); // 若第一个字符匹配上，则模式和字符串比较位置向后移一位
  //   }

  //   return false;
  // }

  //剑指 Offer 49. 丑数
  // function nthUglyNumber(n: number): number {
  //   const dp = new Array(n + 1).fill(0);
  //   dp[1] = 1;
  //   let p2 = 1, p3 = 1, p5 = 1;
  //   for (let i = 2; i <= n; i++) {
  //       const num2 = dp[p2] * 2, num3 = dp[p3] * 3, num5 = dp[p5] * 5;
  //       dp[i] = Math.min(Math.min(num2, num3), num5);
  //       if (dp[i] === num2) {
  //           p2++;
  //       }
  //       if (dp[i] === num3) {
  //           p3++;
  //       }
  //       if (dp[i] === num5) {
  //           p5++;
  //       }
  //   }
  //   return dp[n];
  // };

  // 剑指 Offer 60. n个骰子的点数
  //   function dicesProbability(n: number): number[] {
  //     const dp = new Array(n + 1).fill(0).map(i => new Array(n * 6).fill(0));
  //     for (let i = 1; i <= n; i++) {
  //       dp[i][i] = Math.pow(1 / 6, i);
  //     }
  //     dp[0][0] = 1;
  //     for (let i = 1; i <= n; i++) {
  //       for (let j = i; j <= 6 * i; j++) {
  //         let pre = 0
  //         for (let k = 1; j - k >= 0 && k <= 6; k++) {
  //           pre += dp[i - 1][j - k];
  //         }
  //         dp[i][j] = pre * (1 / 6);
  //       }
  //     }
  //     return dp[n].slice(n);
  // };

  // 剑指 Offer 17. 打印从1到最大的n位数
  // function printNumbers(n: number): number[] {
  // const res: number[] = [];
  // let max = 0;
  // for (let i = 1; i <= n; i++) {
  //   max *= 10;
  //   max += 9;
  // }
  // for (let i = 1; i <= max; i++) {
  //   res.push(i);
  // }
  // return res;

  // using Math.pow API
  // const res: number[] = [];
  // for (let i = 1; i <= Math.pow(10, n); i++) {
  //   res.push(i);
  // }
  // return res;
  // }

  // 剑指 Offer 51. 数组中的逆序对
  // function reversePairs(nums: number[]): number {
  //   // 归并排序
  //   let sum = 0;
  //   mergeSort(nums);
  //   return sum;

  //   function mergeSort (nums: number[]):number[] {
  //       if(nums.length < 2) return nums;
  //       const mid = nums.length / 2;
  //       let left = nums.slice(0,mid);
  //       let right = nums.slice(mid);
  //       return merge(mergeSort(left), mergeSort(right));
  //   }

  //   function merge(left:number[], right:number[]){
  //       let res = [];
  //       let leftLen = left.length;
  //       let rightLen = right.length;
  //       let len = leftLen + rightLen;
  //       for(let index = 0, i = 0, j = 0; index < len; index ++) {
  //           if(i >= leftLen) res[index] = right[j ++];
  //           else if (j >= rightLen) res[index] = left[i ++];
  //           else if (left[i] <= right[j]) res[index] = left[i ++];
  //           else {
  //               res[index] = right[j ++];
  //               sum += leftLen - i;//在归并排序中唯一加的一行代码
  //           }
  //       }
  //       return res;
  //   }
  // };

  // 剑指 Offer 14- II. 剪绳子 II
  // function cuttingRope(n: number): number {
  //   if (n <4) return n - 1;
  //   let res = 1;
  //   while (n > 4) {
  //     res = res * 3 % 1000000007;
  //     n = n - 3;
  //   }
  //   return res * n % 1000000007;
  // };

  //剑指 Offer 43. 1～n 整数中 1 出现的次数
  function countDigitOne(n: number): number {
    // 超时
    // let count = 0;
    // for (let i = 1; i <= n; i++) {
    //   let num = i;
    //   while (num > 0) {
    //     if (num % 10 === 1) count++;
    //     num = Math.floor(num / 10);
    //   }
    // }
    // return count;

    let mulk = 1;
    let count = 0;
    for (let k = 0; n >= mulk; ++k) {
      count +=
        Math.floor(n / (mulk * 10)) * mulk +
        Math.min(Math.max((n % (mulk * 10)) - mulk + 1, 0), mulk);
      mulk *= 10;
    }
    return count;
  }

  //剑指 Offer 44. 数字序列中某一位的数字
  function findNthDigit(n: number): number {
    let i = 1;
    while (i * Math.pow(10, i) < n) {
      n += Math.pow(10, i);
      i++;
    }

    const partition = Math.floor(n / i).toString();
    return parseInt(partition[n % i]);
  }

  //237. 删除链表中的节点
  // function deleteNode(root: ListNode | null): void {
  //   root.val = root.next.val;
  //   root.next = root.next.next;
  // };

  //2006. 差的绝对值为 K 的数对数目
  // function countKDifference(nums: number[], k: number): number {
  //   const map = new Map();
  //   for (let i = 0; i < nums.length; i++) {
  //     map.set(nums[i], i);
  //   }
  //   let count = 0;
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       if (Math.abs(nums[i] - nums[j]) === k) {
  //         count++;
  //       }
  //     }
  //   }
  //   return count;
  // };

  // 2160. 拆分数位后四位数字的最小和
  // function minimumSum(num: number): number {
  //   const arr = (num + '').split('').filter(item => item !== '0')
  //   let m1 = ''
  //   let m2 = ''
  //   arr.sort((a, b) => a - b)
  //   for (let i = 0; i < arr.length; i += 2) {
  //     m1 += arr[i]
  //     if (arr[i + 1]) m2 += arr[i + 1]
  //   }
  //   return m1 * 1 + m2 * 1
  // }

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
