import { Dayjs } from 'dayjs';

export enum SpeechTherapistStudentFormKeys {
    STUDENT_ID = 'studentId',
    NAME = 'name',
    AGE = 'age',
    GENDER = 'gender',
    DOB = 'dob',
    DIAGNOSIS = 'diagnosis',
    PRIMARY_CONCERN = 'primaryConcern',
    LANGUAGES_AT_HOME = 'languageAtHome',
    DIAGNOSIS_ANY = 'diagnosisAny',
}

type StringOnlySpeechTherapistStudentFormKeys = Exclude<
    SpeechTherapistStudentFormKeys,
    SpeechTherapistStudentFormKeys.DOB | SpeechTherapistStudentFormKeys.AGE
>;

type SpeechTherapistStringFieldMap = {
    [key in StringOnlySpeechTherapistStudentFormKeys]: string;
};

export type SpeechTherapistStudentFormType = SpeechTherapistStringFieldMap & {
    [SpeechTherapistStudentFormKeys.DOB]: Dayjs | null;
    [SpeechTherapistStudentFormKeys.AGE]: Dayjs | null;

    diagnosisOther?: string;
};

export type SpeechTherapistErrorMessagesType = {
    [key in SpeechTherapistStudentFormKeys]?: string;
};
