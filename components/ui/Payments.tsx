import { AddRounded, CreditCard, CreditCardRounded } from '@mui/icons-material'
import { Box, Typography } from '@mui/material';
import React from 'react'

export const Payments = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' },
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' },
                backgroundColor: '#ffffff',
                padding: '25px',
            }}
        >

            {/* Card 1 */}
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    padding: '20px',
                }}
            >


                <CreditCard sx={{ fontSize: 30 }} />

                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'left',
                        alignItems: 'left',
                        flexDirection: 'column',
                        marginLeft: '20px',
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: '#000000',
                            marginTop: '5px',
                        }}
                    >
                        {` Tarjetas De Credito  `}
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: 13,
                            fontWeight: 'bold',
                            color: '#1a81ff',
                            marginTop: '5px',
                        }}
                    >
                        {` Ver promociones bancarias  `}
                    </Typography>
                </Box>
            </Box>

            {/* Card 2 */}
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    alignContent: 'row',
                    padding: '20px',
                }}
            >


                <CreditCardRounded sx={{ fontSize: 30 }} />

                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'left',
                        alignItems: 'left',
                        flexDirection: 'column',
                        marginLeft: '20px',
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: '#000000',
                            marginTop: '5px',


                        }}
                    >
                        {` Tarjetas De Debito  `}
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: 13,
                            fontWeight: 'bold',
                            color: '#1a81ff',
                            marginTop: '5px',
                        }}
                    >
                        {` Ver mas  `}
                    </Typography>
                </Box>
            </Box>
            {/* Card 3 */}
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    alignContent: 'row',
                    padding: '20px',
                }}
            >


                <CreditCardRounded sx={{ fontSize: 30 }} />

                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'left',
                        alignItems: 'left',
                        flexDirection: 'column',
                        marginLeft: '20px',
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: '#000000',
                            marginTop: '5px',


                        }}
                    >
                        {` Tarjetas De Debito  `}
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: 13,
                            fontWeight: 'bold',
                            color: '#1a81ff',
                            marginTop: '5px',
                        }}
                    >
                        {` Ver mas  `}
                    </Typography>
                </Box>
            </Box>
            {/* Card 4 */}
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    alignContent: 'row',
                    padding: '20px',
                }}
            >


                <CreditCardRounded sx={{ fontSize: 30 }} />

                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'left',
                        alignItems: 'left',
                        flexDirection: 'column',
                        marginLeft: '20px',
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: '#000000',
                            marginTop: '5px',


                        }}
                    >
                        {` Tarjetas De Debito  `}
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: 13,
                            fontWeight: 'bold',
                            color: '#1a81ff',
                            marginTop: '5px',
                        }}
                    >
                        {` Ver mas  `}
                    </Typography>
                </Box>
            </Box>

            {/* Card 5 */}
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    alignContent: 'row',
                    padding: '31px',
                }}
            >


                <AddRounded sx={{ fontSize: 30 }} />


            </Box>
        </Box >
    )
}
