import React from "react";
import styled from "styled-components";
import { dresses } from "../data";
import Product from "./Product";
import { mobile } from "../responsive";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Dresses = () => {
  return (
    <Container>
      {dresses.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Dresses;
