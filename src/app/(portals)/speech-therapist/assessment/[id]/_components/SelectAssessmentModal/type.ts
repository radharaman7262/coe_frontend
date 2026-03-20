export type SelectAssessmentPayload = {
    studentId: number;
    formId: {
        id: number;
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
