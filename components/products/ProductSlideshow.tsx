import React, { useEffect, useState } from 'react';
import 'react-slideshow-image/dist/styles.css';
import { IProduct } from '../../interfaces';
import Image from 'next/image';
import { Box, Button } from '@mui/material';

interface Props {
    product: IProduct;
}

export const ProductSlideshow = ({ product }: Props) => {

    const [counterImage, setCounterImage] = useState(0);

    const manageImage = (index: number) => {
        setCounterImage(index);
    }

    return (
        <Box
            sx={{

                position: 'sticky',
                top: '0',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    bgcolor: 'background.paper',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'top',
                        alignItems: 'center',
                        bgcolor: 'background.paper',
                        flexDirection: 'column',

                    }}
                >
                    {
                        [product.imagen1, product.imagen2, product.imagen3, product.imagen4].map((image, index) => {
                            return (
                                <Box
                                    key={index}
                                    sx={{
                                        objectFit: 'container',
                                        marginTop: '10px',
                                        marginBottom: '10px',
                                        display: 'flex',
                                        justifyContent: 'left',
                                        alignItems: 'left',
                                        bgcolor: 'background.paper',
                                        flexDirection: 'column',
                                        borderRadius: '10px',
                                        border: '1px solid #e0e0e0',

                                    }}
                                >
                                    <Button
                                        onClick={() => manageImage(index)}
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            display: 'flex',
                                            justifyContent: 'left',
                                            alignItems: 'left',
                                            bgcolor: 'background.paper',
                                            flexDirection: 'column',
                                            borderRadius: '10px',
                                            border: '1px solid #e0e0e0',
                                        }}
                                    >
                                        <Image
                                            objectFit='contain'
                                            alt='imagen del producto'
                                            src={image || ''}
                                            width={50}
                                            height={60}
                                        />
                                    </Button>
                                </Box>
                            )
                        })
                    }
                </Box>
                <Box
                    style={{
                        position: 'relative',
                    }}
                >


                    <Image
                        src={
                            [product.imagen1, product.imagen2, product.imagen3, product.imagen4][counterImage] || ''
                        }
                        alt={product.nombre}
                        width={2000}
                        height={2000}
                        objectFit='contain'
                    />
                </Box>

            </Box>
        </Box>
    )
}
