import Share from '../Share/Share';
import Post from '../Post/Post';
import { userPosts } from '../Post/data';
import './Feed.css';

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__wrapper">
        <Share />
        {userPosts.map((user) => {
          return <Post key={user.id} post={user} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
