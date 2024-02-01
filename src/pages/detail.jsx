import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Detail = ({ letterAdd, setLetterAdd }) => {
  const { state } = useLocation();
  console.log(state);
  console.log(letterAdd);
  const navigate = useNavigate();
  const letter = state;
  const handleDeleteBtn = () => {
    const confirmDelete = window.confirm("정말 삭제하시겠습니까?");

    if (confirmDelete) {
      alert("삭제되었습니다.");
      navigate("/");
    } else {
    }
  };

  return (
    <>
      <div>
        <button onClick={() => navigate("/")}>홈으로</button>
        <div>
          <header>
            <img src={letter.avatar}></img>
            <p>{letter.nickname}</p>
            <p>{letter.content}</p>
          </header>
          <section>
            <p>{letter.createdAt}</p>
            <p></p>
          </section>
          <section>
            <button>수정</button>
            <button onClick={() => handleDeleteBtn(letter)}>삭제</button>
          </section>
        </div>
      </div>
    </>
  );
};

export default Detail;
