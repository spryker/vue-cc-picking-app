import { ProviderPluginFactory } from "@/features/core/plugin";

import { ApiClient, ApiClientOptions } from "./api-client";

export const apiPlugin = ProviderPluginFactory.create<ApiClient>({
  key: Symbol("ApiClient"),
  defaultFactory: {
    create: (app, options: ApiClientOptions) => new ApiClient(options),
  },
});
