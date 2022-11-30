import styled from 'styled-components';
import {Add, Remove} from '@mui/icons-material';
import { mobile } from "../components/responsive";
import LadiesFashion01 from "../assets/ladies-fashion/img01.png";
import NavbarTop from '../components/NavbarTop';
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div`
  margin: 0px;
  padding: 0px;
`;
    
const Wrapper = styled.div`
  padding: 50px;
  margin: 5px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "75%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;  
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px; 
`;

const FilterSizeOption = styled.option`
  margin: 0px;
  padding: 0px; 
`;

const AddContainer = styled.div`
   width: 50%;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

const AmountContainer = styled.div`
   display: flex;
   align-items: center;
   font-weight: 700;
`;

const Amount = styled.span`
   width: 30px;
   height: 30px;
   border-radius: 10px;
   border: 1px solid teal;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0px 5px;
`;

const Button = styled.button`
   padding: 15px;
   border: 2px solid teal;
   background-color: white;
   cursor: pointer;
   font-weight: 500;

   &:hover{
     background-color: #f8f4f4;
   }
`;

const Product = () => {
  return (
    <Container>
      <NavbarTop />
      <Navbar />
      <Announcement />
      <Wrapper>
      
        <ImgContainer>
		      <Image src={LadiesFashion01} />
        </ImgContainer>

        <InfoContainer>
          <Title>Dr Stephen Achugwo</Title>
          <Desc>Lorem ipsum As we're not focusing on CSS in this course, 
            we're not covering the CSS specific to build the timeline as 
            you see it on the screen. However, we want to make sure the 
            timeline you build looks similar to ours. If you include the 
            following CSS as a link tag in your code, your timeline will 
            look similar and will be using the same styling ours is using.
          </Desc>
          
          <Price>$ 20</Price>
          
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
                <FilterColor color="black" />
                <FilterColor color="darkblue" />
                <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
              <AmountContainer>
                <Remove />
                <Amount>1</Amount>
                <Add />
              </AmountContainer>
              <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>

      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
