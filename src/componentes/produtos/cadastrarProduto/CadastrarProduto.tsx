import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastrarProduto.css';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../model/Categoria';
import Produto from '../../../model/Produto';
import { busca, buscaId, posta, atualiza } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';


function CadastrarProduto() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [categoria, setCategoria] = useState<Categoria[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])

    const [categorias, setCategorias] = useState<Categoria>(
        {
            id: 0,
            descricao: ''
        })
    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome: '',
        descricao: '',
				quantidade: 0,
				preco: 0,
				foto: '',
        categorias: null,
				usuario: null,
    })

    useEffect(() => { 
        setProduto({
            ...produto,
            categorias: categorias
        })
    }, [categorias])

    useEffect(() => {
        getCategoria()
        if (id !== undefined) {
            findByIdProduto(id)
        }
    }, [id])

    async function getCategoria() {
        await busca("/categorias", setCategoria, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdProduto(id: string) {
        await buscaId(`produtos/${id}`, setProduto, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {

        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categorias: categorias
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            atualiza(`/produtos`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Produto atualizada com sucesso');
        } else {
            posta(`/produtos`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Produto cadastrada com sucesso');
        }
        back()

    }

    function back() {
        navigate('/loja')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro produto</Typography>
                <TextField value={produto.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="nome" label="nome" variant="outlined" name="nome" margin="normal" fullWidth />
                <TextField value={produto.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="descricao" label="descricao" name="descricao" variant="outlined" margin="normal" fullWidth />
                <TextField value={produto.quantidade} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="quantidade" label="quantidade" name="quantidade" variant="outlined" margin="normal" fullWidth />
                <TextField value={produto.preco} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="preco" label="preco" name="preco" variant="outlined" margin="normal" fullWidth />
                <TextField value={produto.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="foto" label="foto" name="foto" variant="outlined" margin="normal" fullWidth />
                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Categoria </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/categorias/${e.target.value}`, setCategorias, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            categoria.map(categorias => (
                                <MenuItem value={categorias.id}>{categorias.descricao}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha um categoria para a produto</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastrarProduto;
