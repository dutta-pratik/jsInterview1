//Q6. Explain the concept of prototypes in JS. How is it related to Classes in ES6

The prototype is an object that is associated with every functions and objects by default in JavaScript, 
where function's prototype property is accessible and modifiable and object's prototype property is not visible.

Every function includes prototype object by default.

The prototype object is special type of object to which additional properties can be attached to it 
which will be shared across all the instances of it's constructor function.

class keyword was described as syntactical sugar over the existing prototype-based inheritance.
class keyword in ES6 is equivalent to a constructor function definition that conforms to prototype-based inheritance. 
It may seem redundant that a new keyword was introduced to wrap an already existing feature but it leads to readable 
code and lays the foundation upon which future object oriented features can be built.