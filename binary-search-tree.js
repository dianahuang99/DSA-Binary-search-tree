class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }
    let currentRoot = this.root;

    while (true) {
      if (val < currentRoot.val) {
        if (currentRoot.left === null) {
          currentRoot.left = new Node(val);
          return this;
        } else {
          currentRoot = currentRoot.left;
        }
      } else {
        if (currentRoot.right === null) {
          currentRoot.right = new Node(val);
          return this;
        } else {
          currentRoot = currentRoot.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if (val < current.val) {
      if (current.left === null) {
        current.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.left);
    } else {
      if (current.right === null) {
        current.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentRoot = this.root;
    if (currentRoot.val === val) return currentRoot;

    while (currentRoot) {
      if (val < currentRoot.val) {
        if (currentRoot.left === null) return undefined;
        else if (currentRoot.left.val === val) {
          return currentRoot.left;
        } else {
          currentRoot = currentRoot.left;
        }
      } else {
        if (currentRoot.right === null) return undefined;
        else if (currentRoot.right.val === val) {
          return currentRoot.right;
        } else {
          currentRoot = currentRoot.right;
        }
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (this.root === null) return undefined;

    if (val === current.val) return current;

    if (val < current.val) {
      if (current.left === null) return undefined;
      return this.findRecursively(val, current.left);
    } else {
      if (current.right === null) return undefined;
      return this.findRecursively(val, current.right);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let currentRoot = this.root;
    let data = [];

    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(currentRoot);
    return data;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let currentRoot = this.root;
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }

    traverse(currentRoot);
    return data;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let currentRoot = this.root;
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    }

    traverse(currentRoot);
    return data;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const queue = [];
    const data = [];
    queue.push(this.root);
    data.push(this.root.val);
    while (queue.length != 0) {
      let tempNode = queue.shift();
      // document.write(tempNode.data + " ");

      /* Enqueue left child */
      if (tempNode.left != null) {
        queue.push(tempNode.left);
        data.push(tempNode.left.val);
      }

      /* Enqueue right child */
      if (tempNode.right != null) {
        queue.push(tempNode.right);
        data.push(tempNode.right.val);
      }
    }
    return data;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
