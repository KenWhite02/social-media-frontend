import {
  Bookmark,
  Chat,
  Group,
  HelpOutline,
  PlayCircleFilled,
  RssFeed,
  WorkOutline,
  Event,
  School,
} from '@material-ui/icons';

// Shortcut Images
import nairobabe from '../../assets/user-profiles/nairobabe.jpg';
import gsw from '../../assets/user-profiles/golden-state.jpg';
import pubg from '../../assets/user-profiles/pubg.jpg';

export const sidebarLinks = [
  {
    id: 1,
    icon: <RssFeed />,
    label: 'Feed',
  },
  {
    id: 2,
    icon: <Chat />,
    label: 'Chats',
  },
  {
    id: 3,
    icon: <PlayCircleFilled />,
    label: 'Videos',
  },
  {
    id: 4,
    icon: <Group />,
    label: 'Groups',
  },
  {
    id: 5,
    icon: <Bookmark />,
    label: 'Bookmarks',
  },
  {
    id: 6,
    icon: <HelpOutline />,
    label: 'Questions',
  },
  {
    id: 7,
    icon: <WorkOutline />,
    label: 'Jobs',
  },
  {
    id: 8,
    icon: <Event />,
    label: 'Events',
  },
  {
    id: 9,
    icon: <School />,
    label: 'Courses',
  },
];

export const shortcuts = [
  { id: 1, image: nairobabe, name: 'Nairobabe' },
  { id: 2, image: gsw, name: 'Golden State Warriors' },
  { id: 3, image: pubg, name: 'Pubg Mobile' },
];
