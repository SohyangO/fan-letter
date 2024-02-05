import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteLetter, updateLetter } from "modules/LetterReducer";
// import { LetterContext } from "shared/context";

const EditButton = ({ onClick }) => <button onClick={onClick}>수정</button>;

const SaveButton = ({ onClick }) => <button onClick={onClick}>수정완료</button>;

const Detail = () => {
  // const { letterAdd, setLetterAdd } = useContext(LetterContext);
  const dispatch = useDispatch();
  const { state } = useLocation();
  const navigate = useNavigate();
  const letter = state;
  const letterAdd = useSelector((state) => state.letterCollect.letterAdd);

  const handleDeleteBtn = () => {
    const confirmDelete = window.confirm("정말 삭제하시겠습니까?");

    if (confirmDelete) {
      dispatch(deleteLetter(letter.id));

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
    if (editedContent === letter.content) {
      alert("아무런 수정사항이 없습니다.");
      return;
    }
    const confirmSave = window.confirm("정말 수정하시겠습니까?");
    if (confirmSave) {
      dispatch(updateLetter(letterAdd.id, editedContent));
      alert("수정이 완료되었습니다.");

      navigate("/");
    }
    SetEdited(false);
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
            {edited ? (
              <SaveButton onClick={handleSaveEdit} />
            ) : (
              <EditButton onClick={() => SetEdited(true)} />
            )}
            <button onClick={() => handleDeleteBtn(letter)}>삭제</button>
          </section>
        </div>
      </div>
    </>
  );
};

export default Detail;
