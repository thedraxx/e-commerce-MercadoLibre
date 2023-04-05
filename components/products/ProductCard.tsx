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
            xs={6}
            sm={4}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Card>

                <Link
                    href={`/product/${product.id}`}
                    sx={{ textDecoration: 'none' }}
                >
                    <CardActionArea>
                        {
                            product.imagen1 && product.imagen2 ? (
                                <Image
                                    src={productImage}
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

            </Card>
            <Box sx={{ mt: 1 }} className='fadeIn'>
                <Typography fontWeight={700}>{product.nombre}</Typography>
                <Typography fontWeight={500}>{`$${product.precio}`}</Typography>
            </Box>
        </Grid>
    )
}
