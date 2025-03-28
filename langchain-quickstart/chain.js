import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";

// Getting API KEY from terminal set for GOOGLE_API_KEY
const model = new ChatGoogleGenerativeAI({
  model: "gemini-1.5-flash",
});

const promptTemplate  = ChatPromptTemplate.fromMessages([
  ["system", "You are an expert in {area_of_expertise}."],
  ["user", "{question}"],
]);

const stringParser = new StringOutputParser();

// Lets build our first chain
// pipe : 
const chain = promptTemplate.pipe(model).pipe(stringParser);

// invoke: 
const result = await chain.invoke({
  area_of_expertise: "Computer Engineering",
  question: "How do CPUs work?",
});

console.log(result);

// To run this file: node chain.js
// Types of Prompt Templates:
// 0. PromptTemplate: Most basic prompt template, used for simple prompts
// 1. ChatPromptTemplate: Used for preparing multiple messages for chat models
// 2. StructuredOutputPromptTemplate: Used for structured output
// 3. MessagesPlaceholder: Used for dynamic prompts
// 4. HumanMessage: Used for human messages
// 5. SystemMessage: Used for system messages
// 6. AIMessage: Used for AI messages
// 7. SystemMessage
// 8. AIMessage
// 9. HumanMessage
// 10. AIMessage
// 11. HumanMessage
// 12. AIMessage
// Prompt Template as Runnable:
// 1. Runnable: Used for running prompts
// 2. RunnableSequence: Used for running multiple prompts in sequence
// 3. RunnableMap: Used for running multiple prompts in parallel
// 4. RunnableWithMessageHistory: Used for running prompts with message history
// 5. RunnableWithMessageHistoryAndTools: Used for running prompts with message history and tools
// invoke() : Used for invoking a prompt
// invokeWithMessageHistory() : Used for invoking a prompt with message history
// invokeWithMessageHistoryAndTools() : Used for invoking a prompt with message history and tools
// invokeWithStructuredOutput() : Used for invoking a prompt with structured output
// invokeWithStructuredOutputAndMessageHistory() : Used for invoking a prompt with structured output and message history
// invokeWithStructuredOutputAndMessageHistoryAndTools() : Used for invoking a prompt with structured output and message history and tools
