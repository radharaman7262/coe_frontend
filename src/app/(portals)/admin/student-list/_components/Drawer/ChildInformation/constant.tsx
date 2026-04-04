import {
    ELEVEN_MAX_LENGTH,
    TEN_MIN_LENGTH,
    THREE_HUNDRED_MAX_LENGTH,
    ZERO_DATA,
} from '@/constant/appConstants';
import { USER_TYPE_REGEX } from '@/utils/regex';
import { ChildFormKeys, FormValues } from './type';

export const DRAWER_DATA = {
    fullName: 'Full Name',
    gender: 'Gender',
    dateofbirth: 'Date of birth / Age',
    currentSchool: 'Current School',
    grade: 'Grade',
    difficultiesFaced: 'Difficulties Faced',
    selectGender: 'Select Gender',
    selectSchool: 'Select Type',
    childInformation: 'Child Information',
    step1of2: 'Step 1 of 2',
    udiseCode: 'UDISE Code',
    schoolType: 'School Type',
    schoolname: 'School Name',
    selectGrade: 'Select Grade',
};

export const BUTTON_TEXT = {
    continue: 'Continue',
};

export const INITIAL_STATE: FormValues = {
    [ChildFormKeys.FULL_NAME]: '',
    [ChildFormKeys.GENDER]: null,
    [ChildFormKeys.DATE_OF_BIRTH]: null,
    [ChildFormKeys.SCHOOL_TYPE]: null,
    [ChildFormKeys.UDISE_CODE]: '',
    [ChildFormKeys.SCHOOL_NAME]: '',
    [ChildFormKeys.GRADE]: null,
    [ChildFormKeys.DIFFICULTIES_FACED]: '',
};

export const MAX_LENGTHS: Record<ChildFormKeys, number> = {
    [ChildFormKeys.FULL_NAME]: ZERO_DATA,
    [ChildFormKeys.DIFFICULTIES_FACED]: THREE_HUNDRED_MAX_LENGTH,
    [ChildFormKeys.GENDER]: ZERO_DATA,
    [ChildFormKeys.UDISE_CODE]: ELEVEN_MAX_LENGTH,
    [ChildFormKeys.SCHOOL_NAME]: ZERO_DATA,
    [ChildFormKeys.GRADE]: ZERO_DATA,
    [ChildFormKeys.DATE_OF_BIRTH]: ZERO_DATA,
    [ChildFormKeys.SCHOOL_TYPE]: ZERO_DATA,
};

export const MIN_LENGTHS: Record<ChildFormKeys, number> = {
    [ChildFormKeys.FULL_NAME]: ZERO_DATA,
    [ChildFormKeys.DIFFICULTIES_FACED]: TEN_MIN_LENGTH,
    [ChildFormKeys.GENDER]: ZERO_DATA,
    [ChildFormKeys.UDISE_CODE]: ZERO_DATA,
    [ChildFormKeys.SCHOOL_NAME]: ZERO_DATA,
    [ChildFormKeys.GRADE]: ZERO_DATA,
    [ChildFormKeys.DATE_OF_BIRTH]: ZERO_DATA,
    [ChildFormKeys.SCHOOL_TYPE]: ZERO_DATA,
};

export const ERROR_MESSAGES = {
    fullName: 'Name should be between 3 to 50 characters.',
    difficultiesFaced: 'write between 10 to 300 characters.',
};

export const VALIDATION_RULES: Partial<
    Record<
        ChildFormKeys,
        {
            regex?: RegExp;
            required?: boolean;
            errorMessage: string;
        }
    >
> = {
    [ChildFormKeys.FULL_NAME]: {
        regex: undefined,
        required: false,
        errorMessage: '',
    },
    [ChildFormKeys.DIFFICULTIES_FACED]: {
        regex: USER_TYPE_REGEX,
        required: true,
        errorMessage: ERROR_MESSAGES.difficultiesFaced,
    },
};
