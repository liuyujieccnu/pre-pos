'use strict';

function includes(collection,ch) {
  for(let item of collection){
    if(item === ch){
      return true;
    }
  }
  return false;
}

function collectSameElements(collectionA, objectB) {
  // var collectionC = new Array;
  // for (let i = 0; i < collectionA.length; i++) {
  //   for (let j = 0; j < objectB.value.length; j++) {
  //     if (collectionA[i] === objectB.value[j]) {
  //       collectionC.push(collectionA[i]);
  //     }
  //   }
  // }
  // return collectionC;
  let result = [];
  for (let item of collectionA) {
    if (includes(objectB.value, item)) {
      result.push(item);
    }
  }
  return result;
}
