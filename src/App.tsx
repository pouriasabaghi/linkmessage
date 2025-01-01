import { BrowserRouter, Route, Routes } from "react-router-dom";
import Message from "./pages/Message";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<Message />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
