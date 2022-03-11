"use strict";

const middy = require("@middy/core");

const baseHandler = async (event) => {
  return {
    statusCode: 200,
    body: "This endpoint is protected with basic authentication!",
  };
};

const handler = middy(baseHandler);

module.exports = { handler };
