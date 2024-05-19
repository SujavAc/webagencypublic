export const filterOutArrayByKeyValuePair = (array, key, value) => {
  if (!array || !key || !value) {
    return;
  }
  return array.filter((item) => item[key] !== value);
};

export const partOfObjectExists = (array, criteria) => {
  if (!array || !criteria) {
    return;
  }
  return array?.some((item) => {
    // Check if any key in the criteria matches the corresponding key in the item
    return Object.keys(criteria).every((key) => {
      return item.hasOwnProperty(key) && item[key] === criteria[key];
    });
  });
};

export const findObject = (array, criteria) => {
  return array.find((item) => {
    // Check if all key-value pairs in the criteria match the corresponding key-value pairs in the item
    return Object.keys(criteria).every((key) => {
      return item.hasOwnProperty(key) && item[key] === criteria[key];
    });
  });
};

export const objectContainsKeys = (object, keys) => {
  return keys.every((key) => object.hasOwnProperty(key));
};

// converting array into object
export const setNestedProperty = (obj, key, value) => {
  console.log(key);
  const keys = key.split("|");
  let current = obj;

  keys.forEach((k, i) => {
    if (i === keys.length - 1) {
      if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        if (!current[k] || typeof current[k] !== "object") {
          current[k] = {};
        }
        mergeObjects(current[k], value);
      } else {
        current[k] = value;
      }
    } else {
      if (!current[k] || typeof current[k] !== "object") {
        current[k] = {};
      }
      current = current[k];
    }
  });
};

export const mergeObjects = (target, source) => {
  for (let [key, value] of Object.entries(source)) {
    setNestedProperty(target, key, value);
  }
};

export const arrayToObject = (array) => {
  return array.reduce((acc, obj) => {
    if (obj.hasOwnProperty("key") && obj.hasOwnProperty("value")) {
      setNestedProperty(acc, obj.key, obj.value);
    } else {
      mergeObjects(acc, obj);
    }
    console.log(acc);
    return acc;
  }, {});
};
