import { MOBILE_NUMBER_REGEX, NAME_REGEX } from '@/utils/regex';

import { FIFTY_MAX_LENGTH, TEN_MIN_LENGTH, THIRTY_MAX_LENGTH } from '@/constant/appConstants';

import { CenterSetupFormKeys } from './type';

export const NEW_CENTRE_TEXT = {
    addNewCenter: 'Add New Center',
    centerName: 'Center Name',
    address: 'Address',
    contactDetails: 'Contact Details',
    centerAdmin: 'Center Admin',
    heyjustheads: 'Hey, just a heads up: you can totally add or swap out the center admin later!',
    enterCenterName: 'Enter Center Name',
    enterFullAddressHere: 'Enter Full Address Here',
    enterContactDetails: 'Enter Contact Details',
    selectCenterAdmin: 'Select Center Admin',
    cancel: 'Cancel',
    createCenter: 'Create Center',
    updatecenter: 'Update Center',
};

export const INITIAL_STATE = {
    [CenterSetupFormKeys.CENTER_NAME]: '',
    [CenterSetupFormKeys.ADDRESS]: '',
    [CenterSetupFormKeys.CONTACT_DETAILS]: '',
    [CenterSetupFormKeys.SELECTED_ADMIN]: null,
};

export const DROPDOWN_LIST = [
    { id: 1, name: 'Ishan Verma' },
    { id: 2, name: 'Diya Patel' },
    { id: 3, name: 'Rahul Verma' },
];

export const MAX_LENGTHS: Partial<Record<CenterSetupFormKeys, number>> = {
    [CenterSetupFormKeys.CENTER_NAME]: THIRTY_MAX_LENGTH,
    [CenterSetupFormKeys.ADDRESS]: FIFTY_MAX_LENGTH,
    [CenterSetupFormKeys.CONTACT_DETAILS]: TEN_MIN_LENGTH,
};

export const ERROR_MESSAGES = {
    centerErrorCreation: 'Center should be between 3 to 30 characters.',
    contactErrorDetail: 'Contact should be 10 numbers.',
    addressErrorDetail: 'Address should be between 3 to 50 characters.',
};

export const VALIDATION_RULES = {
    [CenterSetupFormKeys.CENTER_NAME]: {
        regex: NAME_REGEX,
        required: true,
        errorMessage: ERROR_MESSAGES?.centerErrorCreation,
    },
    [CenterSetupFormKeys.CONTACT_DETAILS]: {
        regex: MOBILE_NUMBER_REGEX,
        required: true,
        errorMessage: ERROR_MESSAGES?.contactErrorDetail,
    },
    [CenterSetupFormKeys.ADDRESS]: {
        regex: NAME_REGEX,
        required: true,
        errorMessage: ERROR_MESSAGES?.addressErrorDetail,
    },
    [CenterSetupFormKeys.SELECTED_ADMIN]: {
        regex: null,
        required: false,
        errorMessage: '',
    },
};
