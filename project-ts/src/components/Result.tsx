import React from "react";

function Result() {
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
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null
  ): ListNode | null {
    if (!list1) return list2;
    if (!list2) return list1;
    if (list1.val < list2.val) {
      list1.next = mergeTwoLists(list1.next, list2);
      return list1;
    } else {
      list2.next = mergeTwoLists(list1, list2.next);
      return list2;
    }
  }

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
