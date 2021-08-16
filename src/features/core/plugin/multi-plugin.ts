import { App } from "vue";

import { VuePlugin } from "./plugin";

export type MultiPlugins = Record<string, VuePlugin>;
export type MultiPluginOptions<T extends MultiPlugins> = Partial<
  Record<keyof T, unknown>
>;

export class MultiPluginFactory {
  static with<T extends MultiPlugins>(plugins: T): MultiPlugin<T> {
    return new MultiPlugin(plugins);
  }
}

export class MultiPlugin<T extends MultiPlugins> implements VuePlugin {
  constructor(private plugins: T) {}

  install(app: App, options: MultiPluginOptions<T> = {}): void {
    Object.keys(this.plugins).forEach((pluginName) =>
      app.use(this.plugins[pluginName], options[pluginName])
    );
  }
}
