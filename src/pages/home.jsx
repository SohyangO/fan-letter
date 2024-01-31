import React from "react";
import * as S from "../components/StyledHome";
import { useState } from "react";

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
          <form>
            <section>
              <label>닉네임 : </label>
              <input type="text" />
            </section>
            <section>
              <label>내용 : </label>
              <input type="text" />
            </section>
            <section>
              <label>보내고 싶은 멤버를 선택해주세요 </label>
              <select>
                <option value="혜인">혜인</option>
                <option value="하니">하니</option>
                <option value="민지">민지</option>
                <option value="해린">해린</option>
                <option value="다니엘">다니엘</option>
              </select>
            </section>
          </form>
        </S.Body>
      </S.MainBox>
    </>
  );
}

export default Home;
