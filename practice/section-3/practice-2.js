'use strict';

function createUpdatedCollection(collectionA, objectB) {
	for(let i=0;i<collectionA.length;i++) {
		if(objectB.value.indexOf(collectionA[i].key)!=-1){
			collectionA[i].count-=Math.floor(collectionA[i].count/3);
		}
	}
	return collectionA;
}
