'use strict';

function countSameElements(collection) {
	let key={};
	let result=[];
	for(let i=0;i<collection.length;i++){
		if(key[collection[i].substring(0,1)]==null){
			key[collection[i].substring(0,1)]=Number(collection[i].substring(2,collection[i].length));
		}else{
			key[collection[i].substring(0,1)]+=Number(collection[i].substring(2,collection[i].length));
		}
	}
	for(let i=0;i<collection.length;i++){
		if(collection[i].indexOf('-')==1){
			continue;
		}
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
