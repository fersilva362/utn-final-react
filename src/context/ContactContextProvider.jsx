import { useState } from "react";
import { myContacts } from "../data/contact_data";
import { ContactContext } from "./ContactContext";

export default function ContactContextProvider({ children }) {
  const [contacts, setContacts] = useState(myContacts);
  console.log(contacts);

  return (
    <ContactContext.Provider value={{ contacts, setContacts }}>
      {children}
    </ContactContext.Provider>
  );
}
