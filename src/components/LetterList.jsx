import React from "react";
import styled from "styled-components";

const LetterBox = styled.li`
  border: 1px solid whitesmoke;
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
`;

const LetterContent = styled.text`
  max-width: 100px;
`;

const LetterList = ({ letterItems }) => {
  return (
    <ul>
      {letterItems.map((letter) => (
        <LetterBox key={letter.id}>
          <div>
            <img src={letter.avatar}></img>
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
