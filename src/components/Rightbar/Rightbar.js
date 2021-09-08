import { onlineUsers } from './data';
import gift from '../../assets/gift.png';
import ad from '../../assets/ad.jpg';
import './Rightbar.css';

const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="rightbar__giftContainer">
          <img className="rightbar__giftImg" src={gift} alt="gift" />
          <span className="rightbar__giftText">
            <b>Miles Turner</b> and <b>3 other friends.</b>
          </span>
        </div>

        <img className="rightbar__ad" src={ad} alt="ad" />

        <h4 className="rightbar__title">Online Friends</h4>
        <ul className="rightbar__friendsList">
          {onlineUsers.map((user) => {
            const { id, profileImg, username } = user;
            return (
              <li className="rightbar__friend" key={id}>
                <div className="rightbar__profileImgContainer">
                  <img
                    className="rightbar__profileImg"
                    src={profileImg}
                    alt="user-profile"
                  />
                  <span className="rightbar__online"></span>
                </div>
                <span className="rightbar__username">{username}</span>
              </li>
            );
          })}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbar__title">User Information</h4>
        <div className="rightbar__info">
          <div className="rightbar__infoItem">
            <span className="rightbar__infoKey">City:</span>
            <span className="rightbar__infoValue">New York</span>
          </div>
          <div className="rightbar__infoItem">
            <span className="rightbar__infoKey">From:</span>
            <span className="rightbar__infoValue">Madrid</span>
          </div>
          <div className="rightbar__infoItem">
            <span className="rightbar__infoKey">Relationship:</span>
            <span className="rightbar__infoValue">Single</span>
          </div>
        </div>

        <h4 className="rightbar__title">User Friends</h4>
        <div className="rightbar__followings">
          {onlineUsers.map((user) => {
            const { id, profileImg, username } = user;
            return (
              <div className="rightbar__following">
                <img
                  key={id}
                  className="rightbar__followingImg"
                  src={profileImg}
                  alt="user-profile"
                />
                <span className="rightbar__followingName">{username}</span>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbar__wrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
