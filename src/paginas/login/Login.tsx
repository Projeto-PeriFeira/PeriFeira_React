import React, { ChangeEvent, useEffect, useState } from 'react';
import './Login.css';
import { Grid, Box, Typography, TextField, Button } from '@mui/material';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { UsuarioLogin } from '../../model/UsuarioLogin';
import { login } from '../../services/Service';
import { useDispatch } from 'react-redux';
import { addId, addToken } from '../../store/tokens/actions';

  import 'react-toastify/dist/ReactToastify.css';
	import CheckIcon from '@mui/icons-material/Check';

function Login() {
	// cria a variavel para navegação interna pela rota
	const navigate = useNavigate();
	const dispatch = useDispatch()

		// cria um estado para armazenamento no localStorage do navegador
		const [token, setToken] = useState('');
	const [carregando, setCarregando] = useState(false)

		// cria um estado de controle para o usuário preencher os dados de login
		const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({
id: 0,
nome: '',
usuarios: '',
senha: '',
foto: '',
token: '',
});
const [respUsuarioLogin, setRespUsuarioLogin] = useState<UsuarioLogin>({
id: 0,
nome: '',
usuarios: '',
senha: '',
foto: '',
token: '',
});

// atualiza os dados do estado acima, e ajuda a formar o JSON para a requisição
function updateModel(event: ChangeEvent<HTMLInputElement>) {
	setUsuarioLogin({
			...usuarioLogin,
			[event.target.name]: event.target.value,
			});
}

// função que envia o formulário para o backend
async function enviar(event: ChangeEvent<HTMLFormElement>) {
	event.preventDefault();
	setCarregando(true)
	const toastId = toast.loading('Verificando dados...')
		try {
			await login('/usuarios/logar', usuarioLogin, setRespUsuarioLogin);
			toast.dismiss(toastId)
			toast.success("Bem vinde!");
setCarregando(false)
		} catch (error) {
			toast.dismiss(toastId)
			toast.error("Dados incorretos");
setCarregando(false)
	}
}

useEffect(() => {
		if(respUsuarioLogin.token !== ''){
		dispatch(addToken(respUsuarioLogin.token))
		navigate('/home');
		dispatch(addId(respUsuarioLogin.id.toString()))
		}
		}, [respUsuarioLogin.token])

return (
		<>
		<Grid container alignItems={'center'}>
		<Grid item xs={6}>
		<Box display={'flex'} justifyContent={'center'}>
		<Grid item xs={6} gap={2} display={'flex'} flexDirection={'column'}>
		<form onSubmit={enviar}>
		<Box display={'flex'} flexDirection={'column'} gap={2}>
		<Typography align="center" variant="h3">
		Login
		</Typography>

		<TextField
		name="usuario"
		label="E-mail"
		value={usuarioLogin.usuario}
		onChange={(event: ChangeEvent<HTMLInputElement>) =>
		updateModel(event)
		}
		/>

<TextField
name="senha"
label="Senha"
type="password"
value={usuarioLogin.senha}
onChange={(event: ChangeEvent<HTMLInputElement>) =>
	updateModel(event)
}
/>
<Button fullWidth variant="contained" type="submit" disabled={carregando}>
Logar
</Button>
</Box>
</form>
<hr />
<Typography variant="body1" align="center">
Ainda não tem uma conta? <Link to="/cadastro" style={{textDecoration: 'underline'}}>Cadastre-se</Link>
</Typography>
</Grid>
</Box>
</Grid>
<Grid item xs={6} className="imagemLogin"></Grid>
</Grid>
</>
);
}

export default Login;
