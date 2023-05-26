import React from 'react'
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux'
import { TokenState } from '../../../store/tokens/tokensReducer'

function Footer() {
	const token = useSelector<TokenState, TokenState["tokens"]>(
			(state) => state.tokens
			);

	if(token != ""){
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#3F51B5", height: "120px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                        
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#303F9F", height: "60px" }}>
                        <Box paddingTop={1}>

                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org" rel="noopener noreferrer">

                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
	}
	else {
		return (
		<>
		</>
		)
		}
}

export default Footer
