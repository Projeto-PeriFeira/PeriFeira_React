import React from 'react'
import './Sobre.css'
import { Grid, Avatar, Typography, Item, Container } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Sobre() {
	return (
			<>
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
<div className fundo>
			<h1>Sobre nós</h1>
			<div className="barra">
			<Grid container
			spacing={0}
			justifyContent="center"
			alignItems="center"
			>
			<Grid xs={4} container justifyContent="center" alignItems="center" direction="column">
			<img className="perfil" alt="Renato Nunes" src="https://github.com/renatonunes74.png"/>
			<Typography>Renato Nunes</Typography>
			<Typography><GitHubIcon/> | <LinkedInIcon/></Typography>
			</Grid>
			<Grid xs={4} container justifyContent="center" alignItems="center" direction="column">
			<img className="perfil" alt="Renato Nunes" src="https://github.com/JesscMendesr.png" />
			<Typography>Jéssica Mendes</Typography>
			<Typography><GitHubIcon/> | <LinkedInIcon/></Typography>
			</Grid>
			<Grid xs={4} container justifyContent="center" alignItems="center" direction="column">
			<img className="perfil" alt="Igor Menezes" src="https://github.com/IgorWz.png"/>
			<Typography>Igor</Typography>
			<Typography><GitHubIcon/> | <LinkedInIcon/></Typography>
			</Grid>
			</Grid>
			<Grid container
			spacing={0}
			className="linha2"
			justifyContent="center"
			alignItems="center"
			>
			<Grid xs={4} container justifyContent="center" alignItems="center" direction="column">
			<img className="perfil" alt="Jonathas Nascimento" src="https://github.com/nascimentojon.png"/>
			<Typography>Jonathas Nascimento</Typography>
			<Typography><GitHubIcon/> | <LinkedInIcon/></Typography>
			</Grid>
			<Grid xs={4} container justifyContent="center" alignItems="center" direction="column">
			<img className="perfil" alt="Larissa Pimenta" src="https://github.com/LarissaMarquesPimenta.png"/>
			<Typography>Larissa Pimenta</Typography>
			<Typography><GitHubIcon/>Sobre nós | <LinkedInIcon/></Typography>
			</Grid>
			<Grid xs={4} container justifyContent="center" alignItems="center" direction="column">
			<img className="perfil" alt="Graziella" src="https://github.com/HeiGrazi.png"/>
			<Typography>Graziella</Typography>
			<Typography><GitHubIcon/> | <LinkedInIcon/></Typography>
			</Grid>
			</Grid>
			</div>
			<div className="secao">
			<Grid container>
			<Grid className="subsecao" xs={4}>
			<h2>122</h2>
			<p>
				Adipisicing sequi architecto amet veritatis eum? Magni quidem obcaecati atque laborum in? Mollitia reprehenderit incidunt
			</p>
			
			</Grid>
			<Grid className="subsecao" xs={4}>
			<h2>1000</h2>
			<p>
				Adipisicing est maxime veritatis autem laboriosam quis? Totam iure fuga neque illo quod.
			</p>
			</Grid>
			<Grid className="subsecao" xs={4}>
			<h2>5</h2>
			<p>
				Ipsum saepe reprehenderit sunt obcaecati ipsum, commodi reprehenderit! Quidem recusandae repellat tempore aliquid.
			</p>
			
			</Grid>
			</Grid>
			</div>
			</div>
			</>
	)
}

export default Sobre
