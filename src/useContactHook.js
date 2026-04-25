import { useCallback, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { ContactContext } from "./context/ContactContext";

export default function useContactHook() {
  const navigate = useNavigate();
  const { contacts } = useContext(ContactContext);

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

        const conversations = contacts.find(
          (msg) => msg.conversation_id === conversation_id,
        ).messages;

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

  //Quiero evitar que filtre en tiempo real ( a medida que tipeo). se puede tambien disparar handleSearch by clickin Icon. se puede mejorar para matchera partial.Mejorar using .filter() and using string.includes()

  const groupedByName = useMemo(() => {
    return Object.groupBy(contacts, ({ participant_name }) => participant_name);
  }, [contacts]);

  const handleSearch = (e) => {
    if (e.key !== "Enter") {
      return;
    }
    setResultSearch(null);
    if (Object.hasOwn(groupedByName, searchInput)) {
      setResultSearch((prev) => [
        ...(prev || []),
        ...groupedByName[searchInput],
      ]);
    }
  };
  //deberia manejar funcion asincrona si simulo mandar datos al API, envolviendo en Promise el setTimeout y try-catch for error handling. deberia actualizar contacts array instead messages array

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    const newMessage = {
      id: Date.now().toString(),
      content: inputValue,
      sender_id: userId.toString(),
      created_at: new Date().toISOString(),
    };

    setTimeout(() => {
      setMessages((prev) => [...(prev || []), newMessage]);
    }, 2000);

    setInputValue("");
  };

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
