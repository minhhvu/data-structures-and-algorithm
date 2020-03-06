/**
 * Create a class to struct a singly linked list
 */

class Node {
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(value){
        this.head = new Node(value)
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        this.tail.next = new Node(value);
        this.tail= this.tail.next;

        this.length = this.length + 1;
    }

    prepend(value) {
        this.head = new Node(value, this.head);
        this.length = this.length + 1;
    }

    //Return the node with the specific index
    traverseToIndex(index){
        if (index <0 || index>=this.length) return undefined;

        let count = 0;
        let node = this.head;
        while (count <index){
            node = node.next;
            count++;
        }

        return node;
    }

    //Insert a node with value and position in the list
    insert(index, value){
        if (index >= this.length) return false;

        if (index === 0) {
            this.prepend(value);
            return true;
        }

        if (index === this.length-1){
            this.append(value);
            return true;
        }

        let node = this.traverseToIndex(index-1);
        const newNode = new Node(value, node.next);
        node.next = newNode;
        this.length++;
        return true;
    }

    //Remove the node in the position i of the list
    remove(index){
        if (index <0 || index >= this.length) return false;

        if (index === 0) {
            this.head = this.head.next;
            this.length--;
            return true;
        }

        let node = this.traverseToIndex(index-1);
        if (index === this.length-1) {
            node.next = null;
            this.tail = node;
        } else {
            node.next = node.next.next;
        }

        this.length--;
        return true;
    }

    //Return the reversed list with head node and length
    reverse(){
        const headValue = this.tail.value;
        console.log(this.length);
        const list = new LinkedList(headValue);

        for (let i = this.length-2; i>=0; i--){
            console.log(i);
            const newNode = new Node(this.traverseToIndex(i).value);
            list.tail.next = newNode;
            list.tail = newNode;
        }

        list.length = this.length;
        return list;
    }

    //Return an array of linked list
    print(){
        let node = this.head;
        let output = [];
        while (node.next !== null){
            output.push([node.value, node.next === null ? null : node.next.value]);
            node = node.next;
        }
        output.push([node.value, null]);
        return output;
    }
}

//Test the class
let myLinkedList = new LinkedList(10);
myLinkedList.append(38);
myLinkedList.append(2);
myLinkedList.append(45);
myLinkedList.prepend(0);

myLinkedList.insert(2, 1100);
myLinkedList.insert(5, 110);
myLinkedList.insert(0, 111111111111);

myLinkedList.remove(1);
myLinkedList.remove(0);
myLinkedList.remove(5);

console.log(myLinkedList.print());

console.log(myLinkedList.reverse().print());




// module.exports = LinkedList;