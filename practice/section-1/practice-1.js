'use strict';

function collectSameElements(collectionA, collectionB) {
	var collectionC = new Array;
	for(let i=0;i<collectionA.length;i++){
		for(let j=0;j<collectionB.length;j++){
			if(collectionA[i]===collectionB[j]){
				collectionC.push(collectionA[i]);
			}
		}
	}
  	return collectionC;
}
