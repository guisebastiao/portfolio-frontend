import { FeatureIntroduction, Title, AboutBox, Paragraph, FeatureSkills, BoxSkills, Skill, NameSkill, FeatureImage, Image } from "./styled";

import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { RiBootstrapLine } from "react-icons/ri";
import { FaNodeJs, FaGitAlt, FaGithub, FaFigma, FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { MdApi } from "react-icons/md";
import { GoDatabase } from "react-icons/go";
import { GrMysql } from "react-icons/gr";

import { Container } from "../../styles/globalStyles";

const About = () => {
  return (
    <Container>
      <FeatureIntroduction>
        <AboutBox>
          <Title>Um pouco mais sobre mim</Title>
          <Paragraph>
            Olá! Me chamo Guilherme, tenho 18 anos e tenho grande paixão pelo desenvolvimento web. Ao longo dos últimos três anos,
            tenho me dedicado ao estudo de HTML, CSS e JavaScript. Nos últimos 18 meses, venho me aprofundando em NodeJS e React,
            trabalhando na criação de APIs e interfaces dinâmicas. Atualmente, estou matriculado no curso de Ciência da Computação
            na Unisul, localizada em Tubarão, SC. Meu objetivo é atuar como desenvolvedor remoto, contribuindo para projetos inovadores
            e buscando constantemente aprimorar minhas habilidades. Estou empolgado para aplicar meu conhecimento em projetos do mundo
            real e fazer diferença no cenário tecnológico.
          </Paragraph>
        </AboutBox>
        <FeatureSkills>
          <Title>Minhas habilidades</Title>
          <BoxSkills>
            <Skill>
              <AiOutlineHtml5 />
              <NameSkill>HTML</NameSkill>
            </Skill>
            <Skill>
              <TbBrandCss3 />
              <NameSkill>CSS</NameSkill>
            </Skill>
            <Skill>
              <RiBootstrapLine />
              <NameSkill>Bootstrap</NameSkill>
            </Skill>
            <Skill>
              <FaNodeJs />
              <NameSkill>NodeJS</NameSkill>
            </Skill>
            <Skill>
              <FaReact />
              <NameSkill>React</NameSkill>
            </Skill>
            <Skill>
              <FaGitAlt />
              <NameSkill>Git</NameSkill>
            </Skill>
            <Skill>
              <FaGithub />
              <NameSkill>GitHub</NameSkill>
            </Skill>
            <Skill>
              <MdApi />
              <NameSkill>API Rest</NameSkill>
            </Skill>
            <Skill>
              <GoDatabase />
              <NameSkill>SQL</NameSkill>
            </Skill>
            <Skill>
              <GrMysql />
              <NameSkill>MySQL</NameSkill>
            </Skill>
            <Skill>
              <FaFigma />
              <NameSkill>Figma</NameSkill>
            </Skill>
            <Skill>
              <FaJava />
              <NameSkill>Java</NameSkill>
            </Skill>
          </BoxSkills>
        </FeatureSkills>
      </FeatureIntroduction>
      <FeatureImage>
        <Image src="./img/profile_02.png" />
      </FeatureImage>
    </Container>
  );
}

export default About;
