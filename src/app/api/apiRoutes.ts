const API_URL = `${process.env.NEXT_PUBLIC_APP_URL}api/v1`;
const DASHBOARD_API_URL = `${API_URL}/dashboard`;

/** Authentication Endpoint */
const LOGIN_ENDPOINT = `${API_URL}/login`;

/** Super Admin */

/** User Type */
const USER_TYPE_ENDPOINT = `${API_URL}/user-type`;

/** Role Type */
const ROLE_MASTER_ENDPOINT = `${API_URL}/roles`;

/** Menu Master */

const MENU_MASTER_ENDPOINT = `${API_URL}/menu`;

/** Dashboard */
const SUPER_ADMIN_COMPILENCE_TRACKER = `${DASHBOARD_API_URL}/compliance-tracker`;
const SUPER_ADMIN_DASHBOARD_STATS = `${DASHBOARD_API_URL}/stats`;
const SUPER_ADMIN_CENTER_OVERVIEW = `${DASHBOARD_API_URL}/center-user-overview`;
const SUPER_ADMIN_RECENT_ACTIVITY = `${DASHBOARD_API_URL}/recent-activity`;

export {
    LOGIN_ENDPOINT,
    USER_TYPE_ENDPOINT,
    ROLE_MASTER_ENDPOINT,
    MENU_MASTER_ENDPOINT,
    SUPER_ADMIN_COMPILENCE_TRACKER,
    SUPER_ADMIN_DASHBOARD_STATS,
    SUPER_ADMIN_CENTER_OVERVIEW,
    SUPER_ADMIN_RECENT_ACTIVITY,
};
