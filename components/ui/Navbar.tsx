import NextLink from 'next/link';
import { AppBar, Badge, Box, Button, FormControl, IconButton, Input, InputLabel, Link, ListItem, Stack, Toolbar, Typography } from '@mui/material';
import { CardTravelOutlined, ContactMailOutlined, GpsFixed, GpsFixedOutlined, GpsFixedSharp, GpsNotFixedRounded, ImportContactsOutlined, Label, LabelRounded, LocationOnOutlined, MenuOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import Image from 'next/image';
import { useContext } from 'react';
import { SideMenuContext } from '../../context';

export const Navbar = () => {

    const { isOpen, handleOpen } = useContext(SideMenuContext)

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
                    padding: '0px',
                    width: '100%',
                }}

            >


                {/* LOGO */}
                <Link
                    href="/" underline="none"
                >

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'left',
                            padding: '0px',
                        }}
                    >

                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={50}
                            height={35}
                        />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'left',
                                marginLeft: '10px',
                                justifyContent: 'left',
                            }}
                        >
                            <Image
                                src="/Subtract.png"
                                alt="logo"
                                width={80}
                                height={18}
                                objectFit='contain'
                            />
                            <Image
                                src="/Subtract(1).png"
                                alt="logo"
                                width={30}
                                height={15}
                                objectFit='contain'

                            />

                        </Box>
                    </Box>
                </Link>
                {/* LABEL INPUT */}
                <Box >
                    <InputLabel
                        htmlFor="search"
                        sx={{
                            display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' },
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '0px',
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
                            width={340}
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
                        <Button
                            onClick={handleOpen}
                        >
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
                        marginLeft: '5rem',
                        marginRight: '5rem',

                    }}
                >
                    <LocationOnOutlined
                        fontSize='medium'
                    />

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'left',
                            marginLeft: '10px',
                        }}
                    >
                        <Typography variant="subtitle2" sx={{ marginLeft: '5px', marginRight: '5px', fontWeight: 400, fontSize: 11 }}>
                            Enviar a
                        </Typography>
                        <Typography variant="subtitle2" sx={{ marginLeft: '5px', marginRight: '5px', fontWeight: 500, fontSize: 12 }}>
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
                    <Typography variant="subtitle2" component="div" color={'gray'} sx={{ flexGrow: 1, marginLeft: '5px', marginRight: '5px', fontWeight: 400, fontSize: 12 }}>
                        Categoria
                    </Typography>
                    <Typography variant="subtitle2" component="div" color={'gray'} sx={{ flexGrow: 1, marginLeft: '5px', marginRight: '5px', fontWeight: 400, fontSize: 12 }}>
                        Ofertas
                    </Typography>
                    <Typography variant="subtitle2" component="div" color={'gray'} sx={{ flexGrow: 1, marginLeft: '5px', marginRight: '5px', fontWeight: 400, fontSize: 12 }}>
                        Historial
                    </Typography>
                    <Typography variant="subtitle2" component="div" color={'gray'} sx={{ flexGrow: 1, marginLeft: '5px', marginRight: '5px', fontWeight: 400, fontSize: 12 }}>
                        Supermercado
                    </Typography>
                    <Typography variant="subtitle2" component="div" color={'gray'} sx={{ flexGrow: 1, marginLeft: '5px', marginRight: '5px', fontWeight: 400, fontSize: 12 }}>
                        Moda
                    </Typography>
                    <Typography variant="subtitle2" component="div" color={'gray'} sx={{ flexGrow: 1, marginLeft: '5px', marginRight: '5px', fontWeight: 400, fontSize: 12 }}>
                        Vender
                    </Typography>
                    <Typography variant="subtitle2" component="div" color={'gray'} sx={{ flexGrow: 1, marginLeft: '5px', marginRight: '5px', fontWeight: 400, fontSize: 12 }}>
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
                    <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1, marginLeft: '5px', marginRight: '5px', fontWeight: 400, fontSize: 13 }}>
                        Crea tu cuenta
                    </Typography>
                    <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1, marginLeft: '5px', marginRight: '5px', fontWeight: 400, fontSize: 13 }}>
                        ingresa
                    </Typography>
                    <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1, marginLeft: '5px', marginRight: '5px', fontWeight: 400, fontSize: 13 }}>
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
                        <ShoppingCartOutlined
                            fontSize='medium'
                            sx={{
                                color: 'gray',
                            }}
                        />


                    </Box>
                </Box>
            </Box>
        </Stack >
    )
}
