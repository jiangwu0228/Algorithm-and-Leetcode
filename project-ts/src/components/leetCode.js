// leetCode 14. Longest Common Prefix
// var longestCommonPrefix = function (strs) {
//     if (strs.length === 0) return '';
//     if (strs.length === 1) return strs[0];
//     let prefix = strs[0];
//     for (let i = 1; i < strs.length; i++) {
//         console.log("this is " + i + " time strs[i]: " + strs[i]);
//         console.log("this is " + i + " time prefix: " + prefix);
//         console.log("this is " + i + " time strs[i].indexOf(prefix): " + strs[i].indexOf(prefix));
//         while (strs[i].indexOf(prefix) !== 0) {
//             prefix = prefix.slice(0, prefix.length - 1);
//             console.log("this is " + i + " time while prefix: " + prefix);
//         }
//     }
//     return prefix;
// };

// console.log(longestCommonPrefix(["flower","flow","flight"]));

//21. Merge Two Sorted Lists
/**
 * Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

//   function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;
  if (list1.val < list2.val) {
  }
};


function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    arr = arr.flat();
    for (let i = 0; i > arr.length; i++){
      product *= arr[i]
    }
    // Only change code above this line
    return product;
  }
  
  console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));


  var copyRandomList = function(head) {
    
  };