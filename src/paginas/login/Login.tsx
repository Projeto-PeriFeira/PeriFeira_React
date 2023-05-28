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
		<Grid className="background"  container direction='row' justifyContent="center" alignItems="center">
            <Grid xs={6} >
                    <Box className="imagem"></Box>
                </Grid>
            <Grid alignItems="center" xs={4} >
                <Box paddingX={8}>
                    <Typography className='text' variant="h4" gutterBottom color="textPrimary" component='h4' align="center">Entrar</Typography>
                    <Box paddingX={10} paddingY={6} className="form">
                        <form onSubmit={enviar}>
                            <TextField id='usuario' label='usuário' variant="outlined" name="usuario" margin="normal" fullWidth value ={usuarioLogin.usuario} onChange={(event:ChangeEvent<HTMLInputElement>) => updateModel(event)} />
                            <TextField id='senha' label='senha' variant="outlined" name="senha" margin="normal" type="password" fullWidth value ={usuarioLogin.senha} onChange={(event:ChangeEvent<HTMLInputElement>) => updateModel(event)} />
                            <Box display="flex" justifyContent="center" marginTop={2}>
                                <Box marginRight={1}>
                                    <Typography className='text'variant="subtitle1" gutterBottom align="center">Não tem uma conta ?</Typography>
                                </Box>
                                <Link className="reset-link" to = '/cadastro' >
                                    <Typography className='text bold' variant="subtitle1" gutterBottom align="center" >Cadastre-se</Typography>
                                </Link>
                            </Box>
                            <Box marginTop={2} textAlign="center">
                                    <Button className='btn' type='submit' variant='contained' color='primary'>
                                    Logar
                                    </Button>
                            </Box>
                        </form>
                    </Box>
                </Box>
            </Grid>
        </Grid>
);
}

export default Login;
