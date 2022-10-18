import { Paper, TextField, Button, Box, Container } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import TaskList from "../../components/taskList/taskList";


export default function TaskPage(){
  return (
    <Box>
    <header>
    <Header />
    </header>

    <Container maxWidth="sm" sx={{mt:'50px', display:'flex', width:'500px', flexDirection:'column', alignItems:'center'}}>


<TextField 
 
 id="task"
 label="Tarefa"
 placeholder="Digite aqui sua tarefa"
 multiline
 sx={{ borderRadius: '20px', width:'500px'}}

variant="filled"
// value={task}
// onChange={e => setTask(e.target.value)}
/>
<Button sx={{mt: 2 }} variant="contained" color="success" >Salvar</Button>
</Container>
    <Container>
      <TaskList/>
    </Container>
    </Box>
  )
}