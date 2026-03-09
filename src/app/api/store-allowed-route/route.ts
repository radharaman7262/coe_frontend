import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

import { USER_ALLOWED_ROUTE } from '@/utils/cookieManager';

/**
 *
 * @param request
 * @returns
 */

export async function POST(request: Request) {
    const { allowedRoute } = await request.json();

    (await cookies()).set({
        name: USER_ALLOWED_ROUTE,
        value: JSON.stringify(allowedRoute),
        httpOnly: false,
        secure: false,
        sameSite: 'lax', // for local dev
        path: '/',
        maxAge: 60 * 60 * 24,
    });

    return NextResponse.json({ message: 'Menu List stored successfully' });
}
