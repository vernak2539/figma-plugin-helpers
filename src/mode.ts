// File contains functionality relating to the figma plugin mode

export const getCurrentMode = (): PluginAPI["mode"] => {
  return figma.mode;
};

export const isDefaultMode = (): boolean => {
  return getCurrentMode() === "default";
};

export const isTextReviewMode = (): boolean => {
  return getCurrentMode() === "textreview";
};

export const isInspectMode = (): boolean => {
  return getCurrentMode() === "inspect";
};

export const isCodegenMode = (): boolean => {
  return getCurrentMode() === "codegen";
};

export const isLinkPreviewMode = (): boolean => {
  return getCurrentMode() === "linkpreview";
};

export const isAuthMode = (): boolean => {
  return getCurrentMode() === "auth";
};
