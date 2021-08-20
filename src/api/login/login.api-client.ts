/* eslint-disable no-useless-constructor */

import { User, LoginError, UserResult } from "./login";
import axios from "axios";

export class LoginApiClient {
  async login(params: User): Promise<{ data: UserResult; error: LoginError }> {
    const result: UserResult = {
      username: params.username,
      password: params.password,
      token: {
        tokenType: "",
        expiresIn: "",
        accessToken: "",
        refreshToken: "",
      },
    };
    const error: LoginError = {
      error: "",
    };

    axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

    try {
      const { data } = {
        data: {
          type: "string",
          id: "string",
          attributes: {
            tokenType: "string",
            expiresIn: "string",
            accessToken: "string",
            refreshToken: "string",
          },
        },
      };

      /*        await axios.post(
        "https://api.us.sbx1.commerce.ci-aldi.com/backend/token",
        {
          username: params.username,
          password: params.password,
          grant_type: "user_credentials",
        }
      );*/
      result.token = data.attributes;
    } catch (error) {
      error.error = error;
    }

    return {
      data: result,
      error: error,
    };
  }
}
