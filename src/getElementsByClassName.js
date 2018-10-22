// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  let resultElements = [];
  let initLocation = document.body;
  let findElements = function (location) {
    if (location !== null) {
      if (location.classList && location.classList[0] === className) {
        resultElements.push(location);
      }
      for (let e of location.childNodes) {
        findElements(e);
      }
    }
  };
  findElements (initLocation);
  return resultElements;
};