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

  console.log(body, "meeee")
  try {
    const request = await fetch(baseUrl + path, options);
    const data = await request.json();
    console.log("Stuff", data)
    if(request.ok){
      returnObj.data = data;
    } else {
      returnObj.error = data
    }
    
  } catch (error) {
    console.error(error);
    returnObj.error = error;
  }

  return returnObj;
};
