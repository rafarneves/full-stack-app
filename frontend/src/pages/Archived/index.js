import React, { useEffect, useState } from "react";
import axios from 'axios';
import CardTarefa from "../../components/Cards";
import { Box, Grid, Typography } from "@mui/material";


function Archiveds() {

    const [listTask, setListTask] = useState();

    const fetchTasks = () => {
        axios
        .get("http://localhost:8888/tasks/archived")
        .then(response => setListTask(response.data));
    }

    useEffect(() => {
        fetchTasks();
    }, [])

    return (
        <Box mb={3} width='100%'>
            <Typography variant="h5" gutterBottom color="primary">
                Arquivadas
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {listTask?.map((data) => (
                    <Grid item xs={6} key={data.id}>
                        <CardTarefa 
                            title={data.title}
                            desc={data.description}
                            status={data.state}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
        
    );
}
export default Archiveds;