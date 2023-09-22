import { GrMysql } from 'react-icons/gr';
import {
  SiJavascript,
  SiReact,
  SiFlask,
  SiNodedotjs,
  SiPython,
  SiDocker,
} from 'react-icons/si';
import PropTypes from 'prop-types';

// TOOL CONSTANTS

export const REACT = 'React.js';
export const PYTHON = 'Python';
export const FLASK = 'Flask';
export const NODE = 'Node.js';
export const JAVASCRIPT = 'JavaScript';
export const DOCKER = 'Docker';
export const MYSQL = 'MySQL';

export const toolToIcon = {
  [REACT]: <SiReact />,
  [PYTHON]: <SiPython />,
  [FLASK]: <SiFlask />,
  [NODE]: <SiNodedotjs />,
  [JAVASCRIPT]: <SiJavascript />,
  [DOCKER]: <SiDocker />,
  [MYSQL]: <GrMysql />,
};

export const ToolIcon = (props) => {
  return <a title={props.tool}>{toolToIcon[props.tool]}</a>;
};

ToolIcon.propTypes = { tool: PropTypes.string };
