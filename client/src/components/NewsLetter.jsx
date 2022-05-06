import React from "react";
import styled from "styled-components";
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "30px", marginLeft: "10px", textAlign: "center" })}
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center", fontSize: "20px" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>Subscribe to our NewsLetter</Title>
      <Desc>
        Get Shipping Updates, Sale Callouts, Popular Items List and Updates on
        Wishlisted Items right in your mailbox.
      </Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <CheckCircleOutlineTwoToneIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
