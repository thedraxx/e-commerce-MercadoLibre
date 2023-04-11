import 'react-slideshow-image/dist/styles.css';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import styles from './ProductSlideshow.module.css';
import { Box } from '@mui/material';

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
                        <Box
                            className={styles['each-slide']}
                            key={image}
                        >
                            <Box style={{
                                backgroundImage: `url(${image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}>
                            </Box>
                        </Box>
                    )

                })
            }

        </Slide>
    )
}
