import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { readFile } from "fs/promises";
// Load environment variables
const model = new ChatGoogleGenerativeAI({
  model: "gemini-1.5-flash",
  maxTokens: 1024,
  temperature: 0.5,
});

// Read the image file
const myimage = await readFile("picture.jpeg");

// Convert the image to base64
const base64Image = myimage.toString("base64");

// Define the prompt template
const messages = [
  {
    // System prompt
    role: "system",
    content: "Describe the image in detail.",
  },
  {
    // User prompt
    role: "user",
    content: [
      {
        type: "image_url",
        image_url: { url: `data:image/jpeg;base64,${base64Image}` },
      },
      { type: "text", text: "What is in this image?" },
    ],
  },
];

// Create the prompt template
const promptTemplate = ChatPromptTemplate.fromMessages(messages);

// Invoke the prompt template
// const result = await promptTemplate.invoke({
//   myimage: base64Image,
// });

// console.log(result);

// Create the multimodal chain
const multimodalChain = promptTemplate.pipe(model);

// Invoke the multimodal chain
const result = await multimodalChain.invoke({
  myimage: base64Image,
});

// Log the result
console.log(result.content);
