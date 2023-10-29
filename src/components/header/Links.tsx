import { AiFillLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { github, linkedin } from "../../services/contact";

const Links = () => {
  return (
    <div className="d-flex gap-4">
      <a href={linkedin} target="_blank" rel="noreferrer" className="icons">
        <AiFillLinkedin />
      </a>

      
        <a href={github} target="_blank" rel="noreferrer" className="icons">
          <FiGithub />
        </a>
    </div>
  );
}

export default Links