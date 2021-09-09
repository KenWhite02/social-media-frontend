import { onlineUsers } from './data';
import gift from '../../assets/gift.png';
import ad from '../../assets/ad.jpg';
import './Rightbar.css';

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbar__wrapper">
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
      </div>
    </div>
  );
};

export default Rightbar;
