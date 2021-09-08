import { Feed, Navbar, Rightbar, Sidebar } from '../../components';
import cat from '../../assets/user-posts/cat.jpg';
import kenwhite from '../../assets/user-profiles/ken-white.jpg';
import './Profile.css';

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="profile">
        <Sidebar />
        <div className="profile__right">
          <div className="profile__rightTop">
            <div className="profile__cover">
              <img className="profile__coverImg" src={cat} alt="cover" />
              <img className="profile__userImg" src={kenwhite} alt="cover" />
            </div>
            <div className="profile__info">
              <h4 className="profile__infoName">Ken White</h4>
              <p className="profile__infoDesc">It's hard writing a bio!</p>
            </div>
          </div>
          <div className="profile__rightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
