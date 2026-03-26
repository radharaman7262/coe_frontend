import {
    SpecialEducatorStudentFormKeys,
    SpecialEducatorStudentFormType,
} from '@/types/specialEducatorChildInformationType';

export const textAreaFields = [{ label: 'Area of Concern', name: 'areaOfConcern' }];

export const inputFields = [
    { label: 'Name of Child', name: SpecialEducatorStudentFormKeys.NAME, type: 'input' },
    { label: 'Age', name: SpecialEducatorStudentFormKeys.AGE, type: 'input' },
    { label: 'Gender', name: SpecialEducatorStudentFormKeys.GENDER, type: 'input' },
    { label: 'DOB', name: SpecialEducatorStudentFormKeys.DOB, type: 'date' },
];

export const INITIAL_STATE: SpecialEducatorStudentFormType = {
    [SpecialEducatorStudentFormKeys.STUDENT_ID]: '',
    [SpecialEducatorStudentFormKeys.NAME]: '',
    [SpecialEducatorStudentFormKeys.GENDER]: '',
    [SpecialEducatorStudentFormKeys.AREA_OF_CONCERN]: '',
    [SpecialEducatorStudentFormKeys.DOB]: null,
    [SpecialEducatorStudentFormKeys.AGE]: null,
};

export const disableFieldMap: Record<string, string> = {
    [SpecialEducatorStudentFormKeys.STUDENT_ID]: 'studentId',
    [SpecialEducatorStudentFormKeys.NAME]: 'name',
    [SpecialEducatorStudentFormKeys.GENDER]: 'gender',
    [SpecialEducatorStudentFormKeys.AREA_OF_CONCERN]: 'areaOfConcern',
    [SpecialEducatorStudentFormKeys.DOB]: 'dob',
    [SpecialEducatorStudentFormKeys.AGE]: 'age',
};
