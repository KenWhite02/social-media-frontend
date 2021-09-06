import { Navbar, Sidebar, Feed, Rightbar } from '../../components';
import './Home.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home__container">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;
