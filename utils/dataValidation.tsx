export const hasValue = (data) => {
  if (typeof data === "string" || Array.isArray(data)) {
    return data.length > 0;
  } else if (typeof data === "object" && data !== null) {
    return Object.keys(data).length > 0;
  }
  return false;
};
