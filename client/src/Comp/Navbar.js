import React from 'react';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/icons-material/Menu'
import Tabs from '@mui/material/Tabs'
import { Tab, Button, TextField } from '@mui/material';
import Home from './Home';
import About from './About';
import Search from './Search';
import Adddata from './Adddata';

function Navbar() {
    const [value,setValue] = React.useState(1);
    const handlechange = (event,newValue) => {
        setValue(newValue);
    }
    const [name,setName] = React.useState("");
    const handlenamechange = (event,newValue) =>{
        setName(newValue);
    }



    return (
        <>
        
        <AppBar position="sticky"  sx={{backgroundColor:"#DFE3E8"}}>
          <Toolbar>
            <IconButton edge="start"  aria-label="menu">
              <Menu />
            </IconButton>
            <Typography variant="h5" fontWeight={"bold"} color="#07ee18">Appname</Typography>
              <Tabs  value={value} onChange={handlechange} aria-label=""  indicatorColor="#FF6F00" sx={{flexGrow:1}} >
                <Tab label="Data" sx={{fontWeight:"bold"}}/>
                <Tab  label ="add data"  sx={{fontWeight:"bold"}}/>
                <Tab label="About"  sx={{fontWeight:"bold"}}/>
                <Typography sx={{flexGrow:1}}></Typography>
                
               
              </Tabs>
              <form>
                    <input type="text" id="fname" name="fname"/>
                <input type="submit"  value="Submit"/>
                </form>
          </Toolbar>
        </AppBar>
        {value === 0 && <Home/>} 
        {value ===1 && <Adddata/>} 
        {value === 2 && <About/>}
        {value === 3 && <Search/>}      
         </>

    );
}

export default Navbar;