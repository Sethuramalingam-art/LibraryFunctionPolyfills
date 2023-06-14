//polyfills for map function
Array.prototype.myMap = function(calFn) {
var arr=[];

	for (var i= 0;i< this.length;i++) {
  	arr.push(calFn(this[i], i))
  }
  return arr

}

const x = [4,5,3,33,2];


const y = x.myMap((item,index)=> item*10);

console.log(y)

