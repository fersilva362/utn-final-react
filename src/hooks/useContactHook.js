import { useCallback, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { ContactContext } from "../context/ContactContext";
import { msg } from "../data/msgOtherUser";
export default function useContactHook() {
  const navigate = useNavigate();
  const { contacts, setContacts } = useContext(ContactContext);

  const [messages, setMessages] = useState(null);
  const [loadMessage, setLoadMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [resultSearch, setResultSearch] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const userId = "96"; //Will come from credentials' user after login.

  const loadConversationsById = useCallback(
    (conversation_id) => {
      try {
        setLoadMessage(true);
        setErrorMessage("");

        const contact_by_conversation = contacts.find(
          (msg) => msg.conversation_id === conversation_id,
        );

        const conversations = contact_by_conversation.messages;

        if (!conversations) {
          throw new Error("Not found conversations");
        }

        setMessages(conversations || []);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setLoadMessage(false);
      }
    },
    [contacts],
  );

  const receiveMessageOtherUser = (msgReceived, conversation_id) => {
    msgReceived = { ...msgReceived, conversation_id };
    setTimeout(() => {
      setMessages((prev) => [...(prev || []), msgReceived.message]);
      setContacts((prev) =>
        prev.map((c) => {
          return c.conversation_id === msgReceived.conversation_id
            ? {
                ...c,
                last_message: msgReceived.message.content,
                last_message_time: new Date().toISOString(),
                messages: [...c.messages, msgReceived.message],
              }
            : c;
        }),
      );
    }, 2000);

    //
  };

  //Si son mas de un usuario ocn mismo nombre usar un reduce con [name] como key
  const filteredByConversation = useMemo(() => {
    return contacts.filter(({ participant_name }) =>
      participant_name.includes(searchInput),
    );
  }, [contacts, searchInput]);

  const handleSearch = (e) => {
    if (e.key !== "Enter" || !searchInput.trim()) {
      setResultSearch(null);
      return;
    }
    setResultSearch([]);
    if (filteredByConversation.length != 0) {
      setResultSearch((prev) => [...(prev || []), ...filteredByConversation]);
    }
  };

  const handleSendMessage = (conversation_id) => {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: Date.now().toString(),
      content: inputValue,
      sender_id: userId.toString(),
      created_at: new Date().toISOString(),
    };

    setContacts((prev) =>
      prev.map((c) => {
        return c.conversation_id === conversation_id
          ? {
              ...c,
              //last_message: inputValue,
              last_message_time: new Date().toISOString(),
              messages: [...messages, newMessage],
            }
          : c;
      }),
    );
    setMessages((prev) => [...(prev || []), newMessage]);
    receiveMessageOtherUser(msg, conversation_id);
    setInputValue("");
  };

  console.log(messages);
  async function loadUser(Username, Email, Fn) {
    try {
      const newContact = {
        conversation_id:
          "8b5e6814-f6be-4868-9a3f-51f75b90fb75" + new Date().toISOString,
        participant_name: Username,
        email: Email,
        last_message: "No messages yet",
        last_message_time: new Date().toISOString(),
        messages: [],
      };
      Fn((prev) => [...prev, newContact]);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  return {
    navigate,
    messages,
    loadConversationsById,
    handleSendMessage,
    userId,
    inputValue,
    setInputValue,
    loadMessage,
    errorMessage,
    searchInput,
    setSearchInput,
    handleSearch,
    resultSearch,
    contacts,
    loadUser,
  };
}
