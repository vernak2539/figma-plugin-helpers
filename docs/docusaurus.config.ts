import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
	title: "Figma Plugin Helpers",
	tagline: "Helpers for Figma plugins",
	favicon: "img/favicon.ico",

	// Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
	future: {
		v4: true, // Improve compatibility with the upcoming Docusaurus v4
	},

	// Set the production url of your site here
	url: "https://vernak2539.github.io/",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/figma-plugin-helpers/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "facebook", // Usually your GitHub org/user name.
	projectName: "docusaurus", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	plugins: [
		[
			"docusaurus-plugin-typedoc",

			// Options
			{
				entryPoints: ["../src/index.ts"],
				pretty: true,
				gitRevision: "main",
				parametersFormat: "table",
				categorizeByGroup: true,
				readme: "none",
			},
		],
		["docusaurus-plugin-simple-analytics", {}],
	],

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/vernak2539/figma-plugin-helpers/tree/main/docs",
				},
				// blog: {
				//   showReadingTime: true,
				//   feedOptions: {
				//     type: ["rss", "atom"],
				//     xslt: true,
				//   },
				//   // Please change this to your repo.
				//   // Remove this to remove the "edit this page" links.
				//   editUrl:
				//     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				//   // Useful options to enforce blogging best practices
				//   onInlineTags: "warn",
				//   onInlineAuthors: "warn",
				//   onUntruncatedBlogPosts: "warn",
				// },
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: "img/docusaurus-social-card.jpg",
		navbar: {
			title: "Figma Plugin Helpers",
			logo: {
				alt: "Figma Plugin Helpers Logo",
				src: "img/logo.svg",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "apiSidebar",
					position: "left",
					label: "Documentation",
				},
				{
					href: "https://github.com/vernak2539/figma-plugin-helpers",
					label: "GitHub",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Docs",
					items: [
						{
							label: "Documentation",
							to: "/docs/api",
						},
					],
				},
				{
					title: "Community",
					items: [
						{
							label: "Me",
							href: "https://byvernacchia.com",
						},
						{
							label: "My Ramblings",
							href: "https://words.byvernacchia.com",
						},
						{
							label: "My GitHub",
							href: "https://github.com/vernak2539",
						},
					],
				},
				{
					title: "More",
					items: [
						{
							label: "Surprise!",
							href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Alex Vernacchia (built with Docusaurus).`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
