// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj===null){
    return 'null';
  }
  if (obj===undefined){
    return 'undefined';
  }
  if (obj===true){
    return 'true';
  }else if (obj===false){
    return 'false';
  }

  if (Array.isArray(obj)){
    let result='[';
    result+=obj.map(x=>stringifyJSON(x)).join(',');
    return result + ']';
  }
  
  if (typeof obj=='object'){
    if (Object.keys(obj).length===0) return "{}";

    let result='';
    for (let i in obj){
      if (typeof obj[i]!=='function'&& obj[i]!==undefined){
        result+=`${stringifyJSON(i)}:${stringifyJSON(obj[i])},`;
      }
    }
    return '{' + result.slice(0,result.length-1) + '}';
  }
  if (typeof obj === 'number') return obj.toString();

  if (typeof obj === 'string') return `"${obj}"`;
  if (typeof obj === 'function') return "";

};
