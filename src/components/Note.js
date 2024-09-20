import { Checkbox, IconButton, Typography, Box } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';

const Note = ({ note, onToggleComplete, onDelete, isCompleted }) => {
    const { id, title, completed } = note;

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirmDelete = () => {
        onDelete(id);
        setOpen(false);
    };

    return (
        <Box className="cardsTarefas">
          
            <Checkbox
                checked={completed}
                onChange={() => onToggleComplete(id)}
                sx={{ color: completed ? 'green' : 'gray' }}
            />

           
            <Typography
                variant="body1"
                sx={{
                    textDecoration: completed ? 'line-through' : 'none',
                    flexGrow: 1,
                    marginLeft: '10px',
                    color: completed ? '#777' : '#000',
                }}
            >
                {title}
            </Typography>

           
            <IconButton onClick={handleClickOpen}>
                <DeleteOutlineIcon />
            </IconButton>

            <Dialog open={open} onClose={handleClose}  PaperProps={{
                sx:{
                    width: '450px',
                    height: '232px',
                    padding: '32px 0',
                    borderRadius: '16px',
                    boxShadow: '0px 24px 48px -12px #1018282E',
                    background: '#FFFFFF',
                    

                    '@media (max-width: 320px)': {
                        width: '100vw',
                        height: '100vh',
                        margin: '0',
                        padding: '16px',
                        borderRadius: 0,
                        background: '#FFFFFF',
                        maxWidth: '100vw',
                        maxHeight: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }
                }
            }}>
                <DialogTitle 
                sx={{
                    fontSize: '24px',
                    fontWeight: '500',
                    fontFamily: 'Inter Tight',
                    lineHeight: '29.04px',
                    letterSpacing: '-0.02em',
                    textAlign: 'left',

                }}
                >Deletar tarefa</DialogTitle>
                <DialogContent sx={{overflow: 'hidden'}}>
                   <Typography 
                   sx={{
                    fontSize: '16px',
                    fontWeight: '500',
                    fontFamily: 'Inter Tight',
                    lineHeight: '29.04px',
                    letterSpacing: '-0.02em',
                    textAlign: 'left',
                    color: '#0000008A',

                   }}
                   >Tem certeza que você deseja deletar essa tarefa?</Typography>
                </DialogContent>
                <DialogActions sx=
                {{
                    justifyContent: 'center',

                    '@media (max-width: 320px)': {
                        flexDirection: 'column',
                        position: 'relative',
                        bottom: '405px',
                        right: '5px',
                        gap: '10px',

                        '& .buttonDeletarModal': {
                            order: 1,
                        },
                        '& .buttonCancelarModal': {
                            order: 2,
                        },
                    }
                    }}>
                    <Button onClick={handleClose} className='buttonCancelarModal'>Cancelar</Button>
                    <Button onClick={handleConfirmDelete}  className='buttonDeletarModal'>Deletar</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default Note;
