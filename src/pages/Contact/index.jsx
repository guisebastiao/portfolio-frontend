import { Fragment, useState } from "react";
import { toast } from "react-toastify";
import validator from "validator";

import { FeatureContact, Box, Title, Description, Row, BoxContact, TitleBoxContent, ContactInfo, Form, FormInputs, Input, TextArea, FormButton, ButtonSubmit } from "./styled";

import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { IoSend } from "react-icons/io5";

import axios from "../../hooks/useAxios";

import { Container } from "../../styles/globalStyles";

import Loading from "../../components/Loading";

const Contact = () => {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !from || !text) {
      toast.error("As informações de contato estão faltando.");
      return;
    }

    if (!validator.isEmail(from)) {
      toast.error("O e-mail de contato é inválido.");
      return;
    }

    const message = { name, from, text }

    try {
      setIsLoading(true);
      const { data } = await axios.post("/sendmail", message);

      if (data.errors) {
        toast.error(data.errors[0]);
      }

      if (data.success) {
        toast.success(data.success[0]);
      }

      setIsLoading(false);
    } catch {
      toast.error("Algo deu errado, tente novamente mais tarde.");
      setIsLoading(false);
    }

    setName("");
    setFrom("");
    setText("");
  }

  return (
    <Container>
      <FeatureContact>
        <Box>
          <Title>Entrar em contato</Title>
          <Description>Você está contratando <strong>Devs</strong>? Entre em contato comigo aqui.</Description>
        </Box>
        <Row>
          <BoxContact>
            <TitleBoxContent>Me chame</TitleBoxContent>
            <ContactInfo>
              <MdOutlineEmail />
              <span>guilhermesebastiaou.u@gmail.com</span>
            </ContactInfo>
            <ContactInfo>
              <MdOutlinePhone />
              <span>+55 51 994155941</span>
            </ContactInfo>
          </BoxContact>
          <Form onSubmit={handleSubmit}>
            {isLoading ? (
              <Loading />
            ) : (
              <Fragment>
                <FormInputs>
                  <Input placeholder="Nome" autoComplete="off" onChange={e => setName(e.target.value)} value={name} />
                  <Input placeholder="E-mail" autoComplete="off" onChange={e => setFrom(e.target.value)} value={from} />
                </FormInputs>
                <TextArea placeholder="Mensagem" autoComplete="off" onChange={e => setText(e.target.value)} value={text} />
                <FormButton>
                  <ButtonSubmit type="submit">
                    <span>Enviar</span>
                    <IoSend />
                  </ButtonSubmit>
                </FormButton>
              </Fragment>
            )}
          </Form>
        </Row>
      </FeatureContact>
    </Container>
  );
}

export default Contact;
