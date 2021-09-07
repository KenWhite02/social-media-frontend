import { MoreVert } from '@material-ui/icons';
import { userPosts } from './data';
import likeIcon from '../../assets/like.png';
import heartIcon from '../../assets/heart.png';
import './Post.css';

const Post = () => {
  return (
    <>
      {userPosts.map((post) => {
        const {
          id,
          profileImg,
          username,
          postDate,
          postDesc,
          postImg,
          postLikes,
          postComments,
        } = post;
        return (
          <div className="post">
            <div className="post__wrapper" key={id}>
              <div className="post__top">
                <div className="post__topLeft">
                  <img
                    className="post__profileImg"
                    src={profileImg}
                    alt="user-profile"
                  />
                  <span className="post__username">{username}</span>
                  <span className="post__date">🌍 {postDate}</span>
                </div>
                <div className="post__topRight">
                  <MoreVert />
                </div>
              </div>

              <div className="post__center">
                <span className="post__description">{postDesc}</span>
                <img className="post__image" src={postImg} alt="post" />
              </div>

              <div className="post__bottom">
                <div className="post__bottomLeft">
                  <img className="post__likeIcon" src={likeIcon} alt="like" />
                  <img className="post__likeIcon" src={heartIcon} alt="heart" />
                  <span className="post__likeCounter">{postLikes}</span>
                </div>
                <div className="post__bottomRight">
                  <span className="post__commentText">
                    {postComments} comments
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Post;
