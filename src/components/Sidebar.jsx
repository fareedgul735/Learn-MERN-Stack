import { Link } from "react-router-dom";
// const Sidebar = () => {
//   return (
//     <div>
//       <ul>
//         <li>
//           <Link to="/htmlDocs">
//             <i className="fa-brands fa-html5"></i> HTML 5
//           </Link>
//         </li>
//         <li>
//           <Link to="/cssDocs">
//             <i className="fa-brands fa-css3"></i> CSS 3
//           </Link>
//         </li>
//         <li>
//           <Link to="/bootstrapDocs">
//             <i className="fa-brands fa-bootstrap"></i>Bootstrap
//           </Link>
//         </li>
//         <li>
//           <Link to="/tailwindDocs">
//             <img src={logo1} width={"22px"} height={"22px"} /> Tailwind Css
//           </Link>
//         </li>
//         <li>
//           <Link to="/scssDocs">
//             <img src={logo2} width={"22px"} height={"22px"} /> SCSS
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

// Sidebar.jsx
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaBootstrap,
} from "react-icons/fa";
import { SiTypescript, SiExpress, SiNextdotjs, SiFirebase, SiSupabase, SiTailwindcss } from "react-icons/si";

const Sidebar = () => {
  const links = [
    { path: "/html", icon: <FaHtml5 className="icon html5" />, name: "HTML 5" },
    { path: "/css", icon: <FaCss3 className="icon css3" />, name: "CSS 3" },
    { path: "/bootstrap", icon: <FaBootstrap className="icon bootstrap" />, name: "Bootstrap" },
    { path: "/tailwind", icon: <SiTailwindcss className="icon tailwind" />, name: "Tailwind Css" },
    { path: "/javascript", icon: <FaJsSquare className="icon js" />, name: "JavaScript" },
    { path: "/reactjs", icon: <FaReact className="icon react" />, name: "React JS" },
    { path: "/nodejs", icon: <FaNodeJs className="icon node" />, name: "Node JS" },
    { path: "/expressjs", icon: <SiExpress className="icon express" />, name: "Express JS" },
    { path: "/typescript", icon: <SiTypescript className="icon ts" />, name: "TypeScript" },
    { path: "/nextjs", icon: <SiNextdotjs className="icon next" />, name: "Next JS" },
    { path: "/firebase", icon: <SiFirebase className="icon firebase" />, name: "Firebase" },
    { path: "/supabase", icon: <SiSupabase className="icon supabase" />, name: "Supabase" },
  ];

  return (
    <div className="sidebar">
      <h2 className="title">Tech Stack</h2>
      <ul className="nav-list">
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.path} className="nav-link">
              <span className="icon-wrapper">{link.icon}</span>
              <span className="link-text">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

