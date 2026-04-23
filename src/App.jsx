import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";

import MessagePage from "./messagePageScreen/MessagePage";
import ChatPage from "./chatPageScreen/ChatPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MessagePage />} />
        <Route path="/contact/:conversation_id" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
