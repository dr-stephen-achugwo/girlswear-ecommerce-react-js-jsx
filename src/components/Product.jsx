import styled from "styled-components";
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";

const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0,0,0, 0.2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease; 
`;

const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position: absolute;
transition: all 1.5s ease;
`;

const Image = styled.img`
   height: 100%;
   width: 100%;
   object-fit: cover;
   z-index: 2;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover{
       background-colour: #e9f5f5;
       transform: scale(1.1);
    }
`;

const Container = styled.div`
   flex: 1;
   margin: 5px;
   min-width: 280px;
   height: 350px;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: #ddd;
   position: relative;
   
   &:hover ${Info}{
      opacity: 1;
   }
   
   &:hover ${Circle}{
   width: 279px;
   height: 279px;
   background-color: white;
   }
`;

const Product = ({item}) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
         <Icon>
            <ShoppingCartOutlined />
         </Icon> 
         <Icon>
            <SearchOutlined />
         </Icon> 
         <Icon>
            <FavoriteBorderOutlined />
         </Icon> 
      </Info>
    </Container>
  );
};

export default Product;
