"use strict";

const handler = async (event) => {
  return {
    statusCode: 200,
    body: "This endpoint is protected with basic authentication!",
  };
};

module.exports = { handler };
