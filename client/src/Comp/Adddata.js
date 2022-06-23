import {
  Box,
  Grid,
  Paper,
  TextField,
  Typography,
  Button,
  AppBar,
  Toolbar,
} from "@mui/material";
import React from "react";
import "../App.css";

function Adddata() {
  return (
    <Paper elevation={10} className="Paperstyle">
              <form action="http://localhost:3001/" method="POST">

      <Grid container spacing={1} flexGrow={1}>
        <Grid item sm={12} lg={12} md={12} flexGrow={1}>
          <Typography
            flexGrow={1}
            variant="h5"
            textAlign={"center"}
            fontWeight={"bold"}
            color="primary"
          >
            ADD DATA
          </Typography>
        </Grid>

        
          <Grid item sm={6} lg={6} md={6}>
            <TextField
              id="firstname"
              name="firstname"
              label="Firstname"
              fullWidth
              //value={}
              //onChange={}
            />
          </Grid>
          <Grid item sm={6} lg={6} md={6}>
            <TextField
              id="lastname"
              label="Lastname"
              name="lastname"
              fullWidth
              //value={}
              //onChange={}
            />
          </Grid>
          <Grid item sm={12} lg={12} md={12}>
            <TextField
              id="email"
              name="email"
              label="Email"
              fullWidth
              //value={}
              //onChange={}
            />
          </Grid>
          <Grid item sm={12} lg={12} md={12}>
            <TextField
              id="phone"
              name="phone"
              label="Phone Number"
              fullWidth
              //value={}
              //onChange={}
            />
          </Grid>
          <Grid item sm={12} lg={12} md={12} textAlign={"center"}>
            <Button variant="contained" type="Submit">Submit</Button>
          </Grid>
      </Grid>
      </form>

    </Paper>
  );
}

export default Adddata;
