import { ChatOllama } from "@langchain/ollama";

const model = new ChatOllama({
  model: "llama3.2:1b",
});

const response = await model.invoke("What is the capital of France?");
console.log(response);
