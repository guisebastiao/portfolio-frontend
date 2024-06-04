import { SocialIconsContainer, Li, Link  } from "./styled";

import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <SocialIconsContainer>
      <Li>
        <Link href="https://github.com/guisebastiao/guisebastiao" target="_blank">
          <FiGithub />
        </Link>
      </Li>
      <Li>
        <Link href="https://www.linkedin.com/in/guilherme-sebastiao/" target="_blank">
          <SlSocialLinkedin />
        </Link>
      </Li>
      <Li>
        <Link href="https://www.instagram.com/guisebastiao_/" target="_blank">
          <FaInstagram />
        </Link>
      </Li>
    </SocialIconsContainer>
  );
}

export default SocialIcons;
