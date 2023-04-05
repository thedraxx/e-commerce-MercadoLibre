import React, { FC, useState, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';
import styles from './ProductSlideshow.module.css';
import { IProduct } from '../../interfaces';

interface Props {
    product: IProduct;
}

export const ProductSlideshow: FC<Props> = ({ product }: Props) => {
    const [arrayImages, setArrayImages] = useState([]);

    useEffect(() => {
        product.imagen1 && setArrayImages([...arrayImages, product.imagen1] as any);
        product.imagen2 && setArrayImages([...arrayImages, product.imagen2] as any);
        product.imagen3 && setArrayImages([...arrayImages, product.imagen3] as any);
        product.imagen4 && setArrayImages([...arrayImages, product.imagen4] as any);
    }, [])

    return (
        <Slide
            easing="ease"
            duration={7000}
            indicators
        >
            {
                arrayImages.map(image => {
                    console.log('', image)
                    return (
                        <div className={styles['each-slide']} key={image}>
                            <div style={{
                                backgroundImage: `url(${image})`,
                                backgroundSize: 'cover'
                            }}>
                            </div>
                        </div>
                    )

                })
            }

        </Slide>
    )
}
