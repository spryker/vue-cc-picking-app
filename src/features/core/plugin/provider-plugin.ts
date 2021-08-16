import { App, inject, InjectionKey } from "vue";

import { VuePlugin } from "./plugin";

export interface ProviderPluginFactoryOptions<T> {
  key: InjectionKey<T>;
  defaultFactory?: ProviderImplementationFactory<T>;
}

export class ProviderPluginFactory {
  static create<T>(
    options: ProviderPluginFactoryOptions<T>
  ): ProviderPlugin<T> {
    return new ProviderPlugin<T>(options);
  }
}

export interface ProviderPluginOptions<T> {
  factory?: ProviderImplementationFactory<T>;
}

export interface ProviderImplementationFactory<T> {
  create(app: App, options?: unknown): T;
}

export class ProviderPlugin<T> implements VuePlugin {
  private instance?: T;

  constructor(private options: ProviderPluginFactoryOptions<T>) {}

  install(app: App, options?: ProviderPluginOptions<T>): void {
    const factory = options?.factory || this.options.defaultFactory;

    if (!factory) {
      throw new Error(
        `ProviderPlugin: No factory provided for plugin '${this.options.key.toString()}'`
      );
    }

    this.instance = factory.create(app, options);

    app.provide(this.options.key, this.instance);
  }

  get(): T {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.instance!;
  }
}
