import React, { useEffect } from "react";
import { useParams } from "react-router";
import useContactHook from "../useContactHook";
import "./ChatPage.css";

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
  useEffect(() => {
    loadConversationsById(conversation_id);
  }, [conversation_id, loadConversationsById]);

  const url = "https://i.pravatar.cc/300?u=" + conversation_id;
  //falta pensar en un scroll view  para muchas conversaciones
  return (
    <div className="chat-container">
      {loadMessage && <h1 className="loading">Loading</h1>}
      {!loadMessage && !messages && <h1 className="loading">Loading...</h1>}
      {!loadMessage && messages && (
        <>
          <header className="chat-header">
            <img src={url} alt="profile" />
            <span>Chat User</span>
            <button className="icon-btn" onClick={() => {}}>
              🔍
            </button>
          </header>
          <main className="chat-main">
            {messages.map((msg, index) => {
              const isSent = msg.sender_id === userId.toString();
              console.log(userId);
              console.log(isSent);
              console.log(msg.sender_id);
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
              placeholder="Message"
            />
            <button onClick={handleSendMessage}>Send</button>
          </footer>
        </>
      )}
    </div>
  );
}

const SentMessage = ({ content }) => (
  <div className="message sent">{content}</div>
);
const ReceivedMessage = ({ content }) => (
  <div className="message received">{content}</div>
);
