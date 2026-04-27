import MessagePage from "../messagePageScreen/MessagePage";
import { Outlet, useLocation } from "react-router";
import "./MyLayout.css";
import ContactContextProvider from "../context/ContactContextProvider";

export default function MyLayout() {
  const location = useLocation();
  const isChatting =
    location.pathname.includes("contact") || location.pathname.includes("add");
  return (
    <ContactContextProvider>
      <div className={`app-container ${isChatting ? "is-chatting" : ""}`}>
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
