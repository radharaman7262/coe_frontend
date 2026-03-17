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

    // const isAllowed = allowedRoutes.some((route) => pathname.startsWith(route));

    // // Temporary dev access
    // const isDevAssessmentRoute = pathname.startsWith('/clinical-psychologist/assessment');

    // if (!isAllowed && !isDevAssessmentRoute) {
    //     const fallbackUrl = allowedRoutes[0] || '/';
    //     return NextResponse.redirect(new URL(fallbackUrl, request.url));
    // }

    return NextResponse.next();
};

// Apply to all protected routes
export const config = {
    matcher: [
        /* Super Admin Route Paths */
        '/super-admin/dashboard/:path*',
        '/super-admin/user-type/:path*',
        '/super-admin/center-setup/:path*',
        '/super-admin/role-master/:path*',
        '/super-admin/center-admin/:path*',
        '/super-admin/menu-master/:path*',
        '/super-admin/menu-mapping/:path*',

        /* Admin Route Paths */
        '/admin/dashboard/:path*',
        '/admin/student-list/:path*',
        '/admin/staff-list/:path*',
        '/admin/sessions/:path*',

        /* Psychologist Route Paths */
        '/clinical-psychologist/dashboard/:path*',
        '/clinical-psychologist/assessment/:path*',
        '/clinical-psychologist/trackSession/:path*',
    ],
};
