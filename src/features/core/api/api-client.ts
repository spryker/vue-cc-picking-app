import axios from "axios";

export interface ApiClientOptions {
  baseURL: string;
  timeout?: number;
  headers?: { [key: string]: string };
}

export class ApiClient {
  client = axios.create({
    baseURL: this.options.baseURL,
    timeout: this.options.timeout,
    headers: {
      "Content-Type": "application/json",
      ...this.options.headers,
    },
  });

  constructor(private options: ApiClientOptions) {}
}
