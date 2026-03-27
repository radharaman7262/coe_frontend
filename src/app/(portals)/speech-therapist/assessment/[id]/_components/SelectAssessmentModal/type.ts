export type SelectAssessmentPayload = {
    studentId: number;
    formId: {
        id: string;
    }[];
};

export type AssessmentItem = {
    id: string;
    name: string;
    tableName: string | null;
    priority: number;
    parentId: string | null;
    isSelected: string;
    checked?: boolean;
};
