import React, { useEffect, useState } from 'react'
import {Typography, Container, Button, Card, CardActions, CardContent } from "@material-ui/core"
import './DeletarProduto.css';
import { useNavigate, useParams } from 'react-router-dom';
import { Produto } from '../../../model/Produto';
import { buscaId, deleta } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import {Box} from '@mui/material';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'

export default function DeletarProduto(props) {
    let navigate = useNavigate();
    let { id } = useParams<{id: string}>();
		id = props.id
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );
    const [post, setPosts] = useState<Produto>()

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
        buscaId(`/produtos/${id}`, setPosts, {
            headers: {
              'Authorization': token
            }
          })
        }
        
  return (
    <>
			<Box marginBottom="30vh"/>
			<Container maxWidth="sm" className="background-form">
			<Typography 			className="titulo center" variant="h4">Você deseja realmente excluir o produto:<br/>{post?.nome}?</Typography>
			<Link to={`/deletarCategoria/`}>
			<Button
			fullWidth
			component={Link}
			to={'/loja'}
			onClick={() => {
            deleta(`/produtos/${id}`, {
              headers: {
                'Authorization': token
              }
            });
            toast.success('Produto deletado com sucesso');
			}}
 className='btn mg-top' variant="contained" color="primary">Deletar</Button>
			</Link>
			</Container>
    </>
  );
}
