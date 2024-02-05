import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteLetter, updateLetter } from "modules/LetterReducer";

const EditButton = ({ onClick }) => <button onClick={onClick}>수정</button>;
const SaveButton = ({ onClick }) => <button onClick={onClick}>수정완료</button>;

const Detail = () => {
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
      dispatch(updateLetter(letter.id, editedContent));
      alert("수정이 완료되었습니다.");

      navigate("/");
    }
    SetEdited(false);
  };

  return (
    <>
      <LetterContainer>
        <HomeBtn onClick={() => navigate("/")}>홈으로</HomeBtn>
        <LetterContainer>
          <header>
            <DetailAvatarImage src={letter.avatar}></DetailAvatarImage>
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
          </section>
          <section>
            {edited ? (
              <SaveButton onClick={handleSaveEdit} />
            ) : (
              <EditButton onClick={() => SetEdited(true)} />
            )}
            <button onClick={() => handleDeleteBtn(letter)}>삭제</button>
          </section>
        </LetterContainer>
      </LetterContainer>
    </>
  );
};
const HomeBtn = styled.button`
  margin-left: 102px;
  background-color: antiquewhite;
  border: 1px solid navajowhite;
  padding: 8px;
  border-radius: 10px;
`;
const LetterContainer = styled.div`
  width: 80%;
  border-radius: 50px;
  object-fit: cover;
  background-color: #d6ecff;
  margin: auto;
  padding: 24px;
`;

const DetailAvatarImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  object-fit: cover;
`;

export default Detail;
