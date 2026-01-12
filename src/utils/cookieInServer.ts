'use server';

import { cookies } from 'next/headers';

import { JWT_TOKEN } from './cookieManager';

export const getCookie = async (name: string) => {
    const cookieStore = cookies();

    const cookieValue = (await cookieStore).get(name);

    const { value } = cookieValue || {};

    return value || null;
};

export const clearServerSideCookies = async () => {
    const cookieStore = cookies();

    const allCookies = await cookieStore;

    allCookies.delete(JWT_TOKEN);
};
