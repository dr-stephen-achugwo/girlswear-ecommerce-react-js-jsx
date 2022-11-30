import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { mobile } from "../components/responsive";
import NavbarTop from '../components/NavbarTop';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Ladfash04 from "../assets/ladyz-fashion/img04.jpg";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px;
    margin: 0px;
`;

const NavSection = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 0px;
    margin: 0px;
    ${mobile({ display: "flex", flexDirection: "column", flexWrap: "wrap" })}
`;

const MainSection = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px;
    margin: 0px;
    ${mobile({ padding: "10px", margin: "10px" })}
`;

const Wrapper = styled.div`
    width: 45%;
    padding: 20px;
    margin: 0px;
    background: gray;
    ${mobile({ width: "100%" })}
`;

const Title = styled.h1`
    color: #FEE;
    font-weight: 500;    
    font-size: 24px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
    background-color: pink;
`;

const Button = styled.button`
    width: 70%;
    bottom: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;

const Link = styled.a`
    margin: 5px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      
      <NavSection>
        <NavbarTop />
        <Navbar />
        <Announcement />
      </NavSection>
      
      <MainSection style={{ backgroundImage: `url(${Ladfash04})` }}>
        <Wrapper>
          <Title>FORGOT PASSWORD</Title>
          <Form>
            <Input placeholder="username" />
            <Input placeholder="email" />
            <Button>CHANGE PASSWORD</Button>
            <Link>
              <NavLink to="/pages/Register"
                className={({ isActive }) => (isActive ? "link-active" : "link")}>
                  DON'T HAVE ACCOUNT? REGISTER
              </NavLink>
            </Link>
            <Link>
              <NavLink to="/pages/Login"
                className={({ isActive }) => (isActive ? "link-active" : "link")}>
                  GO BACK TO LOGIN PAGE
              </NavLink>
            </Link>
          </Form> 
        </Wrapper>
      </MainSection>
      
    </Container>
  );
};

export default Login;