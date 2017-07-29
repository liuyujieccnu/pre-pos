'use strict';

function includes(collection, char) {
  for (let item of collection) {
    if (item === char) {
      return true;
    }
  }
  return false;
}

function createUpdatedCollection(collectionA, objectB) {
  // for (let i = 0; i < collectionA.length; i++) {
  //   if (objectB.value.indexOf(collectionA[i].key) != -1) {
  //     collectionA[i].count -= Math.floor(collectionA[i].count / 3);
  //   }
  // }
  // return collectionA;
  let result = [];
  for (let item of collectionA) {
    let char = item.key;
    let count = item.count;
    if (includes(objectB.value, char)) {
      result.push({key: char, count: count - Math.floor(count / 3)});
    } else {
      result.push(item);
    }
  }
  return result;
}
