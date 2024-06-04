import { Message, Image } from "./styled";

import { Container } from "../../styles/globalStyles";

const NotFound = () => {
  return (
    <Container style={{ flexDirection: "column", gap: "30px" }}>
      <Message>OPS, parece que nós nos perdemos!</Message>
      <Image src="./img/not_found.png" />
    </Container>
  );
}

export default NotFound;
