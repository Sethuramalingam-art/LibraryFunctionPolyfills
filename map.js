//polyfills for map function

Array.prototype.myMap = function (callBackFn) {
  var arr = [];
  console.log(this);
  console.log(callBackFn);
  for (var i = 0; i < this.length; i++) {
    arr.push(callBackFn(this[i], i, this));
  }
};

function mapFunction() {
  let x = [
    { id: 1, name: "Sethu" },
    { id: 2, name: "Saran" },
    { id: 3, name: "Magi" },
  ];

  const result = x.myMap((val, index) => (val.age = 10));
}

console.log(mapFunction());
