import { assertEquals } from "https://deno.land/std@0.68.0/testing/asserts.ts";

import colors from "./mod.ts";

Deno.test("test color name", (): void => {
  assertEquals(colors.red, [255, 0, 0]);
});
