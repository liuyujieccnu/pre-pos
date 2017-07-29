'use strict';
function includes(collection,ch) {
  for(let item of collection){
    if(item === ch){
      return true;
    }
  }
  return false;
}

function collectSameElements(collectionA, collectionB) {
  // var collectionC = new Array;
  // for (let i = 0; i < collectionA.length; i++) {
  //   for (let j = 0; j < collectionB[0].length; j++) {
  //     if (collectionA[i] === collectionB[0][j]) {
  //       collectionC.push(collectionA[i]);
  //     }
  //   }
  // }
  // return collectionC;
  let result = [];
  for (let item of collectionA) {
    if (includes(collectionB[0], item)) {
      result.push(item);
    }
  }
  return result;
}
