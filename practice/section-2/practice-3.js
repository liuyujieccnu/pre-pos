'use strict';

function split(object) {
  if (object.indexOf('-') === 1) {
    let array = object.split('-');
    return {key: array[0], count: Number(array[1])};
  }
  if (object.indexOf('[') === 1) {
    let key = object.charAt(0);
    let count = Number(object.substring(2, object.length - 1));
    return {key: key, count: count};
  }
  if (object.indexOf(':') === 1) {
    let array = object.split(':');
    return {key: array[0], count: Number(array[1])};
  }
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

function find(result, ch) {
  for (let item of result) {
    if (item.name === ch) {
      return item;
    }
  }
  return null;
}

function summarize(collection) {
  let result = [];
  for (let item of collection) {
    let obj = find(result, item);
    if (obj) {
      obj.summary++;
    } else {
      result.push({name: item, summary: 1});
    }
  }
  return result;
}

function countSameElements(collection) {
  // let key = {};
  // let result = [];
  // for (let i = 0; i < collection.length; i++) {
  //   if (collection[i].indexOf('-') != -1) {
  //     if (key[collection[i].substring(0, 1)] == null) {
  //       key[collection[i].substring(0, 1)] = Number(collection[i].substring(2, collection[i].length));
  //     } else {
  //       key[collection[i].substring(0, 1)] += Number(collection[i].substring(2, collection[i].length));
  //     }
  //     continue;
  //   }
  //   if (collection[i].indexOf(':') != -1) {
  //     if (key[collection[i].substring(0, 1)] == null) {
  //       key[collection[i].substring(0, 1)] = Number(collection[i].substring(2, collection[i].length));
  //     } else {
  //       key[collection[i].substring(0, 1)] = key[collection[i].substring(0, 1)] + Number(collection[i].substring(2, collection[i].length));
  //     }
  //     continue;
  //   }
  //   if (collection[i].indexOf('[') != -1) {
  //     if (key[collection[i].substring(0, 1)] == null) {
  //       key[collection[i].substring(0, 1)] = Number(collection[i].substring(2, collection[i].length - 1));
  //     } else {
  //       key[collection[i].substring(0, 1)] = key[collection[i].substring(0, 1)] + Number(collection[i].substring(2, collection[i].length - 1));
  //     }
  //     continue;
  //   }
  //   if (key[collection[i]] == null) {
  //     key[collection[i]] = 1;
  //   } else {
  //     key[collection[i]]++;
  //   }
  // }
  // for (let item in key) {
  //   result.push({name: item, summary: key[item]});
  // }
  // return result;
  let expandedArray = expand(collection);
  let result = summarize(expandedArray);
  return result;
}
