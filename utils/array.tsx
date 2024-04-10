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
