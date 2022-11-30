import React from "react";
import styled from 'styled-components';
import { Link, } from "react-router-dom";
import { BadgeUnstyled } from '@mui/base';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { mobile } from '../components/responsive';
import asBanner from "../assets/artworks/asban2.png"


const Container = styled.div`
    height: 60px;
    ${mobile({ backgroundColor: "red" })}
`;

 const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
 ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14;
    cursor: pointer;
    ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    text-align: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
    font-size: 14;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const ArtisticBrand = styled.div`
    padding: 0px;
    margin: 0px;
`;

// const NavUnlisted = styled.ul`
//     text-decoration: none;
//     direction: flex;
// `;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'blue'
};

const StyledLink = styled(Link)`
  color: Blue;
  text-decoration: none;
  margin: 1rem;
  position: relative;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search' />
            <Search style={{color: 'gray', fontsize: '16'}} />
          </SearchContainer>
        </Left>

        <Center>
          {/* <NavUnlisted>
            <StyledLink to="../pages/Home" style={linkStyle}>
              Home
            </StyledLink>
            <StyledLink to="../pages/Cart" style={linkStyle}>
              Cart
            </StyledLink>
            <StyledLink to="../pages/Product" style={linkStyle}>
              Product
            </StyledLink>
            <StyledLink to="../pages/ProductList" style={linkStyle}>
              ProductList
            </StyledLink>
            <StyledLink to="../pages/Register" style={linkStyle}>
              Register
            </StyledLink>
            <StyledLink to="../pages/Login" style={linkStyle}>
              Login
            </StyledLink>
            <StyledLink to="../pages/ContactUs" style={linkStyle}>
              Contact
            </StyledLink>
          </NavUnlisted> */}
          
          <ArtisticBrand>
            <img src={asBanner} alt={"AS Banner"} title={"feel artHome"} />
          </ArtisticBrand>
        </Center>

        <Right>
          <MenuItem><StyledLink to="../pages/Register" style={linkStyle}>
            REGISTER
          </StyledLink></MenuItem>
          <MenuItem><StyledLink to="../pages/Login" style={linkStyle}>
            LOGIN
          </StyledLink></MenuItem>
          <MenuItem><StyledLink to="../pages/Cart" style={linkStyle}>
            <BadgeUnstyled badgeContent={4} color="primary" title="Cart">
              <ShoppingCartOutlined />
            </BadgeUnstyled>
          </StyledLink></MenuItem>
                    
          {/* <MenuItem><NavLink to="/pages/Cart" className={({ isActive }) => (isActive ? "link-active" : "link")}>
            CART
            <BadgeUnstyled badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </BadgeUnstyled>
          </NavLink></MenuItem> */}

        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
