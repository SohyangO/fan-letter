import styled from "styled-components";

export const NavBox = styled.div`
  width: 100px;
`;

export const MainBox = styled.div`
  flex-direction: column;
`;

export const Header = styled.section`
  width: 100%;
  height: 500px;
  background-image: url(https://img.smlounge.co.kr/upload/NPFILE/202209/497994.jpg);
  background-size: cover;
  background-color: black;
`;

export const Title = styled.h1`
  display: flex;
  color: white;
  justify-content: center;
  font-weight: bold;
  font-size: 24px;
`;

export const Body = styled.section`
  /* flex-direction: column; */
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 25px;
  background-color: #008b8b61;
  border-radius: 12px;
`;
export const Li = styled.li`
  display: flex;
  padding: 20px 20px;
  margin: 0px 10px;
  border: 1px solid gainsboro;
  border-radius: 15px;
  background-color: white;
  cursor: pointer;
`;
