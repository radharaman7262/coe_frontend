import { FIFTY_MAX_LENGTH, THIRTY_MAX_LENGTH, THREE_MIN_LENGTH } from '@/constant/appConstants';
import { USER_TYPE_REGEX } from '@/utils/regex';
import { FormValues, MenuMasterFormKeys } from './type';

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
    editMenu: 'Edit Menu',
    chooseParentMenu: 'Choose parent Menu',
    selectParentMenu: 'Select Parent Menu',
};

export const INITIAL_STATE: FormValues = {
    [MenuMasterFormKeys.MENU_NAME]: '',
    [MenuMasterFormKeys.MENU_URL]: '',
    [MenuMasterFormKeys.REMARKS]: '',
    [MenuMasterFormKeys.PRIORITY]: '',
    [MenuMasterFormKeys.SELECTED_PARENT_MENU]: null,
    [MenuMasterFormKeys.SEARCH_FILTER]: '',
    [MenuMasterFormKeys.IS_PARENT]: false,
};

export const MAX_LENGTHS: Record<MenuMasterFormKeys, number> = {
    [MenuMasterFormKeys.MENU_NAME]: THIRTY_MAX_LENGTH,
    [MenuMasterFormKeys.MENU_URL]: FIFTY_MAX_LENGTH,
    [MenuMasterFormKeys.REMARKS]: FIFTY_MAX_LENGTH,
    [MenuMasterFormKeys.PRIORITY]: THREE_MIN_LENGTH,
    [MenuMasterFormKeys.SELECTED_PARENT_MENU]: 0,
    [MenuMasterFormKeys.SEARCH_FILTER]: 0,
    [MenuMasterFormKeys.IS_PARENT]: 0,
};

export const MIN_LENGTHS: Record<MenuMasterFormKeys, number> = {
    [MenuMasterFormKeys.MENU_NAME]: THREE_MIN_LENGTH,
    [MenuMasterFormKeys.MENU_URL]: THREE_MIN_LENGTH,
    [MenuMasterFormKeys.REMARKS]: THREE_MIN_LENGTH,
    [MenuMasterFormKeys.PRIORITY]: THREE_MIN_LENGTH,
    [MenuMasterFormKeys.SELECTED_PARENT_MENU]: 0,
    [MenuMasterFormKeys.SEARCH_FILTER]: 0,
    [MenuMasterFormKeys.IS_PARENT]: 0,
};

export const ERROR_MESSAGES = {
    menuName: 'Menu Name should be between 3 to 30 characters.',
    menuURL: 'Menu URL should be between 3 to 30 characters.',
    remarks: 'Remarks should be between 3 to 30 characters.',
    priority: 'Priority should be between 3 to 30 characters.',
};

export const VALIDATION_RULES: Partial<
    Record<
        MenuMasterFormKeys,
        {
            regex?: RegExp;
            required?: boolean;
            errorMessage: string;
        }
    >
> = {
    [MenuMasterFormKeys.MENU_NAME]: {
        regex: USER_TYPE_REGEX,
        required: true,
        errorMessage: ERROR_MESSAGES.menuName,
    },
    [MenuMasterFormKeys.REMARKS]: {
        regex: USER_TYPE_REGEX,
        required: true,
        errorMessage: ERROR_MESSAGES.remarks,
    },
};
