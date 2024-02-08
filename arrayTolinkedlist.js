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
let arr = [1,2,3,4,5]

function arr2ll(arr){
    let head = new Node(arr[0])
    let current = head
    for(let i=1;i<arr.length;i++){
        let temp = new Node(arr[i])
        current.next = temp
        current = current.next
    }

    return head
}

let temp = arr2ll(arr)

while(temp){
    console.log(temp.val)
    temp = temp.next
}