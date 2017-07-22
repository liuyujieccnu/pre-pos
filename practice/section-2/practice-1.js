'use strict';

function countSameElements(collection) {
	let key={};
	let result=[];
	for(let i=0;i<collection.length;i++){
		if(key[collection[i]]== null){
			key[collection[i]]=1;
		}else{
			key[collection[i]]++;
		}
	}
	for(let item in key){
		result.push({key:item,count:key[item]})
	}
	return result;
}
