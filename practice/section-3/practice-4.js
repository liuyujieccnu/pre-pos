'use strict';

function createUpdatedCollection(collectionA, objectB) {
	let key={};
	let result=[];
	for(let i=0;i<collectionA.length;i++){
		if(collectionA[i].indexOf('-')!=-1){
			if(key[collectionA[i].substring(0,1)]==null){
				key[collectionA[i].substring(0,1)]=Number(collectionA[i].substring(2,collectionA[i].length));
			}else{
				key[collectionA[i].substring(0,1)]+=Number(collectionA[i].substring(2,collectionA[i].length));
			}
			continue;
		}
		if(key[collectionA[i]]== null){
			key[collectionA[i]]=1;
		}else{
			key[collectionA[i]]++;
		}
	}
	for(let item in key){
		result.push({key:item,count:key[item]});
	}
	for(let i=0;i<result.length;i++) {
		if(objectB.value.indexOf(result[i].key)!=-1){
			result[i].count-=Math.floor(result[i].count/3);
		}
	}
	return result;
}
