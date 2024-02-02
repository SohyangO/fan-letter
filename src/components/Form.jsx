import React, { useState } from "react";
import styled from "styled-components";
import LetterList from "./LetterList";
import avatarImg from "avatar.jpg";
import { v4 } from "uuid";

function Form({ members, letterAdd, setLetterAdd }) {
  const [nickname, setNickname] = useState("");
  const [content, setContents] = useState("");
  const [selectedMember, setSelectedMember] = useState("혜인");

  const filteredLetter = members
    ? letterAdd.filter((letter) => letter.writedTo === members)
    : letterAdd;

  const inputNickname = (e) => {
    setNickname(e.target.value);
  };

  const inputContents = (e) => {
    setContents(e.target.value);
  };

  const changeMember = (e) => {
    setSelectedMember(e.target.value);
  };

  const handleAddButtonClick = (e) => {
    e.preventDefault();

    if (nickname.length === 0 || content.length === 0) {
      alert("닉네임과 내용을 입력해주세요!");
      return;
    }

    if (nickname.length > 20) {
      alert("닉네임은 최대 20자까지만 작성할 수 있습니다.");
      return;
    }
    const newLetter = {
      createdAt: new Date().toLocaleString(),
      nickname,
      avatar: avatarImg,
      content,
      writedTo: selectedMember,
      id: v4(),
    };
    console.log(newLetter);
    console.log(letterAdd);

    setNickname("");
    setContents("");

    return setLetterAdd([...letterAdd, newLetter]);
  };

  return (
    <>
      <InputForm onSubmit={handleAddButtonClick}>
        <InputSection>
          <InputLabel>닉네임 : </InputLabel>
          <InputType
            type="text"
            maxLength={20}
            placeholder="최대 20자까지만 작성할 수 있습니다."
            value={nickname}
            onChange={inputNickname}
          />
        </InputSection>
        <InputSection>
          <InputLabel>내용 : </InputLabel>
          <InputType
            type="text"
            maxLength={100}
            placeholder="최대 100자까지만 작성할 수 있습니다."
            value={content}
            onChange={inputContents}
          />
        </InputSection>
        <InputSection>
          <InputLabel>보내고 싶은 멤버를 선택해주세요 </InputLabel>
          <select value={selectedMember} onChange={changeMember}>
            <option value="혜인" selected>
              혜인
            </option>
            <option value="하니">하니</option>
            <option value="민지">민지</option>
            <option value="해린">해린</option>
            <option value="다니엘">다니엘</option>
          </select>
        </InputSection>
        <InputSection>
          <button type="submit">팬레터 등록하기</button>
        </InputSection>
      </InputForm>
      <LetterContainer>
        <LetterList
          letterItem={filteredLetter}
          letterAdd={letterAdd}
          setLetterAdd={setLetterAdd}
        />
      </LetterContainer>
    </>
  );
}

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 52%;
  background-color: dimgray;
  margin: 20px auto;
  border-radius: 15px;
  padding: 25px;
`;

const InputSection = styled.section`
  margin-bottom: 10px;
  display: flex;
`;

const InputLabel = styled.label`
  width: 100px;
  display: flex;
  align-items: center;
`;

const InputType = styled.input`
  width: 100%;
`;

const LetterContainer = styled.section`
  width: 52%;
  margin: auto;
  padding: 25px;
  background-color: black;
  color: white;
`;
export default Form;
