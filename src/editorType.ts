import type PluginAPI from "@figma/plugin-typings";

// File contains functionality relating to the figma plugin mode

export const getCurrentEditorType = (): PluginAPI["editorType"] => {
  return figma.editorType;
};

export const isFigmaEditor = (): boolean => {
  return getCurrentEditorType() === "figma";
};

export const isDevEditor = (): boolean => {
  return getCurrentEditorType() === "dev";
};

export const isFigjamEditor = (): boolean => {
  return getCurrentEditorType() === "figjam";
};
