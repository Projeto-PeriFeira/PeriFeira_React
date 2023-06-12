import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button, Box } from "@material-ui/core"
import {useNavigate, useParams } from 'react-router-dom'
import './CadastrarCategoria.css';
import { Categoria } from '../../../model/Categoria';
import { buscaId, posta, atualiza } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify'


export default function CadastrarCategoria(props) {
    let navigate = useNavigate();
    let { id } = useParams<{id: string}>();
		id = props.id
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        descricao: '',
				produtos: null
    })

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

        function updatedCategoria(e: ChangeEvent<HTMLInputElement>) {

            setCategoria({
                ...categoria,
								produtos: null,
                [e.target.name]: e.target.value,
            })
    
        }
        
        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()
            console.log("categorias " + JSON.stringify(categoria))
            if (id !== undefined) {
                atualiza(`/categorias`, categoria, setCategoria, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('Categoria atualizado com sucesso');
            } else {
                posta(`/categorias`, categoria, setCategoria, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('Categoria cadastrada com sucesso');
            }
            navigate('/loja')
        }
    
    return (
	<>
	<Box marginBottom="30vh"/>
        <Container maxWidth="sm" className="background-form">
            <form onSubmit={onSubmit}>
                <Typography className='text bold' variant="h5" color="textSecondary" component="h5" align="left" >{id !== undefined ? 'Atualizar categoria:' : 'Cadastrar nova categoria:'}</Typography>
                <TextField value={categoria.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="descricao" label="Descrição" variant="outlined" name="descricao" margin="normal" fullWidth />
                <Button className='btn mg-top' type="submit" variant="contained" color="primary" disabled={categoria.descricao.length < 4}>
                cadastrar
                </Button>
            </form>
        </Container>
				</>
    )
}
