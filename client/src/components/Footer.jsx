import React from "react";
import styled from "styled-components";
import facebook from "../imgs/facebook.png";
import twitter from "../imgs/twitter.png";
import instagram from "../imgs/instagram.png";
import youtube from "../imgs/youtube.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import pay from "../imgs/pay.png";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  ${mobile({ fontSize: "30px", marginLeft: "50px" })}
`;

const Desc = styled.p`
  margin: 20px 0px;
  ${mobile({ fontSize: "20px", marginLeft: "10px" })}
`;

const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  margin-right: 20px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 25%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>~ E-SHOP ~</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon src={facebook} />
          <SocialIcon src={twitter} />
          <SocialIcon src={instagram} />
          <SocialIcon src={youtube} />
        </SocialContainer>
      </Left>
      <Center>
        <Title>Go to</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Appliances</ListItem>
          <ListItem>Decor</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Track Order</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms and Policies</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnOutlinedIcon style={{ marginRight: "10px" }} /> 622 Dixie
          Path , South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <PhoneEnabledOutlinedIcon style={{ marginRight: "10px" }} /> +1
          2345678900
        </ContactItem>
        <ContactItem>
          <MailOutlinedIcon style={{ marginRight: "10px" }} /> contact@xyz.com
        </ContactItem>
        <Payment src={pay} />
      </Right>
    </Container>
  );
};

export default Footer;
