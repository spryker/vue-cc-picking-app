import { App } from "vue";
import { VuePlugin } from "./plugin";

export type ExecPluginFunction<O> = (app: App, options: O) => void;

export class ExecPluginFactory {
  static fn<O>(pluginFn: ExecPluginFunction<O>): ExecPlugin<O> {
    return new ExecPlugin(pluginFn);
  }
}

export class ExecPlugin<O> implements VuePlugin {
  constructor(private pluginFn: ExecPluginFunction<O>) {}

  install(app: App, options: unknown): void {
    this.pluginFn(app, options as O);
  }
}
