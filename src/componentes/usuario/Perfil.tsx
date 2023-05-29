import React, { useEffect, useState } from 'react'
import { Grid, Box, Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { TokenState } from '../../store/tokens/tokensReducer'
import { buscaId } from '../../services/Service'
import { Usuario } from '../../model/Usuario'
import './Perfil.css'

function Perfil() {
	const navigate = useNavigate();
	const token = useSelector<TokenState, TokenState["tokens"]>(
			(state) => state.tokens
			);

	useEffect(() => {
			if (token == "") {
			toast.error("Você precisa estar logado")
			navigate("/login")
			}
			})

const userId = useSelector<TokenState, TokenState['id']>(
(state) => state.id
)

const [usuario, setUsuario] = useState<Usuario>({
id: +userId,
nome: '',
usuario: '',
foto: '',
senha: '',
})

async function getUserById(id: number) {
await buscaId(`/usuarios/${id}`, setUsuario, {
headers: {Authorization: token}
})
}

useEffect(() => {
getUserById(+userId)
}, [])

			return(
				<>
			<Grid container className="secao1" alignItems='center' justifyContent='center'>
			<Grid item xs={8} md={6}>

<h1>Nome: {usuario.nome}</h1>
<h1>E-mail: {usuario.usuario}</h1>
<h1>Foto: {usuario.foto}</h1>
<h1>Produtos: {usuario.produtos}</h1>
</Grid>
</Grid>
				</>
				)
			}
			export default Perfil
