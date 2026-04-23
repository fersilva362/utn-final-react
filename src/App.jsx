import { BrowserRouter, Route, Routes } from "react-router";

import MessagePage from "./messagePageScreen/MessagePage";
import ChatPage from "./chatPageScreen/ChatPage";
import MyLayout from "./myLayout/MyLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MyLayout />}>
          <Route path="/" element={<div>Ver</div>} />
          <Route path="/contact/:conversation_id" element={<ChatPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
