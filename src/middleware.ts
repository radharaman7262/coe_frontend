import { NextRequest, NextResponse } from 'next/server';

import { getCookie } from './utils/cookieInServer';

import { JWT_TOKEN, USER_ALLOWED_ROUTE } from './utils/cookieManager';

export const middleware = async (request: NextRequest) => {
    const token = await getCookie(JWT_TOKEN);

    const allowedRoutesRaw = await getCookie(USER_ALLOWED_ROUTE);
    const { pathname } = request.nextUrl;

    // If no token, redirect to login-
    if (!token && !allowedRoutesRaw) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    // If no allowed routes, deny access and redirect to login
    if (!allowedRoutesRaw) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    let allowedRoutes: string[] = [];

    try {
        allowedRoutes = JSON.parse(allowedRoutesRaw || '[]');
    } catch (err) {
        console.error('Failed to parse allowed routes:', err);
        return NextResponse.redirect(new URL('/', request.url));
    }

    // Check if the current pathname is allowed
    const isAllowed = allowedRoutes.some((route) => pathname.startsWith(route));

    if (!isAllowed) {
        // Redirect to first allowed route if exists
        const fallbackUrl = allowedRoutes[0] || '/';
        return NextResponse.redirect(new URL(fallbackUrl, request.url));
    }

    return NextResponse.next();
};

// Apply to all protected routes
export const config = {
    matcher: [
        '/super-admin/dashboard',
        '/super-admin/user-type',
        '/super-admin/center-setup',
        '/super-admin/role-master',
        '/super-admin/center-admin',
        '/super-admin/menu-master',
        '/super-admin/menu-mapping',
    ],
};
