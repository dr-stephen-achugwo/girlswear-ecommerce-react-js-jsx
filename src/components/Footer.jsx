import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
import { Room, Phone, MailOutline } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../components/responsive";
import Payment from "../assets/r-shop/payment-method.png";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

// const InputContainer = styled.div`
//   width: 50%;
//   height: 40px;
//   background-color: white;
//   display: flex;
//   justify-content: space-between;
//   border: 1px solid lightgrey;
//   ${mobile({ width: "80%" })}
// `;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 20px;
`;

const Logo = styled.h1`
  font-weight: 600;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0px;
  padding: 0px;
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

const Image = styled.img`
  width: 71%;
  cursor: pointer;
`;

const PaymentMethod = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LAMA.</Logo>
        <Desc>
          There are many variation of passages of Lorem Ipsum but
           the majority have suffered alteration in some form by injected
          humour, or random words which don't look
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999"><Facebook /></SocialIcon>
          <SocialIcon color="E4405F"><Instagram /></SocialIcon>
          <SocialIcon color="55ACE9"><Twitter /></SocialIcon>
          <SocialIcon color="E60023"><LinkedIn /></SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title> 
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>MmaAchugwo</ListItem>
          <ListItem>Terms</ListItem>
        </List>        
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight: "10px"}} />622 Dixie Path, South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight: "10px"}} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight: "10px"}} /> contact@lama.dev
        </ContactItem>
        <PaymentMethod>
          <Image src={Payment} alt="Payment Method" title="Payment Method" />
        </PaymentMethod>
      </Right>
    </Container>
  );
};

export default Footer;
