/**
 * Central site configuration.
 * SITE_URL is derived from the VITE_SITE_URL environment variable at build time.
 * Defaults to the custom domain for production builds.
 */
export const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://mypupandme.co.uk'
export const SITE_NAME = 'My Pup and Me'
export const DEFAULT_OG_IMAGE = '/onblack.jpg'
