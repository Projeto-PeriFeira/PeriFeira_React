import React from 'react'
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
// import { useSelector } from 'react-redux'
// import { TokenState } from '../../../store/tokens/tokensReducer'
import './Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

function Footer() {
	// const token = useSelector<TokenState, TokenState["tokens"]>(
	// 		(state) => state.tokens
	// 		);

	// if(token != ""){
    return (
        <>
        <Box display={'flex'} className='footer'>
            <Grid container direction="row" justifyContent='flex-end' alignItems="center">
                <Grid alignItems="center" justifyContent='center' container xs={4}>
                    <Box>
                        <img src="https://media.discordapp.net/attachments/1094735432178221206/1113882968184860742/logo-bege_1.png" alt="" />
                    </Box>
                </Grid>
                <Grid alignItems="center" direction='column' justifyContent='center' container xs={4}>
                    <Box marginBottom={5} display='flex' gap={2}>
                        <GitHubIcon className="redes" />
                        <InstagramIcon className="redes" />
                    </Box>
                        <Typography>Todos os direitos reservados © PeriFeira</Typography>
                </Grid>
                <Grid alignItems="center"  justifyContent='center' container xs={4}>
                    <Box display='flex' gap={1} flexDirection={'column'}>
                        <Box mx={1} style={{ cursor: 'pointer' }}>
							<Typography className='navFooter'variant="subtitle1" color="inherit">
								Cestas
							</Typography>
						</Box>
						<Link className='reset-link' to='/loja'>
							<Box mx={1} style={{ cursor: 'pointer' }}>
								<Typography className='navFooter' variant="subtitle1" color="inherit">
									Loja
								</Typography>
							</Box>
						</Link>
						<Link className='reset-link' to='/sobre'>
							<Box mx={1} style={{ cursor: 'pointer' }}>
								<Typography className='navFooter' variant="subtitle1" color="inherit">
									Sobre 
								</Typography>
							</Box>
						</Link>
                        <Link className='reset-link' to='/sobre'>
							<Box mx={1} style={{ cursor: 'pointer' }}>
								<Typography className='navFooter'  variant="subtitle1" color="inherit">
									Perfil usuário 
								</Typography>
							</Box>
						</Link>
                    </Box>
                </Grid>
            </Grid>
            </Box>
        </>
    )
// 	}
// 	else {
// 		return (
// 		<>
// 		</>
// 		)
// 		}
}

export default Footer
