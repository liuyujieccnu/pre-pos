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
  //   for (let j = 0; j < objectB.value.length; j++) {
  //     if (collectionA[i].key == objectB.value[j]) {
  //       collectionA[i].count -= 1;
  //     }
  //   }
  // }
  // return collectionA;
  let result = [];
  for (let item of collectionA) {
    let char = item.key;
    if (includes(objectB.value, char)) {
      result.push({key: char, count: item.count - 1});
    }else {
      result.push(item);
    }
  }
  return result;
}
