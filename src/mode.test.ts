import { expect, test, describe, beforeEach, afterEach } from "bun:test";
import { window as global } from "../test/utils/window";
import * as figmaMode from "./mode";

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

describe("isDefaultMode", () => {
  test("should return true if default mode", () => {
    global.figma.mode = "default";

    const actual = figmaMode.isDefaultMode();

    expect(actual).toBe(true);
  });

  test("should return false if the mode is not default", () => {
    global.figma.mode = "inspect";

    const mode = figmaMode.isDefaultMode();

    expect(mode).toBe(false);
  });
});

describe("isTextReviewMode", () => {
  test("should return true if textreview mode", () => {
    global.figma.mode = "textreview";

    const actual = figmaMode.isTextReviewMode();

    expect(actual).toBe(true);
  });

  test("should return false if the mode is not textreview", () => {
    global.figma.mode = "default";

    const mode = figmaMode.isTextReviewMode();

    expect(mode).toBe(false);
  });
});

describe("isInspectMode", () => {
  test("should return true if inspect mode", () => {
    global.figma.mode = "inspect";

    const actual = figmaMode.isInspectMode();

    expect(actual).toBe(true);
  });

  test("should return false if the mode is not inspect", () => {
    global.figma.mode = "default";

    const mode = figmaMode.isInspectMode();

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

describe("isLinkPreviewMode", () => {
  test("should return true if linkpreview mode", () => {
    global.figma.mode = "linkpreview";

    const actual = figmaMode.isLinkPreviewMode();

    expect(actual).toBe(true);
  });

  test("should return false if the mode is not linkpreview", () => {
    global.figma.mode = "default";

    const mode = figmaMode.isLinkPreviewMode();

    expect(mode).toBe(false);
  });
});

describe("isAuthMode", () => {
  test("should return true if auth mode", () => {
    global.figma.mode = "auth";

    const actual = figmaMode.isAuthMode();

    expect(actual).toBe(true);
  });

  test("should return false if the mode is not auth", () => {
    global.figma.mode = "default";

    const actual = figmaMode.isAuthMode();

    expect(actual).toBe(false);
  });
});
