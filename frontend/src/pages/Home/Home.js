import React, { useEffect, useState } from "react";
import axios from 'axios';
import CardTarefa from "../../components/Cards";
import { Box, Grid, Typography } from "@mui/material";


function Home() {

    const [listTask, setListTask] = useState();
    
    const fetchTasks = () => {
        axios
        .get("http://localhost:8888/tasks")
        .then(response => setListTask(response.data));
    }

    useEffect(() => {
        fetchTasks();
    }, [])

    return (
        <Box mb={3} width='100%'>
            <Typography variant="h5" gutterBottom color="primary">
                Não iniciada
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {listTask?.filter(task => task.state === 'NAO_INICIADA').map((data) => (
                    <Grid item xs={6} key={data.id}>
                        <CardTarefa
                            id={data.id}
                            title={data.title}
                            desc={data.description}
                            status={data.state}
                            updateTasks={fetchTasks}
                        />
                    </Grid>
                ))}
            </Grid>

            <Typography variant="h5" gutterBottom color="primary" mt={5}>
                Em progresso
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {listTask?.filter(task => task.state === 'EM_PROGRESSO').map((data) => (
                    <Grid item xs={6} key={data.id}>
                        <CardTarefa 
                            id={data.id}
                            title={data.title}
                            desc={data.description}
                            status={data.state}
                            updateTasks={fetchTasks}
                        />
                    </Grid>
                ))}
            </Grid>

            <Typography variant="h5" gutterBottom color="primary" mt={5}>
                Finalizada
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {listTask?.filter(task => task.state === 'FINALIZADA').map((data) => (
                    <Grid item xs={6} key={data.id}>
                        <CardTarefa 
                            id={data.id}
                            title={data.title}
                            desc={data.description}
                            status={data.state}
                            updateTasks={fetchTasks}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
        
    );
}
export default Home;