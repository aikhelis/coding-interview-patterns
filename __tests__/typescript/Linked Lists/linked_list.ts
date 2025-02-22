// /* Definition of ListNode: */
// class ListNode {
//     val: number; 
//     next: LLNode;
//     constructor(val: number){
//         this.val = val;
//         this.next = null;
//     }
// }
// type LLNode = ListNode | null;

// class List {
//     head: LLNode;
//     constructor(value) {
//         const newNode = new ListNode(value);
//         this.head = newNode;
//     }

//     push(value) {
//         const newNode = new ListNode(value);
//         if (!this.head) {
//             this.head = newNode;
// 		} else {
// 			let current = this.head;
// 			while (current.next !== null) {
// 				current = current.next;
// 			}
// 			current.next = newNode;
// 		}
//     }

//     printList() {
//         let temp = this.head;
//         while (temp !== null) {
//             console.log(temp.val);
//             temp = temp.next;
//         }
//     }
// }

// class MultieLevelListNode {
//     val: number; next: MLLNode; child: MLLNode;
//     constructor(val: number){
//         this.val = val;
//         this.next = null;
//         this.child = null;
//     }
// }

// type MLLNode = MultieLevelListNode | null;

// function removeKthLastNode(head: LLNode, k: number): LLNode {
//     if (k <= 0) return head;
//     // A dummy node to ensure there's a node before 'head' in case we 
//     // need to remove the head node.
//     let dummy: LLNode = new ListNode(-1);
//     dummy.next = head;
//     let trailer: LLNode = dummy, leader: LLNode = dummy;
//     // Advance 'leader' k steps ahead.  
//     for (let i = 0; i < k; i++){
//         leader = leader.next;
//         // If k is larger than the length of the linked list, no node 
//         // needs to be removed.
//         if (leader === null) 
//             return head;
//         console.log("leader1: ", leader.val);
//     }
//     // Move 'leader' to the end of the linked list, keeping 'trailer'
//     // k nodes behind.
//     while (leader.next !== null){
//         leader = leader.next;
//         trailer = trailer.next;
//         console.log("leader2: ", leader.val);
//         console.log("trailer2: ", trailer.val);
//     }
//     // Remove the kth node from the end.
//     trailer.next = trailer.next.next;
//     console.log("trailer3: ", trailer.val);
//     // console.log("dummy.next: ", dummy.next.val);
//     return dummy.next;


//     // // Move both 'firstPointer' and 'secondPointer' until 'firstPointer'
//     // // reaches the end of the linked list.
//     // while (firstPointer !== null){
//     //     firstPointer = firstPointer.next;
//     //     secondPointer = secondPointer.next;
//     // }
//     // // 'secondPointer' will be pointing at the node before the node to be
//     // // removed.
//     // secondPointer.next = secondPointer.next.next;
//     // return dummyNode.next;
// }

// let list = new List(1);
// list.push(2);
// console.log("Original list:");
// list.printList();

// console.log("Modified list (k=1):");
// list.head = removeKthLastNode(list.head, 1);
// list.printList();

// list = new List(1);
// list.push(2);
// console.log("Modified list (k=2):");
// list.head = removeKthLastNode(list.head, 2);
// list.printList();

// list = new List(1);
// list.push(2);
// console.log("Modified list (k=3):");
// list.head = removeKthLastNode(list.head, 3);
// list.printList();

// list = new List(1);
// list.push(2);
// console.log("Modified list (k=0):");
// list.head = removeKthLastNode(list.head, 0);
// list.printList();

// list = new List(1);
// list.push(2);
// console.log("Modified list (k=-1):");
// list.head = removeKthLastNode(list.head, -1);
// list.printList();

// list = new List(1);
// console.log("Original list:");
// list.printList();
// console.log("Modified list (k=1):");
// list.head = removeKthLastNode(list.head, 1);
// list.printList();