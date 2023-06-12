import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function BasicModal({ props, clos, title, description, status}) {

    const getStatus = () => {
        if(status === "NAO_INICIADA") {
            return 'Não iniciada'
        } else if(status === "EM_PROGRESSO"){
            return 'Em progresso'
        } else if(status === "FINALIZADA"){
            return 'Finalizada'
        } else {
            return 'Arquivada'
        }
    }

  return (
    <Modal
      open={props}
      onClose={clos}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <p><b>Descrição: </b>{description}</p>

        <p><b>Status: </b>{getStatus()}</p>
      </Box>
    </Modal>
  );
}

export default BasicModal;