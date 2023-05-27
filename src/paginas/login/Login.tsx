import React, {ChangeEvent, useEffect, useState} from "react";
import { Grid, Box, Typography, TextField} from '@material-ui/core';
import './Login.css'
import { Button } from "@mui/material";
import {Link, useNavigate } from "react-router-dom";
import UsuarioLogin from "../../model/UsuarioLogin";
import { login } from "../../services/Service";
import { useDispatch } from 'react-redux'
import { addToken } from "../../store/tokens/actions"


function Login() {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            foto: '',
            token: ''
        }
        )

        function updateModel(e: ChangeEvent<HTMLInputElement>) {

            setUsuarioLogin({
                ...usuarioLogin,
                [e.target.name]: e.target.value
            })
        }

            useEffect(()=>{
                if(token != ''){
                    dispatch(addToken(token));
                    navigate('/home')
                }
            }, [token])

        async function enviar(e: ChangeEvent<HTMLFormElement>){
            e.preventDefault();
            try{
                await login(`/usuarios/logar`, usuarioLogin, setToken)

                alert('Usuário logado com sucesso!');
            }catch(error){
                alert('Dados do usuário inconsistentes. Erro ao logar!');
            }
        }


return (
		<Grid className="background" container direction='row' justifyContent="center" alignItems="center">
            <Grid alignItems="center" xs={6} >
                <Box paddingX={26}>
                    <Box paddingX={10} paddingY={6} className="form">
                    <form onSubmit={enviar}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component='h3' align="center">Entrar</Typography>
                        <TextField className="input" id='usuario' label='usuário' variant="outlined" name="usuario" margin="normal" fullWidth value ={usuarioLogin.usuario} onChange={(event:ChangeEvent<HTMLInputElement>) => updateModel(event)} />
                        <TextField className="input" id='senha' label='senha' variant="outlined" name="senha" margin="normal" type="password" fullWidth value ={usuarioLogin.senha} onChange={(event:ChangeEvent<HTMLInputElement>) => updateModel(event)} />
                        <Box marginTop={2} textAlign="center">
                            <Button type='submit' variant='contained' color='primary'>
                            Logar
                            </Button>
                        </Box>
                    </form>
                    
                    <Box display="flex" justifyContent="center" marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant="subtitle1" gutterBottom align="center">Não tem uma conta ?</Typography>
                        </Box>
                        <Link to = '/cadastro' >
                            <Typography variant="subtitle1" gutterBottom align="center" >Cadastre-se</Typography>
                        </Link>
                        </Box>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className="imagem">

            </Grid>
        </Grid>
);
}

export default Login;
