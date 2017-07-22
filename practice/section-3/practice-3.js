'use strict';

function createUpdatedCollection(collectionA, objectB) {
	let key={};
	let result=[];
	for(let i=0;i<collectionA.length;i++){
		if(key[collectionA[i]]== null){
			key[collectionA[i]]=1;
		}else{
			key[collectionA[i]]++;
		}
	}
	for(let item in key){
		result.push({key:item,count:key[item]})
	}
	for(let i=0;i<result.length;i++) {
		if(objectB.value.indexOf(result[i].key)!=-1){
			result[i].count-=Math.floor(result[i].count/3);
		}
	}
	return result;
}
