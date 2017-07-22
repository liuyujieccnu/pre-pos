'use strict';

function countSameElements(collection) {
  	let key={};
	let result=[];
	for(let i=0;i<collection.length;i++){
		if(collection[i].indexOf('-')!=-1){
			if(key[collection[i].substring(0,1)]==null){
				key[collection[i].substring(0,1)]=Number(collection[i].substring(2,collection[i].length));
			}else{
				key[collection[i].substring(0,1)]+=Number(collection[i].substring(2,collection[i].length));
			}
			continue;
		}
		if(collection[i].indexOf(':')!=-1){
			if(key[collection[i].substring(0,1)]==null){
				key[collection[i].substring(0,1)]=Number(collection[i].substring(2,collection[i].length));
			}else{
				key[collection[i].substring(0,1)]=key[collection[i].substring(0,1)]+Number(collection[i].substring(2,collection[i].length));
			}
			continue;
		}
		if(collection[i].indexOf('[')!=-1){
			if(key[collection[i].substring(0,1)]==null){
				key[collection[i].substring(0,1)]=Number(collection[i].substring(2,collection[i].length-1));
			}else{
				key[collection[i].substring(0,1)]=key[collection[i].substring(0,1)]+Number(collection[i].substring(2,collection[i].length-1));
			}
			continue;
		}
		if(key[collection[i]]== null){
			key[collection[i]]=1;
		}else{
			key[collection[i]]++;
		}
	}
	for(let item in key){
		result.push({name:item,summary:key[item]});
	}
	return result;
}
