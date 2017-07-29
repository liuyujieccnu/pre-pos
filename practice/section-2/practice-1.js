'use strict';

function find(result, ch) {
  for (let item of result) {
    if (item.key === ch) {
      return item;
    }
  }
  return null;
}

function countSameElements(collection) {
  // let key = {};
  let result = [];
  // for (let i = 0; i < collection.length; i++) {
  //   if (key[collection[i]] == null) {
  //     key[collection[i]] = 1;
  //   } else {
  //     key[collection[i]]++;
  //   }
  // }
  // for (let item in key) {
  //   result.push({key: item, count: key[item]})
  // }
  for (let item of collection) {
    let obj = find(result, item);
    if (obj) {
      obj.count++;
    } else {
      result.push({key: item, count: 1});
    }
  }
  return result;
}
