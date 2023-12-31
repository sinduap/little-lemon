import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import './Layout.style.scss';

const Page = () => (
  <>
    <Header>
      <Nav />
    </Header>
    <main className="main">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Page;
