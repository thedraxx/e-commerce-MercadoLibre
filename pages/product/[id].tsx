import { Box, Grid, List, ListItem, Typography, ListItemText } from '@mui/material';
import { ShopLayout } from '../../components/layouts';
import { ProductSlideshow } from '../../components/products';
import { GetStaticPaths } from 'next'
import axios from 'axios';
import Papa from 'papaparse';
import { IProduct } from '../../interfaces';
import { HouseOutlined, Star, TravelExploreOutlined } from '@mui/icons-material';

interface Props {
    product: IProduct;
}


const ProductPage = ({ product }: Props) => {

    const Incluye = product.Incluye.split('.')
    const listIncluye = Incluye.map((item: string) => <ListItem key={item}>{item}</ListItem>)

    return (
        <ShopLayout title={product.nombre} pageDescription={product.descripcion}>
            <Grid
                container
                spacing={2}
                style={{
                    margin: '0px auto',
                    paddingTop: '50px',
                    maxWidth: '1440px',
                    background: 'white',
                    padding: '30px',
                    borderRadius: '10px',
                }}
            >
                <Grid
                    item
                    xs={12}
                    sm={5}>
                    <ProductSlideshow
                        product={product}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box display='flex' flexDirection='column' sx={{
                        height: '100%',
                        padding: '50px',
                        width: '90%',
                    }}>
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
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                mb: 1,
                            }}
                        >
                            <Star sx={{ color: '#075eff' }} />
                            <Star sx={{ color: '#075eff' }} />
                            <Star sx={{ color: '#075eff' }} />
                            <Star sx={{ color: '#075eff' }} />
                            <Star sx={{ color: '#075eff' }} />
                            <Typography
                                variant='subtitle2'
                                component='h4'
                                color='#075eff'
                                sx={{ ml: 1 }}
                            >(829)</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                alignContent: "center",
                                justifyItems: "center",
                                mb: 1,

                            }}
                        >
                            <Typography
                                variant='subtitle2'
                                component='h5'
                                color='white'
                                sx={{ bgcolor: '#fa9034', pl: 1, pr: 1, borderRadius: 1, width: 'fit-content' }}
                            >
                                Mas Vendido
                            </Typography>
                            <Typography
                                variant='subtitle2'
                                component='h5'
                                color='#075eff'
                                sx={{ ml: 1, pl: 1, pr: 1, borderRadius: 1, width: 'fit-content' }}
                            >
                                3º en Consolas
                            </Typography>
                        </Box>
                        <Typography
                            variant='h2'
                            component='h2'
                            sx={{ mt: 2, fontSize: 40 }}
                        >{`$${product.precio}`}</Typography>
                        <Typography
                            variant='subtitle2'
                            component='h4'
                            color="#00A650"
                            sx={{ mt: 1, fontSize: 15 }}
                        >Mismo precio en 6 cuotas de $16583</Typography>
                        {/* Cantidad */}
                        <Typography
                            variant='subtitle2'
                            component='h5'
                            color='white'
                            sx={{ bgcolor: '#075eff', pl: 1, pr: 1, borderRadius: 2, width: 'fit-content', mt: 1, mb: 1, }}
                        >
                            Oferta del Dia
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'left',
                                alignContent: "left",
                            }}
                        >
                            <Typography
                                variant='subtitle2'
                                component='h5'
                                color='black'
                                sx={{ mt: 1, fontSize: 15 }}
                            >
                                Lo que tenés que saber de este producto
                            </Typography>
                            <List>
                                {
                                    <Typography
                                        color='black'
                                        sx={{ mt: 1, fontSize: 13 }}
                                    >
                                        {listIncluye}
                                    </Typography>

                                }
                            </List>
                        </Box>

                    </Box>
                </Grid>


                <Grid
                    item
                    xs={12}
                    sm={3}
                    sx={{
                        border: '1px solid #e0e0e0',
                        borderRadius: '10px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'left',
                            alignContent: "left",
                            justifyItems: "left",
                            width: '80%',
                            marginTop: '50px',
                            background: 'white',
                            padding: '10px',
                        }}
                    >
                        <TravelExploreOutlined color='#00A650' />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'left',
                                alignContent: "left",
                            }}
                        >
                            <Typography
                                variant='subtitle2'
                                component='h5'
                                color='#00A650'
                                sx={{ ml: 1 }}
                            >
                                Envio Gratis a todo el pais
                            </Typography>
                            <Typography
                                variant='subtitle2'
                                component='h6'
                                color='gray'
                                sx={{ ml: 1 }}
                            >
                                Conocé los tiempos y las formas de envío.
                            </Typography>
                        </Box>
                    </Box>


                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'left',
                            alignContent: "left",
                            justifyItems: "left",
                            width: '80%',
                            marginTop: '20px',
                            padding: '10px',
                            background: 'white',
                        }}
                    >
                        <HouseOutlined
                            color='#00A650'
                        />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'left',
                                alignContent: "left",
                            }}
                        >
                            <Typography
                                variant='subtitle2'
                                component='h5'
                                color='#00A650'
                                sx={{ ml: 1 }}
                            >
                                Retiro gratis en local del vendedor
                            </Typography>
                            <Typography
                                variant='subtitle2'
                                component='h6'
                                color='#075eff'
                                sx={{ ml: 1 }}
                            >
                                Más información
                            </Typography>
                        </Box>
                    </Box>


                </Grid>





            </Grid>





        </ShopLayout >
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