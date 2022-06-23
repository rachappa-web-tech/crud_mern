import { Box, Grid, Paper, TextField, Typography, Button } from "@mui/material";
import React from "react";
import "../App.css"
import creater from  "./creater.jpg";

export default function About() {
  return (
    <Paper elevation={10}  className="Paperstyle">
      <Typography flexGrow={1} variant="h4" textAlign={"center"} fontWeight={"bold"} color="blue">Creater</Typography>
      <Grid container  direction="row"  className="gapbetwen" >
        <Grid item  sm={12} lg={6} md={6} className="gapbetwenimage">
                <img  className="imgstyle" src={creater} />
        </Grid>
        <Grid item  sm={12} lg={6} md={6} textAlign={"center"} sx={{marginTop:"80px"}}>
            <Typography variant="h6" fontWeight={"bold"} color="primary"> Rachappa Biradar</Typography>
            <Typography variant="h6" fontWeight={"bold"} color="primary"> PES University</Typography>
            <Typography variant="h6" fontWeight={"bold"} color="primary"> CS B.Tech</Typography>

            <Typography variant="p6" fontWeight={"bold"} color="red">The true man wants two things: danger and play</Typography>

        
        </Grid>


      </Grid>
    </Paper>
  );
}
