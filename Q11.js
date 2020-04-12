//Q11. Implement Stack class in JS.

// Stack function
let Stack = function() {
    this.count = 0;
    this.values = {};
  
    // Add an element
    this.push = function(value) {
        this.values[this.count] = value;
        this.count++;
    }
    
    // Remove an element
    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        var result = this.values[this.count];
        delete this.values[this.count];
        return result;
    }
    
    //Size of stack
    this.size = function() {
        return this.count;
    }
    
    // Returns last element
    this.peek = function() {
        return this.values[this.count-1];
    }
}

let newStack = new Stack();

newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.push(4);
console.log(newStack.peek());
console.log(newStack.pop());
console.log(newStack.peek());
