export const replaceDynamicData = (template: string, data: any) => {
  if (!template || !data) {
    return;
  }
  return template.replace(/\$\{([^}]+)\}/g, (_, path) => {
    return path.split(".").reduce((acc, part) => acc && acc[part], data);
  });
};

export const updateDynamicValuesInZones = (data, dynamicValues) => {
  function traverseAndReplace(obj) {
    if (Array.isArray(obj)) {
      obj.forEach(traverseAndReplace);
    } else if (obj !== null && typeof obj === "object") {
      for (const key in obj) {
        if (
          typeof obj[key] === "string" &&
          obj[key].startsWith("${") &&
          obj[key].endsWith("}")
        ) {
          const dynamicKey = obj[key].slice(2, -1);
          if (dynamicValues.hasOwnProperty(dynamicKey)) {
            obj[key] = dynamicValues[dynamicKey];
          }
        } else if (typeof obj[key] === "object") {
          traverseAndReplace(obj[key]);
        }
      }
    }
  }

  // Create a deep copy of the data to avoid mutating the original object
  const clonedData = JSON.parse(JSON.stringify(data));

  // Extract props.id from content and find corresponding zones
  clonedData.content.forEach((contentItem) => {
    const contentId = contentItem.props?.id;
    const dynamicValue = contentItem.props?.dynamicValue;
    if (contentId && dynamicValue) {
      for (const zoneKey in clonedData.zones) {
        if (zoneKey.startsWith(contentId)) {
          const zoneArray = clonedData.zones[zoneKey];
          traverseAndReplace(zoneArray);
        }
      }
    }
  });
  // console.log(clonedData);
  return clonedData;
};
