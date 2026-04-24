import MessageTile from "../components/MessageTile";
import RecentContact from "../components/RecentContact";
import useContactHook from "../useContactHook";
import "./MessagePage.css";
const MessagePage = () => {
  const { contacts, navigate } = useContactHook();

  return (
    <div className="messages-container">
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
                  onClick={() =>
                    navigate("/contact/" + conv.conversation_id, {
                      state: { participante: { name: conv.participant_name } },
                    })
                  }
                />
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default MessagePage;
