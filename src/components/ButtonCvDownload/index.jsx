import FileDownload from "react-file-download";
import { toast } from "react-toastify";

import { Form, Button } from "./styled";

import axios from "../../hooks/useAxios";

const ButtonCvDownload = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.get("/download", { responseType: "blob" });
      FileDownload(data, "CvGuilherme.pdf");
    } catch(error){
      toast.error("Algo deu errado, tente novamente mais tarde.")
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Button type="submit">Baixar Currículo</Button>
    </Form>
  );
}

export default ButtonCvDownload;
