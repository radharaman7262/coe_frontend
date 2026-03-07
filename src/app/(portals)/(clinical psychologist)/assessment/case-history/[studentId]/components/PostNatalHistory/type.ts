export enum PostNatalHistoryFormKeys {
    STUDENT_ID = 'studentId',
    INFECTIONS = 'infections',
    JAUNDICE = 'jaundice',
    FEEDING_ISSUES = 'feedingIssues',
    HEAD_INJURY = 'headInjury',
    OTHER_COMPLICATIONS = 'otherComplications',
    VACCINATION = 'vaccination',
    CHIEF_COMPLICATIONS = 'chiefComplaints',
    PERCENTAGE = 'percentage',
}

export type PostNatalHistoryFormType = {
    [key in PostNatalHistoryFormKeys]: string;
};

export type PostNatalHistoryErrorMessagesType = {
    [key in PostNatalHistoryFormKeys]?: string;
};
