import React, { useState } from "react";
import styled from "styled-components";
import LetterList from "./LetterList";
import avatarImg from "avatar.jpg";
import { v4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addLetter } from "modules/LetterReducer";

function Form({ members }) {
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState("");
  const [content, setContents] = useState("");
  const [selectedMember, setSelectedMember] = useState("혜인");

  const letterAdd = useSelector((state) => state.letterCollect.letterAdd);

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

    dispatch(addLetter(newLetter));
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
          <InputContent
            type="text"
            maxLength={100}
            placeholder="최대 100자까지만 작성할 수 있습니다."
            value={content}
            onChange={inputContents}
          />
        </InputSection>
        <InputSection>
          <MemberSelect>보내고 싶은 멤버를 선택해주세요 </MemberSelect>
          <select value={selectedMember} onChange={changeMember}>
            <option value="혜인">혜인</option>
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
        <LetterList letterCard={filteredLetter} />
      </LetterContainer>
    </>
  );
}

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
  background-color: #acdfff;
  margin: 20px auto;
  border-radius: 15px;
  padding: 25px 100px;
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
  width: 55%;
  border-radius: 7px;
  border: 1px solid transparent;
  height: 40px;
`;

const InputContent = styled.input`
  width: 55%;
  height: 150px;
  border-radius: 7px;
  border: 1px solid transparent;
`;

const MemberSelect = styled.label`
  width: 250px;
  margin-right: 10px;
`;

const LetterContainer = styled.section`
  width: 52%;
  margin: auto;
  padding: 25px;
  background-color: #5abfff;
  color: black;
  border-radius: 10px;
`;
export default Form;
