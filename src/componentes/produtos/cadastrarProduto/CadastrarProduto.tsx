import {
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Produto } from '../../../model/Produto';
import { useNavigate, useParams } from 'react-router-dom';
import { Categoria } from '../../../model/Categoria';
import { busca, buscaId, posta, atualiza } from '../../../services/Service.ts';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import { Usuario } from '../../../model/Usuario';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import './CadastrarProduto.css'
import { toast } from 'react-toastify';

function FormularioProduto() {
  const navigate = useNavigate();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const userId = useSelector<TokenState, TokenState["id"]>(
    (state) => state.id
  );

  const dispatch = useDispatch()

  const { id } = useParams<{ id: string }>();

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    descricao: '',
    produtos: null
  });

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: '',
    descricao: '',
		foto: '',
		quantidade: 0,
		preco: 0,
    categorias: null,
    usuario: null
  });

  const [usuario, setUsuario] = useState<Usuario>({
    id: +userId,
    foto: '',
    nome: '',
    usuario: '',
    senha: '',
    produtos: null
  })

  useEffect(() => {
    if(token === ''){ 
      alert('Ta tirando né??? sem token não rola')
      navigate('/login')
    }
  }, [])

  async function getCategorias() {
    try {
      await busca('/categorias', setCategorias, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().contains('403')) {
        alert('Token expirado, logue novamente');
        dispatch(addToken(''))
        navigate('/login');
      }
    }
  }

  async function getPostById(id: string) {
    await busca(`/produtos/${id}`, setProduto, {
      headers: {
        Authorization: token
      }
    })
  }

  useEffect(() => {
    getCategorias();
    if(id !== undefined) {
      getPostById(id)
    }
  }, []);

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [event.target.name]: event.target.value,
      categorias: categoria,
    });
  }

  useEffect(() => {
    setProduto({
      ...produto,
      categorias: categoria,
      usuario: usuario
    });
  }, [categoria]);

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    if (id !== undefined) {
      try {
        await atualiza('/produtos', produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });
        toast.success("Produto atualizado com sucesso");
        navigate('/perfil')
      } catch (error) {
        alert('Falha ao atualizar produto - verifique os campos preenchidos');
      }
    } else {
      try {
        await posta('/produtos', produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });
        toast.success("Produto cadastrado com sucesso");
        navigate('/loja')
      } catch (error) {
        alert('Falha ao cadastrar produto - verifique os campos preenchidos');
      }
    }
  }

  return (
    <>
    <Grid container className='marginX-60'  justifyContent='center'>
    <Grid  className='background-form' container xs={8} justifyContent='space-around' alignItems='flex-start'>
      <Grid className='container' item xs={4}>
        {produto.foto == '' &&         
        <Box className='bg'>
          <span className='placeholder'>{produto.foto == "" && 'Foto do produto'}</span>
        </Box>}
        <Box>
          <img className='foto-prod' src={produto.foto} alt='' />
          </Box>
      </Grid>
    <Grid item xs={6} >
    {/* <Container xs={4} className='background-form'maxWidth="sm"> */}
      <Box my={2}>
        <form onSubmit={onSubmit}>
        
          <Typography className='text bold' variant="h5" align="left">
            {id !== undefined ? ' Atualizar' : ' Cadastrar '} produto:
          </Typography>
          <TextField
            name="nome"
            fullWidth
            margin="normal"
            label="Nome do produto"
            error={produto.nome.length < 5 && produto.nome.length > 0}
            helperText='Pelo menos 5 caracteres'
            value={produto.nome}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              updateModel(event)
            }
          />
          <TextField
            name="descricao"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            label="Descrição do produto"
            value={produto.descricao}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              updateModel(event)
            }
          />
          <TextField
            name="foto"
            fullWidth
            margin="normal"
            multiline
            label="Link da Foto do produto"
            value={produto.foto}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              updateModel(event)
            }
          />
          <TextField
            name="preco"
            fullWidth
            margin="normal"
            multiline
            label="Preço"
            value={produto.preco}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              updateModel(event)
            }
          />
          <TextField
            name="quantidade"
            fullWidth
            margin="normal"
            multiline
            label="Quantidade"
            value={produto.quantidade}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              updateModel(event)
            }
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="selectCategoria">Categoria</InputLabel>
            <Select
              labelId="selectCategoria"
              onChange={(event) =>
                buscaId(`/categorias/${event.target.value}`, setCategoria, {
                  headers: {
                    Authorization: token,
                  },
                })
              }
            >
              {categorias.map((categoria) => (
                <MenuItem key={categoria.id} value={categoria.id}>
                  {categoria.descricao}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Escolha um categoria para a sua produto</FormHelperText>
          </FormControl>
          <Box>
          <Button className='btn mg-top' type="submit" variant="contained" color="primary" disabled={categoria.id === 0}>
            {id !== undefined ? 'Atualizar Produto' : 'Cadastrar Produto'}
          </Button>
          </Box>
        </form>
      </Box>
    </Grid>
    </Grid>
    </Grid>
    </>
  );
}

export default FormularioProduto;
