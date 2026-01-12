import Cookies from 'js-cookie';

export const JWT_TOKEN = 'x_tok';

export const USER_EMAIL = 'x-m';

const clearJwtToken = () => Cookies.remove(JWT_TOKEN);

const clearAllCookies = () => {
    clearJwtToken();
};

export { clearAllCookies, clearJwtToken };
