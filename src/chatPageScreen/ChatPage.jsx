import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import useContactHook from "../useContactHook";
import "./ChatPage.css";
import SentMessage from "../components/SentMessage";
import ReceivedMessage from "../components/ReceivedMessage";

export default function ChatPage() {
  const {
    messages,
    loadConversationsById,
    loadMessage,
    handleSendMessage,
    userId,
    inputValue,
    setInputValue,
  } = useContactHook();
  const { conversation_id } = useParams();
  const { state } = useLocation();
  console.log(state);
  useEffect(() => {
    loadConversationsById(conversation_id);
  }, [conversation_id, loadConversationsById]);

  return (
    <div className="chat-container">
      {loadMessage && <h1 className="loading">Loading</h1>}
      {!loadMessage && !messages && <h1 className="loading">Loading...</h1>}
      {!loadMessage && messages && (
        <>
          <header className="chat-header">
            <img
              src={`https://i.pravatar.cc/300?u=${conversation_id} `}
              alt="profile"
            />
            <span>{state.participante.name}</span>
            <button className="icon-btn" onClick={() => {}}>
              🔍
            </button>
          </header>
          <main className="chat-main">
            {messages.map((msg, index) => {
              const isSent = msg.sender_id === userId.toString();

              return isSent ? (
                <SentMessage key={index} content={msg.content} />
              ) : (
                <ReceivedMessage key={index} content={msg.content} />
              );
            })}
          </main>

          <footer className="chat-footer">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type Message"
            />
            <button onClick={handleSendMessage}>Send</button>
          </footer>
        </>
      )}
    </div>
  );
}
