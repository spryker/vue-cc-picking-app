import { MultiPluginFactory } from "@/features/core/plugin";

import { ordersPlugin } from "./orders";

export const featuresPlugin = MultiPluginFactory.with({ ordersPlugin });
