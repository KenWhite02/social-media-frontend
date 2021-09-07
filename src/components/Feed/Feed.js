import Share from '../Share/Share';
import Post from '../Post/Post';
import './Feed.css';

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__wrapper">
        <Share />
        <Post />
      </div>
    </div>
  );
};

export default Feed;
