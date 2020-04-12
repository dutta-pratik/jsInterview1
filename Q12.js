//Q12. Implement Queue class in JS.

/* Queues */

function Queue () { 
    data = [];

    //print all data
    this.print = function() {
        console.log(data);
    };
    //add an element to queue
    this.enqueue = function(element) {
        data.push(element);
    };
    //remove front element from queue 
    this.dequeue = function() {
        return data.shift(); 
    };
    //fetch head of data
    this.head = function() {
        return data[0];
    };
    //return size of data
    this.size = function() {
        return data.length; 
    };
    
}
//----------INITIALISING Queue----------------//
let newQueue = new Queue(); 
//----------ADDING ELEMENT TO QUEUE----------------//
newQueue.enqueue(1); 
newQueue.enqueue(2);
newQueue.enqueue(3);
newQueue.enqueue(5);
newQueue.enqueue(6);
//----------PRINT ALL ELEMENTS----------------//
newQueue.print();
//----------DEQUEUE QUEUE----------------//
console.log(newQueue.dequeue());
//----------PRINT CURRENT HEAD----------------//
console.log(newQueue.head());
//----------PRINT ALL ELEMENTS----------------//
newQueue.print();
