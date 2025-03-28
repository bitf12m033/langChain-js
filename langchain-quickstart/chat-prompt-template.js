import { ChatPromptTemplate } from "@langchain/core/prompts";

const messages = [
  {
    role: "system",
    content: "You are a JavaScript expert.",
  },
  {
    role: "user",
    content: "{question}",
  },
];

const promptTemplate = ChatPromptTemplate.fromMessages(messages);

const result = await promptTemplate.invoke({
  question: "What is a closure?",
});

// console.log(result);
console.log(result.toChatMessages());

// To run this file: node chat-prompt-template.js