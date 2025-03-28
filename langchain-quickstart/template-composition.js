// Import required dependencies from LangChain and Google's Generative AI
import {ChatGoogleGenerativeAI} from "@langchain/google-genai"
import {PromptTemplate, PipelinePromptTemplate} from "@langchain/core/prompts"

// Initialize the Google Generative AI model (Gemini 1.5 Flash)
const model = new ChatGoogleGenerativeAI({
    model: "gemini-1.5-flash"
})

// Define the system prompt that sets the AI's role and personality
const systemPrompt = PromptTemplate.fromTemplate("You are a helpful A.I assistant who is also a movie buff")

// Create a template for example responses to show the desired format
const aiExampleResponsePrompt = PromptTemplate.fromTemplate(`
    Your response should always be in this format
    Question: Can you recommend a {example_genre} movie?
    Answer: Sure, {example_answer} is a great choice
`)

// Create a template for new user questions
const newConversationPrompt = PromptTemplate.fromTemplate("Question: Can you recommend a {question_genre} movie?")

// Define the final prompt template that combines all other prompts
const finalHumanPrompt = PromptTemplate.fromTemplate(`
    {systemRole}
    {aiExampleResponse}
    {newConversation}
`)

// Create a pipeline of prompts that will be composed together
const composedPrompt = new PipelinePromptTemplate({
    finalPrompt: finalHumanPrompt,
    pipelinePrompts: [
        {
            name: "systemRole",
            prompt: systemPrompt
        },
        {
            name: "aiExampleResponse",
            prompt: aiExampleResponsePrompt
        },
        {
            name: "newConversation",
            prompt: newConversationPrompt
        }
    ]
})

/* Example of how the formatted prompt would look (commented out)
const formattedPrompt = await composedPrompt.format({
    example_genre: "sci-fi",
    example_answer: "Blade Runner",
    question_genre: "Comedy"
})

console.log(formattedPrompt) */

// Create a chain by connecting the composed prompt to the model
const chain = composedPrompt.pipe(model)

// Execute the chain with specific parameters
const response = await chain.invoke({
    example_genre: "sci-fi",
    example_answer: "Blade Runner",
    question_genre: "Comedy"
})

// Log the AI's response
console.log(response.content)
