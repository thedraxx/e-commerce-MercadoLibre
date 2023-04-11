import { Box } from '@mui/material'
import React from 'react'

export const WarningUI = () => {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'block',
                backgroundColor: 'warning.main',
                color: 'warning.contrastText',
                textAlign: 'center',
                padding: '1rem',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginTop: '4rem'
            }}
        >
            ¡Atención! Este sitio es un clon de MercadoLibre, no es oficial.
        </Box>
    )
}
