/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-typescript'],
	overrides: [
		{
			files: ['cypress/component/**/*.{cy,spec}.{js,ts,jsx,tsx}'],
			extends: ['plugin:cypress/recommended'],
		},
	],
	rules: {
		'vue/multi-word-component-names': 'off',
	},
	parserOptions: {
		ecmaVersion: 'latest',
	},
};
