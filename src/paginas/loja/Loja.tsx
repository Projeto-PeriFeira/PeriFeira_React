import React from 'react'
import './Loja.css'
import { Grid, Box, Button, Stack, Card, CardContent, CardMedia, CardActionArea, CardActions, Typography} from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';

function Loja() {
	return (
			<>
			<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>




			<Box className="banner"/>
			<Grid container className="categorias">
			<Stack spacing={4} direction="row">
			<Button className="botoes" variant="contained">Frutas</Button>
			<Button className="botoes" variant="contained">Legumes</Button>
			<Button className="botoes" variant="contained">Verduras</Button>
			<Button className="botoes" variant="contained">Hortaliças</Button>
			</Stack>
			</Grid>
			<Grid container xs={12} className="lista">
			<Grid xs={3} item>
			<CardActionArea className="produtos">
			<CardMedia
			component="img"
			height="140"
			image="https://organicosinbox.com.br/wp-content/uploads/2020/01/Abunda%CC%82ncia-300x200.jpg"          alt="green iguana"
			/>
			<CardContent>
			<Typography gutterBottom variant="h5" component="div">
			Lizard
			</Typography>
			<Typography>
			Lizards are a widespread group of squamate reptiles, with over 6,000
			</Typography>
			</CardContent>
			</CardActionArea>
			<CardActions>
			<Button size="small" color="primary">
			<b>R$ 15,00</b> <AddCircleIcon/>
			</Button>
			</CardActions>
			</Grid>
			<Grid xs={3} item>
      <CardActionArea className="produtos">
        <CardMedia
          component="img"
          height="140"
          image="https://organicosinbox.com.br/wp-content/uploads/2020/01/Abunda%CC%82ncia-300x200.jpg"          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography>
            Lizards are a widespread group of squamate reptiles, with over 6,000
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <b>R$ 15,00</b> <AddCircleIcon/>
        </Button>
      </CardActions>
			</Grid>
			<Grid xs={3} item>
      <CardActionArea className="produtos">
        <CardMedia
          component="img"
          height="140"
          image="https://organicosinbox.com.br/wp-content/uploads/2021/03/mini-300x200.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography>
            Lizards are a widespread group of squamate reptiles, with over 6,000
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <b>R$ 15,00</b> <AddCircleIcon/>
        </Button>
      </CardActions>
			</Grid>
			<Grid xs={3} item>
      <CardActionArea className="produtos">
        <CardMedia
          component="img"
          height="140"
          image="https://organicosinbox.com.br/wp-content/uploads/2020/01/Abunda%CC%82ncia-300x200.jpg"          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography>
            Lizards are a widespread group of squamate reptiles, with over 6,000
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <b>R$ 15,00</b> <AddCircleIcon/>
        </Button>
      </CardActions>
			</Grid>
</Grid>
			<Grid container xs={12} className="lista">
			<Grid xs={3} item>
      <CardActionArea className="produtos">
        <CardMedia
          component="img"
          height="140"
          image="https://organicosinbox.com.br/wp-content/uploads/2020/01/Abunda%CC%82ncia-300x200.jpg"
	  />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography>
            Lizards are a widespread group of squamate reptiles, with over 6,000
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <b>R$ 15,00</b> <AddCircleIcon/>
        </Button>
      </CardActions>
			</Grid>
			<Grid xs={3} item>
      <CardActionArea className="produtos">
        <CardMedia
          component="img"
          height="140"
          image="https://organicosinbox.com.br/wp-content/uploads/2021/03/mini-300x200.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography>
            Lizards are a widespread group of squamate reptiles, with over 6,000
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <b>R$ 15,00</b> <AddCircleIcon/>
        </Button>
      </CardActions>
			</Grid>
			<Grid xs={3} item>
      <CardActionArea className="produtos">
        <CardMedia
          component="img"
          height="140"
          image="https://organicosinbox.com.br/wp-content/uploads/2021/08/media-300x200.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography>
            Lizards are a widespread group of squamate reptiles, with over 6,000
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <b>R$ 15,00</b> <AddCircleIcon/>
        </Button>
      </CardActions>
			</Grid>
			<Grid xs={3} item>
      <CardActionArea className="produtos">
        <CardMedia
          component="img"
          height="140"
          image="https://organicosinbox.com.br/wp-content/uploads/2020/03/pequena-300x200.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography>
            Lizards are a widespread group of squamate reptiles, with over 6,000
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <b>R$ 15,00</b> <AddCircleIcon/>
        </Button>
      </CardActions>
			</Grid>
</Grid>
			<Box className="respiro"/>
</>
)
}
export default Loja	
