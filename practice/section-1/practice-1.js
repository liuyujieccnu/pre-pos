'use strict';

function includes(collection, char) {
  for (let item of collection) {
    if (item === char) {
      return true;
    }
  }
  return false;
}

function collectSameElements(collectionA, collectionB) {
  // let collectionC = [];
  // for (let i = 0; i < collectionA.length; i++) {
  //   for (let j = 0; j < collectionB.length; j++) {
  //     if (collectionA[i] === collectionB[j]) {
  //       collectionC.push(collectionA[i]);
  //     }
  //   }
  // }
  // return collectionC;
  let result = [];
  for (let item of collectionA) {
    if (includes(collectionB, item)) {
      result.push(item);
    }
  }
  return result;
}
