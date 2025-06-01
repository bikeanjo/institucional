// jest.config.cjs
export default {
  preset: "ts-jest/presets/default-esm", // Preset para ESM + TS
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { useESM: true, tsconfig: "tsconfig.json" }],
  },
  extensionsToTreatAsEsm: [".ts"],
  moduleFileExtensions: ["ts", "js", "json", "node"],
};
