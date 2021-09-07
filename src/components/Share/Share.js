import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons';
import kenwhite from '../../assets/user-profiles/ken-white.jpg';
import './Share.css';

const Share = () => {
  return (
    <div className="share">
      <div className="share__wrapper">
        <div className="share__top">
          <img className="share__profileImg" src={kenwhite} alt="" />
          <input className="share__input" placeholder="What's in your mind?" />
        </div>

        <hr className="share__hr" />

        <div className="share__bottom">
          <div className="share__options">
            <div className="share__option">
              <PermMedia
                style={{ color: 'tomato' }}
                className="share__optionIcon"
              />
              <span className="share__optionText">Photo or Video</span>
            </div>

            <div className="share__option">
              <Label style={{ color: 'blue' }} className="share__optionIcon" />
              <span className="share__optionText">Tag</span>
            </div>

            <div className="share__option">
              <Room style={{ color: 'green' }} className="share__optionIcon" />
              <span className="share__optionText">Location</span>
            </div>

            <div className="share__option">
              <EmojiEmotions
                style={{ color: 'goldenrod' }}
                className="share__optionIcon"
              />
              <span className="share__optionText">Feelings</span>
            </div>
          </div>
          <button className="share__button">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
