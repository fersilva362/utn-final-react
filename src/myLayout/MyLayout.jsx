import MessagePage from "../messagePageScreen/MessagePage";
import { Outlet } from "react-router";
import "./MyLayout.css";
import ContactContextProvider from "../context/ContactContextProvider";

export default function MyLayout() {
  return (
    <ContactContextProvider>
      <div className="app-container">
        <aside className="sidebar">
          <div className="sidebar-header">
            <h1>Chats</h1>
          </div>

          <div className="sidebar-scrollable">
            <MessagePage />
          </div>
        </aside>
        <main className="chat-panel">
          <Outlet />
        </main>
      </div>
    </ContactContextProvider>
  );
}
