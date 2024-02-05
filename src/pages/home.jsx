import React from "react";
import * as S from "../components/StyledHome";
import { useState } from "react";
import AddForm from "components/AddForm";

function Home() {
  const [clickedMember, setClickedMember] = useState("");

  const memberList = ["혜인", "하니", "민지", "해린", "다니엘"];
  const onHandleClickedMember = (member) => {
    setClickedMember(member);
  };

  return (
    <>
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
                  onClick={() => onHandleClickedMember(member)}
                  style={{
                    backgroundColor:
                      clickedMember === member ? "#daf7dc" : "white",
                  }}
                >
                  {member}
                </S.Li>
              );
            })}
          </S.Ul>
          <AddForm members={clickedMember} />
        </S.Body>
      </S.MainBox>
    </>
  );
}

export default Home;
