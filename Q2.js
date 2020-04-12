// Q2. Implement a function propertyExists(obj, path) that takes in an object and a path (string) as arguments 
//and returns ‘False’ if the property doesn’t exist on that object or is null, else returns the value of the property

const obj = {
	a: 1,
	b: 2,
	c: {
		d: 100,
		e: {
			f: 45
		}
	}
};

Object.prototype.propertyExists = function(obj, k){
	var properties = k.split('.');

    for (var i = 0; i < properties.length; i++) {
        var prop = properties[i];

        if(!obj || !obj.hasOwnProperty(prop)){
            return false;
        } else {
            obj = obj[prop];
        }
    }

    return true;
}

console.log(propertyExists(obj, "c.d"));
console.log(propertyExists(obj, "c.d.g.h"));