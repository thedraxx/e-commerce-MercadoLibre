import { AddRounded, CreditCard, CreditCardRounded, MoneyOffCsredOutlined, PaymentsOutlined, RequestQuote } from '@mui/icons-material'
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
                padding: '5px',
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


                <CreditCard sx={{ fontSize: 30, color: "#1a81ff" }} />

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
                            color: '#000000',
                            marginTop: '5px',
                        }}
                    >
                        {` Tarjetas De Credito  `}
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: 13,
                            fontWeight: 300,
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


                <PaymentsOutlined sx={{ fontSize: 30, color: '#367dff' }} />

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
                            color: '#000000',
                            marginTop: '5px',


                        }}
                    >
                        {` Tarjetas De Debito  `}
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: 13,
                            fontWeight: 300,
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


                <RequestQuote sx={{ fontSize: 30, color: "#1a81ff" }} />

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

                            color: '#000000',
                            marginTop: '5px',


                        }}
                    >
                        {` Cuotas Sin Tarjeta  `}
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: 13,
                            fontWeight: 300,
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


                <MoneyOffCsredOutlined sx={{ fontSize: 30, color: "#1a81ff" }} />

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
                            color: '#000000',
                            marginTop: '5px',


                        }}
                    >
                        {` Efectivo  `}
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: 13,
                            fontWeight: 300,
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
                    width: '50%',
                    height: '100%',
                    backgroundColor: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    alignContent: 'row',
                    padding: '0px',
                }}
            >


                <AddRounded sx={{ fontSize: 25, color: "#ffffff", background: '#1a81ff', borderRadius: 20 }} />


            </Box>
        </Box >
    )
}
