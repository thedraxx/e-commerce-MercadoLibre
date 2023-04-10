import { GetStaticProps } from 'next'
import { Banner, Payments, WarningUI } from '../components/ui';
import { ShopLayout } from '../components/layouts';
import { ProductList } from '../components/products';
import { IProduct } from '../interfaces';
import { Box, Typography } from '@mui/material';
import Papa from 'papaparse';
import axios from 'axios';
import { SideMenuProvider } from '../context';

interface props {
  productos: IProduct[]
}

const Home = ({ productos }: props) => {

  return (

    <ShopLayout title={'MercadoLibre - Clon'} pageDescription={'Trabajo personal hecho a modo de practica'}>
      <Box
        sx={{
          width: '100%',
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Banner />
      </Box>

      <Payments />
      <Typography variant='h1' component='h1' sx={{ mt: 5 }}>Ofertas</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Todos los productos</Typography>
      <ProductList
        products={productos}
      />

    </ShopLayout>

  )
}

export default Home

export const getStaticProps: GetStaticProps = async (ctx) => {
  const ProductsList = await axios.get(`${process.env.API_GOOGLE}`, {
    responseType: 'blob'
  })

  const ProductsListParsed = await Papa.parse(ProductsList.data, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true
  })

  return {
    props: {
      productos: ProductsListParsed.data
    },
  }
}