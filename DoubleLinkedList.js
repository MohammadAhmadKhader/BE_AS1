import { Node } from "./Node.js"


export class DoubleLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(addValue) {
        const newNode = new Node(addValue);
        
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        newNode.index = this.length-1;
    }

    pop() {
        if(!this.head) {
            throw new Error("Linked list is empty");
        }
        
        if(this.size() === 1) {
            this.tail = null;
            this.head = null;
            this.length--;
            return;
        }else if(this.size() > 1){
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.length--;
            return;
        }
    }

    shift() {
        if(!this.head){
            throw new Error("Double Linked List is Empty");
        }
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;

        this.adjustingIndex(-1 , this.head , -1);
    }

    unshfit(addValue) {
        const newNode = new Node(addValue);
        
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        
        this.length++;
        newNode.index = 0;
        this.adjustingIndex(1,newNode);
    }

    get(index) {
        if(!this.head) {
            throw new Error("Double Linked List is Empty");
        }

        if(index >= this.length) {
            throw new Error("index is larger than the linked list!");
        }

        if(index < 0) {
            throw new Error("invalid input, index must be at least 0");
        }

        if(this.head.index === index) {
            return this.head.value;
        }

        let pointer = this.head;
        while(pointer.next && pointer.next.index !== index ) {
            pointer = pointer.next;
        }

        if(pointer.next.index === index) {
            return pointer.next.value;
        }
        return "index not found";
    }

    set(index,value) {
        let pointer = this.head;

        if(index > this.length - 1) {
            throw new Error("this index is not inside the linked list");
        }

        if(index < 0) {
            throw new Error("invalid index, index must be at least 0");
        }

        if(pointer.index === index) {
            pointer.value = value;
            return `the value of index :${index} has changed to ${value}`;
        }

        while(pointer.next && pointer.next.index !== index){
            pointer = pointer.next;
        }

        if(pointer.next.index === index) {
            pointer.next.value = value;
        }
        return `the value of index :${index} has changed to ${value}`;
    }

    insert(index , value) {
        let pointer = this.head;

        if(index > this.length -1 || index < 0){
            return false;
        }

        while(pointer.next && pointer.index !== index){
            pointer = pointer.next;
        }

        if(pointer.index === index) {
            const newNode = new Node(value); 

            if(this.head.index !== index && this.tail.index !== index){
                newNode.next = pointer;
                newNode.prev = pointer.prev;
                newNode.index = index;
                pointer.prev.next = newNode;
            }else if(this.head.index === index) {
                newNode.next = pointer;
                this.head.prev = newNode;
                newNode.index = index;
                this.head = newNode;
            }else if(this.tail.index === index){
                this.tail.prev.next = newNode;
                newNode.prev = this.tail.prev;
                this.tail.prev = newNode;
                newNode.next = this.tail;
                newNode.index = index;
                this.tail.index = this.tail.index + 1;
                this.length++;
                return true;
            }
            
            this.adjustingIndex(1 , newNode);
            this.length++;
            return true;
        }
        return false;
    }

    remove(index) {
        let pointer = this.head;

        if(index > this.length -1 ) {
            throw new Error("this index does not exist");
        }

        if(index < 0) {
            throw new Error("Invalid Index, Index must be at least 0");
        }

        while(pointer.next && pointer.index !== index) {
            pointer = pointer.next;
        }

        if(index === 0 && this.size() > 1 && this.tail.index !== index) {
            this.head = this.head.next;
            this.head.prev = null;
            this.length--;
            this.adjustingIndex(-1,pointer,-1);
            return;

        }else if( index === 0 && this.size() === 1){
            this.head = null;
            this.tail = null;
            this.length = 0;
            return;
        }

        if(this.tail.index === index){
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.length--;
            this.tail.index = index - 1;
            return;
        }

        if(pointer.index === index && index !==0 && this.tail.index !== index) {
            pointer.prev.next = pointer.next;
            this.length--;
            this.adjustingIndex(-1,pointer.prev);
        }
    }
    adjustingIndex(value , node , startChangedBy = 0) {
        // how much to reduce the index of nodes or increase and starting from which node to the end!
        // third parameter was added in case the beginning value was needed to be changed

        let pointer = node;
        pointer.index = pointer.index + startChangedBy;
        while(pointer.next) {
            pointer.next.index = pointer.next.index + value;
            pointer = pointer.next;
        }
    }

    size() {
        return this.length;
    }

}


// pop(removeValue) {
//     if(!this.head){
//         throw new Error("The double linked list is empty");
//     } 
//     if(this.head.value === removeValue) {
//         this.head.value = null;
//     }

//     let currentNode = this.head;
//     while (currentNode.next.value !== removeValue && currentNode.next) {
//         currentNode = currentNode.next;
//     }

//     if(currentNode.next.value === removeValue) {
//         currentNode.next = currentNode.next.next;

//         if(!currentNode.next){
//             // if the next value is null / undefined make it this current Node as tail
//             this.tail = currentNode;
//         }
//         this.length--;
//     }
// }