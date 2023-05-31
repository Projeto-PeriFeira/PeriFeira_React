import React from 'react'
import './Carrinho.css'
import { useSelector, useDispatch } from 'react-redux'
import { Grid, CardMedia, Badge, Container, AppBar, Toolbar, Modal, Typography, Box, Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { addToken } from '../../store/tokens/actions'
import { TokenState } from '../../store/tokens/tokensReducer'
import {toast} from 'react-toastify'

function Carrinho() {

	let navigate = useNavigate();
	const token = useSelector<TokenState, TokenState["tokens"]>(
			(state) => state.tokens
			);

	const dispatch = useDispatch()

		// function goLogout() {
		// 	dispatch(addToken(''))
		// 		toast.error("Usuario deslogado")
		// 		navigate("/login")
		// }

const userId = useSelector<TokenState, TokenState['id']>(
(state) => state.id
)
	return (
	<>
			<Box className="secao1" paddingBottom="91px"/>
			<Grid container className="secao1" alignItems='center' justifyContent='center'>
							<Grid item xs={8} className="secao2 carrinhoMenu">
			<Box paddingBottom="49px"/>
							<Typography className="titulo" textAlign="center" marginTop="49" variant="h3">Carrinho de compras</Typography>
			<Box className="secao2" paddingBottom="71px"/>
			<Grid container alignItems='left' justifyContent='left'>
							<Grid item xs={5}>
                <CardMedia
                    component="img"
                    height="146"
										width="214"
                    image="https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                    alt="Foto do produto"
										className="carrinhoProdutoImagem"
                />
			<Grid container>
							</Grid>
							</Grid>
							<Grid item xs={4}>
			<Grid container>
							<Grid className="carrinhoProdutoPropriedades" item xs={6}>
							<Typography>Abacaxi</Typography>
							<Typography>Abacaxi Fresquinho</Typography>
							</Grid>
							<Grid item xs={6}>
							<Typography className="carrinhoProdutoPreco">R$ 10,0</Typography>
							</Grid>
							</Grid>
							</Grid>
							</Grid>
							<hr/>
							</Grid>
							</Grid>
							</>
)
}
export default Carrinho
