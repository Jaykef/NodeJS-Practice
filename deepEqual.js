function deepEquals(valueOne, valueTwo) {
  if ( valueOne !== 'object' && typeof valueTwo !== 'object') {
    const isValueOneNaN = isNaN(valueOne) && typeof valueOne === 'number';
    const isValueTwoNaN = isNaN(valueTwo) && typeof valueTwo === 'number';

    if (isValueOneNaN && isValueTwoNaN) return true;

    return valueOne === valueTwo;
  }
  
  if (typeof valueOne !== typeof valueTwo) return false;

  if (Array.isArray(valueOne) && Array.isArray(valueTwo)) {
    if (valueOne.length !== valueTwo.length) return false;
    for (let i = 0; i < valueOne.length; i++) {
      if (!deepEquals(valueOne[i], valueTwo[i])) return false;
    }
  }

  if (Array.isArray(valueOne) || Array.isArray(valueTwo)) return false;

  return true;

}

console.log(deepEquals(1,1));
console.log(deepEquals('a','a'));
console.log(deepEquals(NaN,NaN));
console.log(deepEquals([],[]));
console.log(deepEquals([1],[1]));
console.log(deepEquals([[1,2],[3,4]],[[1,2],[3,4]]),'\n');


console.log('MIDPOINT\n');

console.log(deepEquals(1, 0));
console.log(deepEquals('a', 'b'));
console.log(deepEquals(NaN, 10));
console.log(deepEquals(NaN, 'NaN'));
console.log(deepEquals([],[1]));
console.log(deepEquals([1],[2]));
console.log(deepEquals([[1,2],[3,4]],[[1,3],[3,4]]));
