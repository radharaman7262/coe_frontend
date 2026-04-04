import {
    ONE_FIFTY_MAX_LENGTH,
    SIX_MAX_LENGTH,
    TEN_MIN_LENGTH,
    TWO_MIN_LENGTH,
    ZERO_DATA,
} from '@/constant/appConstants';
import { ADDRESS_CODE_REGEX, MOBILE_INPUT_REGEX, PINCODE_INPUT_REGEX } from '@/utils/regex';
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
    paymentMode: 'Payment Mode:',
    selectPaymentMode: 'Select Payment Mode',
    selectLanguage: 'Select Language',
    familyType: 'Family Type:',
    jointFamily: 'Joint Family',
    nuclearFamily: 'Nuclear Family',
    siblings: 'Siblings:',
    uploadsupportingfile: 'Upload any supporting file here...',
    choosefiles: 'Choose Files',
    addressline1: 'Address Line 1',
    state: 'State',
    district: 'District',
    block: 'Block',
    pinCode: 'Pincode',
    selectState: 'Select State',
    selectDistrict: 'Select District',
    selectBlock: 'Select Block',
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
    [ParentFormKeys.ADDRESS_LINE]: '',
    [ParentFormKeys.SIBLING_TYPE]: null,
    [ParentFormKeys.FAMILY_TYPE]: null,
    [ParentFormKeys.LANGUAGE]: null,
    [ParentFormKeys.FILES]: [],
    [ParentFormKeys.STATE]: null,
    [ParentFormKeys.DISTRICT]: null,
    [ParentFormKeys.BLOCK]: null,
    [ParentFormKeys.PINCODE]: null,
};

export const MAX_LENGTHS: Record<ParentFormKeys, number> = {
    [ParentFormKeys.FATHERS_NAME]: ZERO_DATA,
    [ParentFormKeys.FATHERS_AGE]: TWO_MIN_LENGTH,
    [ParentFormKeys.FATHERS_OCCUPATION]: ZERO_DATA,
    [ParentFormKeys.FATHERS_NUMBER]: TEN_MIN_LENGTH,
    [ParentFormKeys.MOTHERS_NAME]: ZERO_DATA,
    [ParentFormKeys.MOTHERS_AGE]: TWO_MIN_LENGTH,
    [ParentFormKeys.MOTHERS_OCCUPATION]: ZERO_DATA,
    [ParentFormKeys.MOTHERS_NUMBER]: TEN_MIN_LENGTH,
    [ParentFormKeys.ADDRESS_LINE]: ONE_FIFTY_MAX_LENGTH,
    [ParentFormKeys.SIBLING_TYPE]: ZERO_DATA,
    [ParentFormKeys.FAMILY_TYPE]: ZERO_DATA,
    [ParentFormKeys.LANGUAGE]: ZERO_DATA,
    [ParentFormKeys.FILES]: ZERO_DATA,
    [ParentFormKeys.STATE]: ZERO_DATA,
    [ParentFormKeys.DISTRICT]: ZERO_DATA,
    [ParentFormKeys.BLOCK]: ZERO_DATA,
    [ParentFormKeys.PINCODE]: SIX_MAX_LENGTH,
};

export const MIN_LENGTHS: Record<ParentFormKeys, number> = {
    [ParentFormKeys.FATHERS_NAME]: ZERO_DATA,
    [ParentFormKeys.FATHERS_AGE]: TWO_MIN_LENGTH,
    [ParentFormKeys.FATHERS_OCCUPATION]: ZERO_DATA,
    [ParentFormKeys.FATHERS_NUMBER]: TEN_MIN_LENGTH,
    [ParentFormKeys.MOTHERS_NAME]: ZERO_DATA,
    [ParentFormKeys.MOTHERS_AGE]: TWO_MIN_LENGTH,
    [ParentFormKeys.MOTHERS_OCCUPATION]: ZERO_DATA,
    [ParentFormKeys.MOTHERS_NUMBER]: TEN_MIN_LENGTH,
    [ParentFormKeys.ADDRESS_LINE]: ZERO_DATA,
    [ParentFormKeys.SIBLING_TYPE]: ZERO_DATA,
    [ParentFormKeys.FAMILY_TYPE]: ZERO_DATA,
    [ParentFormKeys.LANGUAGE]: ZERO_DATA,
    [ParentFormKeys.FILES]: ZERO_DATA,
    [ParentFormKeys.STATE]: ZERO_DATA,
    [ParentFormKeys.DISTRICT]: ZERO_DATA,
    [ParentFormKeys.BLOCK]: ZERO_DATA,
    [ParentFormKeys.PINCODE]: SIX_MAX_LENGTH,
};

export const ERROR_MESSAGES = {
    fathersName: 'Name should be between 3 to 50 characters.',
    fathersNo: 'Phone Number should be 10 digits.',
    mothersName: 'Name should be between 3 to 50 characters.',
    mothersNo: 'Phone Number should be 10 digits.',
    addressErrorDetail: 'Address should be valid eg. 12/24, Delhi. (Don`t use $%*= Character)',
    pinCodeEroor: 'Pin Code should be 6 digits',
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
        regex: undefined,
        required: false,
        errorMessage: '',
    },
    [ParentFormKeys.FATHERS_NUMBER]: {
        regex: MOBILE_INPUT_REGEX,
        required: true,
        errorMessage: ERROR_MESSAGES.fathersNo,
    },
    [ParentFormKeys.MOTHERS_NAME]: {
        regex: undefined,
        required: false,
        errorMessage: '',
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
    [ParentFormKeys.ADDRESS_LINE]: {
        regex: ADDRESS_CODE_REGEX,
        required: true,
        errorMessage: ERROR_MESSAGES?.addressErrorDetail,
    },
    [ParentFormKeys.PINCODE]: {
        regex: PINCODE_INPUT_REGEX,
        required: true,
        errorMessage: ERROR_MESSAGES?.pinCodeEroor,
    },
};
