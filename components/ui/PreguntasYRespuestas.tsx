import { Search, SearchOffRounded } from '@mui/icons-material';
import { Box, Typography, Input, Grid, TextField, IconButton } from '@mui/material';
import React from 'react'

const PreguntasYRespuestas = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'start',
                textAlign: 'start',
                position: 'relative',
                width: '100%',
                marginTop: '1rem',
                marginLeft: '1rem',
            }}
        >
            <Typography variant="h6" component="h2" gutterBottom sx={{ fontSize: 23, fontWeight: 400 }}>
                Preguntas y respuestas
            </Typography>
            <Typography variant="body1" component="h2" gutterBottom sx={{ fontSize: 17, fontWeight: 'bold', mt: 4 }}>
                ¿Qué querés saber?
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: 'flex-start',
                    justifyContent: 'start',
                    textAlign: 'start',
                    marginTop: '1rem',

                    width: '100%',

                }}
            >
                <Box
                    sx={{
                        marginRight: '1rem',
                        backgroundColor: '#cee1ff',
                        padding: '2px',
                        borderRadius: '5px',
                        marginBottom: '1rem',
                    }}
                >
                    <Typography
                        variant="body1"
                        component="h5"
                        gutterBottom
                        sx={{
                            color: '#3483FA',
                            padding: '3px',
                            fontSize: '0.8rem',

                        }}

                    >
                        Costo y tiempo de envío
                    </Typography>
                </Box>

                <Box
                    sx={{
                        marginRight: '1rem',
                        backgroundColor: '#cee1ff',
                        padding: '2px',
                        borderRadius: '5px',
                        marginBottom: '1rem',
                    }}
                >
                    <Typography
                        variant="body1"
                        component="h5"
                        gutterBottom
                        sx={{
                            color: '#3483FA',
                            padding: '3px',
                            fontSize: '0.8rem',
                        }}

                    >
                        Devoluciones Gratis
                    </Typography>
                </Box>
                <Box
                    sx={{
                        marginRight: '1rem',
                        backgroundColor: '#cee1ff',
                        padding: '2px',
                        borderRadius: '5px',
                        marginBottom: '1rem',
                    }}
                >
                    <Typography
                        variant="body1"
                        component="h5"
                        gutterBottom
                        sx={{
                            color: '#3483FA',
                            padding: '3px',
                            fontSize: '0.8rem',
                        }}

                    >
                        Medios de pago y Promociones
                    </Typography>
                </Box>
                <Box
                    sx={{
                        marginRight: '1rem',
                        backgroundColor: '#cee1ff',
                        padding: '2px',
                        borderRadius: '5px',
                        marginBottom: '1rem',
                    }}
                >
                    <Typography
                        variant="body1"
                        component="h5"
                        gutterBottom
                        sx={{
                            color: '#3483FA',
                            padding: '3px',
                            fontSize: '0.8rem',
                        }}

                    >
                        Garantia
                    </Typography>
                </Box>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: '1rem',
                }}
            >


                <Grid container alignItems="center" spacing={1}>
                    <Grid item xs={10}>
                        <Input
                            id="search"
                            type="search"
                            placeholder="Escribi una pregunta o palabra clave"
                            sx={{
                                display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'flex' },
                                mt: 1,
                                width: { xs: '90%', sm: '90%', md: '90%', lg: '800px' },
                                color: 'black',
                                backgroundColor: 'white',
                                borderRadius: '3px',
                                border: '1px solid #e0e0e0',
                                padding: '8px',
                                marginBottom: '1rem',
                            }}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <IconButton
                            sx={{
                                backgroundColor: '#3483FA',
                                color: 'white',
                                borderRadius: '5px',
                                padding: '13px',
                                marginTop: '-0.5rem',
                                marginLeft: { xs: '0rem', sm: '0rem', md: '0rem', lg: '1.4rem' },



                                '&:hover': {
                                    backgroundColor: '#165bc3',
                                },
                                '&:focus': {
                                    backgroundColor: '#3483FA',
                                },
                            }}
                        >
                            <Search />
                        </IconButton>
                    </Grid>
                </Grid>

            </Box>

            <Box>
                <Typography variant="body1" component="h2" gutterBottom sx={{ fontSize: 17, fontWeight: 'bold' }}>

                    Ultimas Realizadas
                </Typography>

                <Typography
                    variant="body1"
                    component="h2"
                    gutterBottom sx={{ fontSize: 16 }}>
                    Hola Mundo! esto es una prueba de preguntas y respuestas?
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'start',
                        textAlign: 'start',
                        position: 'relative',
                        width: '100%',
                        marginTop: '1rem',
                        marginLeft: '1rem',
                    }}
                >
                    <Typography
                        variant="body1"
                        component="h2"
                        gutterBottom sx={{ fontSize: 15, color: 'gray' }}>
                        Hola mundo! Si, esto es una prueba en la seccion de preguntas y respuestas
                    </Typography>
                </Box>


            </Box>

        </Box >
    )
}

export default PreguntasYRespuestas