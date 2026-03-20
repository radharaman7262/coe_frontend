import {
    SpecialEducatorStudentFormKeys,
    SpecialEducatorStudentFormType,
} from '@/types/specialEducatorChildInformationType';

export const textAreaFields = [{ label: 'Area of Concern', name: 'areaOfConcern' }];

export const inputFields = [
    { label: 'Name of Child', name: SpecialEducatorStudentFormKeys.NAME, type: 'input' },
    { label: 'Age', name: SpecialEducatorStudentFormKeys.AGE, type: 'date' },
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
