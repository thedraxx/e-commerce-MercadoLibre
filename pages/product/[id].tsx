import { Box, Grid, List, ListItem, Typography, MenuItem, Button } from '@mui/material';
import { ShopLayout } from '../../components/layouts';
import { ProductSlideshow } from '../../components/products';
import { GetStaticPaths } from 'next'
import axios from 'axios';
import Papa from 'papaparse';
import { IProduct } from '../../interfaces';
import { EmojiEvents, EmojiEventsOutlined, GppGoodOutlined, HouseOutlined, LocalShippingOutlined, Star, UndoOutlined, WorkspacePremium } from '@mui/icons-material';
import { WarningUI } from '../../components/ui';

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
                    marginTop: '50px',
                    maxWidth: '1440px',
                    background: 'white',
                    borderRadius: '10px',
                    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
                    padding: '20px',
                }}
            >
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={5}
                >
                    <ProductSlideshow
                        product={product}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={4}
                >
                    <Box display='flex' flexDirection='column' sx={{
                        height: '100%',
                        padding: { xs: 0, sm: 0, md: 0, lg: '50px' },
                        width: '100%',
                    }}>
                        <Typography
                            variant='subtitle2'
                            color='gray'
                            sx={{ mb: 1 }}

                        >
                            Nuevo   |    +5 mil vendidos
                        </Typography>
                        {/* titulos */}
                        <Typography
                            variant='h2'
                            component='h2'
                            sx={{ mb: 1, fontWeight: 500, fontSize: 20 }}
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
                            <Star sx={{ color: '#367dff' }} />
                            <Star sx={{ color: '#367dff' }} />
                            <Star sx={{ color: '#367dff' }} />
                            <Star sx={{ color: '#367dff' }} />
                            <Star sx={{ color: '#367dff' }} />
                            <Typography
                                variant='subtitle2'
                                component='h4'
                                color='#367dff'
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
                                sx={{ bgcolor: '#ff7700', padding: 0, pl: 0.5, pr: 0.5, borderRadius: 0.5, width: 'fit-content' }}
                            >
                                Mas Vendido
                            </Typography>
                            <Typography
                                variant='subtitle2'
                                component='h5'
                                color='#367dff'
                                sx={{ ml: 1, pl: 1, pr: 1, borderRadius: 1, width: 'fit-content' }}
                            >
                                3º en Consolas
                            </Typography>
                        </Box>
                        <Typography
                            variant='h5'
                            sx={{ mt: 2, fontSize: 35, fontWeight: 200 }}
                        >{`$${product.precio}`}</Typography>
                        <Typography
                            variant='subtitle2'
                            component='h4'
                            color="#00A650"
                            sx={{ mt: 1, fontSize: 15, fontWeight: 100 }}
                        >Mismo precio en 6 cuotas de $16583
                        </Typography>

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
                                component='h4'
                                color="#00A650"
                                sx={{ mt: 1, fontSize: 14, fontWeight: 400 }}
                            >Duplica puntos:
                            </Typography>

                            <Typography
                                variant='subtitle2'
                                component='h4'
                                color="#000000"
                                sx={{ mt: 1, fontSize: 14, fontWeight: 400, ml: 0.2 }}
                            >
                                sumas 2570 Mercado Puntos
                            </Typography>
                        </Box>

                        <Typography
                            variant='subtitle2'
                            component='h4'
                            color="#367dff"
                            sx={{ mt: 1, fontSize: 14, fontWeight: 400, ml: 0.2 }}
                        > Ver los medios de pago
                        </Typography>


                        <Typography
                            variant='subtitle2'
                            component='h5'
                            color='white'
                            sx={{ bgcolor: '#367dff', pl: 1, pr: 1, borderRadius: 1, width: 'fit-content', mt: 1, mb: 1, }}
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
                    sm={12}
                    md={12}
                    lg={3}
                    sx={{
                        border: '1px solid #e0e0e0',
                        borderRadius: '10px',
                        marginBottom: '30px',
                        padding: '20px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'left',
                            alignContent: "left",
                            justifyItems: "left",
                            width: '100%',
                            marginTop: '30px',
                            background: 'white',
                            padding: '0px',
                        }}
                    >
                        <LocalShippingOutlined
                            style={{
                                color: '#05ab55',
                                fontSize: '24px',
                                marginLeft: '0px',
                            }}
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
                                sx={{ ml: 1, fontWeight: 400 }}
                            >
                                Envio Gratis a todo el pais
                            </Typography>
                            <Typography
                                variant='subtitle2'
                                component='h6'
                                color='gray'
                                sx={{ ml: 1, fontWeight: 400 }}
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
                            width: '100%',
                            marginTop: '20px',
                            background: 'white',
                            padding: '0px',
                        }}
                    >
                        <HouseOutlined
                            style={{
                                color: '#00A650',
                                fontSize: '24px',
                                marginLeft: '0px',
                            }}
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
                                sx={{ ml: 1, fontWeight: 400 }}

                            >
                                Retiro gratis en local del vendedor
                            </Typography>
                            <Typography
                                variant='subtitle2'
                                component='h6'
                                color='#367dff'
                                sx={{ ml: 1, fontWeight: 400 }}

                            >
                                Más información
                            </Typography>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            mt: 2,
                            ml: { xs: 2, sm: 2, md: 2, lg: 0 },
                        }}
                    >


                        <Typography
                            variant='h2'
                            color='black'
                            sx={{ mt: 1, fontSize: 14 }}
                        >
                            Vendido por   <a href="https://www.mercadolibre.com.ar/perfil/MLA1530009" target="_blank" rel="noreferrer">MERCADOLIBRE</a>
                        </Typography>

                        <Typography
                            variant='h2'
                            color='black'
                            sx={{ mt: 0.7, fontSize: 13 }}
                        >
                            MercadoLider | +10mil ventas
                        </Typography>

                        <Typography
                            variant='subtitle2'
                            component='h5'
                            color='gray'
                            sx={{ mt: 0.5, fontSize: 13, fontWeight: 400 }}
                        >
                            Hace Factura A
                        </Typography>

                        <Typography
                            variant='subtitle2'
                            component='h5'
                            color='black'
                            sx={{ mt: 4, fontSize: 16 }}
                        >
                            Stock disponible
                        </Typography>


                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                alignContent: "center",
                                justifyItems: "center",
                                width: '100%',
                            }}
                        >

                            <Typography
                                variant='h5'
                                component='h5'
                                color='black'
                                sx={{ mt: 4, fontSize: 16 }}
                            >
                                Cantidad:
                            </Typography>



                            <MenuItem value={1}>
                                <Typography
                                    variant='subtitle2'
                                    component='h5'
                                    color='black'
                                    sx={{ mt: 4, fontSize: 14, ml: 1 }}
                                >
                                    1 unidad
                                </Typography>


                            </MenuItem>

                            <Typography
                                variant='subtitle2'
                                component='h5'
                                color='black'
                                sx={{ mt: 4, fontSize: 14, ml: 1 }}
                            >
                                10 disponibles
                            </Typography>


                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                alignContent: "center",
                                justifyItems: "center",
                                width: '100%',
                            }}
                        >
                            <Button
                                variant='contained'
                                sx={{
                                    mt: 2,
                                    background: '#367dff',
                                    color: 'white',
                                    paddingLeft: '80px',
                                    paddingRight: '80px',
                                }}
                            >
                                <Typography
                                    variant='subtitle2'
                                    component='h5'
                                    color='white'
                                    sx={{ fontSize: 14, padding: '10px' }}
                                >
                                    Comprar Ahora
                                </Typography>
                            </Button>

                            <Button
                                variant='contained'
                                sx={{
                                    mt: 2,
                                    background: '#dae8ff',
                                    color: 'white',
                                    paddingLeft: '80px',
                                    paddingRight: '80px',
                                }}
                            >
                                <Typography
                                    variant='subtitle2'
                                    component='h5'
                                    color='#367dff'
                                    sx={{ fontSize: 14, padding: '10px' }}
                                >
                                    Agregar al carrito
                                </Typography>
                            </Button>
                        </Box>
                        <Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    alignContent: "center",
                                    justifyItems: "center",
                                    width: '100%',
                                    mt: 4,
                                }}
                            >
                                <UndoOutlined style={{ color: '#bdbdbd', fontSize: '22px', marginRight: '5px' }} />

                                <Typography
                                    variant='h2'
                                    color='gray'
                                    sx={{ fontSize: 14 }}
                                >
                                    Devolucion gratis. Tenes 30 dias desde que lo recibis.
                                </Typography>
                            </Box>


                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    alignContent: "center",
                                    justifyItems: "center",
                                    width: '100%',
                                    mt: 4,
                                }}
                            >
                                <GppGoodOutlined style={{ color: '#bdbdbd', fontSize: '22px', marginRight: '5px' }} />

                                <Typography
                                    variant='h2'
                                    color='gray'
                                    sx={{ fontSize: 14 }}
                                >
                                    Compra Protegida, recibi el producto que esperabas o te devolvemos tu dinero.
                                </Typography>
                            </Box>


                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    alignContent: "center",
                                    justifyItems: "center",
                                    width: '100%',
                                    mt: 4,
                                }}
                            >
                                <EmojiEventsOutlined style={{ color: '#bdbdbd', fontSize: '22px', marginRight: '5px' }} />

                                <Typography
                                    variant='h2'
                                    color='gray'
                                    sx={{ fontSize: 14 }}
                                >
                                    Mercado Puntos, sumas 1.000 puntos.                                </Typography>
                            </Box>


                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    alignContent: "center",
                                    justifyItems: "center",
                                    width: '100%',
                                    mt: 4,
                                }}
                            >
                                <WorkspacePremium style={{ color: '#bdbdbd', fontSize: '22px', marginRight: '5px' }} />

                                <Typography
                                    variant='h2'
                                    color='gray'
                                    sx={{ fontSize: 14 }}
                                >
                                    12 meses de garantía de fábrica.                               </Typography>
                            </Box>
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