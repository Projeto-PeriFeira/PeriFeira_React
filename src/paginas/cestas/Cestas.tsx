import React, {useEffect} from 'react'
import {Typography, Card, CardContent, CardActionArea, CardMedia, Grid, Button, Box} from '@mui/material'
import './Cestas.css'


function Cestas() {
	  useEffect(() => {
    document.title = 'PeriFeira - Cestas';
  }, []);

return (
<Grid>
    <Grid container direction="column" style={{ height: '100%' }}>
        <Grid item display={'flex'} bgcolor="#F3E5D4" padding={1} height={'50%'}>
            <Grid padding={5}>
                <Grid padding={3}>
                    <Typography  variant="h4" gutterBottom>
                    Nossas cestas
                    </Typography>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie, massa et vestibulum efficitur, purus diam scelerisque tortor, ac consectetur mauris lacus quis justo. Sed auctor dapibus ex, ac semper libero consequat ac.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus saepe, est doloribus atque voluptatum beatae autem similique sequi. Mollitia modi consequuntur atque natus repudiandae id itaque praesentium soluta rerum saepe!
                    </Typography>    
                </Grid>
            
            <Grid container gap={1} padding={5} alignItems="flex-start"> 
            
            <Box display="flex" gap={2}>
                <Button variant="contained" size="medium" className='containedButton' >Assine</Button>
            <Button variant="contained" size="medium" className='containedButton' >botão 1</Button>
            <Button variant="contained" size="medium" className='containedButton' >botão 2</Button>
            </Box>
            </Grid> 
            </Grid>
            <Grid item xs={4}>
        <img className = 'imgCirculo' src="https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="Cesta" />
        </Grid>
        
</Grid>

        <Grid item container display="flex" bgcolor="#e9ecef" justifyContent="space-around" padding={6} height={'50%'}>
        <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="180"
                    image="https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                    alt="Cesta pequena"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Cesta pequena
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita est impedit, libero necessitatibus non dolorum ratione ut nobis eaque id possimus perspiciatis, rem totam ducimus harum ipsam eligendi nesciunt modi!
                    </Typography>
                </CardContent>
                </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="180"
                    image="https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                    alt="Cesta média"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Cesta média
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita est impedit, libero necessitatibus non dolorum ratione ut nobis eaque id possimus perspiciatis, rem totam ducimus harum ipsam eligendi nesciunt modi!
                    </Typography>
                </CardContent>
                </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="180"
                    image="https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                    alt="Cesta grande"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Cesta grande
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita est impedit, libero necessitatibus non dolorum ratione ut nobis eaque id possimus perspiciatis, rem totam ducimus harum ipsam eligendi nesciunt modi!
                    </Typography>
                </CardContent>
                </CardActionArea>
        </Card>
    </Grid>
</Grid>
</Grid>

);
}

export default Cestas;
