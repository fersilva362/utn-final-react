import React, { useState } from "react";
import { useNavigate } from "react-router";
const MessagePage = () => {
  const navigate = useNavigate();

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

  const [contacts] = useState(myContacts);

  console.log(myContacts[0].last_message);

  return (
    <div>
      <header>
        <h1>Message</h1>
      </header>

      <main>
        <section>
          <p>Recent</p>
          <div>
            {contacts.map((contact) => {
              const url =
                "https://i.pravatar.cc/300?u=" + contact.conversation_id;
              return (
                <RecentContact
                  url={url}
                  key={contact.conversation_id}
                  name={contact.participant_name}
                />
              );
            })}
          </div>
        </section>

        <section className="">
          <div className="">
            {contacts.map((conv) => {
              const url = "https://i.pravatar.cc/300?u=" + conv.conversation_id;
              return (
                <MessageTile
                  url={url}
                  key={conv.conversation_id}
                  name={conv.participant_name}
                  message={conv.last_message}
                  time={conv.last_message_time}
                  onClick={() => navigate("/contact/" + conv.conversation_id)}
                />
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

const RecentContact = ({ name, url }) => (
  <div>
    <img src={url} alt={name} className="" />
    <span className="">{name}</span>
  </div>
);

const MessageTile = ({ url, name, message, time, onClick }) => (
  <div
    onClick={onClick}
    className="flex items-center p-4 hover:bg-gray-700 rounded-2xl cursor-pointer transition-colors"
  >
    <img src={url} className="" alt={name} />
    <div className="">
      <div className="">
        <h4 className="">{name}</h4>
        <span className="">{time}</span>
      </div>
      <p className="">{message || "No messages yet"}</p>
    </div>
  </div>
);

export default MessagePage;
