import React, { ChangeEvent, useEffect, useState } from 'react'
import './Perfil.css'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { TokenState } from '../../store/tokens/tokensReducer'
import { toast } from 'react-toastify'
import { buscaId, atualiza } from '../../services/Service'
import { Usuario } from '../../model/Usuario'

function Perfil() {

	const token = useSelector<TokenState, TokenState["tokens"]>(
			(state) => state.tokens
			);

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

    function updatedUsuario(e: ChangeEvent<HTMLInputElement>) {

        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
            // categorias: categorias
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
            atualiza(`/usuarios/atualizar`, usuario, setUsuario, {
                headers: {
                    'Authorization': token
                }
            })
				}

return (
		<>
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro usuario</Typography>
                <TextField value={usuario.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedUsuario(e)} id="nome" label="nome" variant="outlined" name="nome" margin="normal" fullWidth />
                <TextField value={usuario.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedUsuario(e)} id="usuario" label="E-mail" name="usuario" variant="outlined" margin="normal" fullWidth />
                <TextField value={usuario.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedUsuario(e)} id="foto" label="foto" name="foto" variant="outlined" margin="normal" fullWidth />
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
            </form>
        </Container>
		</>
		)
}
export default Perfil
