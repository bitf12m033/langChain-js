import { PromptTemplate } from "@langchain/core/prompts";

/*
const promptTemplate = new PromptTemplate({
  template: "How many golf balls can fit in a school bus?",
  inputVariables: [],
});

// const result = await promptTemplate.format();

const result = await promptTemplate.invoke({});
console.log(result);
*/

/**
 * With inputvariables
 */

// const promptTemplate = new PromptTemplate({
//   template: "How many {item} can fit in a {container}?",
//   inputVariables: ["item", "container"],
// });

/**
 * My Template: using fromTemplate
 */
const promptTemplate = PromptTemplate.fromTemplate(
  "How many {item} can fit in a {container}?"
);

const result = await promptTemplate.invoke({
  item: "Tennis balls",
  container: "class room",
});

console.log(result);

// To run this file: node simple-prompt.js
