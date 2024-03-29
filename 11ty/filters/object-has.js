// from 11ty/11ty-website config/object-has.js
module.exports = function (obj, key, insensitive = true) {
  if (obj instanceof Array) {
    return obj.includes(key);
  }

  for (let objKey in obj) {
    if (insensitive) {
      if (typeof objKey === 'string' && objKey.toLowerCase() === key.toLowerCase()) {
        return true;
      }
    } else if (objKey === key) {
      return true;
    }
  }
  return false;
};
