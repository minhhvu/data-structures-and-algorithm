/**
 * Remove duplicates from the unsorted linked list
 */


function removeDuplicates(list) {
    let node = list.head;
    while (node !== null){
        //Search for duplicates and then remove
        let newNode = list.head;
        while (newNode !== node) {
            if (newNode.value === node.value) {
                //Remove this node

                break;
            }
            newNode = newNode.next;
        }
        node = node.next;
    }
}

class Node {
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }


}