// Import global styles
import './styles/index.scss';

// Export the main component
export { ChatBot } from './components/ChatBot';
export { ChatMessage } from './components/ChatMessage';
export { ChatInput } from './components/ChatInput';
export { ChatFeedback } from './components/ChatFeedback';
export { ChatSuggestions } from './components/ChatSuggestions';
export { ChatFileUpload } from './components/ChatFileUpload';

// Export CSS path for direct import
export const cssPath = './dist/index.css';

// Export types for consumers
export type {
  ChatBotProps,
  DirectLlmConfig,
  ChatBotPosition,
  ChatBotTheme,
  ChatBotResponseType,
  ChatBotStyling,
  MessageType
} from './components/types';
