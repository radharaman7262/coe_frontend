import { Dayjs } from 'dayjs';

export enum ChildInformationFormKeys {
    CHILD_NAME = 'childName',
    DOB = 'dob',
    GENDER = 'gender',
    ADDRESS = 'address',
    FATHER_NAME = 'fatherName',
    MOTHER_NAME = 'motherName',
    CONTACT_NUMBER = 'contact',
    FATHER_EDUCATION = 'fatherQualification',
    MOTHER_EDUCATION = 'motherQualification',
    FATHER_OCCUPATION = 'fatherOccupation',
    MOTHER_OCCUPATION = 'motherOccupation',
    LANGUAGES = 'languageSpoken',
    REFERRED_BY = 'referredBy',
    VISIT_DATE = 'dateOfVisit',
    INFORMANT = 'informantNameRelationship',
    RELIABILITY = 'reliabilityOfInformant',
    ONSET = 'onset',
    PROBLEM_RECOGNITION_AGE = 'ageWhenProblemRecognized',
    COURSE = 'course',
    PROGRESS = 'progress',
    PRE_DISPOSING_FACTORS = 'predisposingFactors',
    PRECIPITATING_FACTORS = 'precipitatingFactors',
    PREPETUATING_FACTORS = 'perpetuatingFactors',
    CHIEF_COMPLAINTS = 'chiefComplaints',
    BRIEF_HISTORY = 'briefHistory',
}

type StringOnlyAdminStaffFormKeys = Exclude<
    ChildInformationFormKeys,
    ChildInformationFormKeys.DOB | ChildInformationFormKeys.VISIT_DATE
>;

type StringFieldMap = {
    [key in StringOnlyAdminStaffFormKeys]: string;
};

export type ChildInformationFormType = StringFieldMap & {
    [ChildInformationFormKeys.VISIT_DATE]: Dayjs | null;
    [ChildInformationFormKeys.DOB]: Dayjs | null;
};

export type ChildInformationErrorMessagesType = {
    [key in ChildInformationFormKeys]?: string;
};
