export const SIDEBAR_TITLE = {
    mothers: "Mother's",
    grace: 'Grace',
};

export interface MenuItem {
    roleId: string;
    menuId: string;
    menuName: string;
    parentId: string | null;
    menuLink: string;
    // We are not clear right now where icon comes from
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    menuIcon?: any | null;
    priority: number | null;
    children?: MenuItem[];
}

// Dummy Data
// export const SIDEBAR_MENU = [
//     {
//         roleId: '1',
//         menuId: '1',
//         menuName: 'Dashboard',
//         parentId: null,
//         menuLink: null,
//         menuIcon: HomeIcon,
//         priority: 1,
//     },
//     {
//         roleId: '1',
//         menuId: '5',
//         menuName: 'User Type Master',
//         parentId: '4',
//         menuLink: '',
//         menuIcon: HomeIcon,
//         priority: 1,
//     },
//     {
//         roleId: '1',
//         menuId: '2',
//         menuName: 'Center Setup',
//         parentId: null,
//         menuLink: null,
//         menuIcon: ListIcon,
//         priority: 2,
//     },
//     {
//         roleId: '1',
//         menuId: '6',
//         menuName: 'Role Master',
//         parentId: '4',
//         menuLink: '',
//         priority: 2,
//     },
//     {
//         roleId: '1',
//         menuId: '3',
//         menuName: 'Center Admin',
//         parentId: null,
//         menuLink: '',
//         menuIcon: UserIcon,
//         priority: 3,
//     },
//     {
//         roleId: '1',
//         menuId: '7',
//         menuName: 'Menu Master',
//         parentId: '4',
//         menuLink: '',
//         menuIcon: undefined,
//         priority: 3,
//     },
//     {
//         roleId: '1',
//         menuId: '4',
//         menuName: 'User Type Management',
//         parentId: null,
//         menuLink: '',
//         menuIcon: undefined,
//         priority: 4,
//     },
//     {
//         roleId: '1',
//         menuId: '8',
//         menuName: 'Menu Mapping',
//         parentId: '4',
//         menuLink: '',
//         menuIcon: undefined,
//         priority: 4,
//     },
// ];

export const buildMenuTree = (list: MenuItem[]): MenuItem[] => {
    const map = new Map<string, MenuItem>();
    const roots: MenuItem[] = [];

    list.forEach((item) => {
        map.set(String(item.menuId), {
            ...item,
            children: [],
        });
    });

    list.forEach((item) => {
        const current = map.get(String(item.menuId))!;

        if (item.parentId === null) {
            roots.push(current);
        } else {
            const parent = map.get(String(item.parentId));
            if (parent?.children) {
                parent.children.push(current);
            }
        }
    });

    return roots;
};
