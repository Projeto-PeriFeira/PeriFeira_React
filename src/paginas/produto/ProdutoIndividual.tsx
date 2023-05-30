import React, { useState, useEffect } from 'react'
import './ProdutoIndividual.css'
import FiltrarProduto from '../../componentes/produtos/filtrarProduto/FiltrarProduto'
import { Grid, Box, Typography } from '@mui/material'
import { busca } from '../../services/Service'
import { Produto } from '../../model/Produto'
function ProdutoIndividual() {
	
  const [produto, setProduto] = useState<Produto[]>([]);
  

  function getProdutos() {
    busca('/produtos', setProduto, {
      headers: {
      }
    })
  }

  useEffect(() => {
    getProdutos()
  }, [])


  return (

    <Box>
      <Box className="secao1" height="400px" textAlign="center"   >
        <Grid container display={'flex'} alignItems={'center'} >
        {produto.map((produto) => (
          <><Grid xs={4}>
            <img src={produto.foto} alt="foto do produto" />
          </Grid><Grid xs={6}>
              <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
                <Typography padding={'4vh'} variant='h4'>{produto.nome}</Typography>
                <Typography variant="body1">{produto.descricao}</Typography>
                <Typography variant="h6">R$preco</Typography>

              </Box>
            </Grid></>
            ))}
          </Grid>
      </Box>
      <Box className="secao2" paddingBottom="50px" />
      <Typography className="titulo secao2" variant="h3" textAlign="center">Outros produtos</Typography>
      <Grid container className="secao1" alignItems='center' justifyContent='center'>
        <FiltrarProduto />
      </Grid>
    </Box>
  )
}

export default ProdutoIndividual
