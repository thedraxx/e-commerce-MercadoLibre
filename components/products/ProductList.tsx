import { FC } from 'react'
import { Grid } from '@mui/material'
import { IProduct } from '../../interfaces'
import { ProductCard } from '.'

interface Props {
    products: IProduct[];
}

export const ProductList: FC<Props> = ({ products }) => {
    return (
        <Grid
            container
            spacing={5}
            sx={{
                mt: 1,
                mb: 1,

            }}
        >

            {
                products.map(p => (
                    <ProductCard
                        key={p.id}
                        product={p}
                    />
                ))
            }


        </Grid>
    )
}
