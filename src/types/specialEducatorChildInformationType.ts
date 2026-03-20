import { Dayjs } from 'dayjs';

export enum SpecialEducatorStudentFormKeys {
    STUDENT_ID = 'studentId',
    NAME = 'name',
    AGE = 'age',
    GENDER = 'gender',
    DOB = 'dob',
    AREA_OF_CONCERN = 'areaOfConcern',
}

type StringOnlySpecialEducatorStudentFormKeys = Exclude<
    SpecialEducatorStudentFormKeys,
    SpecialEducatorStudentFormKeys.DOB | SpecialEducatorStudentFormKeys.AGE
>;

type SpecialEducatorStudentStringFieldMap = {
    [key in StringOnlySpecialEducatorStudentFormKeys]: string;
};

export type SpecialEducatorStudentFormType = SpecialEducatorStudentStringFieldMap & {
    [SpecialEducatorStudentFormKeys.DOB]: Dayjs | null;
    [SpecialEducatorStudentFormKeys.AGE]: Dayjs | null;
};

export type SpecialEducatorStudentErrorMessagesType = {
    [key in SpecialEducatorStudentFormKeys]?: string;
};
