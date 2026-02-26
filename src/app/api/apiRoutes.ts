const API_URL = `${process.env.NEXT_PUBLIC_APP_URL}api/v1`;

/** Authentication Endpoint */
const LOGIN_ENDPOINT = `${API_URL}/login`;

/** Super Admin */

/** User Type */
const USER_TYPE_ENDPOINT = `${API_URL}/user-type`;

/** Create User Type */
const CREATE_USER_TYPE_ENDPOINT = `${API_URL}/user-type`;

/** Update User Type */
const UPDATE_USER_TYPE_ENDPOINT = `${API_URL}/user-type`;

/** User Type Status Endpoint */
const USER_TYPE_STATUS_ENDPOINT = `${API_URL}/user-type/status`;

/** Role Type */
const ROLE_MASTER_ENDPOINT = `${API_URL}/roles`;
const ROLE_MASTER_STATUS_ENDPOINT = `${ROLE_MASTER_ENDPOINT}/status`;

/** Menu Master */
const MENU_MASTER_ENDPOINT = `${API_URL}/menu`;

/** Super Admin Dashboard */
const DASHBOARD_API_URL = `${API_URL}/dashboard`;
const SUPER_ADMIN_COMPILENCE_TRACKER = `${DASHBOARD_API_URL}/compliance-tracker`;
const SUPER_ADMIN_DASHBOARD_STATS = `${DASHBOARD_API_URL}/stats`;
const SUPER_ADMIN_CENTER_OVERVIEW = `${DASHBOARD_API_URL}/center-user-overview`;
const SUPER_ADMIN_RECENT_ACTIVITY = `${DASHBOARD_API_URL}/recent-activity`;

/** Center Setup */
const CENTER_SETUP_LIST = `${API_URL}/center`;
const CENTER_ADMIN_DROPDOWN_LIST = `${API_URL}/center/admin`;
const CENTER_STATUS = `${API_URL}/center/status`;

/** Center Admin */
const CENTER_ADMIN_LIST = `${CENTER_ADMIN_DROPDOWN_LIST}/list`;
// const CENTER_ADMIN_STATUS = `${CENTER_STATUS}/`

/** Center Admin Modal */
const CENTER_ADMIN_SPECIALIZATION = `${ROLE_MASTER_ENDPOINT}/specialization/`;
const CENTER_DROPDOWN_LIST_API = `${CENTER_SETUP_LIST}/list`;

/** Role Menu Mapping */
const ROLE_MENU_MAPPING = `${API_URL}/role-menu-mapping`;

export {
    LOGIN_ENDPOINT,
    USER_TYPE_ENDPOINT,
    ROLE_MASTER_ENDPOINT,
    MENU_MASTER_ENDPOINT,
    SUPER_ADMIN_COMPILENCE_TRACKER,
    SUPER_ADMIN_DASHBOARD_STATS,
    SUPER_ADMIN_CENTER_OVERVIEW,
    SUPER_ADMIN_RECENT_ACTIVITY,
    CREATE_USER_TYPE_ENDPOINT,
    UPDATE_USER_TYPE_ENDPOINT,
    USER_TYPE_STATUS_ENDPOINT,
    ROLE_MASTER_STATUS_ENDPOINT,
    CENTER_SETUP_LIST,
    CENTER_ADMIN_DROPDOWN_LIST,
    CENTER_STATUS,
    CENTER_ADMIN_LIST,
    ROLE_MENU_MAPPING,
    CENTER_ADMIN_SPECIALIZATION,
    CENTER_DROPDOWN_LIST_API,
};
