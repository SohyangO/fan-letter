import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LetterList = ({ letterCard }) => {
  const navigate = useNavigate();

  const handleLetterClick = (letter) => {
    navigate(`/detail/${letter.id}`, { state: letter });
  };

  return (
    <ul>
      {letterCard.length === 0 ? (
        <p>팬레터를 남겨주세요!</p>
      ) : (
        letterCard.map((letter) => (
          <LetterBox key={letter.id} onClick={() => handleLetterClick(letter)}>
            <div>
              <AvatarImage src={letter.avatar}></AvatarImage>
            </div>
            <div>
              <h3>{letter.nickname}</h3>
              <LetterContent>
                {letter.createdAt}
                {letter.content.slice(0, 50)}
                {letter.content.length > 50 ? "..." : ""}
              </LetterContent>
            </div>
          </LetterBox>
        ))
      )}
    </ul>
  );
};

const LetterBox = styled.li`
  border: 1px solid whitesmoke;
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
  cursor: pointer;
`;

const LetterContent = styled.text`
  max-width: 100px;
`;

const AvatarImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  object-fit: cover;
`;

export default LetterList;
