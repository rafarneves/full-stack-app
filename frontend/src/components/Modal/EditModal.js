import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import axios from "axios";

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

function EditModal({ id, props, clos, title, description, status}) {

    const [titulo, setTitulo] = useState(title);
    const [descricao, setDescricao] = useState(description);
    const [stat, setStat] = useState(status);

    const handleChangeTitulo = (e) => {
        setTitulo(e.target.value)
    }

    const handleChangeDescricao = (e) => {
        setDescricao(e.target.value)
    }

    const onChangeStatus = (e) => {
        setStat(e.target.value);
    }

    const handleSubmit = () => {
        const dataEdit = {
            taskId: id,
            taskTitle: titulo,
            taskDescription: descricao,
            taskState: stat
        };

        axios
            .patch("http://localhost:8888/task", dataEdit)
            .then(() => {
                console.log("Cadastrou com sucesso")
            })
            .catch((error) => {
                console.log("Deu erro!", error);
            })

            setTitulo('');
            setDescricao('');
            setStat('NAO_INICIADA');
    }

  return (
    <Modal
      open={props}
      onClose={clos}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
      <Typography variant="h3" gutterBottom color="primary">
                Edição de tarefa
            </Typography>
            <TextField id="standard-basic" style={{marginBottom: 2}} label="Título" variant="standard" value={titulo} onChange={handleChangeTitulo}/>
            <TextField id="standard-basic" style={{marginBottom: 2}} label="Descrição" variant="standard" value={descricao} onChange={handleChangeDescricao} />
            <FormControl style={{marginBottom: 2}}>
                <FormLabel id="demo-row-radio-buttons-group-label">Status da tarefa</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel 
                        value="NAO_INICIADA" 
                        name="status" 
                        control={<Radio />} 
                        label="Não iniciada" 
                        checked={stat === "NAO_INICIADA"}
                        disabled={status === "NAO_INICIADA"}
                        onChange={onChangeStatus}
                    />
                    <FormControlLabel 
                        value="EM_PROGRESSO" 
                        name="status" 
                        control={<Radio />} 
                        label="Em progresso" 
                        disabled={status === "EM_PROGRESSO"}
                        checked={stat === "EM_PROGRESSO"} 
                        onChange={onChangeStatus}
                    />
                    <FormControlLabel 
                        value="FINALIZADA" 
                        name="status" 
                        control={<Radio />} 
                        label="Finalizada" 
                        disabled={status === "FINALIZADA"}
                        checked={stat === "FINALIZADA"} 
                        onChange={onChangeStatus}
                    />
                </RadioGroup>
            </FormControl>
            <Button variant="contained" onClick={handleSubmit}>Editar tarefa</Button>
      </Box>
    </Modal>
  );
}

export default EditModal;