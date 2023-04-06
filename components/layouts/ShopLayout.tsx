import { FC } from 'react';
import Head from 'next/head';

import { Navbar, SideMenu } from '../ui';
import { Box } from '@mui/material';


interface Props {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
}

export const ShopLayout: FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {
    return (
        <Box
            sx={{
                background: '#F5F5F5',
            }}
        >
            <Head>
                <title>{title}</title>

                <meta name="description" content={pageDescription} />
                <link rel="icon" href="/logo.png" />

                <meta name="og:title" content={title} />
                <meta name="og:description" content={pageDescription} />

                {
                    imageFullUrl && (
                        <meta name="og:image" content={imageFullUrl} />
                    )
                }

            </Head>

            <nav>
                <Navbar />
            </nav>

            <SideMenu />

            <main style={{
                margin: 'auto',
                maxWidth: '1440px',
                padding: '0px 30px',

            }}>
                {children}
            </main>

            {/* Footer */}
            <footer>
                {/* TODO: mi custom footer */}
            </footer>

        </Box >
    )
}


