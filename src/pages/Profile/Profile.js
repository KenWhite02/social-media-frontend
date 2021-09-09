import { Navbar } from '../../components';
import Feed from './components/Feed/Feed';
import Rightbar from './components/Rightbar/Rightbar';
import cat from '../../assets/user-posts/cat.jpg';
import kenwhite from '../../assets/user-profiles/ken-white.jpg';
import './Profile.css';

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="profile">
        <div className="profile__top">
          <div className="profile__cover">
            <img className="profile__coverImg" src={cat} alt="cover" />
            <img className="profile__userImg" src={kenwhite} alt="cover" />
          </div>
          <div className="profile__info">
            <h4 className="profile__infoName">Ken White</h4>
            <p className="profile__infoDesc">It's hard writing a bio!</p>
          </div>
        </div>

        <div className="profile__bottom">
          <Feed className="profile__feed" />
          <Rightbar />
        </div>
      </div>
    </>
  );
};

export default Profile;
