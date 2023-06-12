import React, { useState } from "react";
import axios from 'axios';
import { Box, Button, TextField, Typography } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


function Register() {
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [status, setStatus] = useState("NAO_INICIADA");

    const handleChangeTitulo = (e) => {
        setTitulo(e.target.value)
    }

    const handleChangeDescricao = (e) => {
        setDescricao(e.target.value)
    }

    const onChangeStatus = (e) => {
        setStatus(e.target.value);
    }

    const handleSubmit = () => {
        const dataPost = {
            title: titulo,
            description: descricao,
            state: status
        };

        axios
            .post("http://localhost:8888/task", dataPost)
            .then(() => {
                console.log("Cadastrou com sucesso")
            })
            .catch((error) => {
                console.log("Deu erro!", error);
            })

            setTitulo('');
            setDescricao('');
            setStatus('NAO_INICIADA');
    }

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: 2}}>
            <Typography variant="h3" gutterBottom color="primary">
                Cadastro de tarefa
            </Typography>
            <TextField id="outlined-basic" label="Título" variant="outlined" value={titulo} onChange={handleChangeTitulo}/>
            <TextField id="outlined-basic" label="Descrição" variant="outlined" value={descricao} onChange={handleChangeDescricao} />
            <FormControl>
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
                        checked={status === "NAO_INICIADA"}
                        onChange={onChangeStatus}
                    />
                    <FormControlLabel 
                        value="EM_PROGRESSO" 
                        name="status" 
                        control={<Radio />} 
                        label="Em progresso" 
                        checked={status === "EM_PROGRESSO"} 
                        onChange={onChangeStatus}
                    />
                    <FormControlLabel 
                        value="FINALIZADA" 
                        name="status" 
                        control={<Radio />} 
                        label="Finalizada" 
                        checked={status === "FINALIZADA"} 
                        onChange={onChangeStatus}
                    />
                </RadioGroup>
            </FormControl>
            <Button variant="contained" onClick={handleSubmit}>Cadastrar tarefa</Button>
        </Box>
    );
}

export default Register;