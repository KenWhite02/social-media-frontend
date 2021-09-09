import Share from '../../../../components/Share/Share';
import Post from '../../../../components/Post/Post';
import { userPosts } from '../../../../components/Post/data';
import './Feed.css';

const Feed = () => {
  return (
    <div className="profile__feed">
      <div className="profile__feedWrapper">
        <Share />
        {userPosts.map((user) => {
          return <Post key={user.id} post={user} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
