const API_URL = `${process.env.NEXT_PUBLIC_APP_URL}api/v1`;

/** Authentication Endpoint */
const LOGIN_ENDPOINT = `${API_URL}/login`;

/** Super Admin */

/** User Type */
const USER_TYPE_ENDPOINT = `${API_URL}/user-type`;

/** Role Type */

const ROLE_MASTER_ENDPOINT = `${API_URL}/roles`;

/** Menu Master */

const MENU_MASTER_ENDPOINT = `${API_URL}/menu`;

export { LOGIN_ENDPOINT, USER_TYPE_ENDPOINT, ROLE_MASTER_ENDPOINT, MENU_MASTER_ENDPOINT };
