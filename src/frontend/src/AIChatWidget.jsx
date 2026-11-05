import React, { useState, useRef, useEffect } from 'react';

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Hi there! I am the EduFusion LangGraph agent. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8001/agent/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userMessage })
      });

      const data = await response.json();
      
      if (data.status === 'success') {
        setMessages(prev => [...prev, { role: 'ai', content: data.response }]);
      } else {
        setMessages(prev => [...prev, { role: 'ai', content: 'Sorry, I encountered an error.' }]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'ai', content: 'Failed to connect to AI agent.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="ai-chat-container">
      {isOpen && (
        <div className="ai-chat-window">
          <div className="ai-chat-header">
            <h3>EduFusion AI</h3>
            <button onClick={toggleChat} className="close-btn">×</button>
          </div>
          
          <div className="ai-chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={"" + "chat-bubble " + msg.role + "-bubble"}>
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div className="chat-bubble ai-bubble typing-indicator">
                <span>.</span><span>.</span><span>.</span>
              </div>
            )}
            <div ref={endOfMessagesRef} />
          </div>

          <form onSubmit={sendMessage} className="ai-chat-input-area">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading || !input.trim()}>Send</button>
          </form>
        </div>
      )}
      
      {!isOpen && (
        <button className="ai-chat-toggle" onClick={toggleChat}>
          💬 AI
        </button>
      )}
    </div>
  );
};

export default AIChatWidget;
