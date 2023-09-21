import unirouteImg from './uniroute-screenshot.png';
import creaturedbImg from './creaturedb-screenshot.png';
import { SiReact } from 'react-icons/si';

export const projects = [
  {
    title: 'UniRoute',
    id: 1,
    text: 'UniRoute is a single-page, full stack web app designed to streamline weekly commute schedules for students. Built with two other students using Agile development, UniRoute incorporates a client-side React interface with Google Maps API, a MySQL database, and a back end server running on the Python Flask framework.',
    url: '',
    repoURL: 'https://github.com/chart10/UniRouteHart',
    techStack: ['React.js', 'Python', 'Flask', 'Node.js', 'MySQL', 'Docker'],
    image: unirouteImg,
  },

  {
    title: 'Creature DB',
    id: 2,
    text: 'Creature DB is a full stack website built as a veterinary records management tool, allowing customers to view the medical records of their pets and healthcare professionals to edit and update record details.',
    url: '',
    repoURL: 'https://github.com/joshcortes/PetApp',
    techStack: ['Vanilla JavaScript', 'Python', 'Flask', 'Node.js', 'MySQL'],
    image: creaturedbImg,
  },
];