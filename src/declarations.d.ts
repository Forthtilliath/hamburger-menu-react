import { ComponentPropsWithoutRef } from "react";

declare global {
  type StyledProps<
    Tag extends keyof HTMLElementTagNameMap,
    Props = {}
  > = ComponentPropsWithoutRef<"aside"> & Props;
}

export {};
