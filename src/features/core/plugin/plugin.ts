import { Plugin } from "vue";

export interface VuePlugin {
  install: Exclude<Plugin["install"], undefined>;
}
