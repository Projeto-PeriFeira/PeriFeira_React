import React, { useEffect, useState, ChangeEvent } from 'react';
import './CadastroUsuario.css'
import { Grid, Box, TextField, Typography, Button, IconButton, InputAdornment } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { cadastroUsuario } from '../../services/Service';
import { Usuario } from '../../model/Usuario';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import {toast} from 'react-toastify'

function cadastrarUsuario() {
	  useEffect(() => {
    document.title = 'PeriFeira - Cadastro';
  }, []);

	const navigate = useNavigate();

	const [usuario, setUsuario] = useState<Usuario>({
id: 0,
nome: '',
usuario: '',
foto: '',
senha: '',
});

const [usuarioResp, setUsuarioResp] = useState<Usuario>({
id: 0,
nome: '',
usuario: '',
foto: '',
senha: '',
});

const [confirmarSenha, setConfirmarSenha] = useState('');

const [showPassword, setShowPassword] = useState(false);
const [isTextFieldActive, setIsTextFieldActive] = useState(false);
const handleClickShowPassword = () => setShowPassword(!showPassword);

const [emailError, setEmailError] = useState<boolean>(false);
const [senhaError, setSenhaError] = useState<boolean>(false);
const [confirmar, setConfirmar] = useState<boolean>(false)

	function updateModel(event: ChangeEvent<HTMLInputElement>) {
		setUsuario({
				...usuario,
				[event.target.name]: event.target.value,
				});
	}

async function confirmSenha(event: ChangeEvent<HTMLInputElement>) {
	setConfirmarSenha(event.target.value);
}

async	function validateEmail(event: ChangeEvent<HTMLInputElement>) {
	setEmailError(usuario.usuario.includes('@'));
}

async function validateSenha(event: ChangeEvent<HTMLInputElement>) {
	setSenhaError(usuario.senha.length < 8 )
}

async function confirm(event: ChangeEvent<HTMLInputElement>) {
	setConfirmar(
			// usuario.nome !== '' 
			// usuario.foto !== ''
			// && senhaError 
			// && emailError
			usuario.senha
			=== confirmarSenha
			)
}

async function cadastrar(event: ChangeEvent<HTMLFormElement>) {
	event.preventDefault();
		const toastId = toast.loading('Verificando os dados...')
	if (
			usuario.senha === confirmarSenha
			// && emailError
			// && senhaError
		 ) {
			try {
				await cadastroUsuario('/usuarios/cadastrar', usuario, setUsuarioResp);
				toast.dismiss(toastId)
				toast.success('Cadastrado com sucesso')
			} catch (error) {
				toast.dismiss(toastId)
					toast.error('Falha ao cadastrar o usuário, verifique as informações dos campos');
			}
	} else {
		toast.dismiss(toastId)
			toast.error('Verifique se sua senha esta correta');
		setUsuario({ ...usuario, senha: '' });
		setConfirmarSenha('')
	}
}
useEffect(() => {
		if (usuarioResp.id !== 0) {
		navigate('/login');
		}
		}, [usuarioResp]);

function voltar(){
	navigate('/login')
}

return (
		<Grid className="background"  container direction='row' justifyContent='center' alignItems='center'>
		<Grid item xs = {4} alignItems='center' >
		<Box paddingX={8}>
		<Typography className='text' variant="h4" gutterBottom color = 'textPrimary' component='h4' align = 'center' >Criar conta</Typography>
		<Box paddingX={10} paddingY={6} className="form" >
		<form onSubmit={cadastrar}> 
		<TextField id="nome" label='Nome' variant="outlined" name="nome" margin="normal" fullWidth
		value={usuario.nome}
		onChange={(event: ChangeEvent<HTMLInputElement>) => {
		updateModel(event)
		confirm(event)
		}}
		/>
		<TextField id="usuario" label='E-mail' variant="outlined" name="usuario" margin="normal" fullWidth
		value={usuario.usuario}
		onChange={(event: ChangeEvent<HTMLInputElement>) => {
		updateModel(event);
		validateEmail(event);
		confirm(event)
		}}/>
<TextField id="senha" label='Senha' variant="outlined" name="senha" margin="normal"
helperText={isTextFieldActive ? "Mínimo de 8 caracteres" : ""}
type={showPassword ? "text" : "password"}
fullWidth
value={usuario.senha}
onChange={(event: ChangeEvent<HTMLInputElement>) => {
	updateModel(event);
	validateSenha(event);
	confirm(event)
}}
onFocus={() => setIsTextFieldActive(true)}
onBlur={() => setIsTextFieldActive(false)}
InputProps={{
endAdornment: (
							 <InputAdornment position="end">
							 <IconButton
							 aria-label="toggle password visibility"
							 onClick={handleClickShowPassword}
							 >
							 {showPassword ? <VisibilityIcon/> : <VisibilityOff/>}
							 </IconButton>
							 </InputAdornment>
							)
}}
/>
<TextField id="confirmarSenha" label='Confirmar senha' variant="outlined" name="confirmaSenha" margin="normal" fullWidth
type={showPassword ? "text" : "password"}
value={confirmarSenha}
onChange={(event: ChangeEvent<HTMLInputElement>) => {
	confirmSenha(event)
		confirm(event)
}}
InputProps={{
endAdornment: (
							 <InputAdornment position="end">
							 <IconButton
							 aria-label="toggle password visibility"
							 onClick={handleClickShowPassword}
							 >
							 {showPassword ? <VisibilityIcon/> : <VisibilityOff/>}
							 </IconButton>
							 </InputAdornment>
							)
}}/>
<TextField id="foto" label='URL da foto' variant="outlined" name="foto" margin="normal" fullWidth
value={usuario.foto}
onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} />
<Box display='flex' justifyContent='center' gap={4} textAlign='center' marginTop={2}>
<Button type="submit" variant="contained" className='btn'
disabled={false}
>
Cadastrar
</Button>
<Button type="submit" variant="contained" className='btn-cancelar' onClick={voltar}>
Cancelar
</Button>

</Box>
</form>
</Box>
</Box>
</Grid>
<Grid item xs = {6}  >
<Box className='imagem-cadastro'></Box>
</Grid>

</Grid>
)
}

export default cadastrarUsuario;
