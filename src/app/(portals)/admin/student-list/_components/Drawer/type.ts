export type AddStudentPayloadType = {
    name: string;
    gender: string;
    schoolName: string;
    gradeId: number;
    difficulties: string;
    dob?: string;
    fatherName?: string;
    fatherAge?: number;
    fatherOccupation?: string;
    fatherPhone?: string;
    motherName?: string;
    motherAge?: number;
    motherOccupation?: string;
    motherPhone?: string;
    siblings?: string;
    languageId?: number;
    familyType?: string;
    udiseCode?: string;
    documents?: string[];
};

export interface AddStudentResponse {
    status: boolean;
    message: string;
    response: {
        message: string;
        studentId: string;
    };
}

export interface ApiError {
    response?: {
        data?: {
            message?: string;
        };
    };
    message?: string;
}
