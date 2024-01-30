import React from "react";
import * as S from "../components/StyledHome";

function Home() {
  return (
    <>
      <S.NavBox>home</S.NavBox>
      <S.MainBox id="MainBox">
        <S.Header>
          <S.Title>NewJeans Fanletter Collection</S.Title>
        </S.Header>
        <S.Body>
          <S.Ul>
            <S.Li>
              <a>혜인</a>
            </S.Li>
            <S.Li>
              <a>하니</a>
            </S.Li>
            <S.Li>
              <a>민지</a>
            </S.Li>
            <S.Li>
              <a>해린</a>
            </S.Li>
            <S.Li>
              <a>다니엘</a>
            </S.Li>
          </S.Ul>
        </S.Body>
      </S.MainBox>
    </>
  );
}

export default Home;
