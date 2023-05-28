import React from 'react'
import './Sobre.css'
import { Grid, Box, Typography } from '@mui/material'
// import {Helmet} from "react-helmet"
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

function Sobre() {
	return (
			<>
			<Box className="secao1" paddingBottom="96px"/>
			<Grid container className="secao1" alignItems='center' justifyContent='center'>
			<Grid item xs={8} md={4}>
			<Typography className="titulo" variant="h4" textAlign="right">O que é a PeriFeira?</Typography>
			<Typography className="texto">PeriFeira é um projeto voltado a periferia, aonde adquirimos alimentos perfeitamente adequados para consumo, mas que são considerados "fora do padrão" e, por essa razão, muitas vezes não são aceitos pelas grandes redes de supermercados.</Typography>
			<Box paddingBottom="130px"/>
			<Typography className="titulo" variant="h4" textAlign="left">Voce sabia?</Typography>
			<Typography className="texto">Segundo as nações unidas,</Typography> 
			<Typography className="dados" variant="h3">17%</Typography>
			<Typography className="texto">do que é produzido se perde entre a colheita e as prateleiras dos supermercados e armazéns.</Typography>
			</Grid>
			<Grid xs={8} md={4}>
			<img src="https://raw.githubusercontent.com/Projeto-PeriFeira/PeriFeira_React/main/src/assets/sobre/ilustracao-page-sobre.svg" alt="" />
			<Box paddingBottom="60px"/>
			<Typography className="dados" variant="h3">821 Milhões</Typography>
			<Typography className="texto">de pessoas no mundo estão em estado de insegurança alimentar, um terço de toda a produção alimentar do mundo é desperdiçada diariamente.</Typography> 
			</Grid>
			</Grid>
			<Box className="secao1" paddingBottom="98px"/>
			<Grid className="secao1" container alignItems='center' justifyContent='center'>
			<Grid item xs={8} md={4}>
			<Typography className="frase" variant="h4">"Consumidor da periferia reclama que empresas aprofundam segregação urbana"</Typography> 
			<Typography className="texto">- Folha de São Paulo, setembro, 2021</Typography>
			<Box className="secao1" paddingBottom="67px"/>
			</Grid>
			</Grid>
			<Box paddingBottom="87px"/>
			<Grid container paddingBottom="160px" alignItems='center' justifyContent='center'>
			<Grid item xs={8} md={8}>
			<Typography className="titulo" variant="h4" textAlign="center">Nossa Equipe</Typography>
			</Grid>
			<Grid container alignItems='center' justifyContent='center'>
			<Grid item xs={8} md={6}>
			<Typography className="texto" marginBottom="42px" textAlign="center">Nossa equipe é composta por pessoas engajadas, comprometidas e recem formadas na Generation Brasil!, aonde trabalhamos incansavelmente para garantir que esses alimentos não convencionais possam chegar até você.</Typography>
			</Grid>
			</Grid>
			<Grid container
			justifyContent="center"
			alignItems="center"
			textAlign="center"
			>
			<Grid xs={6} md={4}>
			<img className="perfil" alt="Renato Nunes" src="https://github.com/renatonunes74.png"/>
			<Typography className="texto">Renato Nunes</Typography>
			<Typography className="texto desenvolvedores"><GitHubIcon/> | <LinkedInIcon/></Typography>
			</Grid>
			<Grid xs={6} md={4}>
			<img className="perfil" alt="Renato Nunes" src="https://github.com/JesscMendesr.png" />
			<Typography className="texto">Jéssica Mendes</Typography>
			<Typography className="texto desenvolvedores"><GitHubIcon/> | <LinkedInIcon/></Typography>
			</Grid>
			<Grid xs={6} md={4}>
			<img className="perfil" alt="Igor Menezes" src="https://github.com/IgorWz.png"/>
			<Typography className="texto">Igor</Typography>
			<Typography className="texto desenvolvedores"><GitHubIcon/> | <LinkedInIcon/></Typography>
			</Grid>
			<Grid xs={6} md={4}>
			<img className="perfil" alt="Jonathas Nascimento" src="https://github.com/nascimentojon.png"/>
			<Typography className="texto">Jonathas Nascimento</Typography>
			<Typography className="texto desenvolvedores"><GitHubIcon/> | <LinkedInIcon/></Typography>
			</Grid>
			<Grid xs={6} md={4}>
			<img className="perfil" alt="Larissa Pimenta" src="https://github.com/LarissaMarquesPimenta.png"/>
			<Typography className="texto">Larissa Pimenta</Typography>
			<Typography className="texto desenvolvedores"><GitHubIcon/> | <LinkedInIcon/></Typography>
			</Grid>
			<Grid xs={6} md={4}>
			<img className="perfil" alt="Graziella" src="https://github.com/HeiGrazi.png"/>
			<Typography className="texto">Graziella</Typography>
			<Typography className="texto desenvolvedores"><GitHubIcon/> | <LinkedInIcon/></Typography>
			</Grid>
			</Grid>
			</Grid>
			</>
			)
}

export default Sobre
