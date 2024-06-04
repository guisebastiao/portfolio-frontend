import { FeatureProjects, Project, ProjectName, ProjectDescription } from "./styled";

import { GiTicTacToe, GiSandSnake } from "react-icons/gi";
import { TbSquareLetterTFilled } from "react-icons/tb";
import { PiBird } from "react-icons/pi";

import { Container } from "../../styles/globalStyles";

const Projects = () => {
  return (
    <Container>
      <FeatureProjects>
        <Project href="https://github.com/guisebastiao/jogoDaVelha" target="_blank">
          <GiTicTacToe />
          <ProjectName>Jogo da Velha</ProjectName>
          <ProjectDescription>
            Este é um projeto contém um clone do clássico jogo da velha. O objetivo do jogo é ser o primeiro a conseguir
            três de seus símbolos em linha, coluna ou diagonal.
          </ProjectDescription>
        </Project>
        <Project href="https://github.com/guisebastiao/flappyBird" target="_blank">
          <PiBird />
          <ProjectName>FlappyBird Clone</ProjectName>
          <ProjectDescription>
            Este é um projeto que contém um clone do famoso jogo Flappy Bird. O objetivo do jogo é controlar um pássaro
            para que ele passe por entre os canos sem colidir.
          </ProjectDescription>
        </Project>
        <Project href="https://github.com/guisebastiao/jogoDaCobrinha" target="_blank">
          <GiSandSnake />
          <ProjectName>Jogo da Cobrinha</ProjectName>
          <ProjectDescription>
          Este é um projeto contém um clone do clássico jogo da cobrinha. O objetivo do jogo é controlar a cobrinmha para que ela coma a
          maior quantidade possível de comida, fazendo com que ela cresça. O jogo termina se a cobra colidir com as paredes ou com seu próprio corpo.
          </ProjectDescription>
        </Project>
        <Project href="https://github.com/guisebastiao/termo" target="_blank">
          <TbSquareLetterTFilled />
          <ProjectName>Termo</ProjectName>
          <ProjectDescription>
            Este é um projeto contém um clone do popular jogo de palavras Termo. O objetivo do jogo é adivinhar a palavra do dia em até seis tentativas.
            Cada tentativa deve ser uma palavra válida e, após cada palpite, o jogo fornece feedback indicando quais letras estão corretas e na posição correta.
          </ProjectDescription>
        </Project>
      </FeatureProjects>
    </Container>
  );
}

export default Projects;
