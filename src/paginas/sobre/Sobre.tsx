import React from 'react'
import './Sobre.css'
import { Item, Grid, Avatar, Box, Typography, Container } from '@mui/material'
import {Helmet} from "react-helmet"
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

function Sobre() {
	return (
			<>
			<Helmet>
			<title>Perifeira - Sobre</title>
			</Helmet>
			<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
			<div className="fundo">
			<div className='secao barra'>
			<Typography variant="h4" className='block_text'>O que é a PeriFeira?</Typography>
			<Typography className='block_text'>PeriFeira é um projeto voltado a periferia, aonde adquirimos alimentos perfeitamente adequados para consumo, mas que são considerados "fora do padrão" e, por essa razão, muitas vezes não são aceitos pelas grandes redes de supermercados.</Typography>
			</div>
			<div className='secao'>
			<Typography textAlign="center" variant="h4">Você sabia?</Typography>
			<Grid container paddingBottom={4} paddingTop={4} paddingRight={20} paddingLeft={20} className="barra2" className="secao barra2">
			<Grid xs={4}>
			<Typography textAlign="left">Segundo as nações unidas, </Typography>
			<Typography textAlign="center" variant="h3">17%</Typography>
			<Typography>do que é produzido se perde entre a colheita e as prateleiras dos supermercados e armarzéns.</Typography>
			</Grid>
			<Grid xs={8}>
			<Typography>Enquanto</Typography>
			<Typography variant="h3">821 Milhões</Typography>
			<Typography>de pessoas no mundo estão em estado de insegurança alimentar, um terço de toda a produção alimentar do mundo é deperdiçada diariamente</Typography>
			</Grid>
			</Grid>
			</div>
			<div className="secao">
			<Typography textAlign="center" variant="h4">Por isso nós estamos</Typography>
			<Grid display='flex' spacing={10} className="barra" xs={12}>
			<Grid className="borda" xs={4}>
			<Typography variant='h5'>Sempre</Typography>
			<hr/>
			<Typography>
			Apoiando a agricultura consciente e sustentável
			</Typography>

			</Grid>
			<Grid className="borda" xs={4}>
			<Typography variant='h5'>Buscando</Typography>
			<hr/>
			<Typography>
			Estabelecer uma rede colaborativa com os produtores e produtoras do campo.
			</Typography>
			</Grid>
			<Grid className="borda" xs={4}>
			<Typography variant='h5'>Melhorar</Typography>
			<hr/>
			<Typography>
			A participação de um ciclo justo e afetuoso.
			</Typography>
			</Grid>
			</Grid>
		</div>
		<div className="secao">
			<Typography textAlign="center" variant="h4">Como?</Typography>
		<Grid display='flex' className="barra" justifyContent='center' textAlign='center'>
		<Grid xs={4}>
		<Typography variant="h5" className="numeros">1</Typography>
		<Typography variant="h6">Monte a cesta do seu jeito!</Typography>
			</Grid>
		<Grid xs={4}>
		<Typography variant="h5" className="numeros">2</Typography>
		<Typography variant="h6">Defina o dia ideal para buscar sua cesta</Typography>
			</Grid>
		<Grid xs={4}>
		<Typography variant="h5" className="numeros">3</Typography>
		<Typography variant="h6">Receba sua cesta em sua casa ou em uma de nossas estações!</Typography>
			</Grid>
			</Grid>
		</div>
			<Box className="barra secao cores">
			<Typography variant="h4" textAlign='center'>Nossos Dev's</Typography>
			<Typography justifyContent='center' className='block_text'>
			Nossa equipe é composta por pessoas engajadas, comprometidas e recem formadas na Generation Brasil!, aonde trabalhamos incansavelmente para garantir que esses alimentos não convencionais cheguem até você.
			</Typography>
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
		<Typography><GitHubIcon/> | <LinkedInIcon/></Typography>
		</Grid>
		<Grid xs={4} container justifyContent="center" alignItems="center" direction="column">
		<img className="perfil" alt="Graziella" src="https://github.com/HeiGrazi.png"/>
		<Typography>Graziella</Typography>
		<Typography><GitHubIcon/> | <LinkedInIcon/></Typography>
		</Grid>
		</Grid>
		</Box>
		</div>
		</>
		)
}

export default Sobre
