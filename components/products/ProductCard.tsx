import { useMemo, useState } from 'react';
import NextLink from 'next/link';
import { Grid, Card, CardActionArea, Box, Typography, Link } from '@mui/material'
import Image from 'next/image';
import { IProduct } from '../../interfaces';

interface Props {
    product: IProduct;
}

export const ProductCard = ({ product }: Props) => {

    const [isHovered, setIsHovered] = useState(false);

    const productImage = useMemo(() => {
        return isHovered
            ? product.imagen1
            : product.imagen2
    }, [isHovered, product.imagen1, product.imagen2])

    return (
        <Grid item
            xs={12}
            sm={3}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Card
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: 'none',
                    border: '1px solid #e0e0e0',
                    borderRadius: '10px',
                    transition: 'all 0.3s ease',
                    marginBottom: '25px',
                    paddingBottom: '10px',
                    '&:hover': {
                        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
                        border: '1px solid #e0e0e0',
                        borderRadius: '10px',
                    }
                }}
            >

                <Link
                    href={`/product/${product.id}`}
                    sx={{ textDecoration: 'none' }}
                >
                    <CardActionArea
                        sx={{
                            hover: {
                                opacity: 0.8,
                                backgroundColor: 'transparent',
                                boxShadow: 'none',
                            }
                        }}
                    >
                        {
                            product.imagen1 && product.imagen2 ? (
                                <Image
                                    src={productImage as string}
                                    alt={product.nombre}
                                    width={450}
                                    height={400}
                                    layout='responsive'
                                    className='fadeIn'
                                    quality={100}
                                    objectFit='cover'
                                    objectPosition='center'

                                />
                            ) : (
                                <Typography>Sin imagen</Typography>
                            )
                        }
                    </CardActionArea>
                </Link>
                <Box
                    sx={{ mt: 1, justifyContent: 'center', alignContent: 'center' }}
                >
                    <Typography

                        sx={{
                            fontSize: 'sm: 14px, md: 16px, lg: 18px, xl: 50px',
                            marginLeft: '25px',
                        }}
                    >
                        {`$${product.precio}`}
                    </Typography>
                </Box>
            </Card>

        </Grid>
    )
}
