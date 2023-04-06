import NextLink from 'next/link';
import { AppBar, Badge, Box, Button, FormControl, IconButton, Input, InputLabel, Link, ListItem, Stack, Toolbar, Typography } from '@mui/material';
import { CardTravelOutlined, ContactMailOutlined, GpsFixed, GpsFixedOutlined, GpsFixedSharp, ImportContactsOutlined, Label, LabelRounded, MenuOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import Image from 'next/image';

export const Navbar = () => {
    return (
        <Stack
            spacing={2}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FFF159',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                padding: { xs: '25px', sm: '25px', md: '25px', lg: '0px' },
            }}
        >

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: { xs: 'space-between', sm: 'space-between', md: 'center', lg: 'center' },
                    padding: '5px',
                    width: '100%',
                }}

            >


                {/* LOGO */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0px',
                    }}
                >

                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={50}
                        height={40}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'left',
                            marginLeft: '10px',
                        }}
                    >
                        <Image
                            src="/Subtract.png"
                            alt="logo"
                            width={80}
                            height={20}
                            objectFit='contain'
                        />
                        <Image
                            src="/Subtract(1).png"
                            alt="logo"
                            width={45}
                            height={20}
                            objectFit='contain'
                        />

                    </Box>
                </Box>

                {/* LABEL INPUT */}
                <Box >
                    <InputLabel
                        htmlFor="search"
                        sx={{
                            display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' },
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '5px',
                            marginRight: '50px',
                            marginLeft: '50px',
                        }}

                    >
                        <Input
                            id="search"
                            type="search"
                            placeholder="Buscar productos, marcas y más..."
                            sx={{
                                display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' },
                                mt: 1,
                                width: { xs: '100%', sm: '100%', md: '100%', lg: '600px' },
                                color: 'black',
                                backgroundColor: 'white',
                                borderRadius: '3px',
                                border: '1px solid #e0e0e0',
                                padding: '5px',
                                '&:hover': {
                                    border: '1px solid #424242',
                                },
                                '&:focus': {
                                    border: '1px solid #424242',
                                },
                                '&:active': {
                                    border: '1px solid #424242',
                                },
                                transition: 'all 0.3s ease',

                            }}
                        />

                    </InputLabel  >
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingLeft: '30px',
                    }}
                >


                    <Box
                        marginRight={2}
                        sx={{
                            display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' },
                        }}
                    >
                        <Image
                            src="/disney.webp"
                            alt="logo"
                            width={320}
                            height={50}
                            objectFit='contain'
                        />

                    </Box>

                    <Box
                        marginRight={2}
                        sx={{
                            display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none' },
                        }}
                    >
                        <Button>
                            <MenuOutlined />

                        </Button>
                    </Box>

                </Box>
            </Box>

            <Box
                sx={{
                    display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}

            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: '50px',
                        marginRight: '50px',

                    }}
                >
                    <GpsFixedSharp />

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'left',
                            marginLeft: '10px',
                        }}
                    >
                        <Typography variant="subtitle2" sx={{ flexGrow: 1, marginLeft: '5px', marginRight: '5px' }}>
                            Enviar a
                        </Typography>
                        <Typography variant="subtitle2" sx={{ flexGrow: 1, marginLeft: '5px', marginRight: '5px' }}>
                            Capital Federal
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: '50px',
                        marginRight: '50px',
                    }}

                >
                    <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1, marginLeft: '5px', marginRight: '5px' }}>
                        Categoria
                    </Typography>
                    <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1, marginLeft: '5px', marginRight: '5px' }}>
                        Ofertas
                    </Typography>
                    <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1, marginLeft: '5px', marginRight: '5px' }}>
                        Historial
                    </Typography>
                    <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1, marginLeft: '5px', marginRight: '5px' }}>
                        Supermercado
                    </Typography>
                    <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1, marginLeft: '5px', marginRight: '5px' }}>
                        Moda
                    </Typography>
                    <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1, marginLeft: '5px', marginRight: '5px' }}>
                        Vender
                    </Typography>
                    <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1, marginLeft: '5px', marginRight: '5px' }}>
                        Ayuda
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: '50px',
                        marginRight: '50px',
                    }}

                >
                    <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1, marginLeft: '5px', marginRight: '5px' }}>
                        Crea tu cuenta
                    </Typography>
                    <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1, marginLeft: '5px', marginRight: '5px' }}>
                        ingresa
                    </Typography>
                    <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1, marginLeft: '5px', marginRight: '5px' }}>
                        Mis compras
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'left',
                            marginLeft: '10px',
                        }}
                    >
                        <CardTravelOutlined />


                    </Box>
                </Box>
            </Box>
        </Stack >
    )
}
