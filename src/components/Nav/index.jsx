import { useState } from "react";
import { Container, Ul, Li, LinkNav, MenuToggle } from "./styled";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    toggle ? setToggle(false) : setToggle(true);
  }

  return (
    <Container height={toggle ? "100%" : "70px"}>
      <MenuToggle className={toggle && "active"} onClick={handleClick} />
      <Ul display={toggle ? "flex" : "none"}>
        <Li>
          <LinkNav onClick={() => setToggle(false)} to="/">inicio</LinkNav>
        </Li>
        <Li>
          <LinkNav onClick={() => setToggle(false)} to="/about">Sobre</LinkNav>
        </Li>
        <Li>
          <LinkNav onClick={() => setToggle(false)} to="/projects">Projetos</LinkNav>
        </Li>
        <Li>
          <LinkNav onClick={() => setToggle(false)} to="/contact">Contato</LinkNav>
        </Li>
      </Ul>
    </Container>
  );
}

export default Nav;
