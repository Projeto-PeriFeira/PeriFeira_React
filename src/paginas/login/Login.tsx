import React, {ChangeEvent, useEffect, useState} from "react";
import { Grid, Box, Typography, TextField} from '@material-ui/core';
import './Login.css'
import { Button } from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import UsuarioLogin from "../../model/UsuarioLogin";
import { login } from "../../services/Service";
import useLocalStorage from "react-use-localstorage";


function Login() {

	{{/*let history = useHistory();*/}}

    const navigate = useNavigate();

    const [token, setToken] = useLocalStorage('token');

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {
        id: 0,
        usuario: '',
        foto: '',
        senha: '',
        token: ''
    }
    )

    function updateModel(event: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
        ...usuarioLogin,
        [event.target.name]: event.target.value,
        });
    }

    async function enviar(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
    try {
        await login('/usuarios/logar', usuarioLogin, setToken);
    alert('Usuario logado com sucesso');
    } catch (error) {
    alert('Usuário e/ou senha inválidos');
    }
}
    useEffect(() => {
        if (token !== '') {
        navigate('/login');
        }
    }, [token]);


    
    return (
        <Grid container direction='row' justifyContent="center" alignItems="center">
            <Grid alignItems="center" xs={6} >
                <Box paddingX={20}>
                    <form onSubmit={enviar}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component='h3' align="center">Entrar</Typography>

                        <TextField id='usuario' label='usuário' variant="outlined" name="usuario" margin="normal" fullWidth value ={usuarioLogin.usuario} onChange={(event:ChangeEvent<HTMLInputElement>) => updateModel(event)} />
                        <TextField id='senha' label='senha' variant="outlined" name="senha" margin="normal" type="password" fullWidth value ={usuarioLogin.senha} onChange={(event:ChangeEvent<HTMLInputElement>) => updateModel(event)} />
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
            </Grid>
            <Grid xs={6} className="imagem">

            </Grid>
        </Grid>
    );
}

export default Login;
