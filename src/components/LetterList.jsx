import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
`;

const LetterList = ({ letterItems }) => {
  const navigate = useNavigate();
  return (
    <ul>
      {letterItems.map((letter) => (
        <LetterBox
          key={letter.id}
          onClick={() => navigate(`/detail/${letter.id}`)}
        >
          <div>
            <AvatarImage src={letter.avatar}></AvatarImage>
          </div>
          <div>
            <h3>{letter.nickname}</h3>
            <LetterContent>
              {letter.content.slice(0, 50)}
              {letter.content.length > 50 ? "..." : ""}
            </LetterContent>
          </div>
        </LetterBox>
      ))}
    </ul>
  );
};

export default LetterList;
