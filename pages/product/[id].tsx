import { Box, Button, Grid, Typography } from '@mui/material';
import { ShopLayout } from '../../components/layouts';
import { ProductSlideshow, SizeSelector } from '../../components/products';
import { ItemCounter } from '../../components/ui/ItemCounter';
import { GetStaticPaths } from 'next'
import axios from 'axios';
import Papa from 'papaparse';
import { IProduct } from '../../interfaces';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface Props {
    product: IProduct;
}


const ProductPage = ({ product }: Props) => {
    return (
        <ShopLayout title={product.nombre} pageDescription={product.descripcion}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={7}>
                    <ProductSlideshow
                        product={product}
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Box display='flex' flexDirection='column'>
                        <Typography
                            variant='subtitle2'
                            color='gray'
                            sx={{ mb: 1 }}

                        >
                            Nuevo   |    0 vendidos
                        </Typography>
                        {/* titulos */}
                        <Typography
                            variant='h2'
                            component='h2'
                            sx={{ mb: 1, fontWeight: 700 }}
                        >{product.nombre}
                        </Typography>


                        <Typography
                            variant='subtitle2'
                            component='h4'
                            color='white'
                            sx={{ bgcolor: '#3483FA', p: 1, borderRadius: 1, mt: 2, width: 'fit-content' }}
                        >
                            Ahora 12
                        </Typography>
                        <Typography
                            variant='h2'
                            component='h2'
                            sx={{ mt: 2, fontSize: 40 }}
                        >{`$${product.precio}`}</Typography>
                        {/* Cantidad */}
                        <Box sx={{ my: 2 }}>
                            <Typography variant='subtitle2'>Cantidad</Typography>
                            <ItemCounter />
                            {/* <SizeSelector
                                // selectedSize={ product.sizes[2] }
                                // sizes={product.sizes}
                            /> */}
                        </Box>
                        {/* Agregar al carrito */}
                        <Button color="secondary" className='circular-btn'>
                            Agregar al carrito
                        </Button>
                        {/* <Chip label="No hay disponibles" color="error" variant='outlined' /> */}
                        {/* Descripción */}
                        <Box sx={{ mt: 3 }}>
                            <Typography variant='subtitle2'>Descripción</Typography>
                            <Typography variant='body2'>{product.descripcion}</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default ProductPage




export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const ProductsList = await axios.get(`${process.env.API_GOOGLE}`, {
        responseType: 'blob'
    })

    const ProductsListParsed = await Papa.parse(ProductsList.data, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true
    })


    return {
        paths: ProductsListParsed.data.map((product: any) => ({
            params: {
                id: product.id.toString()
            }
        })),
        fallback: false
    }
}


export const getStaticProps = async (ctx: { params: { id: any; }; }) => {
    const ProductsList = await axios.get(`${process.env.API_GOOGLE}`, {
        responseType: 'blob'
    })

    const ProductsListParsed = await Papa.parse(ProductsList.data, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true
    })

    const product = ProductsListParsed.data.find((product: any) => product.id === Number(ctx.params.id))

    return {
        props: {
            product
        },
    }
}