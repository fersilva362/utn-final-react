import { BrowserRouter, Route, Routes } from "react-router";

import MessagePage from "./messagePageScreen/MessagePage";
import ChatPage from "./chatPageScreen/ChatPage";
import MyLayout from "./myLayout/MyLayout";
import EmptyPage from "./emptyMessage/EmptyPage";
import ErrorPage from "./errorPage/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MyLayout />}>
          <Route path="/" element={<EmptyPage />} />
          <Route path="/contact/:conversation_id" element={<ChatPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
