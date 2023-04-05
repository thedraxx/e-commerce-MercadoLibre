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
            spacing={4}
            sx={{
                mt: 2,
                mb: 2,
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
