'use strict';

function split(object) {
  let array = object.split('-');
  return {key: array[0], count: Number(array[1])}
}

function push(result, key, count) {
  for (let i = 0; i < count; i++) {
    result.push(key);
  }
}

function expand(collection) {
  let result = [];
  for (let item of collection) {
    if (item.length === 1) {
      result.push(item)
    } else {
      let {key, count} = split(item);
      push(result, key, count);
    }
  }
  return result;
}

function find(result,ch) {
  for(let item of result){
    if(item.key === ch){
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

function countSameElements(collection) {
  // let key = {};
  // let result = [];
  // for (let i = 0; i < collection.length; i++) {
  //   if (key[collection[i].substring(0, 1)] == null) {
  //     key[collection[i].substring(0, 1)] = Number(collection[i].substring(2, collection[i].length));
  //   } else {
  //     key[collection[i].substring(0, 1)] += Number(collection[i].substring(2, collection[i].length));
  //   }
  // }
  // for (let i = 0; i < collection.length; i++) {
  //   if (collection[i].indexOf('-') == 1) {
  //     continue;
  //   }
  //   if (key[collection[i]] == null) {
  //     key[collection[i]] = 1;
  //   } else {
  //     key[collection[i]]++;
  //   }
  // }
  // for (let item in key) {
  //   result.push({key: item, count: key[item]})
  // }
  // return result;
  let expandedArray = expand(collection);
  let result = summarize(expandedArray);
  return result;
}
