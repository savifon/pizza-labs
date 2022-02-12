import React from "react";

import { Title } from "../Product/styles";
import { Box, Container } from "./styles";

const Modal = ({ text, textButton, action }) => {
  return (
    <Container>
      <Box>
        <Title>{text}</Title>

        <button className="green" onClick={action}>
          {textButton}
        </button>
      </Box>
    </Container>
  );
};

export default Modal;
