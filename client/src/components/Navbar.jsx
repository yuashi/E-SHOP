import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: "1px" })};
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px", marginLeft: "30px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 3, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ display: "none" })}
`;

const Cart = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ marginLeft: "2px" })}
`;

const MenuItemMob = styled.div`
  display: none;
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ display: "flex", marginLeft: "5px" })}
`;

const Burger = styled.select`
  margin-left: 15px;
  width: 30px;
`;

const Option = styled.option``;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ENG</Language>
          <SearchContainer>
            <Input />
            <SearchIcon />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>E-SHOP</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <Cart>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </Cart>
          <MenuItemMob>
            <Burger>
              <Option disabled selected></Option>
              <Option>REGISTER</Option>
              <Option>SIGN IN</Option>
              <Option>LOGOUT</Option>
            </Burger>
          </MenuItemMob>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
