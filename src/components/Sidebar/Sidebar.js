import './Sidebar.css';
import { sidebarLinks } from './data';
import jane from '../../assets/jane-doe.jpg';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <ul className="sidebar__link">
          {sidebarLinks.map((link) => {
            const { id, icon, label } = link;
            return (
              <li className="sidebar__linkItem" key={id}>
                {icon}
                <span className="sidebar__linkItemText">{label}</span>
              </li>
            );
          })}
        </ul>
        <button className="sidebar__button">Show More</button>
        <hr className="sidebar__hr" />

        <ul className="sidebar__friends">
          <li className="sidebar__friend">
            <img className="sidebar__friendImage" src={jane} alt="pic" />
            <span className="sidebar__friendName">Jane Doe</span>
          </li>
          <li className="sidebar__friend">
            <img className="sidebar__friendImage" src={jane} alt="pic" />
            <span className="sidebar__friendName">Ken Black</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
