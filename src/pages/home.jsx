import React from "react";
import * as S from "../components/StyledHome";
import { useState } from "react";
import Form from "components/Form";

function Home() {
  const [selectedMember, setSelectedMember] = useState(null);

  const memberList = ["혜인", "하니", "민지", "해린", "다니엘"];
  const onHandleSelectedMember = (member) => {
    setSelectedMember(member);
  };

  return (
    <>
      <S.NavBox>home</S.NavBox>
      <S.MainBox id="MainBox">
        <S.Header>
          <S.Title>NewJeans Fanletter Collection</S.Title>
        </S.Header>
        <S.Body>
          <S.Ul>
            {memberList.map((member) => {
              return (
                <S.Li
                  key={member}
                  onClick={() => onHandleSelectedMember(member)}
                  style={{
                    backgroundColor:
                      selectedMember === member ? "#4af9ff" : "white",
                  }}
                >
                  {member}
                </S.Li>
              );
            })}
          </S.Ul>
          <Form members={selectedMember} />
        </S.Body>
      </S.MainBox>
    </>
  );
}

export default Home;
