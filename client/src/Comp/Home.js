import * as React from "react";
import {
  Table,
  TableCell,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Typography,
  Grid, IconButton,
} from "@mui/material";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import faker from "faker";

import "../App.css";

let users = [];
let STATUES = ["Active", "Pending", "Blocked"];
for (let i = 0; i < 20; i++) {
  users[i] = {
    id: faker.random.uuid(),
    img: faker.image.image(),
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
    phone: faker.phone.phoneNumber('##### #####'),
    email: faker.internet.email(),
    password: faker.internet.password(),
    work: STATUES[Math.floor(Math.random() * STATUES.length)],
  };
}
let j =0;
while(j<5){
  var user = users.pop();
  console.log(user);
  j++;
}





function Home() {
  let delet = (data) =>{ console.log(data)} 


  return (
    <TableContainer component={Paper} className="Tablecontainer">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="Table-header">
              <Typography fontWeight="bold" color="#03a9f4">
                Username
              </Typography>
            </TableCell>
            <TableCell className="Table-header">
              <Typography fontWeight="bold" color="#03a9f4">
                email
              </Typography>
            </TableCell>
            <TableCell className="Table-header">
              <Typography fontWeight="bold" color="#03a9f4">
                Number
              </Typography>
            </TableCell>
            <TableCell className="Table-header">
              <Typography fontWeight="bold" color="#03a9f4">
                Options
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow key={row.id} sx={{ backgroundColor: "#FFFDE7" }}>
              <TableCell>
                <Grid container spacing={5}>
                  <Grid item sm lg={2}>
                    <Avatar alt={row.name} src={row.img} />
                  </Grid>
                  <Grid item sm lg={10}>
                    <Typography color="#e91e63">
                      {row.name + " " + row.lastname}
                    </Typography>

                  </Grid>
                </Grid>
              </TableCell>
              <TableCell><Typography color="#33eb91">{row.email}</Typography></TableCell>
              <TableCell><Typography color="#e040fb">{row.phone}</Typography></TableCell>
              
              <TableCell>
                <Grid container spacing={1}>
                  <Grid item>

                  </Grid>
                  <Grid item>
                    <IconButton color="primary">
                      <RemoveRedEyeIcon  value={row.id}/>

                    </IconButton>

                  </Grid>
                  <Grid item>
                    <IconButton color="secondary">
                      <EditIcon  value={row.id}/>

                    </IconButton>

                  </Grid>
                  <Grid item>
                    <IconButton  color="error" onClick={delet(row.id)}>
                      <DeleteIcon  value={row.id}/>
                    </IconButton>
                  </Grid>

                </Grid>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Home;
