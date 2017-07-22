'use strict';

function createUpdatedCollection(collectionA, objectB) {
	for(let i=0;i<collectionA.length;i++) {
		for(let j=0;j<objectB.value.length;j++){
			if(collectionA[i].key==objectB.value[j]){
				collectionA[i].count-=1;
			}
		}
	}
	return collectionA;
}
