import {
    ELEVEN_MAX_LENGTH,
    TEN_MIN_LENGTH,
    THIRTY_MAX_LENGTH,
    THREE_HUNDRED_MAX_LENGTH,
    THREE_MIN_LENGTH,
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
    [ChildFormKeys.FULL_NAME]: THIRTY_MAX_LENGTH,
    [ChildFormKeys.DIFFICULTIES_FACED]: THREE_HUNDRED_MAX_LENGTH,
    [ChildFormKeys.GENDER]: 0,
    [ChildFormKeys.UDISE_CODE]: ELEVEN_MAX_LENGTH,
    [ChildFormKeys.SCHOOL_NAME]: 0,
    [ChildFormKeys.GRADE]: 0,
    [ChildFormKeys.DATE_OF_BIRTH]: 0,
    [ChildFormKeys.SCHOOL_TYPE]: 0,
};

export const MIN_LENGTHS: Record<ChildFormKeys, number> = {
    [ChildFormKeys.FULL_NAME]: THREE_MIN_LENGTH,
    [ChildFormKeys.DIFFICULTIES_FACED]: TEN_MIN_LENGTH,
    [ChildFormKeys.GENDER]: 0,
    [ChildFormKeys.UDISE_CODE]: 0,
    [ChildFormKeys.SCHOOL_NAME]: 0,
    [ChildFormKeys.GRADE]: 0,
    [ChildFormKeys.DATE_OF_BIRTH]: 0,
    [ChildFormKeys.SCHOOL_TYPE]: 0,
};

export const ERROR_MESSAGES = {
    fullName: 'Name should be between 3 to 30 characters.',
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
        regex: USER_TYPE_REGEX,
        required: true,
        errorMessage: ERROR_MESSAGES.fullName,
    },
    [ChildFormKeys.DIFFICULTIES_FACED]: {
        regex: USER_TYPE_REGEX,
        required: true,
        errorMessage: ERROR_MESSAGES.difficultiesFaced,
    },
};
