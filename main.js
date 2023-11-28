import { Node } from "./Node.js";
import { DoubleLinkedList } from "./DoubleLinkedList.js";

const DLL = new DoubleLinkedList();

// creating a double linked list
DLL.append(1);
DLL.append(2);
DLL.append(3);
DLL.append(4);
DLL.append(5);

// shit and unshift
DLL.unshfit(11);
DLL.shift();
console.log(DLL)

// get all cases
console.log(DLL.get(2));
console.log(DLL.get(0));
console.log(DLL.get(4));
console.log(DLL)

// set all cases
console.log(DLL.set(3,200));
console.log(DLL.set(0,100));
console.log(DLL.set(4,273));
console.log(DLL)

DLL.append(333);
console.log(DLL);

// pop
DLL.pop();
console.log(DLL);
DLL.append(333);

// insert all cases

DLL.insert(1,5555);
DLL.insert(0,5555);
DLL.insert(5,5555);
console.log(DLL)

// remove all cases
DLL.remove(6);
DLL.remove(0);
console.log(DLL);














