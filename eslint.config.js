// Import: external objects.
import js from "@eslint/js";

//#region Import: Plugins
	import jsdoc from "eslint-plugin-jsdoc";
	import todo from "eslint-plugin-todo";
	import prettier from "eslint-plugin-prettier";
//#endregion

export default [{
	files: ["**/*.{js,jsx,ts,tsx}"],
	extends: [
		js.configs.recommended,
		// reactHooks.configs['recommended-latest'], // with import reactHooks from 'eslint-plugin-react-hooks';
		// reactRefresh.configs.vite, // with import reactRefresh from 'eslint-plugin-react-refresh';
	],

	languageOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		parserOptions: {
			ecmaFeatures: {
				jsx: true
			},
		},
	},

	/** Add plugins to extend the linter with features. */
	plugins: {
		jsdoc,			// Check JSDoc - documentation
		prettier,		// Format code according to Prettier rules
		todo,				// Check for TODOs, FIXMEs, etc.
	},

	rules: {
		// ===============================
		// TODO / FIXME
		// ===============================
		"no-warning-comments": [
			"warn",
			{
				terms: ["NOTE", "TODO"],
				locations: ["anywhere"]
			}
		],
		"todo/no-warning-comments": [
			"error",
			{
				terms: ["FIXME"],
				locations: ["anywhere"]
			}
		],

		// ===============================
		// Style
		// ===============================
		"semi": [
			"error",
			"always"
		],
		"quotes": [
			"error",
			"double"
		],
		"prettier/prettier": "error",

		//#region Rules: JSDoc
		/**
		 * Checks that @access tags use one of the following values:
		 * - package
		 * - private
		 * - protected
		 * - public
		 *
		 * Also reports:
		 * - Mixing of @access with @public, @private, @protected, or @package on the same doc block.
		 * - Use of multiple instances of @access (or the @public, etc. style tags) on the same doc block.
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-access.md
		 */
		"jsdoc/check-access": ["warn", {}],

		/**
		 * Reports invalid alignment of JSDoc block asterisks.
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-alignment.md
		 **/
		"jsdoc/check-alignment": ["warn", {}],

		/**
		 * Reports invalid padding inside JSDoc blocks. Ignores parts enclosed in the Markdown code block.
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-indentation.md
		 **/
		"jsdoc/check-indentation": ["warn", {
			"excludeTags": ["example"]
		}],

		/**
		 * Reports invalid alignment of JSDoc block lines.
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-line-alignment.md
		 **/
		"jsdoc/check-line-alignment": ["warn", "always", {
			"tags": [
				"author",
				"param",
				"returns",
				"version",
			],
			"wrapIndent": "  "
		}],

		/**
		 * Ensures that parameter names in JSDoc are matched by corresponding items in the function declaration.
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-param-names.md
		 **/
		"jsdoc/check-param-names": ["warn", {}],

		/**
		 * Ensures that property names in JSDoc are not duplicated on the same block and that nested properties have defined roots.
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-property-names.md
		 **/
		"jsdoc/check-property-names": ["warn", {
			"enableFixer": false,
		}],

		/**
		 * Reports against syntax not encouraged for the mode (e.g., Google Closure Compiler in "jsdoc" or "typescript" mode).
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-syntax.md
		 **/
		"jsdoc/check-syntax": ["warn", {}],

		/**
		 * Reports invalid JSDoc 3 block tag names.
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-tag-names.md
		 */
		"jsdoc/check-tag-names": ["error", {
			"enableFixer": false,
		}],

		/**
		 * Checks that any @template names are actually used in the connected @typedef, @callback, @function or type structure.
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-template-names.md
		 **/
		"jsdoc/check-template-names": ["warn", {}],

		/**
		 * Reports invalid types.
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-types.md
		 */
		"jsdoc/check-types": ["warn", {}],

		/**
		 * This rule checks the values for a handful of tags like `@author`, `@version` and so on.
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-values.md
		 */
		"jsdoc/check-values": ["warn", {
			"allowedLicences": true,
			"numericOnlyVariation": true,
		}],

		/**
		 * Converts single line or non-JSDoc, multiline comments into JSDoc comments.
		 *
		 * **Not recommended to use.**
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/convert-to-jsdoc-comments.md
		 */
		"jsdoc/convert-to-jsdoc-comments": 0,

		/**
		 * Expects standalone tags to be empty of any content.
		 */
		"jsdoc/empty-tags": ["error", {}],

		/**
		 * Reports use of JSDoc tags in non-tag positions (in the default "typescript" mode).
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/escape-inline-tags.md
		 */
		"jsdoc/escape-inline-tags": ["warn", {
			"allowedInlineTags": [],
			"enableFixer": false,
			"fixType": "backticks",		// or "backslash"
		}],

		/**
		 * Reports an issue with any non-constructor function using `@implements`.
		 * Constructor functions, whether marked with `@class`, `@constructs`, or being an ES6 class constructor, will not be flagged.
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/implements-on-classes.md
		 */
		"jsdoc/implements-on-classes": ["warn", {
			"contexts": "any",
		}],

		/**
		 * This rule will report an issue if JSDoc `import()` statements point to a package which is not listed in `dependencies` or `devDependencies`.
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/imports-as-dependencies.md
		 */
		"jsdoc/imports-as-dependencies": 0,

		/**
		 * Reports on JSDoc texts that serve only to restate their attached name.
		 * Those "uninformative" docs comments take up space without being helpful.
		 * This rule requires all docs comments to contain at least one word not already in the code.
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/informative-docs.md
		 */
		"jsdoc/informative-docs": ["warn", {
			"excludedTags": ["category"]
		}],

		/**
		 * This rule enforces minimum number of newlines before JSDoc comment blocks (except at the beginning of a block or file).
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/lines-before-block.md
		 */
		"jsdoc/lines-before-block": ["warn", {
			"checkBlockStarts": false,
			"excludedTags": ["type"],
			"ignoreSameLine": true,
			"ignoreSingleLines": true,
			"lines": 1,
		}],

		/**
		 * Enforces a regular expression pattern on descriptions.
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/match-description.md
		 */
		"jsdoc/match-description": 0,

		/**
		 * Reports the name portion of a JSDoc tag if matching or not matching a given regular expression.
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/match-name.md
		 */
		"jsdoc/match-name": 0,

		/**
		 * Controls how and whether JSDoc blocks can be expressed as single or multiple line blocks.
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/multiline-blocks.md
		 */
		"jsdoc/multiline-blocks": ["warn", {
			"allowMultipleTags": true,
			// "minimumLengthForMultiline": 40,
			"multilineTags": ["*"],
			"noFinalLineText": true,
			"noMultilineBlocks": false,
			"noSingleLineBlocks": false,
			"noZeroLineText": true,
			"requireSingleLineUnderCount": null,
			"singleLineTags": [
				'lends',
				'type'
			],
		}],

		/**
		 * This rule checks for multi-line-style comments which fail to meet the criteria of a JSDoc block,
		 * namely that it should begin with two and only two asterisks,
		 * but which appear to be intended as JSDoc blocks due to the presence of whitespace followed by whitespace or asterisks,
		 * and an at-sign (`@`) and some non-whitespace (as with a JSDoc block tag).
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-bad-blocks.md
		 */
		"jsdoc/no-bad-blocks": ["warn", {
			"preventAllMultiAsteriskBlocks": true
		}],

		/**
		 * If tags are present, this rule will prevent empty lines in the block description.
		 * If no tags are present, this rule will prevent extra empty lines in the block description.
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-blank-block-descriptions.md
		 */
		"jsdoc/no-blank-block-descriptions": 0,

		/**
		 * Reports and optionally removes blocks with whitespace only.
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-blank-blocks.md
		 */
		"jsdoc/no-blank-blocks": ["warn", {
			"enableFixer": false,
		}],

		/**
		 * This rule reports defaults being used on the relevant portion of `@param` or `@default`.
		 * It also optionally reports the presence of the square-bracketed optional arguments at all.
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-defaults.md
		 */
		"jsdoc/no-defaults": 0,

		/**
		 * This rule lets you report if certain always expected comment structures are missing.
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-missing-syntax.md
		 */
		"jsdoc/no-missing-syntax": 0,

		/**
		 * Prevents use of multiple asterisks at the beginning of lines.
		 * Note that if you wish to prevent multiple asterisks at the very beginning of the JSDoc block,
		 * you should use no-bad-blocks (as that is not proper jsdoc and that rule is for catching blocks which only seem like jsdoc).
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-multi-asterisks.md
		 */
		"jsdoc/no-multi-asterisks": ["warn", {
			"allowWhitespace": true,
			"preventAtEnd": true,
			"preventAtMiddleLines": true,
		}],

		/**
		 * Reports when certain comment structures are present.
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-restricted-syntax.md
		 */
		"jsdoc/no-restricted-syntax": 0,

		/**
		 * This rule reports types being used on `@param` or `@returns`.
		 * The rule is intended to prevent the indication of types on tags where the type information would be redundant with TypeScript.
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-types.md
		 */
		"jsdoc/no-types": 0,

		/**
		 * Checks that types in JSDoc comments are defined. This can be used to check unimported types.
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-undefined-types.md
		 */
		"jsdoc/no-undefined-types": ["warn", {}],

		/**
		 * Prefer `@import` tags to inline `import()` statements.
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/prefer-import-tag.md
		 */
		"jsdoc/prefer-import-tag": ["warn", {
			"enableFixer": true, // Add automatically `@import` tags.
		}],

		/**
		 * Reports use of `any` (or `*`) type within JSDoc tag types.
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/reject-any-type.md
		 */
		"jsdoc/reject-any-type": ["warn", {}],

		/**
		 * Reports use of the `Function` type within JSDoc tag types.
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/reject-function-type.md
		 */
		"jsdoc/reject-function-type": ["warn", {}],

		/**
		 * Requires that each JSDoc line starts with an *.
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-asterisk-prefix.md
		 */
		"jsdoc/require-asterisk-prefix": ["warn", "always", {}],

		/**
		 * Requires that all functions (or optionally other structures) with a JSDoc block have a description.
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-description.md
		 */
		"jsdoc/require-description": ["error", {
			"checkConstructors": true,		// constructor() { }
			"checkGetters": true,					// get Test() { }
			"checkSetters": true,					// set Test(value) { }
			"contexts": [
				"ArrowFunctionExpression",
				"ClassDeclaration",
				"ClassExpression",					// const example = class { };
				"FunctionDeclaration",
				"FunctionExpression",
				"MethodDefinition",					// class Example { constructor() {} myMethod() {} }
				"ObjectExpression",					// const myObject = { };
				"TSInterfaceDeclaration",		// interface MyInterface { }
				// "TSPropertySignature"
			],
			"descriptionStyle": "body", 	// any | body | tag
		}],

		// Description must be complete sentences and end with a period.
		/**
		 * Requires that block description, explicit @description, and @param/@returns tag descriptions are written in complete sentences, i.e.,
		 * - Description must start with an uppercase alphabetical character.
		 * - Paragraphs must start with an uppercase alphabetical character.
		 * - Sentences must end with a period, question mark, exclamation mark, or triple backticks.
		 * - Every line in a paragraph (except the first) which starts with an uppercase character must be preceded by a line ending with a period.
		 * - A colon or semicolon followed by two-line breaks is still part of the containing paragraph (unlike normal dual line breaks).
		 * - Text within inline tags {...} or within triple backticks are not checked for sentence divisions.
		 * - Periods after items within the abbreviation option array are not treated as sentence endings.
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-description-complete-sentence.md
		 */
		"jsdoc/require-description-complete-sentence": ["warn", {
			"abbreviations": ["etc", "u. a", "usw", "wg", "z. B"],
			"newlineBeforeCapsAssumesBadSentenceEnd": false,
			"tags": [
				"copyright",
				"param",
				"property",
				"returns",
				"throws"
			],
		}],

		/**
		 * Requires that all functions have examples.
		 * - All functions must have one or more @example tags.
		 * - Every example tag must have a non-empty description that explains the method's usage.
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-example.md
		 */
		"jsdoc/require-example": ["warn", {
			"checkConstructors": true,
			"checkGetters": true,
			"checkSetters": true,
			"contexts": [
				"any"
			],
			"enableFixer": false,
			"exemptedBy": [
				"type"
			],
			"exemptNoArguments": false,
		}],

		/**
		 * Checks that all files have a `@file`, `@fileoverview`, or `@overview` tag.
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-file-overview.md
		 */
		"jsdoc/require-file-overview": 0,

		/**
		 * Require a hyphen before parameter descriptions.
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-hyphen-before-param-description.md
		 */
		"jsdoc/require-hyphen-before-param-description": ["warn", "always", {}],

		/**
		 * Checks for the presence of JSDoc comments, on class declarations as well as functions.
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-jsdoc.md
		 */
		"jsdoc/require-jsdoc": ["error", {
			"checkAllFunctionExpressions": true,
			"checkConstructors": true,
			"checkGetters": true,
			"checkSetters": true,
			"enableFixer": false,
			"exemptEmptyConstructors": false,
			"exemptEmptyFunctions": false,
			"exemptOverloadedImplementations": false,	// If set to true will avoid checking an overloaded function's implementation.
			"fixerMessage": "",												// An optional message to add to the inserted JSDoc block. Defaults to the empty string.
			"minLineCount": undefined,								// An integer to indicate a minimum number of lines expected for a node in order for it to require documentation.
			"publicOnly": false,											// This option will insist that missing JSDoc blocks are only reported for function bodies / class declarations that are exported from the module.
			"require": {
				"ArrowFunctionExpression": true,
				"ClassDeclaration": true,
				"ClassExpression": true,
				"FunctionDeclaration": true,
				"FunctionExpression": false,
				"ModuleDeclaration": true,
				"MethodDefinition": true,
				"ObjectExpression": true
			},
			"skipInterveningOverloadedDeclarations": false,
		}],

		/**
		 * Requires a description for (non-standard) `@next` tags.
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-next-description.md
		 */
		"jsdoc/require-next-description": 0,

		/**
		 * Requires a type on the (non-standard) `@next` tag.
		 * See the `jsdoc/require-yields` rule for details on this tag.
		 *
		 * @example
		 * // Good
		 * `@next {SomeType}`
		 *
		 * // Bad
		 * `@next`
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-next-type.md
		 */
		"jsdoc/require-next-type": ["warn", {}],

		/**
		 * Requires that all function parameters are documented.
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param.md
		 */
		"jsdoc/require-param": ["error", {
			// Numeric to indicate the number at which to begin auto-incrementing roots.
			"autoIncrementBase": 0,
			// A value indicating whether constructors should be checked.
			"checkConstructors": true,
			// Whether to require destructured properties.
			"checkDestructured": true,
			/** @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param.md#checkdestructuredroots */
			"checkDestructuredRoots": true,
			// A value indicating whether getters should be checked.
			"checkGetters": true,
			/** @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param.md#checkrestproperty */
			"checkRestProperty": true,
			// A value indicating whether setters should be checked.
			"checkSetters": true,
			// @todo hier weiter machen ...
			"enableFixer": true,
			"enableRootFixer": false,
		}],

		// Parameters need to be documented with a comment.
		/**
		 *
		 *
		 * @link
		 */
		"jsdoc/require-param-description": "warn",

		/**
		 *
		 *
		 * @link
		 */
		"jsdoc/require-param-name": 1,

		/**
		 *
		 *
		 * @link
		 */
		"jsdoc/require-param-type": 1,

		/**
		 *
		 *
		 * @link
		 */
		"jsdoc/require-property": 1,

		/**
		 *
		 *
		 * @link
		 */
		"jsdoc/require-property-description": 1,

		/**
		 *
		 *
		 * @link
		 */
		"jsdoc/require-property-name": 1,

		/**
		 *
		 *
		 * @link
		 */
		"jsdoc/require-property-type": 1,

		/**
		 *
		 *
		 * @link
		 */
		"jsdoc/require-rejects": 1, // Recommended

		/**
		 *
		 *
		 * @link
		 */
		"jsdoc/require-returns": "error",

		/**
		 *
		 *
		 * @link
		 */
		"jsdoc/require-returns-check": 1,

		// Return values need to be documented with a comment.
		/**
		 *
		 *
		 * @link
		 */
		"jsdoc/require-returns-description": "warn",

		/**
		 *
		 *
		 * @link
		 */
		"jsdoc/require-returns-type": 1,

		/**
		 *
		 *
		 * @link
		 */
		"jsdoc/require-template": 1,

		/**
		 *
		 *
		 * @link
		 */
		"jsdoc/require-template-description": 1,

		/**
		 *
		 *
		 * @link
		 */
		"jsdoc/require-throws": 1,

		/**
		 *
		 *
		 * @link
		 */
		"jsdoc/require-throws-description": 1,

		/**
		 *
		 *
		 * @link
		 */
		"jsdoc/require-throws-type": 1,

		/**
		 *
		 *
		 * @link
		 */
		"jsdoc/require-yields": 1,

		/**
		 *
		 *
		 * @link
		 */
		"jsdoc/require-yields-check": "error",

		/**
		 *
		 *
		 * @link
		 */
		"jsdoc/require-yields-description": "warn",

		/**
		 *
		 *
		 * @link
		 */
		"jsdoc/require-yields-type": "warn",

		/**
		 *
		 *
		 * @link
		 */
		"jsdoc/sort-tags": 1,

		/**
		 *
		 *
		 * @link
		 */
		"jsdoc/tag-lines": 1,

		/**
		 * This rule can auto-escape certain characters that are input within block and tag descriptions.
		 *
		 * @link https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/text-escaping.md
		 */
		"jsdoc/text-escaping": 0,

		/**
		 *
		 *
		 * @link
		 */
		"jsdoc/ts-method-signature-style": 1,

		/**
		 *
		 *
		 * @link
		 */
		"jsdoc/ts-prefer-function-type": 1,

		/**
		 *
		 *
		 * @link
		 */
		"jsdoc/ts-no-unnecessary-template-expression": 1,

		/**
		 *
		 *
		 * @link
		 */
		"jsdoc/type-formatting": 1,

		/**
		 *
		 *
		 * @link
		 */
		"jsdoc/valid-types": 1

		//#endregion Rules: JSDoc
	}
}]