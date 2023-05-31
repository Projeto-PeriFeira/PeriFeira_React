import React, { useEffect, useState } from 'react'
import { Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import './DeletarCategoria.css';
import { useNavigate, useParams } from 'react-router-dom';
import { buscaId, deleta } from '../../../services/Service';
import { Categoria } from '../../../model/Categoria';
import { useSelector } from 'react-redux';
import {Box} from '@mui/material';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify'

function DeletarCategoria() {
    let navigate = useNavigate();
    const { id } = useParams<{id: string}>();
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

        function sim() {
          navigate('/loja')
            deleta(`/categorias/${id}`, {
              headers: {
                'Authorization': token
              }
            });
            toast.success('Categoria deletada com sucesso');
          }
        
          function nao() {
            navigate('/loja')
          }
          
  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Categoria:
              </Typography>
              <Typography color="textSecondary">
                {categoria?.descricao}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button  onClick={nao} variant="contained" size='large' color="secondary">
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarCategoria;
