export interface studentPersonalType {
    id: string;
    name: string;
    age: number;
    gender: string;
    fatherName: string;
    fatherPhone: string;
    gradeId: string;
    dob: string;
}

export interface studentAssesmentType {
    assessmentType: string;
    assessmentDate: string;
    user: string;
}

export interface studentRemarkType {
    id: string;
    userId: string;
    createdDate: string;
    remarks: string;
    user: string;
}

export interface goalTrackerType {
    goalTitle: string;
    behaviour: string;
    accuracy: string;
    support: string;
    duration: string;
    subGoal: string;
    specializationId: string;
    specialization: string;
    user: string;
}

export interface sessionLogType {
    userId: string;
    bookingDate: string;
    attendance: number;
    toSpecializationId: string;
    startTime: string;
    goal: string;
    subGoal: string;
    isEdit: number;
}
