export enum ServerSideRoutes {
    APP = '/api',
    STORE_AUTH_TOKEN = `${ServerSideRoutes.APP}/store-auth-token`,
    STORE_USER_MENU_LIST = `${ServerSideRoutes.APP}/store-user-menu-list`,
    STORE_ALLOWED_ROUTE = `${ServerSideRoutes.APP}/store-allowed-route`,
    STORE_USER_DETAIL_ROUTE = `${ServerSideRoutes.APP}/store-user-details`,
}
