import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

import { USER_MENU_LIST } from '@/utils/cookieManager';

/**
 *
 * @param request
 * @returns
 */

export async function POST(request: Request) {
    const { menuList } = await request.json();

    (await cookies()).set({
        name: USER_MENU_LIST,
        value: JSON.stringify(menuList),
        httpOnly: true,
        secure: true,
        sameSite: 'lax', // for local dev
        path: '/',
        maxAge: 60 * 60 * 24,
    });

    return NextResponse.json({ message: 'Menu List stored successfully' });
}
