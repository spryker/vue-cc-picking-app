/* eslint-disable camelcase */

export interface User {
  username: string;
  password: string;
}

export interface UserResult {
  username: string;
  password: string;
  token: {
    tokenType: string;
    expiresIn: string;
    accessToken: string;
    refreshToken: string;
  };
}

export interface LoginError {
  error: any;
}
