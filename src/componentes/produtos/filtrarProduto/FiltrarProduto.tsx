import React, {useState, useEffect} from 'react'
import { AppBar, Tab, Tabs, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaProduto from '../listarProduto/ListarProduto';
import './FiltrarProduto.css';

import Categoria from '../../../model/Produto';
import Produto from '../../../model/Produto';

import {useNavigate} from 'react-router-dom';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';


function FiltrarProduto() {
  const [produtos, setProdutos] = useState<Produto[]>([])
	const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }

  const [categorias, setCategorias] = useState<Categoria[]>([])
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(()=>{
    if(token == ''){
      alert("Você precisa estar logado")
      navigate("/login")
    }
  }, [token])


  async function getCategoria(){
    await busca("/categorias", setCategorias, {
      headers: {
        'Authorization': token
      }
    })
  }

  async function getProduto() {
    await busca("/produtos", setProdutos, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(()=>{
    getCategoria()
  }, [categorias.length])

  useEffect(() => {
    getProduto()
  }, [produtos.length])

  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
					{
      categorias.map(categoria =>(
            <Tab label={categoria.descricao} value={categoria.id}/>
						))}
          </Tabs>
        </AppBar>
			{
      produtos.map(produto =>(
        <TabPanel value={produto.categorias?.id} >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
					{produto.descricao}
          </Box>
        </TabPanel>
						))}
      </TabContext>
    </>
  );
}
export default FiltrarProduto;
