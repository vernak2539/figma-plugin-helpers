import type PluginAPI from "@figma/plugin-typings";

// File contains functionality relating to the figma plugin mode

/**
 * @category EditorType
 */
export const getCurrentEditorType = (): PluginAPI["editorType"] => {
  return figma.editorType;
};

/**
 * @category EditorType
 */
export const isFigmaEditor = (): boolean => {
  return getCurrentEditorType() === "figma";
};

/**
 * @category EditorType
 */
export const isDevEditor = (): boolean => {
  return getCurrentEditorType() === "dev";
};

/**
 * @category EditorType
 */
export const isFigjamEditor = (): boolean => {
  return getCurrentEditorType() === "figjam";
};
