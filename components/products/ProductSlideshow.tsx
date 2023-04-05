import React, { FC, useState, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';
import styles from './ProductSlideshow.module.css';
import { IProduct } from '../../interfaces';

interface Props {
    product: IProduct;
}

export const ProductSlideshow: FC<Props> = ({ product }: Props) => {


    const [arrayImages, setArrayImages] = useState<string[]>([]);

    console.log('arrayImages', arrayImages)

    useEffect(() => {

        if (product.imagen1 !== '') {
            setArrayImages([...arrayImages, product.imagen1] as string[]);
        }

        if (product.imagen2 !== '') {
            setArrayImages([...arrayImages, product.imagen2] as string[]);
        }

        if (product.imagen3 !== '') {
            setArrayImages([...arrayImages, product.imagen3] as string[]);
        }

        if (product.imagen4 !== '') {
            setArrayImages([...arrayImages, product.imagen4] as string[]);
        }


    }, [product])

    return (
        <Slide
            easing="ease"
            duration={7000}
            indicators

        >
            {
                [product.imagen1, product.imagen2, product.imagen3, product.imagen4].map(image => {
                    console.log('', image)
                    return (
                        <div
                            className={styles['each-slide']}
                            key={image}

                        >
                            <div
                                style={{
                                    backgroundImage: `url(${image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    height: '100%',
                                    width: '100%',
                                    backgroundRepeat: 'no-repeat',

                                }}>
                            </div>
                        </div>
                    )

                })
            }

        </Slide>
    )
}
