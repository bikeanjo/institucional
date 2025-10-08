/// <reference types="vite-plugin-svgr/client" />

declare module "*.svg" {
  import * as React from "react";
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}

declare module "vite-plugin-svgr" {
  import type { Plugin } from "vite";

  export interface VitePluginSvgrOptions {
    include?: string | string[];
    exclude?: string | string[];
  }

  export default function svgr(options?: VitePluginSvgrOptions): Plugin;
}
