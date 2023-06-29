import createMiddleware from 'next-intl/middleware';
import { i18n } from './lib/constants';

export default createMiddleware({
    // A list of all locales that are supported
    locales: i18n.locales,
    // Defaults to `true`
    localeDetection: false, 
    // Defaults to 'as-needed'
    localePrefix: 'always',
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
    defaultLocale: i18n.defaultLocale
});

export const config = {
  // Skip all paths that should not be internationalized
    matcher: ['/((?!api|_next|.*\\..*).*)']
};