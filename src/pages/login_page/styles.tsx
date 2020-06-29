import styled from "styled-components";

export const Body = styled.div`
  background: url(https://wallpaperaccess.com/full/200620.jpg);
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 350px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.div`
  margin-bottom: 8px;
  font-family: CrayonSans;
  font-size: 22px;
  color: white;
  // text-shadow: 6px 4px 6px #000000;
  border-radius: 4px;
`;

export const Margin = styled.div`
  margin-bottom: 8px;
  width: 100%;
  max-width: 500px;
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
  max-width: 500px;
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
