// src/components/Icons.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPhone,
  faEnvelope,
  faDownload,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

// FontAwesome icons
const faIcons = {
  menu: faBars,
  phone: faPhone,
  email: faEnvelope,
  download: faDownload,
  moon: faMoon,
  sun: faSun,
};

// Devicon class map
const deviconMap = {
  html: "devicon-html5-plain colored",
  css: "devicon-css3-plain colored",
  js: "devicon-javascript-plain colored",
  ts: "devicon-typescript-plain colored",
  react: "devicon-react-original colored",
  next: "devicon-nextjs-original",
  node: "devicon-nodejs-plain colored",
  supabase: "devicon-supabase-plain colored",
  mysql: "devicon-mysql-plain colored",
  aws: "devicon-amazonwebservices-original colored",
  git: "devicon-git-plain colored",
  github: "devicon-github-original",
  gitlab: "devicon-gitlab-plain colored",
  postman: "devicon-postman-plain colored",
  tailwind: "devicon-tailwindcss-plain colored",
};

export const Icon = ({ name, size = "1x", className = "", color }) => {
  if (faIcons[name]) {
    return (
      <FontAwesomeIcon
        icon={faIcons[name]}
        size={size}
        className={className}
        color={color}
      />
    );
  }

  if (deviconMap[name]) {
    return (
      <i
        className={`${deviconMap[name]} ${className}`}
        style={{ fontSize: size === "1x" ? "1.25rem" : size }}
      ></i>
    );
  }

  return null;
};
