//  Implement customMap() function for JS arrays. The functionality should be exactly the same as that of JS native .map() function. Function customMap() should return a new array and not change the array on which we are mapping


Array.prototype.customMap = function(callback){
    let obj = this;
  
  let newArr = [];
  	for(let index=0; index<obj.length; index++){
      newArr.push(callback(obj[index], index, obj));
    }
  return newArr;
}
const arr = [1, 2, 3];
const squaredNums = arr.customMap((item, index) => {
	return item * index;
}); 

console.log("outer",squaredNums);