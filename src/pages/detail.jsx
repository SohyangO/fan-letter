import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Detail = ({ letterAdd, setLetterAdd }) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const letter = state;

  const handleDeleteBtn = () => {
    const confirmDelete = window.confirm("정말 삭제하시겠습니까?");

    if (confirmDelete) {
      // letterAdd에서 해당 id를 가진 데이터를 제외하고 새로운 배열 생성
      const updatedLetterAdd = letterAdd.filter(
        (item) => item.id !== letter.id
      );

      setLetterAdd(updatedLetterAdd);

      alert("삭제되었습니다.");
      navigate("/");
    }
    return;
  };

  //수정 버튼 클릭 시 textarea 보여줄 state
  const [edited, SetEdited] = useState(false);

  //수정된 내용을 담을 state
  const [editedContent, setEditedContent] = useState(letter.content);

  const handleSaveEdit = () => {
    SetEdited(true);
    if (edited) {
      if (editedContent === letter.content) {
        alert("아무런 수정사항이 없습니다.");
        return;
      } else {
        const confirmSave = window.confirm("정말 수정하시겠습니까?");
        if (confirmSave) {
          setLetterAdd((prev) =>
            prev.map((item) =>
              item.id === letter.id ? { ...item, content: editedContent } : item
            )
          );
          alert("수정이 완료되었습니다.");
          SetEdited(false);
          navigate("/");
        }
      }
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
            {edited ? (
              <textarea
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
              />
            ) : (
              <p>{editedContent}</p>
            )}
          </header>
          <section>
            <p>{letter.createdAt}</p>
            <p></p>
          </section>
          <section>
            <button onClick={() => handleSaveEdit()}>
              {edited ? "수정완료" : "수정"}
            </button>

            <button onClick={() => handleDeleteBtn(letter)}>삭제</button>
          </section>
        </div>
      </div>
    </>
  );
};

export default Detail;
