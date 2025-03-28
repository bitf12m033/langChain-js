# LangChain Quickstart with Google Generative AI

This project demonstrates how to use LangChain with Google's Generative AI (Gemini) for building AI-powered applications.

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Google Cloud Platform account with API access

## Installation

1. Clone this repository:
```bash
git clone <your-repository-url>
cd langchain-quickstart
```

2. Install the required dependencies:
```bash
npm install
```

3. Set up your environment variables:
Create a `.env` file in the root directory and add your Google API key:
```
GOOGLE_API_KEY=your_api_key_here
```

### Setting up Google API Key

1. **Get your API Key**:
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Sign in with your Google account
   - Click on "Create API Key"
   - Copy the generated API key

2. **Configure Environment Variables**:

   **Option 1 - Using .env file (Recommended for development)**:
   ```bash
   # Create .env file in project root
   echo "GOOGLE_API_KEY=your_api_key_here" > .env
   ```

   **Option 2 - Set in terminal (Temporary)**:
   ```bash
   # For macOS/Linux
   export GOOGLE_API_KEY=your_api_key_here
   
   # For Windows (Command Prompt)
   set GOOGLE_API_KEY=your_api_key_here
   
   # For Windows (PowerShell)
   $env:GOOGLE_API_KEY="your_api_key_here"
   ```

3. **Verify Setup**:
   ```typescript
   console.log(process.env.GOOGLE_API_KEY); // Should show your API key
   ```

⚠️ **Important Security Notes**:
- Never commit your `.env` file to version control
- Add `.env` to your `.gitignore` file
- Keep your API key secure and rotate it if compromised
- Use environment variables in production environments

## Running the Multimodal Example

The project includes an example that demonstrates how to use LangChain with Gemini to analyze images. To run this example:

1. **Prepare an Image**:
   - Place your image file (e.g., `picture.jpeg`) in the project root directory
   - Supported formats: JPEG, PNG, GIF, WEBP

2. **Run the Example**:
   ```bash
   # Using npm script (recommended)
   npm run analyze

   # Or using Node.js directly
   node multimodal-prompt.js

   # Or using .mjs extension
   mv multimodal-prompt.js multimodal-prompt.mjs
   node multimodal-prompt.mjs
   ```

3. **Expected Output**:
   The script will output a detailed description of your image.

4. **Customizing the Example**:
   - To analyze a different image, modify the `imagePath` in the `main()` function
   - To adjust the model's behavior, modify the configuration parameters:
     ```javascript
     const model = new ChatGoogleGenerativeAI({
       model: "gemini-1.5-flash",
       maxTokens: 1024,
       temperature: 0.5,
     });
     ```
## **LLMs and Chat Models**
**LLMs in LangChain:**
**Types:**
1. **Legacy Models**
   - Older text-in-text-out like GPT-3
2. **Text-Only Models**
   - Models that only take text input  
3. **Single-Turn Models**
   - Models that don't support multi-turn chat conversations

## Setup

1. **Select an LLM Provider**
   - OpenAI
   - Google
   - Anthropic

2. **Get Your API Key**
   - Required to authenticate with the provider
   - Note whether model access is paid or free

3. **Install Node.js SDK**
   ```bash
   npm install @langchain/community
   ```

4. **Add API Key to Environment**
   - Export via terminal:
     ```bash
     export GOOGLE_API_KEY="your-api-key"
     export OPENAI_API_KEY="your-api-key"
     ```
   - Or use .env file:
     ```
     GOOGLE_API_KEY=your-api-key
     OPENAI_API_KEY=your-api-key
     ```
## Using Local LLMs with Ollama

1. **Install Ollama**
   - Download Ollama from [ollama.ai](https://ollama.ai)
   - Follow installation instructions for your OS

2. **Download Language Models**
   ```bash
   # Download a specific model, e.g. Llama 2
   ollama pull llama2
   ```

3. **Setup LangChain Integration**
   ```bash
   # Install the Ollama package for LangChain
   npm install @langchain/ollama
   ```

4. **Create Chat Instance**
   ```javascript
   import { ChatOllama } from "@langchain/ollama";
   
   const model = new ChatOllama({
     model: "llama2" // Or other model name you downloaded
   });
   ```

5. **Integrate Using the SDK**
   ```javascript
   // Create model instance
   const model = new ChatOpenAI({
     modelName: "gpt-3.5-turbo"
   });
   // API key will be automatically loaded from environment
   ```

## Chat Models

Chat models are powerful language models designed for conversational interactions. They can understand context and maintain coherent dialogues across multiple exchanges.

## Features of Chat Models

- **Multimodality**: Ability to process and generate multiple types of content including:
  - Text
  - Images 
  - Audio
  - Video

- **Structured Output**: Can generate responses in specific formats like:
  - JSON
  - XML
  - Markdown
  - Custom data structures

- **Tool Calling**: Integration capabilities with external tools and APIs:
  - Database queries
  - Web searches
  - Mathematical calculations
  - Custom function execution

- **Caching**: Performance optimization through:
  - Response caching
  - Context preservation
  - Reduced API calls
  - Faster response times


## Additional Resources

- [LangChain Documentation](https://js.langchain.com/docs/get_started/introduction)
- [Google Generative AI Documentation](https://ai.google.dev/docs)
- [LangChain Google Generative AI Integration](https://js.langchain.com/docs/integrations/chat/google_generative_ai)

## License

MIT
