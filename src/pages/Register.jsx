import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { mobile } from "../components/responsive";
import NavbarTop from '../components/NavbarTop';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Ladfash09 from "../assets/ladyz-fashion/img09.png";


const Container = styled.div`
    padding: 0px;
    margin: 0px;
`;

const NavSection = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 0px;
    margin: 0px;
    ${mobile({ display: "flex", flexDirection: "column", flexWrap: "wrap" })};
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
    ${mobile({ padding: "0px", margin: "0px" })};
`;

const Wrapper = styled.div`
    width: 60%;
    padding: 20px;
    // margin-left: 10px;
    background: gray;
    ${mobile({ width: "125%" })};
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Title = styled.h1`
    font-weight: 500;    
    font-size: 24px;
    color: #FEE;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
    background-color: pink;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 100%;
    bottom: none;
    padding: 15px 20px;
    margin-right: 5px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Link = styled.a`
    padding: 10px 70px;
    margin-right: 75px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      
      <NavSection>
        <NavbarTop />
        <Navbar />
        <Announcement />
      </NavSection>
      
      <MainSection style={{ backgroundImage: `url(${Ladfash09})` }}>
       <Wrapper>        
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
           <Input placeholder="Name" />
           <Input placeholder="Last Name" />
           <Input placeholder="Username" />
           <Input placeholder="Email" />
           <Input placeholder="password" />
           <Input placeholder="Confirm password" />
           <Agreement>
               By creating an account, I consent to the processing of my personal
               data in accordance with the <b>PRIVACY POLICY</b>  
           </Agreement>
           
             <Button>REGISTER</Button>

             <Link>
                <NavLink to="/pages/Login"
                    className={({ isActive }) => (isActive ? "link-active" : "link")}>
                   REMEMBER YOUR PASSWORD? LOG IN
                </NavLink>
             </Link>
           
             <Link>
                <NavLink to="/pages/ForgotPassword"
                    className={({ isActive }) => (isActive ? "link-active" : "link")}>
                    FORGOT YOUR PASSWORD?
                </NavLink>
             </Link>
           
        </Form> 
       </Wrapper>
      </MainSection>	   
    </Container>
  );
};

export default Register;
