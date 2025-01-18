export default class SinglyLinkedList<T> {
    public length: number;
    private head: node<T>;
    private tail: node<T>;

    constructor() {}

    prepend(item: T): void {
        const newNode: node<T> = new node();
        newNode.value = item;
        newNode.next = this.head.next;
        this.head.next = newNode;
        this.length++;
    }
    insertAt(item: T, idx: number): void {}
    append(item: T): void {
        const newNode: node<T> = new node();
        newNode.value = item;
        this.tail.next = newNode;
        this.length++;
    }
    remove(item: T): T | undefined {}
    get(idx: number): T | undefined {}
    removeAt(idx: number): T | undefined {}
}

class node<T> {
    public next: node<T>;
    public value: T;
}
