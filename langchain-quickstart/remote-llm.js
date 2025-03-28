import { config } from 'dotenv';
import { ChatOpenAI } from "@langchain/openai";

// Load environment variables from .env file
config();

const model = new ChatOpenAI({
  model: "gpt-3.5-turbo-0125",  // Using the latest model version
  temperature: 0.7,
});

try {
  const response = await model.invoke("What is the capital of France?");
  console.log(response);
} catch (error) {
  console.error("Error details:", {
    message: error.message,
    status: error.status,
    type: error.type,
    code: error.code
  });
}
