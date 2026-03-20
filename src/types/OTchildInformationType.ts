import { Dayjs } from 'dayjs';

export enum OTFormKeys {
    STUDENT_ID = 'studentId',
    NAME = 'name',
    AGE = 'age',
    GENDER = 'gender',
    DOB = 'dob',
    DIAGNOSIS = 'diagnosis',
    REFERRAL_SOURCE = 'referralSource',
    INFORMANT = 'informant',
    MODE_OF_ASSESSMENT = 'modeOfAssessment',
}

type StringOnlyOTFormKeys = Exclude<OTFormKeys, OTFormKeys.DOB | OTFormKeys.AGE>;

type OTStringFieldMap = {
    [key in StringOnlyOTFormKeys]: string;
};

export type OTFormType = OTStringFieldMap & {
    [OTFormKeys.DOB]: Dayjs | null;
    [OTFormKeys.AGE]: Dayjs | null;

    informantOther?: string;
};

export type OTErrorMessagesType = {
    [key in OTFormKeys]?: string;
};
