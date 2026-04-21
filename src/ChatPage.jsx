import React, { useState } from "react";
import { useParams } from "react-router";

const myContacts = [
  {
    conversation_id: "40ac9d93-9b08-45f4-8bdf-7d2fd55c5e00",
    participant_name: "joaquin",
    last_message: "Yes, it is nice",
    last_message_time: "2026-01-19T19:21:00.088Z",

    messages: [
      {
        id: "a35616be-40b8-428a-a444-44647715b04d",
        content: "Soy fer",
        sender_id: "96",
        created_at: "2025-12-02T02:44:01.258Z",
      },
      {
        id: "20ceba06-d274-4088-b4fe-db33996adc74",
        content: "Yes, it is nice",
        sender_id: "99",
        created_at: "2026-01-19T19:21:00.088Z",
      },
    ],
  },
  {
    conversation_id: "8b5e6814-f6be-4868-9a3f-51f75b90fb75",
    participant_name: "mariela",
    last_message: "male",
    last_message_time: "2026-01-19T15:59:23.863Z",
    messages: [
      {
        id: "unique-msg-id-001",
        content: "hola mariela",
        sender_id: "96",
        created_at: "2026-01-19T15:50:00.000Z",
      },
      {
        id: "unique-msg-id-002",
        content: "male",
        sender_id: "102",
        created_at: "2026-01-19T15:59:23.863Z",
      },
    ],
  },
  {
    conversation_id: "e9b448dd-6a39-4d52-b743-c05a945317a8",
    participant_name: "emilia",
    last_message: "emi me buscas",
    last_message_time: "2026-01-19T14:58:01.874Z",
    messages: [],
  },
];

export default function ChatPage() {
  const { conversation_id } = useParams();
  console.log(conversation_id);
  const userId = 96;
  const conversations = myContacts.find(
    (msg) => msg.conversation_id === conversation_id,
  ).messages;
  console.log(conversations);
  const [messages, setMessages] = useState(conversations);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    // Logic to send message
    console.log("Sending:", inputValue);
    setMessages([
      ...messages,
      {
        id: "unique-msg-id-0010",
        content: inputValue,
        sender_id: userId.toString(),
        created_at: "2026-01-19T15:50:00.000Z",
      },
    ]);
    setInputValue("");
  };
  console.log(messages);
  const url = "https://i.pravatar.cc/300?u=" + conversation_id;

  return (
    <div>
      <header>
        <img src={url} alt="profile" />
        <span>data</span>
        <button onClick={() => {}}>Search</button>
      </header>
      <main>
        {messages.map((msg, index) => {
          const isSent = msg.sender_id === userId.toString();
          console.log(isSent);
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
