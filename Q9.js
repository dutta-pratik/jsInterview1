//Q9. Why do we need let and const in JS. Compare it with the problems in ES5

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