export const getQueryParameter = (parameterName) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(parameterName);
}

export const getAllQueryParameters = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const params = {};
  urlParams.forEach((value, key) => {
    params[key] = value;
  });
  return params;
}
