class Node {
    constructor(value, next=null, prev = null){
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList {
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        this.tail.next = new Node(value, null, this.tail);
        this.tail = this.tail.next;
        this.length++;
    }

    prepend(value){
        this.head.prev = new Node(value, this.head, null);
        this.head = this.head.prev;
        this.length++;
    }

    //Return the node in the index position
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

    insert(index, value){
        if (index === 0) {
            this.prepend(value);
            return true;
        };

        if (index === this.length) {
            this.append(value);
            return true;
        }
        const node = this.traverseToIndex(index);
        if (node === undefined) return false;
        const newNode = new Node(value, node, node.prev);
        node.prev.next = newNode;
        node.prev = newNode;
        this.length++;
        return true;
    }

    remove(index){
        if (index <0 || index >= this.length) return false;

        if (index === 0) {
            this.head.next.prev = null;
            this.head = this.head.next;
            this.length--;
            return true;
        }

        if (index === this.length-1){
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
            this.length--;
            return true;
        }

        let node = this.traverseToIndex(index);
        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.length--;
        return true;
    }

    //Return an array that stores the values of list
    print(){
        let node = this.head;
        let output = [];
        while (node.next !== null){
            output.push([node.value, node.next === null ? null : node.next.value, node.prev === null ? null : node.prev.value]);
            node = node.next;
        }
        output.push([node.value, null,node.prev === null ? null : node.prev.value]);
        return output;
    }
}

//Testing
const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(34);
myLinkedList.append(23);
myLinkedList.append(4);

myLinkedList.prepend(1);;
myLinkedList.prepend(0);

myLinkedList.remove(0);
myLinkedList.remove(4);
myLinkedList.remove(2);

myLinkedList.insert(0, 3);
myLinkedList.insert(4, 343);
myLinkedList.insert(2, 79);

console.log(myLinkedList.print());
console.log(myLinkedList.length);