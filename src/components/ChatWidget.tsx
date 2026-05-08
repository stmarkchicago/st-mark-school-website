import { useState, useRef, useEffect } from 'react';
import { baseUrl } from '../lib/base-url';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');

    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch(`${baseUrl}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, { role: 'user', content: userMessage }],
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const text = await response.text();

      // Parse the streaming response
      const lines = text.split('\n').filter(line => line.trim());
      let assistantMessage = '';

      for (const line of lines) {
        if (line.startsWith('0:"')) {
          const content = line.slice(3, -2); // Remove 0:" and "
          assistantMessage += content;
        }
      }

      // Add assistant message
      setMessages(prev => [...prev, { role: 'assistant', content: assistantMessage.trim() }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again or contact us at (630) 986-1100.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ 
      position: 'fixed', 
      bottom: 0, 
      right: 0, 
      zIndex: 999999,
      pointerEvents: 'none'
    }}>
      <div style={{ pointerEvents: 'auto' }}>
        {/* Chat Button - Fixed to bottom right */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            width: '56px',
            height: '56px',
            backgroundColor: '#123eab',
            color: 'white',
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 999999,
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#0d2d7f';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#123eab';
            e.currentTarget.style.transform = 'scale(1)';
          }}
          aria-label="Open chat"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '24px', height: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '24px', height: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          )}
        </button>

        {/* Chat Window */}
        {isOpen && (
          <div style={{
            position: 'fixed',
            bottom: '96px',
            right: '24px',
            width: '384px',
            height: '500px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            border: '1px solid #e5e7eb',
            zIndex: 999999
          }}>
            {/* Header */}
            <div style={{
              backgroundColor: '#123eab',
              color: 'white',
              padding: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '24px', height: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontWeight: '600', fontSize: '18px', margin: 0 }}>St. Mark Assistant</h3>
                  <p style={{ fontSize: '12px', opacity: 0.8, margin: 0 }}>Ask me anything!</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'rgba(255,255,255,0.8)',
                  cursor: 'pointer',
                  padding: '4px'
                }}
                aria-label="Close chat"
              >
                <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '20px', height: '20px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '16px',
              backgroundColor: '#f9fafb'
            }}>
              {messages.length === 0 && (
                <div style={{ textAlign: 'center', color: '#6b7280', marginTop: '32px' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: 'rgba(18, 62, 171, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px'
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '32px', height: '32px', color: '#123eab' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <p style={{ fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>Welcome to St. Mark!</p>
                  <p style={{ fontSize: '12px' }}>Ask me about our programs, admissions, or anything else.</p>
                </div>
              )}

              {messages.map((message, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
                    marginBottom: '16px'
                  }}
                >
                  <div
                    style={{
                      maxWidth: '80%',
                      borderRadius: '8px',
                      padding: '8px 16px',
                      backgroundColor: message.role === 'user' ? '#123eab' : 'white',
                      color: message.role === 'user' ? 'white' : '#1f2937',
                      border: message.role === 'user' ? 'none' : '1px solid #e5e7eb'
                    }}
                  >
                    <p style={{ fontSize: '14px', margin: 0, whiteSpace: 'pre-wrap' }}>{message.content}</p>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <div style={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    padding: '8px 16px'
                  }}>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      <div style={{ width: '8px', height: '8px', backgroundColor: '#9ca3af', borderRadius: '50%', animation: 'bounce 1s infinite' }}></div>
                      <div style={{ width: '8px', height: '8px', backgroundColor: '#9ca3af', borderRadius: '50%', animation: 'bounce 1s infinite 0.15s' }}></div>
                      <div style={{ width: '8px', height: '8px', backgroundColor: '#9ca3af', borderRadius: '50%', animation: 'bounce 1s infinite 0.3s' }}></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} style={{
              padding: '16px',
              backgroundColor: 'white',
              borderTop: '1px solid #e5e7eb'
            }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  style={{
                    flex: 1,
                    padding: '8px 16px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                  disabled={isLoading}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#123eab'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#d1d5db'}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  style={{
                    backgroundColor: '#123eab',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: isLoading || !input.trim() ? 'not-allowed' : 'pointer',
                    opacity: isLoading || !input.trim() ? 0.5 : 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  aria-label="Send message"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '20px', height: '20px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
