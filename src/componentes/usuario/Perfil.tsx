import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { useNavigate } from 'react-router';
import { Usuario } from '../../model/Usuario';
import { buscaId, atualiza } from '../../services/Service';
import { Box, Typography, Container, Modal, Stack, Button, Card, CardMedia, IconButton, InputAdornment  } from '@mui/material'
import { toast } from 'react-toastify'
import CadastrarProduto from '../../componentes/produtos/cadastrarProduto/CadastrarProduto'
// import ModalCadastrarCategoria from '../../componentes/categorias/modalCadastrarCategoria/ModalCadastrarCategoria'
import DeletarProduto from '../../componentes/produtos/deletarProduto/DeletarProduto'
import './Perfil.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import {
	Grid,
		Avatar,
		TextField,
} from '@mui/material';
import { Link } from 'react-router-dom';

function Perfil() {
	let navigate = useNavigate();
	const token = useSelector<TokenState, TokenState["tokens"]>(
			(state) => state.tokens
			);

	useEffect(() => {
			if (token == "") {
			toast.error("Você precisa estar logado")
			navigate("/login")

			}
			}, [token])

	const userId = useSelector<TokenState, TokenState['id']>((state) => state.id);
  const [modalCadastrarProdutoOpen, setModalCadastrarProdutoOpen] = useState(false);
  const [modalCadastroCategoriaOpen, setModalCadastroCategoriaOpen] = useState(false);

  const handleModalClose = () => {
    setModalCadastrarProdutoOpen(false);
    setModalCadastroCategoriaOpen(false);
  };

	const [usuario, setUsuario] = useState<Usuario>({
id: +userId,
foto: '',
nome: '',
usuario: '',
senha: '',
produtos: null,
});

async function getUsuario() {
	try {
		await buscaId(`/usuarios/${usuario.id}`, setUsuario, {
headers: {
Authorization: token,
},
});
} catch (error) {
	console.log(error);
}
}

useEffect(() => {
		getUsuario();
		// setVerificar(false)
		}, []);

useEffect(() => {
		setUsuario({
				...usuario,
				senha: ''
				})
		}, [usuario.usuario])

const [pegarId, setPegarId] = useState<string>('');
const [confirmarSenha, setConfirmarSenha] = useState<string>('');
// const [nomeError, setNomeError] = useState<boolean>(false);
// const [emailError, setEmailError] = useState<boolean>(false);
// const [senhaError, setSenhaError] = useState<boolean>(false);
const [showPassword, setShowPassword] = useState(false);
const handleClickShowPassword = () => setShowPassword(!showPassword);

// async	function validateNome(event: ChangeEvent<HTMLInputElement>) {
// 	setNomeError(usuario.nome.length < 1);
// }
//
// async	function validateEmail(event: ChangeEvent<HTMLInputElement>) {
// 	setEmailError(usuario.usuario.includes('@'));
// }
//
// async function validateSenha(event: ChangeEvent<HTMLInputElement>) {
// 	setSenhaError(usuario.senha.length < 7 )
// }
//
function confirmSenha(event: ChangeEvent<HTMLInputElement>) {
	setConfirmarSenha(event.target.value);
}

// async function confirm(event: ChangeEvent<HTMLInputElement>) {
// 	setVerificar(usuario.nome !== '' && usuario.foto !== '' && senhaError && emailError && usuario.senha == confirmarSenha)
// }
//
function updateModel(event: ChangeEvent<HTMLInputElement>) {
	setUsuario({
			...usuario,
			[event.target.name]: event.target.value,
			})}
							{showPassword ? <VisibilityIcon className="visibilidadeSenha"/> : <VisibilityOff className="visibilidadeSenha"/>}

async function atualizar(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    if (usuario.senha === confirmarSenha && usuario.senha.length >= 8) {
      try {
        await atualiza('/usuarios/atualizar', usuario, setUsuario, {
          headers: {
            Authorization: token,
          },
        });
        alert('Usuário cadastrado com sucesso');
        setUsuario({ ...usuario, senha: '' });
        setConfirmarSenha('');
      } catch (error) {
        alert('Falha ao cadastrar o usuário, verifique os campos');
				console.log(error)
      }
    } else {
      alert('Os campos de Senha e Confirmar Senha estão diferentes');
      setUsuario({ ...usuario, senha: '' });
      setConfirmarSenha('');
    }
  }

console.log(usuario);

return (
		<>
		<Box marginBottom="169px"/>
		<Grid container alignItems='center' justifyContent='center'>
		<Grid item container xs={8} textAlign="center" alignItems='center' justifyContent='center'>
		<form onSubmit={atualizar} className="usuarioSecaoEditar secao1">
		<Box
		display={'flex'}
		width={'420px'}
		flexDirection={'column'}
		gap={2}
		>
		<Typography className="titulo" variant="h3" textAlign="left" marginBottom="58">Editar Perfil</Typography>
		<Avatar className="usuarioFoto" src={usuario.foto}/>
		<TextField
		name="nome"
		label="Nome"
		value={usuario.nome}
		onChange={(event: ChangeEvent<HTMLInputElement>) =>
			updateModel(event)
		}
/>
<TextField
name="usuario"
label="E-mail"
type="email"
value={usuario.usuario}
onChange={(event: ChangeEvent<HTMLInputElement>) => {
	updateModel(event)
}}
/>
<TextField
name="foto"
label="Foto"
value={usuario.foto}
onChange={(event: ChangeEvent<HTMLInputElement>) =>
	updateModel(event)
}
/>
<TextField
name="senha"
label="Senha"
type={showPassword ? "text" : "password"}
helperText="Digite a senha para confirmar as alterações"
onChange={(event: ChangeEvent<HTMLInputElement>) => {
	updateModel(event)
}}
sx={{
input: {
color: "var(--laranja)",
			}
}}
InputProps={{
endAdornment: (
							<InputAdornment position="end">
							<IconButton
							aria-label="toggle password visibility"
							onClick={handleClickShowPassword}
							>
							{showPassword ? <VisibilityIcon className="visibilidadeSenha"/> : <VisibilityOff className="visibilidadeSenha"/>}
							</IconButton>
							</InputAdornment>
							)
}}
/>
<TextField
name="confirmarSenha"
label="Confirmar senha"
value={confirmarSenha}
type={showPassword ? "text" : "password"}
onChange={(event: ChangeEvent<HTMLInputElement>) => {
	confirmSenha(event)
	}
}
sx={{
input: {
color: "var(--laranja)",
			}
}}
InputProps={{
endAdornment: (
							<InputAdornment position="end">
							<IconButton
							aria-label="toggle password visibility"
							onClick={handleClickShowPassword}
							>
							{showPassword ? <VisibilityIcon className="visibilidadeSenha"/> : <VisibilityOff className="visibilidadeSenha"/>}
							</IconButton>
							</InputAdornment>
							)
}}
/>
<Button variant={'contained'} className="btn" type='submit'>Atualizar</Button>
</Box>
</form>
</Grid>
</Grid>
<Grid container alignItems='center' justifyContent='center'>
<Grid xs={9} className="usuarioSecaoProduto">
<Typography className="titulo" variant="h4" marginBottom="58">Gerenciar categorias</Typography>
		<Stack marginTop="28px" spacing={3} direction={{ xs: 'column', sm: 'row' }}>
{usuario?.produtos?.map((produto) => (
			<Typography className="usuarioCategoriaNome">
			{produto.categorias?.descricao}
			<Button className="usuarioCategoriaEditar" onClick={() => {{setModalCadastrarProdutoOpen(true)}}}>
			<EditIcon/>
			</Button>
			<Button className="usuarioCategoriaExcluir" onClick={() => {
    setModalCadastroCategoriaOpen(true);
    {/*}setPegarId(produto.categorias?.id);*/}
}}>
			<DeleteIcon/>
			</Button>
			</Typography>
			))}
			</Stack>
      <Modal open={modalCadastrarProdutoOpen} onClose={handleModalClose}>
        <div>
				{/*<ModalCadastrarCategoria/>*/}
        </div>
      </Modal>
      <Modal open={modalCadastroCategoriaOpen} onClose={handleModalClose}>
        <div>
			<Box marginBottom="30vh"/>
			<Container maxWidth="sm" className="background-form">
			<Typography className="titulo" variant="h4" textAlign="center">Voce deseja realmente excluir a categoria?</Typography>
			<Link to={`/deletarCategoria/${pegarId}`}>
			<Button fullWidth className='btn mg-top' variant="contained" color="primary">Deletar</Button>
			</Link>
			</Container>
        </div>
      </Modal>
</Grid>
</Grid>
<Grid container alignItems='center' justifyContent='center'>
<Grid xs={9} className="usuarioSecaoProduto">
<Typography className="titulo" variant="h4" marginBottom="58px">Meus produtos</Typography>
			<Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
{usuario.produtos?.map((produto) => (
			<>
			<Box marginBottom="106px"/>
			<Card	className="usuarioProduto">
			<CardMedia
			className="filtroProdutoImagem"
			component="img"
			image="https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
			/>
			<Box className="filtroProdutoPropriedade">
			<Typography className="filtroProdutoCategoria">
			{produto.categorias?.descricao}
			</Typography>
			<Typography className="filtroProdutoNome">
			{produto.nome} unid.
			</Typography>
			<Grid container className="usuarioProdutoSecao">
			<Grid item xs={6} textAlign="left">
			<Typography className="usuarioProdutoPreco">
			R$ {produto.preco}
			</Typography>
				</Grid>
				<Grid item xs={6} textAlign="right">
				<Link to={`/cadastrarProdutos/${produto.id}`} className="text-decorator-none" >
				<EditIcon className="usuarioCategoriaEditar"/>
				</Link>
				<Link to={`/deletarProduto/${produto.id}`} className="text-decorator-none" >
				<DeleteIcon className="usuarioCategoriaExcluir"/>
				</Link>
				</Grid>
				</Grid>
				</Box>
				</Card>
				</>
				))}
				</Stack>
				</Grid>
				</Grid>
				</>
				);
				}

export default Perfil;
