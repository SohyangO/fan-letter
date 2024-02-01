import { BrowserRouter, Route, Routes } from "react-router-dom";
import LetterList from "components/LetterList";
import Home from "pages/home";
import Detail from "pages/detail";
import { useState } from "react";
import { letterItems } from "letterItems";

const Router = () => {
  const [letterAdd, setLetterAdd] = useState(letterItems);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home letterAdd={letterAdd} setLetterAdd={setLetterAdd} />}
        />
        <Route
          path="detail/:id"
          element={<Detail letterAdd={letterAdd} setLetterAdd={setLetterAdd} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
