import { Box, Typography } from '@mui/material';
import { ShopLayout } from '../components/layouts';
import { ProductList } from '../components/products';
import Papa from 'papaparse';
import axios from 'axios';

interface props {
  productos: IProduct[]
}

const Home = ({ productos }: props) => {

  return (
    <ShopLayout title={'Teslo-Shop - Home'} pageDescription={'Encuentra los mejores productos de Teslo aquí'}>


      <Typography variant='h1' component='h1'>Ofertas</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Todos los productos</Typography>

      <ProductList
        products={productos}
      />



    </ShopLayout>
  )
}

export default Home

import { GetStaticProps } from 'next'
import { IProduct } from '../interfaces';

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