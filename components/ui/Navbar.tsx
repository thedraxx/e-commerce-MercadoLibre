import NextLink from 'next/link';
import { AppBar, Badge, Box, Button, FormControl, IconButton, Input, InputLabel, Link, Toolbar, Typography } from '@mui/material';
import { Label, LabelRounded, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import Image from 'next/image';

export const Navbar = () => {
    return (
        <AppBar
            sx={{
                height: '100px',
            }}
        >

            <Toolbar>




                <NextLink href='/' passHref>
                    <Link display='flex' alignItems='center'>
                        <Image
                            src='/logo.png'
                            alt='Logo'
                            width={50}
                            height={80}
                            objectFit='contain'
                            objectPosition='center'
                        />
                    </Link>
                </NextLink>

                <Box
                    sx={{
                        display: 'flex',
                        ml: 2,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Image
                        src='/Subtract.png'
                        alt='Logo'
                        width={80}
                        height={20}
                        objectFit='contain'
                        objectPosition='center'

                    />

                    <Image
                        src='/Subtract(1).png'
                        alt='Logo'
                        width={80}
                        height={20}
                        objectFit='contain'
                        objectPosition='center'
                    />
                </Box>




                <Box >
                    <InputLabel
                        htmlFor="search"
                        sx={{
                            display: 'xs: none sm: none md: none lg: flex xl: flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 'xs:100px sm:200px md:400px lg:400px xl:400px',
                            height: 'xs:30px sm:30px md:30px lg:30px xl:30px',
                            padding: '5px'
                        }}

                    >
                        <Input
                            id="search"
                            type="search"
                            placeholder="Buscar productos, marcas y más..."
                            sx={{
                                mt: 1,
                                width: '500px',
                                color: 'black',
                                backgroundColor: 'white',
                                borderRadius: '3px',
                                border: '1px solid #e0e0e0',
                                padding: '10px',
                                marginLeft: '50px',
                                display: {
                                    xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'
                                },
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
                            }
                            }

                        />
                        {/* <IconButton
                            sx={{
                                mt: 1,
                                backgroundColor: 'white',
                                borderRadius: '3px',
                                border: '1px solid #e0e0e0',
                                paddingLeft: '5px',
                                paddingRight: '5px',
                                width: '40px',
                                display: {
                                    xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block'
                                },
                                '&:hover': {
                                    border: '1px solid #424242',
                                },
                            }}
                        >
                            <SearchOutlined />
                        </IconButton> */}
                    </InputLabel  >

                </Box>


                <Box flex={1} />

                <IconButton>
                    <SearchOutlined />
                </IconButton>

                <NextLink href="/cart" passHref>
                    <Link>
                        <IconButton>
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </IconButton>
                    </Link>
                </NextLink>


                <Button>
                    Menú
                </Button>

            </Toolbar>
        </AppBar>
    )
}
