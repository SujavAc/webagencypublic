"use client";
import React, { useEffect, useRef } from "react";
import { CommonGridContainer } from "../../common/Layout/Grid";

// Utility function to get nested property value by path
const getNestedValue = (obj, path) => {
  const parts = path.split(".");
  return parts.reduce((acc, part) => {
    const match = part.match(/(\w+)\[(\d+)\]/);
    if (match) {
      return acc ? acc[match[1]][Number(match[2])] : undefined;
    }
    return acc ? acc[part] : undefined;
  }, obj);
};

// Function to process placeholders and handle nested arrays and objects
const processPlaceholders = (template, data) => {
  const regex = /\$\{([^\}]+)\}/g;
  let match;
  let result = template;

  while ((match = regex.exec(template)) !== null) {
    const [placeholder, path] = match;
    const value = getNestedValue(data, path);

    if (Array.isArray(value)) {
      const arrayResult = JSON.stringify(value, null, 2);
      result = result.replace(placeholder, arrayResult);
    } else {
      result = result.replace(placeholder, value !== undefined ? value : "");
    }
  }

  return result;
};

// Function to evaluate the dynamic path string like ${person.addresses}
const evaluatePath = (path, data) => {
  const match = path.match(/\$\{([^\}]+)\}/);
  if (match) {
    const evaluatedPath = match[1];
    return getNestedValue(data, evaluatedPath);
  }
  return null;
};

const TemplateRenderer = ({
  array,
  children,
  keyPrefix = "",
  parentData = {},
}) => {
  const containerRef = useRef();

  // Evaluate if the array prop is a placeholder string and convert it to an actual array
  const evaluatedArray =
    typeof array === "string" ? evaluatePath(array, parentData) : array;

  useEffect(() => {
    if (containerRef.current) {
      Array.from(containerRef.current.children).forEach((child, index) => {
        const data = evaluatedArray[index];
        if (!data) return;

        const replacePlaceholders = (node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            node.textContent = processPlaceholders(node.textContent, data);
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            Array.from(node.attributes).forEach((attr) => {
              attr.value = processPlaceholders(attr.value, data);
            });
            Array.from(node.childNodes).forEach(replacePlaceholders);
          }
        };

        replacePlaceholders(child);
      });
    }
  }, [evaluatedArray]);

  return (
    <CommonGridContainer
      rowSpacing={{ sm: 2, xs: 2, md: 4, lg: 4 }}
      columnSpacing={{ sm: 2, xs: 2, md: 4, lg: 4 }}
      ref={containerRef}
    >
      {evaluatedArray &&
        evaluatedArray.map((dataItem, index) => {
          return React.cloneElement(children(index), {
            key: `${keyPrefix}-${index}`,
            props: dataItem,
          });
        })}
    </CommonGridContainer>
  );
};

export default TemplateRenderer;
