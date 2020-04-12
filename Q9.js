//Q9. Why do we need let and const in JS. Compare it with the problems in ES5

In ES5, there is no variable earlier which helps to define the block scope variable.
Like when we use var inside the scope we can access it outside the scope also.
So, let is introduced as block scope variable.
Let variables declared inside a block can not be accessed from outside the block.

As let, const is also a block scope variable.
const variables must be assigned a value when they are declared.
const variable cannot be reassigned.
It does NOT define a constant value. It defines a constant reference to a value.
Because of this, we cannot change constant primitive values, but we can change the properties of constant objects.


