import styled from "styled-components";

export const Body = styled.div`
  background: url(https://img.freepik.com/free-vector/school-classroom-interior-board-desk-banner_48369-11882.jpg?size=626&ext=jpg);
  height: 100vh;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BoardEdgeH = styled.div`
  background-color: #8b5a2b;
  height: 15px;
  width: 100%;
`;

export const BoardEdgeV = styled.div`
  background-color: #8b5a2b;
  width: 15px;
  height: 100%;
`;

export const Wrapper = styled.div`
  background-color: #074f37;
  height: 350px;
  width: 100%;
  max-width: 650px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 640px;
`;

export const Title = styled.div`
  margin-bottom: 8px;
  font-family: CrayonSans;
  font-size: 22px;
  color: white;
  text-shadow: 6px 4px 6px #000000;
  border-radius: 4px;
`;

export const Margin = styled.div`
  margin-bottom: 8px;
  background-color: white;
  width: 100%;
  border-radius: 4px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

export const Link = styled.a`
  color: #69f0ae;
  text-decoration: none;
`;

export const SignInButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 10px;
  outline: none;
  &:focus {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const SignInContainer = styled.div`
  background-color: transparent;
  width: 100%;
  height: 30px;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignUpText = styled.p`
  font-size: 12px;
  color: white;
`;

export const SignUpContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
`;
