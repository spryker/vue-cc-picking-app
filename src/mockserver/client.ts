import { mockServerClient } from "mockserver-client";
import { expectations } from "@/mockserver/serverExpectations";

mockServerClient("localhost", 1080)
  .mockAnyResponse(expectations)
  .then(
    function () {
      console.log("expectation created");
    },
    function (error) {
      console.log(error);
    }
  );
