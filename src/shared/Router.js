import { BrowserRouter, Route, Routes } from "react-router-dom";
import LetterList from "components/LetterList";
import Home from "pages/home";
import Detail from "pages/detail";
import { letterItems } from "letterItems";

const Router = () => {
  const [letterAdd, setLetterAdd] = useState(letterItems);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:id" element={<Detail lettercard={LetterList} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
