import CryptoJS from 'crypto-js';
import Cookies from 'js-cookie';

const ENCRYPTION_KEY = 'your-strong-key-32-chars';

export const JWT_TOKEN = 'x_tok';
export const USER_DETAIL = 'x_det';
export const CLIENT_USER_DETAIL = 'c_x_det';
export const USER_MENU_LIST = 'x_m_li';
export const USER_ALLOWED_ROUTE = 'x_a_rou';
export const FORM_ID = 'formId';
export const STUDENT_DETAIL = 'studentDetail';
const PARENT_ID = 'parnetFormId';

export const USER_EMAIL = 'x-m';

const clearJwtToken = () => Cookies.remove(JWT_TOKEN);
const clearUserDetail = () => Cookies.remove(USER_DETAIL);
const clearClientUserDetail = () => Cookies.remove(CLIENT_USER_DETAIL);
const clearFormId = () => Cookies.remove(FORM_ID);

const clearAllCookies = () => {
    clearJwtToken();
    clearUserDetail();
    clearClientUserDetail();
    clearFormId();
};

const setClientSideUserDetail = (contentValue: string) => {
    if (!contentValue) {
        return;
    }

    const encryptedToken = CryptoJS.AES.encrypt(
        JSON.stringify(contentValue),
        ENCRYPTION_KEY,
    ).toString();

    Cookies.set(CLIENT_USER_DETAIL, encryptedToken, {
        expires: 1,
        path: '/',
    });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const setStudentDetail = (contentValue: any) => {
    if (!contentValue) {
        return;
    }

    Cookies.set(STUDENT_DETAIL, contentValue, {
        expires: 1,
        path: '/',
    });
};

const setFormId = (formId: string) => {
    if (!formId) {
        return;
    }

    Cookies.set(FORM_ID, formId, {
        expires: 1,
        path: '/',
    });
};
const setParentId = (id: string) => {
    if (!id) {
        return;
    }

    Cookies.set(PARENT_ID, id, {
        expires: 1,
        path: '/',
    });
};

const getClientUserDetails = () => {
    const encrypted = Cookies.get(CLIENT_USER_DETAIL);
    if (encrypted) {
        try {
            const bytes = CryptoJS.AES.decrypt(encrypted, ENCRYPTION_KEY);
            const decryptedValue = bytes.toString(CryptoJS.enc.Utf8);
            return JSON.parse(decryptedValue);
        } catch (error) {
            console.error('Error decrypting or parsing token:', error);
            return null;
        }
    }
    return null;
};

const getFormId = () => {
    const formId = Cookies.get(FORM_ID);

    return formId;
};
const getParentId = () => {
    const parentId = Cookies.get(PARENT_ID);

    return parentId;
};

const getStudentDetail = () => {
    const formId = Cookies.get(STUDENT_DETAIL);

    return formId;
};

const removeParentId = () => Cookies.remove(PARENT_ID)

export {
    clearAllCookies,
    clearJwtToken,
    setClientSideUserDetail,
    getClientUserDetails,
    setFormId,
    getFormId,
    setStudentDetail,
    getStudentDetail,
    getParentId,
    setParentId,
    removeParentId
};
