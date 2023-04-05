import 'react-slideshow-image/dist/styles.css';
import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import styles from './ProductSlideshow.module.css';

export const Banner = () => {

    const arrayImagesBanner = [
        '/1.webp',
        '/2.webp',
        '/3.webp',
    ]


    return (
        <Slide
            easing="ease"
            duration={7000}
            indicators
        >
            {
                arrayImagesBanner.map(image => {
                    return (
                        <div
                            className={styles['each-slide']}
                            key={image}
                        >
                            <div style={{
                                backgroundImage: `url(${image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
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
