'use strict';
module.exports = function() {
  //prV
  var vault = {};
  //prM

  //puV

  //puM
  function getValue(key) {
    if(key === undefined) {
      return null;
    } else if(!(key in vault)) {
      return null;
    } else {
      return vault[key];
    }
  }
  function setValue(key, value){
    vault[key] = value;
  }

  return {
    getValue : getValue,
    setValue : setValue
  };
};