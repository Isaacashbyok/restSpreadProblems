function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}

//rest operator and arrow func

const filterOutOdds = (...args) => args.filter((num) => num % 2 === 0);

const findMin = (...args) => Math.min(...args);

const mergeObjs = (obj1, obj2) => ({ ...obj1, ...obj2 });

const dblReturnArgs = (arr, ...args) => [...arr, ...args.map((num) => num * 2)];

/** remove a random element in the items array
and return a new array without that item. */

// function removeRandom(items) {

// }

const removeRandom = (items) => {
  let i = Math.floor(Math.random() * items.length);
  return [...items.slice(0, i), ...items.slice(i + 1)];
};

/** Return a new array with every item in array1 and array2. */

// function extend(array1, array2) {

// }

const extend = (arr1, arr2) => {
  return [...arr1, ...arr2];
};

/** Return a new object with all the keys and values
from obj and a new key/value pair */

// function addKeyVal(obj, key, val) {

// }

const addKeyVal = (obj, key, val) => {
  let objCopy = { ...obj };
  objCopy[key] = val;
  return objCopy;
};

/** Return a new object with a key removed. */

// function removeKey(obj, key) {

// }

const removeKey = (obj, key) => {
  let objCopy = { ...obj };
  delete objCopy[key];
  return objCopy;
};

/** Combine two objects and return a new object. */

// function combine(obj1, obj2) {

// }

const combineObj = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

/** Return a new object with a modified key and value. */

// function update(obj, key, val) {

// }

const updateObj = (obj, key, val) => {
  let updatedObj = { ...obj };
  updatedObj[key] = val;
  return updatedObj;
};
