// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const demoRelease = process.env.DEMO_RELEASE;
if (demoRelease !== undefined && !/^[a-f0-9]{40}$/.test(demoRelease)) {
  throw new Error('DEMO_RELEASE must be a 40-character Git commit SHA.');
}

const demoBase = '/lang-bridge';
const demoAssetBase = demoRelease ? `${demoBase}/_r/${demoRelease}` : '';

export default defineConfig({
  integrations: [tailwind()],
  ...(demoRelease && {
    site: 'https://demos.chankay.com',
    base: demoBase,
    trailingSlash: 'always',
    build: {
      assets: 'assets',
      assetsPrefix: demoAssetBase,
    },
  }),
  vite: {
    define: {
      'import.meta.env.DEMO_ASSET_BASE': JSON.stringify(demoAssetBase),
    },
  },
});
