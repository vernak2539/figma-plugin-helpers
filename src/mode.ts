// File contains functionality relating to the figma plugin mode
import type PluginAPI from "@figma/plugin-typings";

/**
 * @category Mode
 */
export const getCurrentMode = (): PluginAPI["mode"] => {
  return figma.mode;
};

/**
 * @category Mode
 */
export const isDefaultMode = (): boolean => {
  return getCurrentMode() === "default";
};

/**
 * @category Mode
 */
export const isTextReviewMode = (): boolean => {
  return getCurrentMode() === "textreview";
};

/**
 * @category Mode
 */
export const isInspectMode = (): boolean => {
  return getCurrentMode() === "inspect";
};

/**
 * @category Mode
 */
export const isCodegenMode = (): boolean => {
  return getCurrentMode() === "codegen";
};

/**
 * @category Mode
 */
export const isLinkPreviewMode = (): boolean => {
  return getCurrentMode() === "linkpreview";
};

/**
 * @category Mode
 */
export const isAuthMode = (): boolean => {
  return getCurrentMode() === "auth";
};
