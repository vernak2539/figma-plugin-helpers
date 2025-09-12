export default {
  plugins: [
    "@semantic-release/npm",
    "@semantic-release/github",
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
        releaseRules: [
          { type: "docs", scope: "site", release: "false" },
          { scope: "no-release", release: "false" },
        ],
      },
    ],
    "@semantic-release/release-notes-generator",
  ],
};
