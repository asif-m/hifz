import { JSX } from "solid-js";
export type ComponentProps<P = {}> = P & { children?: JSX.Element };
