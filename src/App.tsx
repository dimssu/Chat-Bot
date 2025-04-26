import { ChatBot } from './components/ChatBot';

function App() {
  return (
    <div>
      <h1>ChatBot Demo</h1>
      
      {/* Example with backend API */}
      {/* <ChatBot
        backendUrl="https://api.example.com/chat"
        context="This is a chatbot for a finance SaaS tool."
        responseType="formal"
        position="bottom-right"
        welcomeMessage="Welcome! Ask me anything."
        styling={{ widgetColor: "#4f46e5", textColor: "#ffffff" }}
        theme="light"
        placeholderText="Ask your question..."
      />
       */}
      {/* Example with direct LLM API */}
      
      <ChatBot
        directLlmConfig={{
          apiEndpoint: "https://api.openai.com/v1/chat/completions",
          apiKey: "your_api_key", 
          model: "gpt-3.5-turbo"
        }}
        context="This is a chatbot for a finance SaaS tool."
        responseType="formal"
        position="bottom-left"
        welcomeMessage="Welcome! Ask me anything."
        styling={{ widgetColor: "#10b981", textColor: "#ffffff" }}
        theme="light"
        placeholderText="Ask your question..."
      />
     
      
      {/* Example with Anthropic Claude */}
      {/*
      <ChatBot
        directLlmConfig={{
          apiEndpoint: "https://api.anthropic.com/v1/messages",
          apiKey: "your-anthropic-api-key",
          model: "claude-3-opus-20240229",
          headers: {
            "anthropic-version": "2023-06-01"
          },
          formatMessages: (messages, newMessage, context) => ({
            model: "claude-3-opus-20240229",
            max_tokens: 1000,
            messages: [
              ...messages.map(msg => ({
                role: msg.sender === 'user' ? 'user' : 'assistant',
                content: msg.content
              })),
              { role: 'user', content: newMessage }
            ],
            system: context || ""
          }),
          parseResponse: (data) => data.content[0].text
        }}
        context="You are a helpful assistant for a finance SaaS tool."
        position="top-right"
        welcomeMessage="Hello! I'm Claude. How can I assist you today?"
        styling={{ widgetColor: "#7c3aed", textColor: "#ffffff" }}
        theme="dark"
      />
      */}
    </div>
  );
}

export default App;
