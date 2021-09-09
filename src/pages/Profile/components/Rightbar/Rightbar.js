import { onlineUsers } from '../../../../components/Rightbar/data';
import './Rightbar.css';

const Rightbar = () => {
  return (
    <div className="profile__rightbar">
      <div className="profile__rightbarWrapper">
        <h4 className="profile__rightbarTitle">User Information</h4>
        <div className="profile__rightbarInfo">
          <div className="profile__rightbarInfoItem">
            <span className="profile__rightbarInfoKey">City:</span>
            <span className="profile__rightbarInfoValue">New York</span>
          </div>
          <div className="profile__rightbarInfoItem">
            <span className="profile__rightbarInfoKey">From:</span>
            <span className="profile__rightbarInfoValue">Madrid</span>
          </div>
          <div className="profile__rightbarInfoItem">
            <span className="profile__rightbarInfoKey">Relationship:</span>
            <span className="profile__rightbarInfoValue">Single</span>
          </div>
        </div>

        <h4 className="profile__rightbarTitle">User Friends</h4>
        <div className="profile__rightbarFollowings">
          {onlineUsers.map((user) => {
            const { id, profileImg, username } = user;
            return (
              <div className="profile__rightbarFollowing">
                <img
                  key={id}
                  className="profile__rightbarFollowingImg"
                  src={profileImg}
                  alt="user-profile"
                />
                <span className="profile__rightbarFollowingName">
                  {username}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
