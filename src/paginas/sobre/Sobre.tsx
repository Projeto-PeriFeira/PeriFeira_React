import React from 'react'
import './Sobre.css'
import { Grid, Box, Typography, Stack, Button, Card, CardMedia, CardContent } from '@mui/material'
import {Helmet} from "react-helmet"
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

function Sobre() {
	return (
	<>
			<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>

			<div className="secao">
			<Grid container spacing={2} xs={12}>
			<Grid xs={12} md={6}>
			<Typography textAlign='right' className="titulo">O que é PeriFeira?</Typography>
			<Typography className="texto" textAlign='left'>PeriFeira é um projeto voltado a periferia, aonde adquirimos alimentos perfeitamente adequados para consumo, mas que são considerados "fora do padrão" e, por essa razão, muitas vezes não são aceitos pelas grandes redes de supermercados.</Typography>
			<Typography textAlign='left' variant="h3" className="titulo" marginTop="167px" >Você sabia?</Typography>
			<Typography className="texto" textAlign='left'>Segundo as nações unidas,</Typography>
			<Typography textAlign='left' variant="h2" marginBotton="222px">17%</Typography>
			<Typography className="texto" textAlign='left'>do que é produzido se perde entre a colheita e as prateleiras dos supermercados e armazéns.</Typography>
			</Grid>
			<Grid xs={12} md={6}>
			<img src="https://raw.githubusercontent.com/Projeto-PeriFeira/PeriFeira_React/main/src/assets/sobre/ilustracao-page-sobre.svg" alt="Foto ilustrativa de um agricultor"/>
			<Typography textAlign='left' variant="h2" fontColor="#835A40">821 Milhões</Typography>
			<Typography className="texto" textAlign='left'>de pessoas no mundo estão em estado de insegurança alimentar, um terço de toda a produção alimentar do mundo é desperdiçada diariamente.</Typography>
			</Grid>
			</Grid>
			</div>
			<div className="secao" backgroundColor="#ffefdd">
			<Typography marginLeft='19.15%' marginRight='19.15%' className="titulo" justifyContent='center' textAlign='left'>“Consumidor da periferia reclama que empresas aprofundam segregação urbana”</Typography>
			<Typography className="texto" marginLeft='19.15%' marginRight='19.15%' textAlign='left'>- Folha de São Paulo, setembro, 2021</Typography>
			</div>
			<div className="secao2">
			<Typography className="titulo">Nossa equipe</Typography>
			<Typography className="texto"marginLeft='19.15%' marginRight='19.15%'  justifyContent='center'>Nossa equipe é composta por pessoas engajadas, comprometidas e recem formadas na Generation Brasil!, aonde trabalhamos incansavelmente para garantir que esses alimentos não convencionais possam chegar até você.
			</Typography>
			<Grid container
	justifyContent="center"
		alignItems="center"
		textAlign="center"
		className="secao2"
		backgroundColor="#fff7ee"
		>
			<Grid xs={4}>
		<img className="perfil" alt="Renato Nunes" src="https://github.com/renatonunes74.png"/>
		<Typography>Renato Nunes</Typography>
		<Typography><GitHubIcon/> | <LinkedInIcon/></Typography>
			</Grid>
			<Grid xs={4}>
		<img className="perfil" alt="Renato Nunes" src="https://github.com/JesscMendesr.png" />
		<Typography>Jéssica Mendes</Typography>
		<Typography><GitHubIcon/> | <LinkedInIcon/></Typography>
			</Grid>
			<Grid xs={4}>
		<img className="perfil" alt="Igor Menezes" src="https://github.com/IgorWz.png"/>
		<Typography>Igor</Typography>
		<Typography><GitHubIcon/> | <LinkedInIcon/></Typography>
		</Grid>
			<Grid xs={4}>
		<img className="perfil" alt="Jonathas Nascimento" src="https://github.com/nascimentojon.png"/>
		<Typography>Jonathas Nascimento</Typography>
		<Typography><GitHubIcon/> | <LinkedInIcon/></Typography>
		</Grid>
			<Grid xs={4}>
		<img className="perfil" alt="Larissa Pimenta" src="https://github.com/LarissaMarquesPimenta.png"/>
		<Typography>Larissa Pimenta</Typography>
		<Typography><GitHubIcon/> | <LinkedInIcon/></Typography>
		</Grid>
			<Grid xs={4}>
		<img className="perfil" alt="Graziella" src="https://github.com/HeiGrazi.png"/>
		<Typography>Graziella</Typography>
		<Typography><GitHubIcon/> | <LinkedInIcon/></Typography>
		</Grid>
			</Grid>
			</div>
	</>
)
}
export default Sobre
