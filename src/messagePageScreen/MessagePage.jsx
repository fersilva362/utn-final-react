import useContactHook from "../useContactHook";
import "./MessagePage.css";
const MessagePage = () => {
  const { contacts, navigate } = useContactHook();
  //Falta formatear la hora
  return (
    <div className="messages-container">
      <header className="messages-header">
        <h1>Messages</h1>
      </header>

      <main className="messages-content">
        <section className="recent-section">
          <p className="recent-title">Recent Contacts</p>
          <div className="recent-list">
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

        <section className="tiles-section">
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
  <div className="recent-contact">
    <img src={url} alt={name} className="recent-avatar" />
    <span className="tile-name">{name}</span>
  </div>
);

const MessageTile = ({ url, name, message, time, onClick }) => (
  <div onClick={onClick} className="message-tile">
    <img src={url} className="tile-avatar" alt={name} />
    <div className="tile-info">
      <div className="tile-header">
        <h4 className="tile-name">{name}</h4>
        <span className="tile-time">{time}</span>
      </div>
      <p className="tile-message">{message || "No messages yet"}</p>
    </div>
  </div>
);

export default MessagePage;
