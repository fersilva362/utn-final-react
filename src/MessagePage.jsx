import useContactHook from "./useContactHook";
const MessagePage = () => {
  const { contacts, navigate } = useContactHook();

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
