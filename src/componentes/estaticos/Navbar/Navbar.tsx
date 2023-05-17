import React from 'react'

import { Grid, AppBar, Toolbar, Typography, Box, Button } from "@material-ui/core";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Stack } from '@mui/material';

function Navbar() {
  return (
    <>
      <AppBar position="static" className="navbar">
        <Toolbar>
          <Grid container alignItems={"center"} justifyContent={"space-between"}>
            <Box className="cursor">
              <Typography variant="h5" color="inherit">
                BlogPessoal
              </Typography>
            </Box>
            <Stack alignItems={"center"} justifyContent="start" flexDirection={"row"} gap={"40px"}>
              <Box className="item-menu" p={1} mx={1}>
                <Typography variant="body2" color="inherit">
                  home
                </Typography>
              </Box>
              <Box p={1} className="item-menu" mx={1}
              >
                <Typography variant="subtitle1" color="inherit">
                  postagens
                </Typography>
              </Box>
              <Box
                p={1}
                className="item-menu"
                mx={1}
              >
                <Typography variant="subtitle1" color="inherit">
                  temas
                </Typography>
              </Box>
              <Box
                p={1}
                className="item-menu"
                mx={1}
              >
                <Typography variant="subtitle1" color="inherit">
                  cadastrar tema
                </Typography>
              </Box>
              <Link to='/'>
              <Box mx={1}>
                  <Button size="large" className="botao" variant="outlined" href="#outlined-buttons"
                  >
                    logout
                  </Button>
                </Box>
                </Link>
            </Stack>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}



export default Navbar