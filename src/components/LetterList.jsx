import React from "react";
import styled from "styled-components";

const LetterBox = styled.li`
  border: 1px solid whitesmoke;
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
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
            <p>{letter.content}</p>
          </div>
        </LetterBox>
      ))}
    </ul>
  );
};

export default LetterList;
