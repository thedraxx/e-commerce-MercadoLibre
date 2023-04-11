import { FC } from 'react';
import Head from 'next/head';

import { Navbar, SideMenu, WarningUI } from '../ui';
import { Box, Paper } from '@mui/material';


interface Props {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
}

export const ShopLayout: FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {
    return (
        <Box
            sx={{
                background: '#ececec',
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
            <Paper
                sx={{
                    position: 'relative',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    background: '#ececec',
                    padding: '10px 0px',
                }}

            >
                <WarningUI />
            </Paper>

        </Box >
    )
}


