import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid, Avatar, TextField, Box, Typography, Container, Modal, Stack, Button, Card, CardMedia, IconButton, InputAdornment  } from '@mui/material'
import CadastrarProduto from '../../componentes/produtos/cadastrarProduto/CadastrarProduto'
import DeletarProduto from '../../componentes/produtos/deletarProduto/DeletarProduto'
import CadastrarCategoria from '../../componentes/categorias/cadastrarCategoria/CadastrarCategoria'
import DeletarCategoria from '../../componentes/categorias/deletarCategoria/DeletarCategoria'

// icones
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { Usuario } from '../../model/Usuario';
import { buscaId, atualiza } from '../../services/Service';

import { toast } from 'react-toastify'
import './Perfil.css';

export default function Perfil() {
	  useEffect(() => {
    document.title = 'PeriFeira - Perfil';
  }, []);

  const categoriasRenderizadas = [];
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
  const [modalDeletarProdutoOpen, setModalDeletarProdutoOpen] = useState(false);
  const [modalCadastrarCategoriaOpen, setModalCadastrarCategoriaOpen] = useState(false);
  const [modalDeletarCategoriaOpen, setModalDeletarCategoriaOpen] = useState(false);
const [idCategoria, setIdCategoria] = useState(0);
const [idProduto, setIdProduto] = useState(0);

  const handleModalClose = () => {
    setModalCadastrarProdutoOpen(false);
    setModalCadastrarCategoriaOpen(false);
		setModalDeletarProdutoOpen(false);
setModalDeletarCategoriaOpen(false);
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

const [confirmarSenha, setConfirmarSenha] = useState<string>('');
const [showPassword, setShowPassword] = useState(false);
const handleClickShowPassword = () => setShowPassword(!showPassword);

function confirmSenha(event: ChangeEvent<HTMLInputElement>) {
	setConfirmarSenha(event.target.value);
	setUsuario({
	...usuario,
	produtos: null
	})
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
        toast.success('Usuário atualizado com sucesso');
        setUsuario({ ...usuario, senha: '' });
        setConfirmarSenha('');
      } catch (error) {
        toast.error('Falha ao atualizar o usuário, verifique os campos');
				console.log(error)
      }
    } else {
      toast.error('Os campos de Senha e Confirmar Senha estão diferentes');
      setUsuario({ ...usuario, senha: '' });
      setConfirmarSenha('');
    }
  }

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
required
		value={usuario.nome}
		onChange={(event: ChangeEvent<HTMLInputElement>) =>
			updateModel(event)
		}
/>
<TextField
name="usuario"
label="E-mail"
type="email"
required
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
required
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
required
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
		<Stack justifyContent="left"
		flexWrap="wrap"  gap="5px" direction={{ xs: 'column', sm: 'row' }}>
{usuario?.produtos?.map((produto) => {
if (!categoriasRenderizadas.includes(produto.categorias?.id)) {
          categoriasRenderizadas.push(produto.categorias?.id);
					return (
							<Typography className="usuarioCategoriaNome">
							{produto.categorias?.descricao}
							<Box className="usuarioCategoriaAcoes" alignItems="center">
							<Button className="usuarioCategoriaEditar" onClick={() => {
							setModalCadastrarCategoriaOpen(true);
							setIdCategoria(produto.categorias?.id)
							}}>
							<EditIcon/>
							</Button>
							<Button className="usuarioCategoriaDeletar" onClick={() => {
							setModalDeletarCategoriaOpen(true);
							setIdCategoria(produto.categorias?.id)
							}}>
							<DeleteIcon/>
							</Button>
							</Box>
							</Typography>
							)
					}
return null
																		 })}
</Stack>
<Modal open={modalCadastrarCategoriaOpen} onClose={handleModalClose}>
<div><CadastrarCategoria
id = {idCategoria} /></div>
</Modal>
<Modal open={modalDeletarCategoriaOpen} onClose={handleModalClose}>
<div><DeletarCategoria
id = {idCategoria} /></div>
</Modal>
</Grid>
</Grid>
<Grid container alignItems='center' justifyContent='center'>
<Grid xs={9} className="usuarioSecaoProduto">
<Typography className="titulo" variant="h4" marginBottom="58px">Meus produtos</Typography>
<Stack justifyContent="center"
flexWrap="wrap"  gap="21px" direction={{ xs: 'column', sm: 'row' }}>
{usuario.produtos?.map((produto) => (
			<>
			<Card	className="usuarioProduto">
			<CardMedia
			className="filtroProdutoImagem"
			component="img"
			image={produto.foto}
			alt="Foto do produto"
			/>
			<Box className="filtroProdutoPropriedade">
			<Typography className="filtroProdutoCategoria">
			{produto.categorias?.descricao}
			</Typography>
			<Typography className="filtroProdutoNome">
			{produto.nome}
			</Typography>
			<Grid container className="usuarioProdutoSecao" alignItems="center">
			<Grid item xs={4} textAlign="left">
			<Typography className="usuarioProdutoPreco">
			R$ {produto.preco}
			</Typography>
				</Grid>
				<Grid item xs={8} textAlign="right" justifyContent="center" alignItems="center">
				<Button className="usuarioProdutoEditar" onClick={() => {
							setIdProduto(produto.id)
					setModalCadastrarProdutoOpen(true);
				}}>
			<EditIcon className="usuarioProdutoAcoes"/>
				</Button>
				<Button className="usuaoProdutoExcluir" onClick={() => {
							setIdProduto(produto.id)
					setModalDeletarProdutoOpen(true);
				}}>
				<DeleteIcon className="usuarioProdutoAcoes"/>
				</Button>
				</Grid>
				</Grid>
				</Box>
				</Card>
				</>
				))}
				</Stack>
				<Modal open={modalCadastrarProdutoOpen} onClose={handleModalClose}>
				<div>
				<CadastrarProduto
				id={idProduto}
			/>
				</div>
				</Modal>
				<Modal open={modalDeletarProdutoOpen} onClose={handleModalClose}>
				<div>
				<DeletarProduto
				id={idProduto}
			/>
				</div>
				</Modal>
				</Grid>
				</Grid>
				</>
				);
				}
