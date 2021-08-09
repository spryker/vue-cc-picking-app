export const expectations = [
  {
    httpRequest: {
      method: "GET",
      path: "/backend/orders",
      queryStringParameters: {
        "?productType": [
          {
            schema: {
              type: "string",
              pattern: "^[A-Z]+$",
            },
          },
        ],
      },
    },
    httpResponse: {
      statusCode: 200,
      body: "some_response_body",
    },
  },
  {
    httpRequest: {
      method: "POST",
      path: "/backend/tokens",
      body: {
        type: "PARAMETERS",
        attributes: {
          username: "foo",
          password: "bar",
        },
      },
    },
    httpResponse: {
      statusCode: 200,
      cookies: {
        sessionId: "2By8LOhBmaW5nZXJwcmludCIlMDAzMW",
      },
    },
  },
];
