import MessageTile from "../components/MessageTile";
import RecentContact from "../components/RecentContact";
import useContactHook from "../hooks/useContactHook";
import "./MessagePage.css";

const MessagePage = () => {
  const {
    contacts,
    navigate,
    searchInput,
    setSearchInput,
    handleSearch,
    resultSearch,
  } = useContactHook();

  return (
    <div className="messages-container">
      <div className="search-container">
        <div className="search-input-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search or start new chat"
            className="search-input"
            onKeyDown={(e) => handleSearch(e)}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
      </div>
      <main className="messages-content">
        {resultSearch && (
          <section className="recent-section">
            {/* Se podria hacer aca un toggle entre resulSearch & contacts para no duplicar code */}
            <p className="recent-title"> Your Search </p>
            <div className="recent-list">
              {!resultSearch ? undefined : resultSearch.length == 0 ? (
                <div className="search-error">
                  ⚠️ No results found. Please try a different keyword.
                </div>
              ) : (
                resultSearch.map((contact) => {
                  const url =
                    "https://i.pravatar.cc/300?u=" + contact.conversation_id;
                  return (
                    <RecentContact
                      url={url}
                      key={contact.conversation_id}
                      name={contact.participant_name}
                    />
                  );
                })
              )}
            </div>
          </section>
        )}

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
