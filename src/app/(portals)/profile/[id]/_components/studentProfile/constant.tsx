export const STUDENT_PROFILE_TEXT = {
    ID_PREFIX: 'STU-',

    LABELS: {
        CLASS_AGE: 'Class/Age',
        GENDER: 'Gender',
        PARENTS: 'Parents Name & Contact',
        ASSIGNED_EDUCATORS: 'Assigned Educators',
    },

    FALLBACK: '_',

    STATIC: {
        YOU: 'You',
        GRADE_PREFIX: 'Grade',
    },
};

export const STUDENT_PROFILE_FORMAT = {
    getStudentId: (id?: string | number) =>
        `${STUDENT_PROFILE_TEXT.ID_PREFIX}${id ?? STUDENT_PROFILE_TEXT.FALLBACK}`,

    getGradeAge: (grade?: string | number, age?: string | number) =>
        `${STUDENT_PROFILE_TEXT.STATIC.GRADE_PREFIX} ${
            grade ?? STUDENT_PROFILE_TEXT.FALLBACK
        } / ${age ?? STUDENT_PROFILE_TEXT.FALLBACK}`,

    getParentInfo: (name?: string, phone?: string | number) =>
        `${name ?? STUDENT_PROFILE_TEXT.FALLBACK} / ${
            phone ?? STUDENT_PROFILE_TEXT.FALLBACK
        }`,
};