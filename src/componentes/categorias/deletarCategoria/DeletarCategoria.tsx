import React, { useEffect, useState } from 'react'
import { Container, Typography, Button} from '@material-ui/core';
import './DeletarCategoria.css';
import { useNavigate, useParams } from 'react-router-dom';
import { buscaId, deleta } from '../../../services/Service';
import { Categoria } from '../../../model/Categoria';
import { useSelector } from 'react-redux';
import {Box} from '@mui/material';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'

export default function DeletarCategoria(props) {
    let navigate = useNavigate();
    let { id } = useParams<{id: string}>();
		id = props.id
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );
    const [categoria, setCategoria] = useState<Categoria>()

    useEffect(() => {
        if (token == "") {
            toast.error("Você precisa estar logado")
            navigate("/login")
    
        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/categorias/${id}`, setCategoria, {
            headers: {
              'Authorization': token
            }
          })
        }

  return (
    <>
			<Box marginBottom="30vh"/>
			<Container maxWidth="sm" className="background-form">
			<Typography 			className="titulo center" variant="h4">Você deseja realmente excluir a categoria:<br/>{categoria?.descricao}?</Typography>
			<Link to={`/deletarCategoria/`}>
			<Button
			fullWidth
			component={Link}
			to={'/loja'}
			onClick={() => {
            deleta(`/categorias/${id}`, {
              headers: {
                'Authorization': token
              }
            });
            toast.success('Categoria deletada com sucesso');
			}}
 className='btn mg-top' variant="contained" color="primary">Deletar</Button>
			</Link>
			</Container>
    </>
  );
}
