'use strict';
function includes(collection, char) {
  for (let item of collection) {
    if (item === char) {
      return true;
    }
  }
  return false;
}

function find(result, ch) {
  for (let item of result) {
    if (item.key === ch) {
      return item;
    }
  }
  return null;
}

function summarize(collection) {
  let result=[];
  for (let item of collection) {
    let obj = find(result, item);
    if (obj) {
      obj.count++;
    } else {
      result.push({key: item, count: 1});
    }
  }
  return result;
}


function minus(collection, object) {
  let result = [];
  for (let item of collection) {
    let char = item.key;
    let count = item.count;
    if (includes(object.value, char)) {
      result.push({key: char, count: count - Math.floor(count / 3)});
    } else {
      result.push(item);
    }
  }
  return result;
}

function createUpdatedCollection(collectionA, objectB) {
	// let key={};
  // let result=[];
	// for(let i=0;i<collectionA.length;i++){
	// 	if(key[collectionA[i]]== null){
	// 		key[collectionA[i]]=1;
	// 	}else{
	// 		key[collectionA[i]]++;
	// 	}
	// }
	// for(let item in key){
	// 	result.push({key:item,count:key[item]})
	// }
	// for(let i=0;i<result.length;i++) {
	// 	if(objectB.value.indexOf(result[i].key)!=-1){
	// 		result[i].count-=Math.floor(result[i].count/3);
	// 	}
	// }
	// return result;
  let summarized = summarize(collectionA);
  let result = minus(summarized,objectB);
  return result;
}
