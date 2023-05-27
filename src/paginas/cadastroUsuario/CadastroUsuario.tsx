import React, { useEffect, useState, ChangeEvent } from 'react';
import './CadastroUsuario.css'
import { Grid, Box, TextField, Typography, Button} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { cadastroUsuario } from '../../services/Service';
import Usuario from '../../model/Usuario';


function cadastrarUsuario() {

    const navigate = useNavigate();

    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        foto: '',
        senha: '',
    });

    const [usuarioResp, setUsuarioResp] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        foto: '',
        senha: '',
    });

    const [confirmarSenha, setConfirmarSenha] = useState('');

    function confirmSenha(event: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(event.target.value);
    }

    function updateModel(event: ChangeEvent<HTMLInputElement>) {
        setUsuario({
        ...usuario,
        [event.target.name]: event.target.value,
    });
    }

async function cadastrar(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    if (usuario.senha === confirmarSenha && usuario.senha.length >= 8) {
        try {
            await cadastroUsuario('/usuarios/cadastrar', usuario, setUsuarioResp);
            alert('Usuário cadastrado com sucesso')
        } catch (error) {
            alert('Falha ao cadastrar o usuário, verifique as informações dos campos');
        }
    } else {
        alert('Os campos de senha estão diferentes');
    setUsuario({ ...usuario, senha: '' });
    setConfirmarSenha('')
}
}
useEffect(() => {
    if (usuarioResp.id !== 0) {
    navigate('/login');
    }
    }, [usuarioResp]);

    function voltar(){
        navigate('/login')
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs = {6} className='imagem-cadastro' >
            </Grid>
            <Grid item xs = {6} alignItems='center' >
            <Box paddingX={20} >
                
            <form onSubmit={cadastrar}> 
                    <Typography variant="h3" gutterBottom color = 'textPrimary' component='h3' align = 'center' >Cadastrar usuário</Typography>
                    <TextField id="nome" label='nome' variant="outlined" name="nome" margin="normal" fullWidth
                    value={usuario.nome}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}/>
                    <TextField id="usuario" label='usuário' variant="outlined" name="usuario" margin="normal" fullWidth
                    value={usuario.usuario}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}/>
                    <TextField id="senha" label='senha' variant="outlined" name="senha" margin="normal" type="password" fullWidth
                    value={usuario.senha}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}/>
                    <TextField id="confirmarSenha" label='confirmar senha' variant="outlined" name="confirmaSenha" margin="normal" type="password" fullWidth
                    value={confirmarSenha}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => confirmSenha(event)} />
                    <TextField id="foto" label='foto' variant="outlined" name="foto" margin="normal" fullWidth
                    value={usuario.foto}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} />
                    <Box textAlign='center' marginTop={2}>
                        <Button type="submit" variant="contained" className="botao2" >
                                Cadastrar
                            </Button>
                            <Button type="submit" variant="contained" className="botao2" onClick={voltar}>
                                Cancelar
                            </Button>
                        
                    </Box>
                </form>
                </Box>
                </Grid>
        </Grid>
    )
}

export default cadastrarUsuario;
