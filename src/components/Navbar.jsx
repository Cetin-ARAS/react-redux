import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Navigate, useNavigate } from 'react-router-dom';
import { formLabelClasses } from '@mui/material';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const navigate = useNavigate()
  const {user} = useSelector((state) => state.auth)    //*dest... yaptık

  const handleLogout = () => {
    //! clear user data
    navigate("login");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor:"pointer" }} onClick={()=> Navigate("/")}>
            Clarusway News
          </Typography>
          {user ? 
          (<button color='inherit'onClick={handleLogout}>Logout</button>):
          (<button color='inherit' onClick={()=>navigate("/")}>Login</button>)
         }
        
            <Button color="inherit">Login </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
