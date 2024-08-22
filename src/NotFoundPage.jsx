import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundPage = () => {
  return (
    <StyledDiv>
      <h1>Not Found</h1>
      <h3>페이지를 찾을 수 없습니다</h3>
      <Link to="/">메인 화면으로 이동</Link>
    </StyledDiv>
  );
};
export default NotFoundPage;

const StyledDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 24px;
  line-height: 32px;
`;
