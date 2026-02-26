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
