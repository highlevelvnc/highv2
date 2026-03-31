/**
 * legacy-page-loader.js
 *
 * Webpack loader that replaces legacy Vite pages (src/pages/*.jsx) with
 * minimal Next.js-compatible page components. This prevents runtime errors
 * during Next.js prerendering caused by React Router / i18n hooks that
 * require contexts not available in the Next.js runtime.
 *
 * These pages are NOT used by the new App Router and exist only as
 * inactive Pages Router stubs.
 */
module.exports = function legacyPageLoader() {
  return `
    import React from 'react'
    export default function LegacyPage() { return null }
  `
}
