export enum FineMotorGraspKeys {
    GRASP_CHECKLIST = 'graspChecklist',
}
export type FineMotorGraspFormType = {
    [key in FineMotorGraspKeys]: string;
};

export type ROMErrorMessagesType = {
    [key in FineMotorGraspKeys]?: string;
};
