class Node {
    constructor(data) {
        this.val = data
        this.next = null
    }
}

class LinkedList {
    constructor(head) {
        this.head = head
    }
}

let n1 = new Node(1)
let n2 = new Node(2)
n1.next = n2

let list1 = new LinkedList(n1)

console.log(list1)