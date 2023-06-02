export const apiCall = async ({
  path = "/",
  method = "",
  body,
  headers,
  otherOptions = {},
}) => {
  const baseUrl = "/api";
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    ...otherOptions,
  };
  if (body) options.body = JSON.stringify(body || {});
  const returnObj = { data: null, error: null };

  try {
    const request = await fetch(baseUrl + path, options);
    const data = await request.json();
    if (request.ok) {
      returnObj.data = data;
    } else {
      returnObj.error = data;
    }
  } catch (error) {
    console.error(error);
    returnObj.error = error;
  }

  return returnObj;
};

export const authApiCall = async ({
  path = "/",
  method = "GET",
  body,
  headers,
  otherOptions = {},
}) => {
  headers = {
    "x-access-token": localStorage.getItem("token"),
    ...headers,
  };
  return await apiCall({ path, method, body, otherOptions, headers });
};
