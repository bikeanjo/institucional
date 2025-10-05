import * as colors from "./colors";

export * from "./colors";

export const Colors = {
  ...colors,
} as const;

export type ColorKey = keyof typeof Colors;
