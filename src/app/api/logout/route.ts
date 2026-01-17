import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

import { JWT_TOKEN, USER_ALLOWED_ROUTE, USER_DETAIL, USER_MENU_LIST } from '@/utils/cookieManager';

export async function POST() {
    const cookieStore = await cookies();

    cookieStore.set(JWT_TOKEN, '', { maxAge: 0, path: '/' });
    cookieStore.set(USER_MENU_LIST, '', { maxAge: 0, path: '/' });
    cookieStore.set(USER_ALLOWED_ROUTE, '', { maxAge: 0, path: '/' });
    cookieStore.set(USER_DETAIL, '', { maxAge: 0, path: '/' });

    return NextResponse.json({ message: 'Cookies cleared' });
}
