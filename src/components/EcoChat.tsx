import React, { useState, useRef, useEffect, useCallback, memo } from 'react';
import { generateEcoResponse } from '../utils/aiLogic';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

interface EcoChatProps {
  /** The user's current calculated footprint, used to provide contextual AI advice */
  userFootprint: number | null;
}

/**
 * Dynamic AI Chat Assistant component.
 * Features logical decision-making based on user footprint context.
 * Optimized with React.memo and useCallback.
 */
export const EcoChat: React.FC<EcoChatProps> = memo(({ userFootprint }) => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: 'Hello! I am EcoAware AI. Ask me for tips to reduce your carbon footprint, recycle better, or anything about sustainability!', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const handleSend = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    const userMessage: Message = { id: Date.now().toString(), text: userMsg, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    setTimeout(() => {
      const botResponse = generateEcoResponse(userMsg, userFootprint);
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), text: botResponse, sender: 'bot' }]);
    }, 800);
  }, [input, userFootprint]);

  return (
    <section className="chat-container glass-panel" aria-label="Eco Assistant Chat">
      <div className="chat-header">Eco Assistant</div>
      <div className="chat-messages" aria-live="polite">
        {messages.map(msg => (
          <div key={msg.id} className={`message ${msg.sender}`}>{msg.text}</div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form className="chat-input-area" onSubmit={handleSend}>
        <label htmlFor="chat-input" className="sr-only">Type your message to the AI</label>
        <input 
          id="chat-input"
          type="text" 
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask for sustainability tips..."
        />
        <button type="submit" className="chat-send-btn" disabled={!input.trim()}>
          Ask
        </button>
      </form>
    </section>
  );
});

EcoChat.displayName = 'EcoChat';
