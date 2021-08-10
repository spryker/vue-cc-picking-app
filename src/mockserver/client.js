/* eslint-disable */
const mockServerClient = require("mockserver-client").mockServerClient;
const HTTP_PORT = 1080;
const defaultSchema =
  "https://raw.githubusercontent.com/mock-server/mockserver/master/mockserver-integration-testing/src/main/resources/org/mockserver/mock/openapi_petstore_example.json";
const argumentSchema = process.argv.slice(2);
let currentSchema = argumentSchema.length ? argumentSchema : defaultSchema;

mockServerClient("localhost", HTTP_PORT)
  .openAPIExpectation({
    specUrlOrPayload: currentSchema,
  })
  .then(
    function () {
      console.log("expectation created");
    },
    function (error) {
      console.log(error);
    }
  );
