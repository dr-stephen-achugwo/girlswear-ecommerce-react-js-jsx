import styled from 'styled-components';
import {Add, Remove} from '@mui/icons-material';
import NavbarTop from '../components/NavbarTop';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import { mobile } from "../components/responsive";
import Insta1 from "../assets/r-shop/insta-1.jpg";
import Insta2 from "../assets/r-shop/insta-2.jpg";


const Container = styled.div`
    margin: 0px;
    padding: 0px;
`;

const Wrapper = styled.div`
    margin: 10px;
    padding: 10px;
`;

const Title = styled.h1`
    margin: 30px;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;

const TopTexts = styled.div`
   ${mobile({ display: "none" })}
`;

const TopText = styled.span`
   text-decoration: underline;
   cursor: pointer;
   margin: 0px 10px;
`;

const Bottom = styled.div`
   display: flex;
   justify-content: space-between;
   ${mobile({ flexDirection: "column" })}
`;

const TopButton = styled.button`
   padding: 10px;
   font-weight: 600;
   cursor: pointer;
   border: ${props => props.type === "filled" && "none"};
   background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
   color: ${(props) => props.type === "filled" && "white"};
`;

const Info = styled.div`
   flex: 3;
   justify-content: space-between;
`;

const Product = styled.div`
   display: flex;
   justify-content: space-between;
`;

const ProductDetail = styled.h1`
   flex: 2;
   display: flex;
`;

const Image = styled.img`
	width: 200px;
`;

const Details = styled.div`
   padding: 20px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
`;

const ProductName = styled.span`
   font-size: 17px;
   margin-left: 5px;
   ${'' /* ${mobile({ margin: "5px 15px" })} */}
`;

const ProductId = styled.span`
   font-size: 17px;
   margin: 5px;
   ${'' /* ${mobile({ margin: "5px 15px" })} */}
`;

const ProductColor = styled.div`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${(props) => props.color};
   margin: 5px;
`;

const ProductSize = styled.span`
   font-size: 17px;
   margin: 5px;
   ${'' /* ${mobile({ margin: "5px 15px" })} */}
`;

const PriceDetail = styled.span`
   flex: 1;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

const ProductAmountContainer = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 20px;
`;
 
const ProductAmount = styled.div`
   font-size: 24px;
   margin: 5px;
   ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
   font-size: 30px;
   font-weight: 200;
   ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.div`
   background-color: #eee;
   border: none;
   height: 1px;
   margin: 20px 0px;
`;
   
const Summary = styled.div`
   flex: 1;
   border: 0.5px solid lightgrey;
   border-radius: 10px;
   padding: 20px;
   height: 50vh;
`;

const SummaryTitle = styled.h1`
   font-weight: 200;
`;

const SummaryItem = styled.div`
   margin: 30px 0px;
   display: flex;
   justify-content: space-between;
   font-weight: ${props => props.type === "total" && "500"};
   font-size: ${props => props.type === "total" && "500"};
`;

const SummaryItemText = styled.span`
   
`;

const SummaryItemPrice = styled.span`
   
`;

const Button = styled.button`
   width: 100%;
   padding: 10px;
   background-color: black;
   color: white;
   font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
        <NavbarTop />
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>YOUR BAG</Title>

            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECK OUT NOW!</TopButton>
            </Top>

            <Bottom>
              <Info>

                <Product>
                 <ProductDetail>
                    <Image src={Insta1} alt="men-wear-1" id="men1" />
                    <Details>
                      <ProductName><b>Product:</b> JESSIE JACKET</ProductName>
                      <ProductId><b>ID:</b> 93813718293</ProductId>
                      <ProductColor color='black' />
                      <ProductSize><b>Size:</b> 37.5</ProductSize>
                    </Details>
                 </ProductDetail>
                 <PriceDetail>
                    <ProductAmountContainer>
                      <Add />
                      <ProductAmount>2</ProductAmount>
                      <Remove />
                    </ProductAmountContainer>
                    <ProductPrice>₦ 300</ProductPrice>
                 </PriceDetail>
                </Product>

                <Hr />

                <Product>
                 <ProductDetail>
                    <Image src={Insta2} alt="men-wear-2" id="men2" />
                    <Details>
                      <ProductName><b>Product:</b> HAKURA HAT</ProductName>
                      <ProductId><b>ID:</b> 93813718293</ProductId>
                      <ProductColor color='Teal' />
                      <ProductSize><b>Size:</b> M</ProductSize>
                    </Details>
                 </ProductDetail>
                 <PriceDetail>
                    <ProductAmountContainer>
                      <Add />
                      <ProductAmount>1</ProductAmount>
                      <Remove />
                    </ProductAmountContainer>
                    <ProductPrice>₦ 200</ProductPrice>
                 </PriceDetail>
                </Product>

              </Info>
              <Summary>
                  <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                  <SummaryItem>
                     <SummaryItemText>Subtotal</SummaryItemText>
                     <SummaryItemPrice>$ 80</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                     <SummaryItemText>Estimated Shipping</SummaryItemText>
                     <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                     <SummaryItemText>Shipping Discount</SummaryItemText>
                     <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                     <SummaryItemText type="total">Total</SummaryItemText>
                     <SummaryItemPrice>$ 80</SummaryItemPrice>
                  </SummaryItem>
                  <Button>CHECKOUT NOW!</Button>
              </Summary>
            </Bottom>
        </Wrapper>

    </Container>
  );
};

export default Cart;
