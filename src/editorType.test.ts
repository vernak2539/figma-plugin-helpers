import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import { window as global } from "../test/utils/window";
import * as figmaEditorType from "./editorType";

global.figma = {
  editorType: "figma",
} as any;

global.figma.editorType = "figma";

beforeEach(() => {
  global.figma = {} as any;
});

afterEach(() => {
  window.figma = null;
});

test("getCurrentEditorType", () => {
  global.figma.editorType = "figma";

  const editorType = figmaEditorType.getCurrentEditorType();

  expect(editorType).toBe("figma");
});

describe("isFigmaEditor", () => {
  test("should return true if figma editor", () => {
    global.figma.editorType = "figma";

    const actual = figmaEditorType.isFigmaEditor();

    expect(actual).toBe(true);
  });

  test("should return false if the editor is not figma", () => {
    global.figma.editorType = "dev";

    const actual = figmaEditorType.isFigmaEditor();

    expect(actual).toBe(false);
  });
});

describe("isDevEditor", () => {
  test("should return true if dev editor", () => {
    global.figma.editorType = "dev";

    const actual = figmaEditorType.isDevEditor();

    expect(actual).toBe(true);
  });

  test("should return false if the editor is not dev", () => {
    global.figma.editorType = "figma";

    const actual = figmaEditorType.isDevEditor();

    expect(actual).toBe(false);
  });
});

describe("isFigjamEditor", () => {
  test("should return true if figjam editor", () => {
    global.figma.editorType = "figjam";

    const actual = figmaEditorType.isFigjamEditor();

    expect(actual).toBe(true);
  });

  test("should return false if the editor is not figjam", () => {
    global.figma.editorType = "figma";

    const actual = figmaEditorType.isFigjamEditor();

    expect(actual).toBe(false);
  });
});
