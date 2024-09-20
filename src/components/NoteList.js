import React, { useState } from 'react';
import Note from './Note';
import { Box, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';

const NoteList = ({ notes, setNotes, onDelete }) => {
    const [newTitle, setNewTitle] = useState('');
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAddNote = () => {
        const newNote = {
            id: notes.length + 1,
            title: newTitle,
            completed: false, 
        };
        setNotes([...notes, newNote]);
        setNewTitle('');
        setOpen(false); 
    };

    const onToggleComplete = (id) => {
        setNotes(
            notes.map((note) =>
                note.id === id
                    ? { ...note, completed: !note.completed }
                    : note
            )
        );
    };

    return (
        <Box sx={{ padding: '20px', textAlign: 'center' }}>

            <Box className="boxTarefas">
            <Typography className='titleTarefa'>Suas tarefas de hoje</Typography>

            {/* Exibir lista de notas */}
            <Box sx={{ marginTop: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                {notes.filter(note => !note.completed).map((note) => (
                    <Note
                        key={note.id}
                        note={note}
                        onToggleComplete={onToggleComplete}
                        onDelete={onDelete}
                    />
                ))}
            </Box>

            {/* Tarefas concluídas */}
            <Box sx={{ marginTop: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography className='subTitleTarefa'>Tarefas finalizadas</Typography>
                {notes.filter(note => note.completed).map((note) => (
                    <Note
                        key={note.id}
                        note={note}
                        onToggleComplete={onToggleComplete}
                        onDelete={onDelete}
                        isCompleted={true}
                    />
                ))}
            </Box>

            </Box>

          
            <Button className="buttonLista" onClick={handleClickOpen} sx={{ marginTop: '20px' }}>
                Adicionar nova tarefa
            </Button>

            {/* Modal para adicionar tarefa */}
            <Dialog open={open} onClose={handleClose} PaperProps={{
                sx:{
                    width: '450px',
                    height: '286px',
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

                <DialogTitle sx=
                {{
                    fontSize: '24px',
                    fontWeight: '500',
                    fontFamily: 'Inter Tight',
                    lineHeight: '29.04px',
                    letterSpacing: '-0.02em',
                    textAlign: 'left',
                      
                      }}>
                        Nova Tarefa</DialogTitle>
                <DialogContent sx={{overflow: 'hidden'}}>
                   <Typography sx=
                   {{
                    marginBottom: '8px',
                    fontSize: '16px',
                    fontWeight: '400',
                    fontFamily: 'Inter Tight',
                    lineHeight: '19.36px',
                    letterSpacing: '-2%',
                    textAlign: 'left',
                    color: '#000000',
                    
                    }}>Título</Typography>
                    <TextField
                        autoFocus
                        placeholder="Digite"
                        fullWidth
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                    />
                </DialogContent>
                <DialogActions sx=
                {{
                    justifyContent: 'center',

                    '@media (max-width: 320px)': {
                        flexDirection: 'column',
                        position: 'relative',
                        bottom: '330px',
                        right: '5px',
                        gap: '10px',

                        '& .buttonAdicionarModal': {
                            order: 1,
                        },
                        '& .buttonCancelarModal': {
                            order: 2,
                        },
                    }
                    }}>
                        <Button onClick={handleClose} className='buttonCancelarModal'>Cancelar</Button>
                        <Button onClick={handleAddNote} className='buttonAdicionarModal'>Adicionar</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default NoteList;