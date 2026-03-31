import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },

  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  webpack(config) {
    const srcDir = path.resolve(__dirname, 'src')
    const legacyStub = path.resolve(__dirname, 'lib/legacy-stub.js')
    const legacyPageLoader = path.resolve(
      __dirname,
      'loaders/legacy-page-loader.js',
    )

    /**
     * 1. Replace legacy Vite pages with empty Next.js stubs.
     *    Prevents prerender errors from React Router / i18n hooks
     *    that don't work in the Next.js runtime environment.
     *    These stubs are inactive — the App Router serves all real routes.
     */
    config.module.rules.unshift({
      test: /\.(js|jsx)$/,
      include: path.resolve(srcDir, 'pages'),
      use: [{ loader: legacyPageLoader }],
    })

    /**
     * 2. Force ESM parsing for remaining Vite src/ files (components, data).
     *    package.json uses "type": "commonjs" (needed for PostCSS), but
     *    the old Vite files use ESM syntax — so we override per directory.
     */
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      include: srcDir,
      exclude: path.resolve(srcDir, 'pages'),
      type: 'javascript/esm',
      resolve: { fullySpecified: false },
    })

    /**
     * 3. Redirect legacy package imports to stubs.
     *    react-router-dom, react-i18next, i18next are not installed
     *    in this Next.js project but are still referenced by legacy
     *    components (which are now only reachable through the Pages Router stubs).
     */
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-router-dom': legacyStub,
      'react-i18next': legacyStub,
      i18next: legacyStub,
    }

    return config
  },
}

export default nextConfig
