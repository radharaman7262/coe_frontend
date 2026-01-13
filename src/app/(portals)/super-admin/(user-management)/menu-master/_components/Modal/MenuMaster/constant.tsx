import { MenuMasterFormKeys } from './type';

export const MENU_MASTER_TEXT = {
    menuName: 'Menu Name',
    menuURL: 'Menu URL',
    remarks: 'Remarks',
    priority: 'Priority',
    enterMenuName: 'Enter Menu Name',
    addURL: 'Add URL',
    addRemarks: 'Add Remarks',
    addPriority: 'Add Priority',
    isParent: 'Is Parent?',
    cancel: 'Cancel',
    addMenu: 'Add Menu',
    chooseParentMenu: 'Choose parent Menu',
    selectParentMenu: 'Select Parent Menu',
};

export const INITIAL_STATE = {
    [MenuMasterFormKeys.MENU_NAME]: '',
    [MenuMasterFormKeys.MENU_URL]: '',
    [MenuMasterFormKeys.REMARKS]: '',
    [MenuMasterFormKeys.PRIORITY]: '',
    [MenuMasterFormKeys.SELECTED_PARENT_MENU]: null,
    [MenuMasterFormKeys.SEARCH_FILTER]: '',
};

// dummy data //
export const PARENT_MENU_OPTIONS = [
    { id: 1, name: 'Menu Name 1' },
    { id: 2, name: 'Menu Name 2' },
    { id: 3, name: 'Menu Name 3' },
];
