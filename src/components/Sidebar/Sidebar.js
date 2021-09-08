import './Sidebar.css';
import { sidebarLinks, shortcuts } from './data';

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

        <h3 style={{ marginBottom: '10px' }}>Your Shortcuts</h3>
        <ul className="sidebar__shortcuts">
          {shortcuts.map((shortcut) => {
            const { id, image, name } = shortcut;
            return (
              <li className="sidebar__shortcut" key={id}>
                <img className="sidebar__shortcutImage" src={image} alt="pic" />
                <span className="sidebar__shortcutName">{name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
