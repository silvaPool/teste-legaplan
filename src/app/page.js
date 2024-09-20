"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import NoteList from "@/components/NoteList";
import Logo from "../assets/images/logo.png"

const IndexPage = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Meeting',
      description: 'Review project, assign task',
      important: false,
    },
    {
      id: 2,
      title: 'Grocery',
      description: 'Milk, Sugar, Apples, eggs',
      important: false,
    }
  ]);

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
   <>
    <Box className="header">
      <Image src={Logo} className="logo"/>
      <Typography className="texto1">Bem-vindo de volta, Marcus</Typography>
      <Typography className="texto2">Segunda, 01 de dezembro de 2025</Typography>
    </Box>
    <NoteList notes={notes} setNotes={setNotes} onDelete={deleteNote}/>
    </>
  );
};

export default IndexPage;