import logo from "./logo.svg";
import "./App.css";

function App() {
  // seek and destroy
  //You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
  //Note: You have to use the arguments object.
  // function destroyer(arr, ...args) {

  //   return arr.filter(e => !args.includes(e));
  // }
  /**
   * @param {Node} root
   * @return {Node}
   */

  function Node(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
//剑指 Offer 36. 二叉搜索树与双向链表
  var treeToDoublyList = function (root) {
    if (!root) return;
    // 头节点
    let head = null;
    // 上一个节点
    let preNode = head;
    const inOrder = (node) => {
      if (!node) return;
      // 遍历左子树
      inOrder(node.left);
      // 处理当前节点
      if (!preNode) {
        // 遍历到最左边节点，此时节点就是双向链表的head
        head = node;
      } else {
        // 上一个节点的右指针指向当前节点
        preNode.right = node;
      }
      // 当前节点的左指针指向上一个节点
      node.left = preNode;
      // 进入下一轮之前把上一个节点的指针指向当前节点
      preNode = node;
  
      // 遍历右子树
      inOrder(node.right);
    };
    // 中序遍历
    inOrder(root);
    // 完成中序遍历后，pre指向了最后一个节点，head指向头节点，
    // 因为是循环链表，所以头节点的左指针指向最后一个节点，最后一个节点的右指针指向头节点
    head.left = preNode;
    preNode.right = head;
    return head;
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
