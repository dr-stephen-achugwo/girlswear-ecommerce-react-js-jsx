import styled from 'styled-components';
import NavbarTop from '../components/NavbarTop';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Categories from "../components/Categories"
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';

const Container = styled.div`
    flex-wrap: wrap;
    padding: 0px;
    margin: 0px;
`;

const Home = () => {
  return (
  <Container>
    <NavbarTop />
    <Navbar />
    <Announcement />
    <Slider />
    <Categories />
    <Products />
    <Newsletter />
  </Container>
  );
};

export default Home;
