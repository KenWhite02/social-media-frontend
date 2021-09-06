import './Navbar.css';
import { Search, Person, Chat, Notifications } from '@material-ui/icons';
import profilePic from '../../assets/profile-pic.jpg';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <span className="navbar__logo">_whitish_social 🌍</span>
      </div>
      <div className="navbar__center">
        <div className="searchbar">
          <Search className="searchbar__icon" />
          <input
            type="text"
            placeholder="Search for posts"
            className="searchbar__input"
          />
        </div>
      </div>
      <div className="navbar__right">
        <div className="navbar__links">
          <span className="navbar__link">HomePage</span>
          <span className="navbar__link">Timeline</span>
        </div>
        <div className="navbar__icons">
          <div className="navbar__icon">
            <Person />
            <span className="navbar__iconBadge">1</span>
          </div>
          <div className="navbar__icon">
            <Chat />
            <span className="navbar__iconBadge">1</span>
          </div>
          <div className="navbar__icon">
            <Notifications />
            <span className="navbar__iconBadge">1</span>
          </div>
        </div>
        <img
          src={profilePic}
          alt="profile"
          width="300"
          className="navbar__image"
        />
      </div>
    </div>
  );
};

export default Navbar;
