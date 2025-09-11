import { expect, test, describe, beforeEach, afterEach } from "bun:test";
import { window as global } from "../test/utils/window";
import figmaMode from "./mode";

global.figma = {
  mode: "default",
} as any;

global.figma.mode = "default";

beforeEach(() => {
  global.figma = {} as any;
});

afterEach(() => {
  window.figma = null;
});

test("getCurrentMode", () => {
  global.figma.mode = "default";

  const mode = figmaMode.getCurrentMode();

  expect(mode).toBe("default");
});

describe("isDesignMode", () => {
  test("should return true if design mode", () => {
    global.figma.mode = "default";

    const actual = figmaMode.isDesignMode();

    expect(actual).toBe(true);
  });

  test("should return false if the mode is not default", () => {
    global.figma.mode = "inspect";

    const mode = figmaMode.isDesignMode();

    expect(mode).toBe(false);
  });
});

describe("isDevMode", () => {
  test("should return true if dev mode", () => {
    global.figma.mode = "inspect";

    const actual = figmaMode.isDevMode();

    expect(actual).toBe(true);
  });

  test("should return false if the mode is not default", () => {
    global.figma.mode = "codegen";

    const mode = figmaMode.isDevMode();

    expect(mode).toBe(false);
  });
});

describe("isCodegenMode", () => {
  test("should return true if codegen mode", () => {
    global.figma.mode = "codegen";

    const actual = figmaMode.isCodegenMode();

    expect(actual).toBe(true);
  });

  test("should return false if the mode is not codegen", () => {
    global.figma.mode = "default";

    const actual = figmaMode.isCodegenMode();

    expect(actual).toBe(false);
  });
});
