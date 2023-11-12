import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const Page = () => (
  <>
    <Header>
      <Nav />
    </Header>
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Page;
