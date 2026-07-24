// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import mermaid from 'astro-mermaid';
import tailwindcss from '@tailwindcss/vite';
import starlightAutoSidebar from 'starlight-auto-sidebar';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
    integrations: [
        mermaid({
            theme: 'forest',
            autoTheme: true,
        }),
        starlight({
            title: '自主勉強会資料',
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/c4h5ns/meetup-container-basics' }],
            sidebar: [
                {
                    label: 'コンテナ基礎',
                    items: [
                        {
                            label: '第1回',
                            items: [
                                {
                                    slug: 'container-basics/part-1',
                                },
                                {
                                    slug: 'container-basics/part-1/comparison-with-vm'
                                },
                                {
                                    slug: 'container-basics/part-1/key-linux-features'
                                },
                                {
                                    slug: 'container-basics/part-1/container-lifecycle'
                                },
                                {
                                    slug: 'container-basics/part-1/container-image-overview'
                                },
                                {
                                    slug: 'container-basics/part-1/docker-basic-instruction'
                                }
                            ]
                        },
                    ]
                },
            ],
            customCss: [
                './src/styles/global.css'
            ],
            plugins: [
                starlightAutoSidebar(),
            ]
        }),
        react(),
    ],
    vite: {
        plugins: [tailwindcss()],
    },
    adapter: cloudflare({
        imageService: "compile"
    }),
});
