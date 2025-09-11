// File contains functionality relating to the figma plugin mode

const MODES = {
  DESIGN: "default",
  DEV: "inspect",
  CODEGEN: "codegen",
} as const;

export type Mode = (typeof MODES)[keyof typeof MODES];

const getCurrentMode = (): Mode => {
  return figma.mode as Mode;
};

const isDesignMode = (): boolean => {
  return getCurrentMode() === MODES.DESIGN;
};

const isDevMode = (): boolean => {
  return getCurrentMode() === MODES.DEV;
};

const isCodegenMode = (): boolean => {
  return getCurrentMode() === MODES.CODEGEN;
};

export default { getCurrentMode, isDesignMode, isDevMode, isCodegenMode };
