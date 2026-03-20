import { TEN_MIN_LENGTH, THIRTY_MAX_LENGTH, THREE_MIN_LENGTH } from '@/constant/appConstants';
import { MOBILE_INPUT_REGEX, USER_TYPE_REGEX } from '@/utils/regex';
import { FormValues, ParentFormKeys } from './type';

export const DRAWER_DATA = {
    parentInformation: 'Parent Information',
    step2of2: 'Step 2 of 2',
    fathersName: `Father's Name`,
    fathersAge: `Father's Age`,
    fathersOccupation: `Father's Occupation`,
    fathersNo: `Father's Ph. number`,
    selectOccupation: 'Select Occupation',
    mothersName: `Mother's Name`,
    mothersAge: `Mother's Age`,
    mothersOccupation: `Mother's Occupation`,
    phoneNo: 'Phone number',
    languageSpokenAtHome: 'Language Spoken at home:',
    selectLanguage: 'Select Language',
    familyType: 'Family Type:',
    jointFamily: 'Joint Family',
    nuclearFamily: 'Nuclear Family',
    siblings: 'Siblings:',
    uploadsupportingfile: 'Upload any supporting file here...',
    choosefiles: 'Choose Files',
};

export const BUTTON_TEXT = {
    addStudent: 'Add Student',
};

export const INITIAL_STATE: FormValues = {
    [ParentFormKeys.FATHERS_NAME]: '',
    [ParentFormKeys.FATHERS_AGE]: null,
    [ParentFormKeys.FATHERS_OCCUPATION]: null,
    [ParentFormKeys.FATHERS_NUMBER]: null,
    [ParentFormKeys.MOTHERS_NAME]: '',
    [ParentFormKeys.MOTHERS_AGE]: null,
    [ParentFormKeys.MOTHERS_OCCUPATION]: null,
    [ParentFormKeys.MOTHERS_NUMBER]: null,
    [ParentFormKeys.SIBLING_TYPE]: null,
    [ParentFormKeys.FAMILY_TYPE]: null,
    [ParentFormKeys.LANGUAGE]: null,
    [ParentFormKeys.FILES]: [],
};

export const MAX_LENGTHS: Record<ParentFormKeys, number> = {
    [ParentFormKeys.FATHERS_NAME]: THIRTY_MAX_LENGTH,
    [ParentFormKeys.FATHERS_AGE]: 2,
    [ParentFormKeys.FATHERS_OCCUPATION]: 0,
    [ParentFormKeys.FATHERS_NUMBER]: TEN_MIN_LENGTH,
    [ParentFormKeys.MOTHERS_NAME]: THIRTY_MAX_LENGTH,
    [ParentFormKeys.MOTHERS_AGE]: 2,
    [ParentFormKeys.MOTHERS_OCCUPATION]: 0,
    [ParentFormKeys.MOTHERS_NUMBER]: TEN_MIN_LENGTH,
    [ParentFormKeys.SIBLING_TYPE]: 0,
    [ParentFormKeys.FAMILY_TYPE]: 0,
    [ParentFormKeys.LANGUAGE]: 0,
    [ParentFormKeys.FILES]: 0,
};

export const MIN_LENGTHS: Record<ParentFormKeys, number> = {
    [ParentFormKeys.FATHERS_NAME]: THREE_MIN_LENGTH,
    [ParentFormKeys.FATHERS_AGE]: 2,
    [ParentFormKeys.FATHERS_OCCUPATION]: 0,
    [ParentFormKeys.FATHERS_NUMBER]: TEN_MIN_LENGTH,
    [ParentFormKeys.MOTHERS_NAME]: THREE_MIN_LENGTH,
    [ParentFormKeys.MOTHERS_AGE]: 2,
    [ParentFormKeys.MOTHERS_OCCUPATION]: 0,
    [ParentFormKeys.MOTHERS_NUMBER]: TEN_MIN_LENGTH,
    [ParentFormKeys.SIBLING_TYPE]: 0,
    [ParentFormKeys.FAMILY_TYPE]: 0,
    [ParentFormKeys.LANGUAGE]: 0,
    [ParentFormKeys.FILES]: 0,
};

export const ERROR_MESSAGES = {
    fathersName: 'Name should be between 3 to 30 characters.',
    fathersNo: 'Phone Number should be 10 digits.',
    mothersName: 'Name should be between 3 to 30 characters.',
    mothersNo: 'Phone Number should be 10 digits.',
};

export const VALIDATION_RULES: Partial<
    Record<
        ParentFormKeys,
        {
            regex?: RegExp;
            required?: boolean;
            errorMessage: string;
        }
    >
> = {
    [ParentFormKeys.FATHERS_NAME]: {
        regex: USER_TYPE_REGEX,
        required: true,
        errorMessage: ERROR_MESSAGES.fathersName,
    },
    [ParentFormKeys.FATHERS_NUMBER]: {
        regex: MOBILE_INPUT_REGEX,
        required: true,
        errorMessage: ERROR_MESSAGES.fathersNo,
    },
    [ParentFormKeys.MOTHERS_NAME]: {
        regex: USER_TYPE_REGEX,
        required: true,
        errorMessage: ERROR_MESSAGES.mothersName,
    },
    [ParentFormKeys.MOTHERS_NUMBER]: {
        regex: MOBILE_INPUT_REGEX,
        required: true,
        errorMessage: ERROR_MESSAGES.mothersNo,
    },
    [ParentFormKeys.FATHERS_AGE]: {
        regex: /^\d{0,2}$/,
        required: true,
        errorMessage: 'Please enter valid age',
    },
    [ParentFormKeys.MOTHERS_AGE]: {
        regex: /^\d{0,2}$/,
        required: true,
        errorMessage: 'Please enter valid age',
    },
};
