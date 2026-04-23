import React, { useEffect } from "react";
import { useParams } from "react-router";
import useContactHook from "./useContactHook";

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

  return (
    <div>
      {loadMessage && <h1>Loading</h1>}
      {!loadMessage && !messages && <h1>Loading...</h1>}
      {!loadMessage && messages && (
        <>
          <header>
            <img src={url} alt="profile" />
            <span>data</span>
            <button onClick={() => {}}>Search</button>
          </header>
          <main>
            {messages.map((msg, index) => {
              const isSent = msg.sender_id === userId.toString();
              console.log(userId);
              console.log(isSent);
              console.log(msg.sender_id);
              return isSent ? (
                <SentMessage
                  key={index}
                  content={msg.content}
                  sender_id={msg.sender_id}
                />
              ) : (
                <ReceivedMessage
                  key={index}
                  content={msg.content}
                  sender_id={msg.sender_id}
                />
              );
            })}
          </main>

          <footer>
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

const SentMessage = ({ content, sender_id }) => (
  <div>
    {content} --- and sendBy:{sender_id}
  </div>
);
const ReceivedMessage = ({ content, sender_id }) => (
  <div>
    {content}and sendBy:{sender_id}
  </div>
);
