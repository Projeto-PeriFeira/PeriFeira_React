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
                        <img src="/src/assets/logo-bege.svg" alt="" />
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
