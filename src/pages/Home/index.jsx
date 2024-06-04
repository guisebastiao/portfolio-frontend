import { BoxTypedText, SpanTypedText, Paragraph, FeatureText, BoxParagraph, BoxButtons, FeatureImage, ImageProfile } from "./styled";

import TypedText from "../../components/TypedText";

import ButtonCvDownload from "../../components/ButtonCvDownload";
import ButtonHire from "../../components/ButtonHire";
import SocialIcons from "../../components/SocialIcons";

import { Container } from "../../styles/globalStyles";

const Home = () => {
  return (
    <Container>
      <FeatureText>
        <BoxTypedText>
          <SpanTypedText>Eu sou</SpanTypedText>
          <TypedText />
        </BoxTypedText>
        <BoxParagraph>
          <Paragraph>
            Olá! Me chamo Guilherme Fernandes Sebastião e tenho grande interesse em programação. Dê uma olhada no meu portfólio e
            conheça minhas habilidades e projetos. Juntos, podemos tornar ideias em realidade por meio da tecnologia.
          </Paragraph>
        </BoxParagraph>
        <BoxButtons>
          <ButtonHire>Contrate-me</ButtonHire>
          <ButtonCvDownload />
        </BoxButtons>
        <SocialIcons />
      </FeatureText>
      <FeatureImage>
        <ImageProfile src="./img/profile_01.png" />
      </FeatureImage>
    </Container>
  );
}

export default Home;
