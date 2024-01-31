import React from "react";
import styled from "styled-components";
import LetterList from "./LetterList";
import { letterItems } from "letterItems";

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

function Form() {
  return (
    <>
      <InputForm>
        <InputSection>
          <InputLabel>닉네임 : </InputLabel>
          <InputType type="text" />
        </InputSection>
        <InputSection>
          <InputLabel>내용 : </InputLabel>
          <InputType type="text" />
        </InputSection>
        <InputSection>
          <InputLabel>보내고 싶은 멤버를 선택해주세요 </InputLabel>
          <select>
            <option value="혜인">혜인</option>
            <option value="하니">하니</option>
            <option value="민지">민지</option>
            <option value="해린">해린</option>
            <option value="다니엘">다니엘</option>
          </select>
        </InputSection>
      </InputForm>
      <LetterContainer>
        <LetterList letterItems={letterItems} />
      </LetterContainer>
    </>
  );
}

export default Form;
