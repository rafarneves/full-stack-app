import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import BasicModal from '../Modal/BasicModal';
import { useState } from 'react';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditModal from '../Modal/EditModal';

export default function CardTarefa({ id, title, desc, status, updateTasks }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
      handleCloseMenu();
      setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const [openEdit, setOpenEdit] = useState(false);
  const handleOpenEdit = () => {
      handleCloseMenu();
      setOpenEdit(true);
  };
  const handleCloseEdit = () => setOpenEdit(false);

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
 
  const archiveTask = () => {

    axios
      .patch("http://localhost:8888/task/archive?taskId=" + id)
      .then(() => updateTasks())
      .catch((error) => {
        console.log(error);
      })

    handleCloseMenu()
  }


  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Box sx={{ fontSize: 14, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant='h6'>{title}</Typography>

          <Box>
            <IconButton
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MoreHorizIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleCloseMenu}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleOpen}>Detalhes</MenuItem>
              {
                (status !== 'ARQUIVADA' && status !== 'FINALIZADA') ?
                <MenuItem onClick={handleOpenEdit}>Editar</MenuItem> : ''
              }
              {
                status !== 'ARQUIVADA' ? 
                <MenuItem onClick={archiveTask}>Arquivar</MenuItem> : ''
              }
            </Menu>
          </Box>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Typography fontWeight="bold">Descrição: &nbsp;</Typography>
          <Typography variant="body2">
            {desc}
          </Typography>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Typography fontWeight="bold">Status: &nbsp;</Typography>
          <Typography variant="body2">
            {getStatus()}
          </Typography>
        </Box>
      </CardContent>
      <BasicModal
        props={open}
        clos={handleClose}
        title={title}
        description={desc}
        status={status}
      />
      <EditModal
        id={id}
        props={openEdit}
        clos={handleCloseEdit}
        title={title}
        description={desc}
        status={status}
      />
    </Card>
  );
}