class Node {
  constructor(data, next) {
    this.val = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
  }
}
let arr = [1, 2, 3, 4, 5];

function arr2ll(arr) {
  let head = new Node(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    let temp = new Node(arr[i]);
    current.next = temp;
    current = current.next;
  }

  return head;
}

let temp = arr2ll(arr);

var swapNodes = function(head, k) {
    let curNode = head, endNode = head, count =1;
     while(count < k){
         curNode = curNode.next;
         count++;
     }
     let frontNode = curNode;
     curNode = curNode.next;
     while(curNode){
         curNode = curNode.next;
         endNode = endNode.next;
     }
     [frontNode.val, endNode.val] = [endNode.val, frontNode.val];
     return head;
 
 };

console.log(swapNodes(temp, 2));

// function deleteHead(head) {
//   if (!head) return head;
//   let temp = head;
//   head = head.next;
//   temp.next = null;
//   return head;
// }

// function deleteNode(head, k) {
//   if (!head) return head;
//   if (k == 1) {
//     let temp = head;
//     head = head.next;
//     temp.next = null;
//     return head;
//   }

//   let temp = head,
//     counter = 0,
//     prev = null;
//   while (temp) {
//     counter++;
//     if (counter == k) {
//       prev.next = prev.next.next;
//       temp.next = null;
//       break;
//     }
//     prev = temp;
//     temp = temp.next;
//   }

//   return head;
// }

// var insertPostition=(head, el,  k)=>{
//     if(head==null){
//         if(k==1) return new Node(el)
//         else return head
//     }
//     if(k==1) {
//         return new Node(el, head)
//     }
//     let temp = head, c=0
//     while(temp){
//         c++
//         if(c==(k-1)){
//             let x = new Node(el, temp.next)
//             temp.next = x
//             break
//         }
//         temp = temp.next
//     }
//     return head
// }

// temp = insertPostition(temp,100,2)

// // temp = deleteNode(temp, 1);

while (temp) {
  console.log(temp.val);
  temp = temp.next;
}
