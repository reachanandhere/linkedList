class Node {
  constructor(val, next, prev) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
  }
}

let arr = [1, 2, 3, 4, 5, 6];

let arr2dll = (arr) => {
  let head = new Node(arr[0]);
  let prev = head;
  for (let i = 1; i < arr.length; i++) {
    let temp = new Node(arr[i], null, prev);
    prev.next = temp;
    prev = temp;
  }
  return head;
};

let temp = arr2dll(arr);
// while(temp){
//     console.log(temp.val)
//     temp=temp.next
// }

let deleteHead = (head) => {
  if (head == null || head.next == null) return null;
  let prev = head;
  head = head.next;

  head.prev = null;
  prev.next = null;

  return head;
};

let deleteTail = (head) => {
  let tail = head;
  while (tail.next) {
    tail = tail.next;
  }
  let prev = tail.prev;
  prev.next = null;
  tail.prev = null;

  return head;
};

let deleteNode = (head, k) => {
  let temp = head;
  counter = 0;
  while (temp) {
    counter++;
    if (counter == k) break;
    temp = temp.next;
  }

  prev = temp.prev;
  next = temp.next;
  if (prev == null && next == null) {
    return null;
  }
  if (prev == null) {
    let prev = head;
    head = head.next;

    head.prev = null;
    prev.next = null;

    return head;
  } else if (next == null) {
    let tail = head;
    while (tail.next) {
      tail = tail.next;
    }
    let prev = tail.prev;
    prev.next = null;
    tail.prev = null;

    return head;
  }
  prev.next = next;
  next.prev = prev;
  temp.next = null;
  temp.prev = null;

  return head;
};

let reverse=(head)=>{
    if(head==null || head.next ==null)return head
    let prev = null
    let current = head
    while(current){
        prev = current.prev
        current.prev = current.next
        current.next = prev
        current = current.prev
    }
    return prev.prev
}


let newHead = reverse(temp);
while (newHead) {
  console.log(newHead.val);
  newHead = newHead.next;
}
