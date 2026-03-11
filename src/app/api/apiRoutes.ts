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

/** Create Menu Master */

const CREATE_MENU_MASTER_ENDPOINT = `${API_URL}/menu`;

/** Update Menu Master */

const UPDATE_MENU_MASTER_ENDPOINT = `${API_URL}/menu`;

/** Menu Master Status Endpoint */

const MENU_MASTER_STATUS_ENDPOINT = `${API_URL}/menu/status`;

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
const CENTER_ADMIN_STATUS = `${DASHBOARD_API_URL}/center-setup/status-change`;

/** Center Admin Modal */
const CENTER_ADMIN_SPECIALIZATION = `${ROLE_MASTER_ENDPOINT}/specialization/`;
const CENTER_DROPDOWN_LIST_API = `${CENTER_SETUP_LIST}/list`;

/** Role Menu Mapping */
const ROLE_MENU_MAPPING = `${API_URL}/role-menu-mapping`;

/** Admin  */

/** Admin Dashboard */
const ADMIN_DASHBOARD_STATS = `${API_URL}/admin/stats`;
const ADMIN_UPCOMNG_SESSIONS = `${API_URL}/admin/upcoming-session`;
const ADMIN_RECENT_ACTIVITY = `${API_URL}/admin/recent-activity`;

/** Admin Session Management */
const ADMIN_SESSION_LIST = `${API_URL}/admin/dashboard/admin/session`;

/** Admin Staff Management */
const ADMIN_STAFF_MANAGEMENT_API = `${API_URL}/admin/dashboard/admin/staff`;
const ADD_NEW_STAFF_MEMBER = `${API_URL}/admin/staff`;

/** Language */
const ADMIN_LANGUAGE = `${API_URL}/admin/languages`;

/** Psychologist */

const GET_PSYCHOLOGIST_ENDPOINT = `${API_URL}/admin/psychologist`;

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
    CREATE_MENU_MASTER_ENDPOINT,
    UPDATE_MENU_MASTER_ENDPOINT,
    MENU_MASTER_STATUS_ENDPOINT,
    CENTER_ADMIN_STATUS,
    ADMIN_DASHBOARD_STATS,
    ADMIN_UPCOMNG_SESSIONS,
    ADMIN_RECENT_ACTIVITY,
    ADMIN_SESSION_LIST,
    ADMIN_STAFF_MANAGEMENT_API,
    ADMIN_LANGUAGE,
    GET_PSYCHOLOGIST_ENDPOINT,
    ADD_NEW_STAFF_MEMBER,
};
