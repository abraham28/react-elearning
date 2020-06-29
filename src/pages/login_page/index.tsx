import React from "react";
import { MdComputer, MdEmail, MdLock } from "react-icons/md";
import {
  Body,
  Wrapper,
  Title,
  Margin,
  Link,
  SignInButton,
  SignInContainer,
  SignUpText,
  SignUpContainer,
} from "./styles";
import EzTextField from "../../components/ez_text_field";

const LoginPage = () => {
  return (
    <Body>
      <Wrapper>
        <div>
          <MdComputer size="120px" color="white" />
        </div>
        <Title>E-Learning System</Title>
        <Margin>
          <EzTextField icon={<MdEmail />} placeholder="Email" />
        </Margin>
        <Margin>
          <EzTextField icon={<MdLock />} placeholder="Password" />
        </Margin>
        <SignInContainer>
          <SignInButton>Sign In</SignInButton>
        </SignInContainer>
        <SignUpContainer>
          <SignUpText>
            Haven't Signed Up Yet?{" "}
            <span>
              <Link href="https://shopee.ph/buyer/login/signup?next=https%253A%252F%252Fshopee.ph%252Fregister">
                Register
              </Link>
            </span>
          </SignUpText>
        </SignUpContainer>
      </Wrapper>
    </Body>
  );
};

export default LoginPage;
